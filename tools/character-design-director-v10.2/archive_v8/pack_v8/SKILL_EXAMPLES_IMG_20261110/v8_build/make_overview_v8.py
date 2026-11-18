import json,hashlib,os
from PIL import Image,ImageDraw,ImageFont
R='/workspace/haruka/'; I='lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/'
FONT="/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"; FB="/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"
ROWS=[
('G01','先定用途同載體；大輪廓開新載體','CONFIRMED','EX04 寬高比 0.29→0.85〔v7〕',['research/commercial/img_examples_20261110/derived/01_side_by_side_standing_neutral.png','research/identity_canon/rules_r1_img/EX01_EX04_EX05_EX12_g01_carriers_h64.png']),
('G02','改主讀構造；印紋屬近讀層','CONFIRMED','EX13 尾尖 0.68–0.69 H vs 膝環 0.73–0.74 H〔v7〕',['research/originality/img_examples_20261110/analysis_v2/board_main_asu_vs_old.png',I+'I4_integration_check/EX13_frame0_asu_side_tip_vs_knee.png','research/motif_world/rules_r1_img/EX07/02_2016_fullframe_h64_nearest4x_boxes.png']),
('G03','規定欄＋邊個揀；衣／髮／頭飾三欄','CONFIRMED','EX03 制服 ΔE00 約 0.1、髮約 37〔v7〕',['research/color_value/img_examples_20261110/out/01_side_by_side_h800.png','research/head_hair/rules_r2_img/EX03_g14_layers_yuzu.png','research/head_hair/img_examples_20261110/out_cafe_02_silhouettes_overlays.png']),
('G04','簽名色寫面積／位置／通道','CONFIRMED','EX03 ユズ髮約 37.8%＞制服〔v7〕',['research/color_value/img_examples_20261110/out/09_color_vs_gray_64_nnx6.png','research/color_value/rules_r1_img/G04_G08_G09_evidence_board.png']),
('G05','跨形態留錨；錨要有對比','CONFIRMED','EX04 全身 IoU 約 0.13 vs 頭 0.56〔v7〕',['research/silhouette_cast/img_examples_20261110/sheet_head_crop_64.png','research/tv_simplify/img_examples_20261110/analysis/comparison_sheet.png','research/flow_structure/img_examples_20261110/sheet_compare_2x2.png']),
('G06','四條路＋接手件＋固定點；減法係選項','CONFIRMED（減法單例）','EX14 大色塊 25.6%→42.2%〔v7〕',['research/tv_simplify/img_examples_20261110/analysis_v2/qa_game_sword_overlay_v2.png','research/tv_simplify/rules_r1_img/g06_carrier_density_sheet.png']),
('G07','通道＋視角；頭肩框以人手頭位為錨','CONFIRMED','EX14 頭錨框劍 0 px〔重產〕',['research/commercial/i5_img/EX06_crop_definitions_64.png','research/audience_market/rules_r1_img/G07_EX14_crop_channels.png','research/flow_structure/rules_r2_img/G15_headbox_qc.png']),
('G08','對相鄰底有對比；同色靠外輪','CONFIRMED','EX11 ΔL*≈60 vs ≈11〔v7〕',['research/psychology/img_examples_20261110/v2/analysis_thumbs_h64_nearest4x.png','research/silhouette_cast/rules_r2_img/EX04/i1_head_window_lance.png']),
('G09','明暗／色／穿法冇公式','CONFIRMED','EX05 主人公 L* 18.08→22.69；隊友 6/6 變暗〔重產〕',['research/psychology/rules_r1_img/g09_value_board.png','research/psychology/rules_r1_img/ex05_team_Lstar.png']),
('G10','先根部／支撐／掛點／開合，後裝飾','CONFIRMED','EX02 背柱 3.6%→11.7%〔v7〕',['research/construction_fashion/img_examples_20261110/out/construction_callout_sheet.png','research/flow_structure/rules_r1_img/G10_parts_EX04_battle.png',I+'rules_r2_integration/EX02_gun_vs_bbox_extremes.png']),
('G11','穿法可做日常主識別','PROVISIONAL','EX10 上半寬 427 vs 271〔v7〕',['research/flow_structure/rules_r1_img/G11_P5_shujin_torso_strip.png','research/identity_canon/rules_r1_img/EX05_EX10_g11_wear_style.png','research/performance_motion/img_examples_20261110/analysis_v2/01b_sheet_pair_color.png']),
('G12','(a) 可重畫資料包 (b) 表演範圍＋固定點','(a) OK／(b) 範圍 PROVISIONAL','EX01 姿勢 0.963 vs 載體 0.769〔重產〕；EX14 冠 5→3',[I+'rules_r1_integration/rerun_pm/R1_pose_vs_carrier_iou_overlays.png','research/production_critic/i4_img/EX14/01_anime_thumb_crown_native.png','research/production_critic/img_examples_20261110/out/11_brow_tight_roi_julius_face02-1.png']),
('G13','每個主要角色寫識別句','CONFIRMED','14 例',[I+'OVERVIEW_EXAMPLES_IMG_v7_20261110.png','research/identity_canon/rules_r1_img/IDC_R1_OVERVIEW_MATRIX.png']),
('G14','剪影分層；全身外包絡唔係身份','CONFIRMED（新）','EX14 含劍 0.7443 vs 剔劍 0.5801〔重產〕',['research/head_hair/rules_r2_img/EX03_g14_layers_yuzu.png','research/flow_structure/rules_r2_img/G14_hair_layer_qc.png','research/tv_simplify/rules_r2_img/EX08_top_qc.png']),
('G15','A 持物可主導外包絡｜B 可佔 bbox 頂／入頭框','A／B CONFIRMED（新，各<5）','EX14 IoU 0.821、頭框 0 px；EX05 4/7〔重產〕',[I+'rules_r2_integration/EX14_sword_vs_headbox.png',I+'rules_r2_integration/EX05_thief_bbox_top_top30.png','research/silhouette_cast/rules_r2_img/EX12/raised_arm_vs_face_box.png']),
]
W=2400; RH=260; TW=640; HDR=90
img=Image.new('RGB',(W,HDR+RH*len(ROWS)+50),'white'); d=ImageDraw.Draw(img)
fb=ImageFont.truetype(FB,30); f1=ImageFont.truetype(FB,24); f2=ImageFont.truetype(FONT,19); f3=ImageFont.truetype(FONT,14)
d.text((20,20),'v8 核心設計規則 G01–G15 → 例子圖像證據（2026-11-10 HKT）',font=fb,fill='black')
d.text((20,60),'每行：規則｜狀態｜關鍵數（〔v7〕有效數／〔重產〕整合者重產）｜證據圖（縮圖，原檔路徑見 sources.json）',font=f3,fill=(80,80,80))
src={}
for i,(g,s,st,num,ims) in enumerate(ROWS):
    y=HDR+i*RH
    d.rectangle([0,y,W,y+RH-1],fill=(246,246,246) if i%2 else 'white'); d.line([0,y,W,y],fill=(200,200,200))
    d.text((16,y+12),g,font=f1,fill=(20,60,140))
    d.text((90,y+14),s,font=f2,fill='black')
    col=(170,90,0) if 'PROV' in st else (20,120,40)
    d.text((16,y+60),st,font=f2,fill=col)
    # wrap num
    line='';yy=y+100
    for ch in num:
        if d.textlength(line+ch,font=f2)>TW-40: d.text((16,yy),line,font=f2,fill=(40,40,40)); yy+=28; line=''
        line+=ch
    d.text((16,yy),line,font=f2,fill=(40,40,40))
    x=TW; avail=(W-TW-10)//len(ims)
    src[g]=[]
    for p in ims:
        fp=R+p; im=Image.open(fp).convert('RGB')
        sc=min((avail-14)/im.width,(RH-40)/im.height); im=im.resize((max(1,int(im.width*sc)),max(1,int(im.height*sc))),Image.LANCZOS)
        img.paste(im,(x,y+8)); d.text((x,y+RH-26),os.path.basename(p)[:60],font=f3,fill=(110,110,110))
        src[g].append({'path':p,'md5':hashlib.md5(open(fp,'rb').read()).hexdigest()})
        x+=avail
d.text((20,img.height-38),'R4：跨姿勢／持物／鏡頭全身 IoU 只量外包絡差，唔係改稿幅度或身份分。全部未人測。',font=f3,fill=(120,0,0))
O='/workspace/haruka/'+I+'RULES_OVERVIEW_v8_20261110'
img.save(O+'.png'); json.dump(src,open(O+'.sources.json','w'),ensure_ascii=False,indent=1)
print(img.size)
