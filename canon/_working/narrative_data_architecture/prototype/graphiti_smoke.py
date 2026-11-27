import asyncio
from datetime import datetime, timezone
from graphiti_core import Graphiti
from graphiti_core.driver.relate_driver import RelateDriver
from graphiti_core.nodes import EntityNode, EpisodicNode, EpisodeType
from graphiti_core.edges import EntityEdge
from graphiti_core.llm_client.openai_client import OpenAIClient
from graphiti_core.llm_client.config import LLMConfig
from graphiti_core.embedder.openai import OpenAIEmbedder, OpenAIEmbedderConfig
from graphiti_core.cross_encoder.openai_reranker_client import OpenAIRerankerClient
from graphiti_core.search.search_config import SearchConfig, EdgeSearchConfig, EdgeSearchMethod, EdgeReranker, EpisodeSearchConfig, EpisodeReranker
from graphiti_core.search.search_filters import SearchFilters

async def main():
    driver = RelateDriver(':memory:')
    cfg = LLMConfig(api_key='local-unused')
    graph = Graphiti(graph_driver=driver, llm_client=OpenAIClient(config=cfg), embedder=OpenAIEmbedder(config=OpenAIEmbedderConfig(api_key='local-unused')), cross_encoder=OpenAIRerankerClient(config=cfg))
    await driver.build_indices_and_constraints()
    now = datetime.now(timezone.utc)
    group = 'haruka-t023'
    haruka = EntityNode(name='晴香', group_id=group, labels=['Character'], summary='主角', attributes={'aliases':['春日井晴香','雨宮晴香']})
    unconscious = EntityNode(name='集體潛意識', group_id=group, labels=['WorldRule'], summary='由靈魂意志具現化的世界維度')
    await haruka.save(driver); await unconscious.save(driver)
    episode = EpisodicNode(name='timeline:twenty-year-vigil', group_id=group, source=EpisodeType.text, source_description='canon/04_timeline_canon.md:278-284', content='二十年守望：晴香意識被困於集體潛意識；夕維持身體機能，對抗黑奏侵蝕。', valid_at=now, episode_metadata={'path':'canon/04_timeline_canon.md','lines':'278-284','authority':'canon'})
    await episode.save(driver)
    edge = EntityEdge(group_id=group, source_node_uuid=haruka.uuid, target_node_uuid=unconscious.uuid, created_at=now, name='CONFINED_IN', fact='晴香意識被困於集體潛意識；夕維持身體機能，對抗黑奏侵蝕。', episodes=[episode.uuid], attributes={'canon_status':'canon','cause_kind':'source-stated','story_world_interval':'114年6月至134年6月','subjective_interval':'二十年'})
    await edge.save(driver)
    en = EpisodicNode(name='English diagnostic', group_id=group, source=EpisodeType.text, source_description='synthetic diagnostic only', content='Haruka is confined in the collective unconscious while Yu maintains her body and resists Kurokane.', valid_at=now)
    await en.save(driver)
    filt = SearchFilters()
    for q in ['晴香', '晴香意識被困於集體潛意識', 'Haruka confined collective unconscious']:
        hits = await driver.search_interface.episode_fulltext_search(driver, q, filt, [group], 5)
        print('episode bm25', repr(q), '=>', [h.name for h in hits])
    cfg_search = SearchConfig(edge_config=EdgeSearchConfig(search_methods=[EdgeSearchMethod.bm25], reranker=EdgeReranker.rrf), episode_config=EpisodeSearchConfig(search_methods=[EpisodeSearchMethod.bm25], reranker=EpisodeReranker.rrf), limit=5)
    for q in ['晴香意識被困於集體潛意識', 'Haruka confined collective unconscious']:
        result = await graph.search_(query=q, config=cfg_search, group_ids=[group])
        print('graphiti', repr(q), 'edges=',len(result.edges),'episodes=',len(result.episodes))
    print('episode metadata roundtrip:',(await EpisodicNode.get_by_uuid(driver, episode.uuid, group)).episode_metadata)
    await graph.close()
if __name__ == '__main__': asyncio.run(main())
