# -*- coding: utf-8 -*-
import re
SD = '/workspace/haruka/lab/canon/_working/skill_distill'
def blocks(text):
    """Return {EXnn: block_text} for '> **例 EXnn' blockquote blocks."""
    out = {}; cur = None; buf = []
    for l in text.split('\n'):
        m = re.match(r'> \*\*例 (EX\d\d)', l)
        if m:
            if cur: out[cur] = '\n'.join(buf)
            cur, buf = m.group(1), [l]; continue
        if cur:
            if l.startswith('>'): buf.append(l)
            else: out[cur] = '\n'.join(buf); cur, buf = None, []
    if cur: out[cur] = '\n'.join(buf)
    return out

NUM = re.compile(r'(?<![\w.])[+−-]?\d+(?:\.\d+)?')
SKIP_LINES = ('> - **互評**', '> - **級別**', '> - **圖**')
def figure_text(block):
    return '\n'.join(l for l in block.split('\n') if not l.startswith(SKIP_LINES))

def numbers(block):
    t = re.sub(r'`[^`]*`', ' ', figure_text(block))   # paths / ids
    t = re.sub(r'#\d+|\d+(?:st|nd|rd|th)\b|\d+\.webp|\b\dD\b', ' ', t)
    t = re.sub(r'https?://\S+', ' ', t)
    t = re.sub(r'〔[^〕]*〕', ' ', t)                   # tags (I1, E2, D07 ...)
    t = re.sub(r'§\d+(?:\.\d+)?', ' ', t)             # section refs
    t = re.sub(r'(?<!\d)\d\d-\d\d(?!\d)', ' ', t)          # MM-DD dates
    t = re.sub(r'\b(?:EX|E|D|I|R|v|h|p|B|S|Canny|trpr_|int|a)\d+(?:\.\d+)*(?:[_/]\d+)*', ' ', t)  # ids like EX03, I5, R1, v2, h512, p.1, B2
    t = re.sub(r'(?<![\d.])(?:19|20)\d\d(?:-\d\d(?:-\d\d)?)?(?![\d.])', ' ', t)   # years / dates
    t = re.sub(r'\d+\.\d+\.\d+', ' ', t)               # version strings 14.8.1
    t = re.sub(r'Canny\s*\d+/\d+|σ\d+(?:\.\d+)?', ' ', t)
    t = re.sub(r'\d+×\d+(?:×\d+)?', lambda m: ' '.join(m.group(0).split('×')), t)
    nums = []
    for m in NUM.finditer(t):
        v = m.group(0).replace('−','-').lstrip('+')
        nums.append(v)
    return nums

def norm(v):
    v = v.lstrip('-')
    if '.' in v: v = v.rstrip('0').rstrip('.') or '0'
    return v
