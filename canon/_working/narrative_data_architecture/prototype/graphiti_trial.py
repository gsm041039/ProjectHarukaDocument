"""Small, local Graphiti trial. No LLM/embedding calls. Run from repo root."""
import asyncio
import json
import os
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

os.environ['GRAPHITI_TELEMETRY_ENABLED'] = 'false'

from graphiti_core import Graphiti
from graphiti_core.driver.relate_driver import RelateDriver
from graphiti_core.nodes import EntityNode, EpisodicNode, EpisodeType
from graphiti_core.edges import EntityEdge
from graphiti_core.llm_client.openai_client import OpenAIClient
from graphiti_core.llm_client.config import LLMConfig
from graphiti_core.embedder.openai import OpenAIEmbedder, OpenAIEmbedderConfig
from graphiti_core.cross_encoder.openai_reranker_client import OpenAIRerankerClient
from graphiti_core.search.search_config import (
    SearchConfig, EdgeSearchConfig, EdgeSearchMethod, EdgeReranker,
    NodeSearchConfig, NodeSearchMethod, NodeReranker,
    EpisodeSearchConfig, EpisodeSearchMethod, EpisodeReranker,
)

ROOT = Path(__file__).resolve().parents[4]
OUT = Path(__file__).with_name('retrieval_results.json')
GROUP = 'haruka-t023-sample'

# Source windows fixed before comparison. Stage/status is preserved as evidence metadata.
SOURCES = [
    ('outline_k1', 'canon/_working/story_construction/ACT_III_OUTLINE.md', 653, 668, 'draft'),
    ('timeline_vigil', 'canon/04_timeline_canon.md', 278, 284, 'canon'),
    ('haruka_psychology', 'canon/03_characters/haruka.md', 121, 125, 'canon'),
    ('yu_arc', 'canon/03_characters/yu.md', 157, 169, 'canon'),
    ('time_split_rule', 'canon/01_world_rules_and_costs.md', 775, 775, 'canon'),
    ('link_tension_rule', 'canon/01_world_rules_and_costs.md', 1143, 1144, 'canon'),
    ('approved_clock', 'canon/_working/CANON_DECISION_LOG.md', 6, 6, 'author-confirmed'),
]

# Every edge is a short, source-grounded paraphrase. No causal edge is added from order alone.
FACTS = [
    ('haruka', 'CONFINED_IN', 'unconscious', '晴香意識被困於集體潛意識。', 'timeline_vigil', {'source_kind':'explicit','canon_status':'canon','story_world_interval':'114年6月至134年6月'}),
    ('yu', 'MAINTAINS_BODY_DURING', 'vigil', '夕在二十年守望期間維持晴香身體機能並對抗黑奏侵蝕。', 'timeline_vigil', {'source_kind':'explicit','canon_status':'canon','story_world_interval':'114年6月至134年6月'}),
    ('haruka', 'PSYCHOLOGICAL_ARC_DURING', 'vigil', '晴香經歷對抗、崩潰、承接三階段。', 'haruka_psychology', {'source_kind':'explicit','canon_status':'canon','subjective_interval':'二十年'}),
    ('yu', 'PARALLEL_NARRATIVE_ARC_OF', 'haruka', '夕的守望蒙太奇與晴香承接階段在敘事上明確交叉剪接；來源未說晴香知道夕的行動。', 'yu_arc', {'source_kind':'explicit','canon_status':'canon','causal_link':'not-stated'}),
    ('honeymoon', 'DEPICTS', 'haruka', '草稿描寫陽光房間、花子煮早餐、態度剝奪詛咒與反覆掙扎醒來被拉回。', 'outline_k1', {'source_kind':'explicit','canon_status':'draft','authority':'working outline; not an approved decision'}),
    ('attitude_curse', 'REMOVES_CHOICE_OF_ATTITUDE', 'haruka', '蜜月期草稿稱態度剝奪詛咒令晴香失去選擇態度的能力。', 'outline_k1', {'source_kind':'explicit','canon_status':'draft'}),
    ('struggling_to_escape', 'ACCELERATES_WEAR_OF', 'soul_link', '強行掙扎會加速連結線張力磨損；停止掙扎令連結自然回復。', 'link_tension_rule', {'source_kind':'explicit','canon_status':'canon','causal_link':'explicit'}),
    ('time_split_rule', 'ALLOWS_TIME_DIVERGENCE_FOR', 'vigil', 'L3 主觀時間與表層客觀時間可以不對等。', 'time_split_rule', {'source_kind':'explicit','canon_status':'canon'}),
    ('vigil', 'HAS_APPROVED_CLOCK', 'time_split_rule', '作者確認 Act IV 現實時間為 J8 後數日，主觀二十年、客觀數日。', 'approved_clock', {'source_kind':'author-decision','canon_status':'author-confirmed','decision_id':'CDL-430','decision_date':'2026-11-20','story_subjective_time':'二十年','story_objective_time':'數日'}),
]

NODES = {
    'haruka': ('Character:Haruka', '晴香', ['春日井晴香','雨宮晴香'], 'Character'),
    'yu': ('Character:Yu', '夕', ['Yu'], 'Character'),
    'unconscious': ('World:CollectiveUnconscious', '集體潛意識', [], 'WorldRule'),
    'vigil': ('Event:TwentyYearVigil', '二十年守望', [], 'NarrativeEvent'),
    'honeymoon': ('Plan:HoneymoonPrison', '蜜月期困境', [], 'DraftPlot'),
    'attitude_curse': ('Rule:AttitudeDeprivation', '態度剝奪詛咒', [], 'WorldRule'),
    'struggling_to_escape': ('State:HarukaStruggling', '晴香掙扎離開集體潛意識', [], 'CharacterState'),
    'soul_link': ('Rule:SoulLinkTension', '連結線張力機制', [], 'WorldRule'),
    'time_split_rule': ('Rule:SubjectiveObjectiveTimeSplit', '主觀客觀時間分裂', [], 'WorldRule'),
}


def read_sources():
    rows = []
    for key, relpath, start, end, status in SOURCES:
        full = ROOT / relpath
        all_lines = full.read_text(encoding='utf-8').splitlines()
        excerpt = '\n'.join(all_lines[start - 1:end])
        rows.append({'key':key,'path':relpath,'start':start,'end':end,'status':status,'text':excerpt})
    return {row['key']:row for row in rows}


async def main():
    sources = read_sources()
    now = datetime.now(timezone.utc)
    driver = RelateDriver(':memory:')
    local_cfg = LLMConfig(api_key='local-unused')
    graph = Graphiti(
        graph_driver=driver,
        llm_client=OpenAIClient(config=local_cfg),
        embedder=OpenAIEmbedder(config=OpenAIEmbedderConfig(api_key='local-unused')),
        cross_encoder=OpenAIRerankerClient(config=local_cfg),
    )
    try:
        await driver.build_indices_and_constraints()
        entities = {}
        for key, (stable_id, name, aliases, label) in NODES.items():
            node = EntityNode(
                uuid=stable_id, name=name, group_id=GROUP, labels=[label],
                summary='', attributes={'aliases':aliases} if aliases else {},
            )
            await node.save(driver)
            entities[key] = node

        episodes = {}
        for row in sources.values():
            episode = EpisodicNode(
                uuid=f"Source:{row['key']}",
                name=row['key'], group_id=GROUP, source=EpisodeType.text,
                source_description=f"{row['status']} source {row['path']}:{row['start']}-{row['end']}",
                content=row['text'], valid_at=now,
                # Relate currently drops episode_metadata; source provenance stays in source_description.
                episode_metadata={'path':row['path'],'line_start':row['start'],'line_end':row['end'],'status':row['status']},
            )
            await episode.save(driver)
            episodes[row['key']] = episode

        edges = []
        for src, relation, tgt, fact, source_key, attrs in FACTS:
            edge = EntityEdge(
                group_id=GROUP,
                source_node_uuid=entities[src].uuid,
                target_node_uuid=entities[tgt].uuid,
                created_at=now,
                name=relation,
                fact=fact,
                episodes=[episodes[source_key].uuid],
                attributes={
                    **attrs,
                    'source_path':sources[source_key]['path'],
                    'source_lines':f"{sources[source_key]['start']}-{sources[source_key]['end']}",
                    'source_status':sources[source_key]['status'],
                },
            )
            await edge.save(driver)
            edges.append(edge)

        cfg = SearchConfig(
            edge_config=EdgeSearchConfig(search_methods=[EdgeSearchMethod.bm25],reranker=EdgeReranker.rrf,bfs_max_depth=2),
            node_config=NodeSearchConfig(search_methods=[NodeSearchMethod.bm25],reranker=NodeReranker.rrf),
            episode_config=EpisodeSearchConfig(search_methods=[EpisodeSearchMethod.bm25],reranker=EpisodeReranker.rrf),
            limit=12,
        )
        queries = [
            '晴香意識被困於集體潛意識',
            '主觀二十年 客觀數日 CDL-430',
            '陽光房間 花子煮早餐 態度剝奪',
            '強行掙扎 連結線 張力磨損',
            '夕維持身體機能 對抗黑奏',
        ]
        results = {}
        for query in queries:
            found = await graph.search_(query=query,config=cfg,group_ids=[GROUP])
            results[query] = {
                'edges':[{'relation':e.name,'fact':e.fact,'source_episode_ids':e.episodes,'attributes':e.attributes} for e in found.edges],
                'episodes':[{'id':e.uuid,'name':e.name,'source':e.source_description,'content':e.content} for e in found.episodes],
                'nodes':[{'name':n.name,'labels':n.labels,'aliases':n.attributes.get('aliases',[])} for n in found.nodes],
            }

        # Same source coverage, keyword-only comparison; no paraphrases or generated facts are added.
        terms = ['晴香','集體潛意識','二十年','主觀','客觀','蜜月期','態度剝奪','連結線','夕','黑奏']
        keyword_results = {}
        for query in queries:
            matched=[]
            qterms=[t for t in terms if t in query]
            for row in sources.values():
                hits=[t for t in qterms if t in row['text']]
                if hits: matched.append({'source':row['key'],'path':row['path'],'lines':f"{row['start']}-{row['end']}",'matched_terms':hits})
            keyword_results[query]=matched

        # A source edit round-trip tests whether Graphiti invalidates dependent facts automatically.
        old_episode=await EpisodicNode.get_by_uuid(driver,episodes['approved_clock'].uuid,GROUP)
        changed=old_episode.model_copy(update={'content':old_episode.content+'\n[fixture edit] '})
        await changed.save(driver)
        updated_episode=await EpisodicNode.get_by_uuid(driver,episodes['approved_clock'].uuid,GROUP)
        dependent_fact=next(edge for edge in edges if episodes['approved_clock'].uuid in edge.episodes)
        old_fact=await EntityEdge.get_by_uuid(driver,dependent_fact.uuid,GROUP)
        maintenance={
            'source_episode_content_changed':updated_episode.content != old_episode.content,
            'fact_edge_unchanged_after_source_edit':old_fact.fact == dependent_fact.fact,
            'source_metadata_roundtrip':updated_episode.episode_metadata,
            'edge_still_references_episode':episodes['approved_clock'].uuid in old_fact.episodes,
        }

        kb = subprocess.run(
            [sys.executable,str(ROOT/'story_kb/tools/kb.py'),'q','--id','F-KH-25'],
            cwd=ROOT,capture_output=True,text=True,encoding='utf-8',check=False,
        )
        payload={
            'package':'graphiti-core[relate]==0.32.1',
            'privacy':'GRAPHITI_TELEMETRY_ENABLED=false; no LLM/embedding calls; in-memory Relate database',
            'source_count':len(sources),'edge_count':len(edges),'node_count':len(entities),
            'query_results':results,'same_source_keyword_results':keyword_results,
            'story_kb_card_only_F_KH_25':kb.stdout,
            'maintenance':maintenance,
        }
        OUT.write_text(json.dumps(payload,ensure_ascii=False,indent=2),encoding='utf-8')
        print(json.dumps({'source_count':len(sources),'edge_count':len(edges),'node_count':len(entities),'query_result_counts':{q:{'edges':len(v['edges']),'episodes':len(v['episodes']),'nodes':len(v['nodes'])} for q,v in results.items()},'maintenance':maintenance,'output':str(OUT)},ensure_ascii=False,indent=2))
    finally:
        await graph.close()

if __name__=='__main__':
    asyncio.run(main())
