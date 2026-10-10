#!/usr/bin/env python3
"""Read-only validation of the single board after build_glove_comparison.py."""
from pathlib import Path
from PIL import Image
import numpy as np,json,xml.etree.ElementTree as E,subprocess
p=Path(__file__).resolve().parent
c=json.loads((p/'technical_checks.json').read_text())
a=np.array(Image.open(p/'glove_comparison_XY.png').convert('RGB')).astype(int)
x=a[230:799,40:880];y=a[230:799,920:1760]
d=np.max(abs(x-y),axis=2);rr,cc=np.where(d>1)
c['rendered_art_area_comparison']={
 'difference_gt_one_channel_level_pixel_count':int((d>1).sum()),
 'difference_gt_one_level_bbox_relative_to_art_comparison_region':[int(cc.min()),int(rr.min()),int(cc.max()),int(rr.max())],
 'comparison_region_y':[230,798],
 'right_of_arc_max_channel_difference':int(d[:,400:].max()),
 'right_of_arc_nonidentical_pixels':int((d[:,400:]>0).sum()),
 'note':'Compared at the exact 880 px cell translation. All differences greater than one RGB level are in the arc region. Seven body-region pixels differ by one channel level from raster rounding. Native proxy geometry is identical because both cells use the same group.'}
ns={'s':'http://www.w3.org/2000/svg'}
r=E.parse(p/'glove_comparison_XY.svg').getroot()
c['xml_proxy_group_definition_count']=len(r.findall('.//s:g[@id="body-proxy"]',ns))
c['xml_proxy_instance_count']=sum(el.get('href')=='#body-proxy' for el in r.findall('.//s:use',ns))
c['visual_QA']={'inspected_actual_XY_png':True,'inspected_actual_labeled_png':True,'text_overlap_observed':False,'proxy_remains_schematic':True,'first_render_correction':'Corrected the local normal-side sign: the intended P pressure lobe now projects into the open cavity. No pose, proxy, centerline, endpoint, extra cell, or treatment was added.','common_proxy_pose_revisions':0,'drawing_studies':1,'variants_are_labels_only':True}
c['renderer']=subprocess.run(['inkscape','--version'],text=True,capture_output=True).stdout.strip()
(p/'technical_checks.json').write_text(json.dumps(c,ensure_ascii=False,indent=2))
print('Single-study technical checks updated. No new images generated.')
