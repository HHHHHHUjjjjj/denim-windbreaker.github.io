
var DG_CALIB={"n":191,"whiteAll":0.15706806282722513,"acc":0.33532934131736525,"base":0.32335329341317365,"per":{"风衣大衣":{"n":54,"white":0.13,"person":0.685,"subjL":0.3412,"edge":0.0629,"gloss":0.0287,"occ":0.75},"牛仔":{"n":37,"white":0.108,"person":0.568,"subjL":0.3876,"edge":0.0727,"gloss":0.0233,"occ":0.632},"夹克外套":{"n":33,"white":0.303,"person":0.485,"subjL":0.3421,"edge":0.0676,"gloss":0.0692,"occ":0.7325},"短裤":{"n":18,"white":0,"person":0.778,"subjL":0.3328,"edge":0.0682,"gloss":0.019,"occ":0.6324},"长裤":{"n":16,"white":0.312,"person":0.375,"subjL":0.3692,"edge":0.0663,"gloss":0.3548,"occ":0.6446},"POLO":{"n":9,"white":0,"person":1,"subjL":0.3561,"edge":0.0512,"gloss":0.0015,"occ":0.7162},"毛衫针织":{"n":6,"white":0,"person":0.667,"subjL":0.3439,"edge":0.0603,"gloss":0.0504,"occ":0.7096},"棉服羽绒":{"n":6,"white":0.167,"person":0.5,"subjL":0.4269,"edge":0.1188,"gloss":0.0396,"occ":0.7415},"未标注":{"n":5,"white":0.2,"person":0.6,"subjL":0.4516,"edge":0.0865,"gloss":0.0141,"occ":0.5675},"卫衣帽衫":{"n":3,"white":0,"person":0,"subjL":0.5589,"edge":0.0995,"gloss":0.0862,"occ":0.699},"衬衫":{"n":2,"white":0.5,"person":1,"subjL":0.1934,"edge":0.0818,"gloss":0.0002,"occ":0.6764},"T恤":{"n":2,"white":0.5,"person":0.5,"subjL":0.4789,"edge":0.0246,"gloss":0.0783,"occ":0.5707}}};
var DG_CATS=["棉服羽绒","夹克外套","卫衣帽衫","长裤","牛仔","毛衫 · 针织 · 开衫","风衣大衣","短裤"];
/* 品类按服装形态归入已校准的场景族，保证每个类目都有场景与达标线 */
var CAT_FAM = {
  tee:'卫衣帽衫', longtee:'卫衣帽衫', henley:'卫衣帽衫', polo:'卫衣帽衫', shirt:'卫衣帽衫',
  linen:'卫衣帽衫', hoodie:'卫衣帽衫', sweatshirt:'卫衣帽衫', underwear:'卫衣帽衫',
  sock:'卫衣帽衫', dressshirt:'卫衣帽衫', other:'卫衣帽衫', track:'卫衣帽衫',
  workout:'卫衣帽衫', compression:'卫衣帽衫', homewear:'卫衣帽衫',
  knit:'毛衫 · 针织 · 开衫', cardigan:'毛衫 · 针织 · 开衫',
  jacket:'夹克外套', bomber:'夹克外套', denimjacket:'夹克外套', leather:'夹克外套',
  vest:'夹克外套', sunprotect:'夹克外套', raincoat:'夹克外套', cycle:'夹克外套',
  coat:'风衣大衣', trench:'风衣大衣', woolcoat:'风衣大衣', suit:'风衣大衣',
  suitvest:'风衣大衣', tuxedo:'风衣大衣',
  puffer:'棉服羽绒', downvest:'棉服羽绒',
  denim:'牛仔', jeans:'牛仔', overall:'牛仔', bibshorts:'牛仔', coverall:'牛仔',
  pants:'长裤', cargo:'长裤', jogger:'长裤', sweatpants:'长裤',
  shorts:'短裤', denimshorts:'短裤', swim:'短裤'
};
function famOf(catId, catZh){
  if(catId && CAT_FAM[catId]) return CAT_FAM[catId];
  if(catZh && DG_CATS.indexOf(catZh)>-1) return catZh;
  if(typeof catZhOf==='function' && catId){
    var c0=CATS.filter(function(x){return x.id===catId;})[0];
    if(c0 && DG_CATS.indexOf(c0.zh)>-1) return c0.zh;
  }
  return '夹克外套';
}
var DG_MODES=["模拍","静物"];
var DG_SCENES = [
/* 棉服羽绒 · 模拍 */
{cat:"棉服羽绒",mode:"模拍",name:"雪景木屋 · 壁炉暖光",space:"雪松林间木屋前",bgTone:"light",warmth:"warm",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"雪松林间的木屋前，屋顶积雪、廊下堆着柴火，壁炉暖光从窗内透出",
 lightTxt:"低照度自然光叠加暖色补光，光比中偏大，雪地反光柔和，人物面部留轮廓光",
 cam:"竖幅 3:4，胸至腰平视，主体居中约 70%，左右以木屋廊柱框景",
 styl:"黑裤黑靴 + 高领毛衣或围巾内搭，利落短发，可留干净微胡茬",
 act:"正面站立、双手插兜，肩线放松，表情冷峻沉静",
 sell:"右上角火焰保暖标 + 「抗寒锁温」短句，靠蓬松版型与厚实量感自证保暖"},
{cat:"棉服羽绒",mode:"模拍",name:"城市雪街 · 冷调建筑",space:"城市街道雪景",bgTone:"mid",warmth:"cold",sat:"low",density:"detail",light:"soft",bigSub:3,
 scene:"积雪的城市街道，两侧是冷灰建筑立面，路面湿冷反光，背景虚化收干净",
 lightTxt:"阴天漫射光，冷调，低光比，雪面提亮但不过曝",
 cam:"竖幅 3:4，人物占画面 3/4，半身偏全身，正面略侧，头顶留少量环境",
 styl:"深色下装 + 同色系内搭，靴子完整出镜",
 act:"行走中抓拍或一手插兜一手拉领口，重心前移，有动势",
 sell:"「-15℃ 可穿」温度短句 + 防风图标，靠厚领口与雪地反证保暖"},
{cat:"棉服羽绒",mode:"模拍",name:"雪山木桥 · 开阔远景",space:"雪山景区木桥",bgTone:"light",warmth:"cold",sat:"low",density:"clean",light:"hard",bigSub:2,
 scene:"雪山下的木桥或观景台，远处雪峰与晴空，前景木栏引导纵深",
 lightTxt:"晴天强自然光，雪地高反射，人物用柔光面朝镜头，避免脸上硬阴影",
 cam:"竖幅 3:4，半身偏全身居中，主体约占一半，上方留天空",
 styl:"户外机能内搭 + 深色工装裤，手套或针织帽做功能暗示",
 act:"单手扶栏、身体微侧 15°，视线平视远方",
 sell:"充绒量或「PLUME FREE / BREATHABLE」面料图标组，靠开阔环境背书功能性"},
{cat:"棉服羽绒",mode:"模拍",name:"极简纯色无缝棚拍",space:"无缝纯色影棚",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅灰无缝背景纸，脚下淡接触影，画面只有人与服装",
 lightTxt:"高键柔光，低光比平光，弱轮廓光勾出毛领与绗缝线条",
 cam:"竖幅 3:4，全身居中约 85%，正面直立，严格对称，留白充足",
 styl:"黑裤黑靴 + 黑高领，完整 look，妆发干净",
 act:"正面直立、双手插兜，肩背挺拔，表情平静自信",
 sell:"左上角火焰 + 「KEEP WARM」图标，靠纯色背景把版型与面料质感打透"},
{cat:"棉服羽绒",mode:"模拍",name:"欧式街景 · 暖调立面",space:"欧式街道老建筑前",bgTone:"mid",warmth:"warm",sat:"low",density:"detail",light:"soft",bigSub:3,
 scene:"欧式石砌建筑立面、拱窗与街灯，街道干净、行人与杂物剔除",
 lightTxt:"柔和自然日光，色温偏暖，阴影轻，立体但不脏",
 cam:"竖幅 3:4，全身竖构图居中偏左，主体占 70%，右侧留建筑纵深",
 styl:"棕色或驼色系内搭 + 直筒长裤 + 皮鞋，成熟克制",
 act:"自然行走、双臂下垂，步伐收在画面内，情绪沉稳",
 sell:"长款比例与腰线的版型说明短句，靠材质与街景烘托高级感"},
{cat:"棉服羽绒",mode:"模拍",name:"湿冷河桥 · 阴天漫射",space:"河岸桥面",bgTone:"mid",warmth:"cold",sat:"low",density:"detail",light:"soft",bigSub:2,
 scene:"河岸桥面，铁栏引导纵深，水面灰冷，空气有湿冷感",
 lightTxt:"阴天漫射低光比，侧光勾出蓬松轮廓，暗部保留细节不糊死",
 cam:"胸像裁切，居中约 70%，栏杆斜线做引导线",
 styl:"深色连帽 + 同色下装，帽檐轻压",
 act:"单手插兜、站姿放松，视线略偏画面外",
 sell:"「Thick Fleece Not Bulky」文案 + 抓绒内里小图，讲厚而不臃肿"},
/* 棉服羽绒 · 静物 */
{cat:"棉服羽绒",mode:"静物",name:"纯白无缝 · 开襟露内衬",space:"纯白影棚",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"纯白无缝背景，单品立式摆拍，开襟露出内衬与吊牌",
 lightTxt:"柔光低光比、轻阴影，弱轮廓光勾蓬松边缘，亮面不炸",
 cam:"竖幅 3:4，主体居中占 80–85%，正面平视，避免裁断领口与下摆",
 styl:"立式摆拍，拉链半开，袖口自然下垂，内衬翻出一角",
 act:"——",
 sell:"火焰 + 温度 + 多色图标各一枚，配一句「厚而不臃肿」文案"},
{cat:"棉服羽绒",mode:"静物",name:"雪山合成 · 短款立领",space:"雪山蓝天合成背景",bgTone:"light",warmth:"cold",sat:"mid",density:"clean",light:"hard",bigSub:2,
 scene:"雪山与蓝天合成背景，单品居中悬浮或立式，底部淡影",
 lightTxt:"棚拍主光 + 背景强光反差，主体曝光正常、轮廓清楚",
 cam:"竖幅 3:4，主体占 85%，正面全身，拉链半开",
 styl:"立式摆拍，下摆与袖口自然撑起，绗缝走向可读",
 act:"——",
 sell:"「-15℃」温度角标 + 防风防水图标，场景自证保暖"},
{cat:"棉服羽绒",mode:"静物",name:"水泥地俯拍 · 运动鞋道具",space:"水泥灰地面 + 运动鞋",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"水泥灰地面俯拍平铺，底部一双运动鞋做比例参照，道具不超过两件",
 lightTxt:"平铺柔光、低反差、阴影轻，绗缝立体感靠侧光微提",
 cam:"俯拍 90°，主体占 70–75%，正门展示，四周留窄边",
 styl:"平铺，袖口微卷、下摆展开，鞋与单品间距一致",
 act:"——",
 sell:"「RACING SPORT」类印花或版型说明字，靠版型自证"},
{cat:"棉服羽绒",mode:"静物",name:"木纹地板 · 挂拍大开襟",space:"木纹地板 + 杂志衣架",bgTone:"mid",warmth:"warm",sat:"mid",density:"detail",light:"soft",bigSub:2,
 scene:"木纹地板上挂拍，衣架承托，大开襟露出内里抓绒，旁配杂志与配件",
 lightTxt:"柔和自然光、侧前方来光，木纹有层次但不抢",
 cam:"竖幅 3:4，主体斜向居中偏左，开襟向右展开，内衬完整可见",
 styl:"挂拍或隐形人台，开襟对角线构图",
 act:"——",
 sell:"「Thick Fleece Not Bulky」+ 火焰图标，内衬抓绒特写小图"},
{cat:"棉服羽绒",mode:"静物",name:"白色展台 · 射灯橱窗感",space:"白色展台 + 射灯",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"hard",bigSub:3,
 scene:"白色几何展台，顶部射灯打亮，营造橱窗陈列感",
 lightTxt:"顶光聚光、中高光比，亮面产生强反光与投影，质感高级",
 cam:"竖幅 3:4，主体居中偏下占 70–75%，低角微仰",
 styl:"立式陈列、微侧露侧袋，展台边缘对齐画面下三分之一",
 act:"——",
 sell:"面料科技图标（防风／锁温／轻量）单行排列，克制不拥挤"},
/* 夹克外套 · 模拍 */
{cat:"夹克外套",mode:"模拍",name:"浅米石墙 · 都市街角",space:"浅米色石墙街角",bgTone:"light",warmth:"warm",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅米色石墙与城市建筑转角，地面干净，背景有层次但不抢",
 lightTxt:"自然日光，石墙投下几何阴影，暖调立体，质感强",
 cam:"竖幅 3:4，全身或近全身居中，人物轻倚墙，主体 75%",
 styl:"大地色系叠穿 + 直筒长裤 + 干净休闲鞋",
 act:"轻倚墙、单手插兜，姿态放松，肩线舒展",
 sell:"以「完整造型 + 大地色搭配」自证质感，可加皮革或面料小图标"},
{cat:"夹克外套",mode:"模拍",name:"黑轿车旁 · 都市通勤",space:"黑色轿车 + 街道",bgTone:"mid",warmth:"neutral",sat:"low",density:"detail",light:"soft",bigSub:2,
 scene:"街道边停着的黑色轿车，车身反光与人形成都市通勤语境",
 lightTxt:"柔和城市自然光，皮面与缎面反光细腻，明暗层次丰富",
 cam:"竖幅 3:4，全身入画，人物与车形成斜向关系，主体占 60%",
 styl:"商务休闲：衬衫或高领 + 西裤 + 乐福鞋",
 act:"一手插兜一手自然下垂，靠车站立，视线平视",
 sell:"「通勤/商务」场景词 + 肩背廓形说明，靠完整造型传达适配"},
{cat:"夹克外套",mode:"模拍",name:"欧式石墙木门 · 沉稳建筑",space:"欧式石墙与木门",bgTone:"mid",warmth:"warm",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"欧式石砌墙与深色木门，门框形成天然画框，气质沉稳",
 lightTxt:"柔和漫射光，门墙对比自然，整体温润不刺眼",
 cam:"竖幅 3:4，全身人像倚门而立，主体占 70%，版型完整",
 styl:"衬衫领带或高领 + 阔腿西裤，精致但不花",
 act:"倚门站立，一手扶门框，重心在一条腿上",
 sell:"领口与贴袋特写小图，突出五金与走线"},
{cat:"夹克外套",mode:"模拍",name:"机车车库 · 金属载具",space:"车库或金属载具旁",bgTone:"dark",warmth:"cold",sat:"mid",density:"detail",light:"hard",bigSub:2,
 scene:"车库卷帘门、机车或金属载具，工业质感，背景略暗",
 lightTxt:"硬质侧光 + 局部补光，高光比，金属反光做氛围",
 cam:"竖幅 3:4，中近景居中，主体占 65%，环境作暗调包围",
 styl:"黑色 T 恤或高领 + 皮靴，硬朗配件克制点缀",
 act:"侧身站立、单手扶车把或拉链，回眸看向镜头",
 sell:"皮革／耐磨面料图标 + 「硬挺有型」短句"},
{cat:"夹克外套",mode:"模拍",name:"混凝土墙 · 极简硬朗",space:"粗石或混凝土墙",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"hard",bigSub:3,
 scene:"粗石或清水混凝土墙，背景极简，无任何道具干扰",
 lightTxt:"硬朗侧向自然光，墙面有明暗分割，麂皮或绒面质感被勾出来",
 cam:"竖幅 3:4，中近景，主体占 70–80%，人物居中或偏左",
 styl:"同色系内搭 + 深色长裤，鞋子干净",
 act:"侧身撑墙，肩背线条展开，表情克制",
 sell:"面料纹理特写 + 版型说明，靠近距离质感打动人"},
{cat:"夹克外套",mode:"模拍",name:"白色复古车 · 老钱风",space:"白色复古轿车旁街道",bgTone:"light",warmth:"neutral",sat:"low",density:"detail",light:"soft",bigSub:3,
 scene:"白色复古轿车停在街边，浅色建筑墙面，整体通透干净",
 lightTxt:"充足阳光，白色车身为天然反光板，光影通透",
 cam:"竖幅 3:4，全身倚车，单腿轻搭车身，主体占 75%",
 styl:"风衣或长外套 + 高领 + 黑裤乐福鞋",
 act:"倚车站立、单腿交叠，手插口袋，姿态松弛",
 sell:"腰带收腰与轮廓线说明，靠「老钱风」整体造型传达高级"},
/* 夹克外套 · 静物 */
{cat:"夹克外套",mode:"静物",name:"水泥地俯拍 · 平铺",space:"水泥地 + 极简道具",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"水泥灰地面俯拍平铺，底部可露一双鞋做比例参照",
 lightTxt:"柔光均匀、曝光正常，灰调干净，暗部不闷",
 cam:"俯拍 90°，主体居中占 70–80%，轮廓完整",
 styl:"平铺，袖口略弯、下摆自然张开",
 act:"——",
 sell:"无文字靠版型；可加一枚面料或版型图标"},
{cat:"夹克外套",mode:"静物",name:"极简纯色 · 挂拍",space:"纯色背景挂拍",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅灰或米白纯色背景，衣架挂拍，肩线完整",
 lightTxt:"柔光均匀、低反差，弱侧光勾轮廓，五金有细高光",
 cam:"竖幅 3:4，主体居中占 75–80%，正面平视，不裁肩不裁下摆",
 styl:"木衣架挂拍，拉链或门襟微开，层次可读",
 act:"——",
 sell:"「NEW DROP」可有可无，功能卖点优先于促销字"},
{cat:"夹克外套",mode:"静物",name:"木地板 + 地毯 · 生活化",space:"木地板 + 地毯场景",bgTone:"mid",warmth:"warm",sat:"high",density:"detail",light:"soft",bigSub:2,
 scene:"木地板上铺一块低饱和地毯，单品斜向摆放，生活质感",
 lightTxt:"自然光影、光线稍平，靠木纹与织物层次补足",
 cam:"竖幅 3:4，主体斜向居中占 70%，与场景元素轻微互动",
 styl:"平铺或半挂，袖口叠放，配一本杂志压角",
 act:"——",
 sell:"配色与搭配建议短句，靠场景自证穿着场合"},
{cat:"夹克外套",mode:"静物",name:"雪山岩石 · 功能款合成",space:"雪山／岩石合成背景",bgTone:"light",warmth:"cold",sat:"mid",density:"clean",light:"hard",bigSub:2,
 scene:"雪山或岩石纹理背景，单品立式陈列，底部淡影落地",
 lightTxt:"棚拍主光 + 背景冷光，曝光正常，轮廓清晰",
 cam:"竖幅 3:4，主体占 80%，正面或微侧，功能点朝向镜头",
 styl:"立式摆放，拉链拉到胸口，帽檐自然撑起",
 act:"——",
 sell:"防风／防泼水／保暖三图标 + 一句参数，功能冲击型"},
/* 卫衣帽衫 · 模拍 */
{cat:"卫衣帽衫",mode:"模拍",name:"灰底简化街头 · 棚拍",space:"灰色背景简化街头",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"灰色背景，简化街头元素（一段墙、一道门槛），不干扰服装",
 lightTxt:"柔和均匀棚拍光，影子轻，帽檐与抽绳细节清楚",
 cam:"竖幅 3:4，半身或全身居中占 70–85%，正面/背面完整展示设计点",
 styl:"白高领打底 + 基础下装，利落短发，银链或墨镜克制点缀",
 act:"手插兜冷峻站姿，或背对镜头露出背面印花",
 sell:"「MORE COLORS」或多色块，印花与刺绣特写放大"},
{cat:"卫衣帽衫",mode:"模拍",name:"雪景街头 · 冬日氛围",space:"积雪街道",bgTone:"light",warmth:"cold",sat:"low",density:"clean",light:"soft",bigSub:2,
 scene:"积雪街道与远处建筑，冬日光感，背景虚化收干净",
 lightTxt:"阴天雪地反射光，冷调柔光，人脸补亮不糊",
 cam:"竖幅 3:4，半身偏全身居中，主体占 60–70%",
 styl:"厚实下装 + 靴子，帽檐压低压出街头感",
 act:"双手插兜站立或行走，肩部微耸，有御寒姿态",
 sell:"火焰或保暖图标 + 「加绒」短句，靠场景反证保暖"},
{cat:"卫衣帽衫",mode:"模拍",name:"街头斑马线 · 强对比",space:"斑马线／黄线街道",bgTone:"mid",warmth:"neutral",sat:"mid",density:"detail",light:"hard",bigSub:2,
 scene:"斑马线或路面黄线，街道车流虚化，对比强烈",
 lightTxt:"直射自然光，中高反差，颜色饱和，图案醒目",
 cam:"竖幅 3:4，正面全身居中，主体占 65%",
 styl:"撞色下装 + 白鞋，戒指或项链做手势焦点",
 act:"双手展示戒指或整理帽绳，站姿朝镜头正面",
 sell:"醒目印花／大字为绝对主角，配「MORE COLORS」色块条"},
{cat:"卫衣帽衫",mode:"模拍",name:"户外街道 · 暖光虚化",space:"户外街道暖光",bgTone:"mid",warmth:"warm",sat:"mid",density:"clean",light:"soft",bigSub:3,
 scene:"傍晚街道，暖光斑驳，背景大虚化只剩光斑",
 lightTxt:"柔散射暖光，光斑做氛围，服装暗部保留细节",
 cam:"竖幅 3:4，半身居中占 75%，手持帽子或手机",
 styl:"基础内搭，配饰克制，发型自然",
 act:"手持帽子或低头看手机，松弛日常",
 sell:"面料克重或内里绒特写，讲厚实与舒适"},
/* 卫衣帽衫 · 静物 */
{cat:"卫衣帽衫",mode:"静物",name:"纯白底 · 正背双角度",space:"纯白影棚",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"纯白无缝背景，正面与背面平铺并置或上下排布",
 lightTxt:"柔光高调、光比小，白底不过曝，深色不过黑",
 cam:"1:1 或 3:4，主体占 80–85%，正背同尺对齐",
 styl:"平铺，帽子摊平、抽绳对称、下摆平整",
 act:"——",
 sell:"正面小图标（火焰/加绒）+ 背面大字印花为视觉主角"},
{cat:"卫衣帽衫",mode:"静物",name:"灰色棚拍 · 放大印花",space:"灰色棚拍",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"中灰背景，单品平铺放大，印花或刺绣占满画面上半",
 lightTxt:"柔光均匀、低反差，织纹与印花清晰不发灰",
 cam:"1:1，上半身裁切放大，主体占 85%",
 styl:"平铺，袖口向两侧展开，帽兜立起",
 act:"——",
 sell:"刺绣/印花特写放大 + 一枚卖点标签"},
{cat:"卫衣帽衫",mode:"静物",name:"简化街头背景 · 挂拍",space:"简化街头背景挂拍",bgTone:"mid",warmth:"neutral",sat:"mid",density:"detail",light:"soft",bigSub:2,
 scene:"简化街头墙面作背景，单品挂拍，环境只做氛围",
 lightTxt:"自然柔光，墙面有轻纹理，主体曝光正常",
 cam:"竖幅 3:4，挂拍居中占 70%，版型完整",
 styl:"挂拍，帽兜自然下垂，袖口垂直",
 act:"——",
 sell:"街头感文案一句 + 版型说明，克制不堆信息"},
{cat:"卫衣帽衫",mode:"静物",name:"滑板耳机 · 道具场景",space:"道具场景（滑板/耳机）",bgTone:"mid",warmth:"neutral",sat:"mid",density:"detail",light:"soft",bigSub:2,
 scene:"浅色台面，配滑板、耳机等一两件潮流道具，讲生活方式",
 lightTxt:"柔和棚拍光，道具阴影轻，层次分明",
 cam:"1:1，单品居中占 70%，道具做前后景层次",
 styl:"平铺或半折叠，帽子翻起露内衬",
 act:"——",
 sell:"生活方式短句 + 面料图标，靠道具补足人设"},
{cat:"卫衣帽衫",mode:"静物",name:"深灰底 · 撞色平铺",space:"深灰背景平铺",bgTone:"dark",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"深灰背景平铺，浅色或亮色卫衣与背景形成强对比，印花更跳",
 lightTxt:"柔和棚拍光、背景压暗，主体单独提亮，边缘干净",
 cam:"1:1，主体居中占 80%，帽兜立起、抽绳对称",
 styl:"平铺，袖口向两侧展开，下摆平整",
 act:"——",
 sell:"撞色块 + 大印花为主角，配一枚面料图标"},
/* 长裤 · 模拍 */
{cat:"长裤",mode:"模拍",name:"都市街头 · 扶栏前倾",space:"街头栏杆",bgTone:"mid",warmth:"neutral",sat:"low",density:"detail",light:"soft",bigSub:2,
 scene:"街头栏杆或围挡前，城市背景虚化，语境明确",
 lightTxt:"户外自然光，中高反差，裤面水洗与褶皱肌理清楚",
 cam:"竖幅 3:4，腰胯以下为主、必要时全身，裤装占画面 60% 以上",
 styl:"白 T 或黑 T + 白鞋，项链/纹身克制点缀",
 act:"单手扶栏前倾，双腿一前一后，重心下沉",
 sell:"版型标签（阔腿/直筒）+ 口袋与走线特写"},
{cat:"长裤",mode:"模拍",name:"冷峻建筑墙 · 单腿搭墙",space:"混凝土建筑墙",bgTone:"mid",warmth:"cold",sat:"low",density:"clean",light:"hard",bigSub:3,
 scene:"冷峻混凝土墙与地面，几何线条干净，无杂物",
 lightTxt:"硬侧光，明暗分割清晰，裤面垂坠感被拉出",
 cam:"竖幅 3:4，腰胯以下或全身，裤装占 70%，双腿交叉构图",
 styl:"黑 T + 黑靴，膝上留白，突出裤型",
 act:"单腿搭墙、双腿交叉，一手插袋，姿态有态度",
 sell:"裤型廓形说明 + 侧缝与裤脚细节"},
{cat:"长裤",mode:"模拍",name:"极简棚拍 · 直角墙",space:"直角墙极简影棚",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅灰直角墙与地面，纯色无道具，裤型为绝对主角",
 lightTxt:"棚拍漫射柔光、光比小，曝光正常，水洗与褶皱干净可读",
 cam:"竖幅 3:4，腰胯以下特写或全身，裤装占 75%",
 styl:"白 T 或黑高领 + 白鞋，简洁利落",
 act:"正面站立、双腿微开，或坐金属椅插袋",
 sell:"面料与水洗说明短句，或「WARM」保暖标"},
{cat:"长裤",mode:"模拍",name:"城市广场 · 黄线高对比",space:"城市广场 / 路面黄线",bgTone:"light",warmth:"neutral",sat:"mid",density:"detail",light:"hard",bigSub:2,
 scene:"城市广场或街道黄线，红灰撞色环境，画面冲击强",
 lightTxt:"户外直射光，高反差，颜色浓，阴影硬",
 cam:"竖幅 3:4，裤装占满下半画面，主体占 70%",
 styl:"同色系上衣 + 撞色鞋，或印花上衣做对比",
 act:"站立微张腿，或大步行走抓拍",
 sell:"印花/大字 + 件数标（2PCS/3PCS）做促销记忆点"},
{cat:"长裤",mode:"模拍",name:"门廊台阶 · 生活化",space:"门廊台阶",bgTone:"mid",warmth:"warm",sat:"low",density:"detail",light:"soft",bigSub:3,
 scene:"建筑门廊或台阶，日系工装复古氛围，环境温和",
 lightTxt:"明亮日光、低反差，影子柔和，面料不刺眼",
 cam:"竖幅 3:4，全身或腰胯以下，主体占 65%",
 styl:"基础 T + 帆布鞋，随意插袋",
 act:"插袋站立、一脚踩台阶，姿态温和不张扬",
 sell:"百搭与舒适短句，靠生活场景自证日常可穿"},
/* 长裤 · 静物 */
{cat:"长裤",mode:"静物",name:"灰瓷砖地 · 居中平铺",space:"灰瓷砖地面",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅灰瓷砖地面，干净无杂物，裤身居中平铺",
 lightTxt:"偏亮柔光、影子轻，水洗与缝线清楚",
 cam:"竖幅 3:4，裤装占大半，腰头、口袋、裤脚全部完整",
 styl:"平铺，双腿自然微张，裤脚收口展开",
 act:"——",
 sell:"腰型/版型说明短句，靠廓形自证"},
{cat:"长裤",mode:"静物",name:"灰水泥地 · 微做旧",space:"灰水泥地面",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"微做旧水泥地面，质感克制，不抢裤身",
 lightTxt:"中等偏暗柔光，阴影轻，暗部细节仍可辨",
 cam:"竖幅 3:4，裤装居中偏上平铺，主体占 75%",
 styl:"平铺，一侧裤腿微卷露内衬，口袋打开",
 act:"——",
 sell:"内衬与口袋细节放大，讲工艺"},
{cat:"长裤",mode:"静物",name:"大理石台面 · 挂拍",space:"大理石墙或台面",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"大理石台面与浅墙，干净高级，克制的反光",
 lightTxt:"柔和棚拍光，石面有淡反光，裤身清晰",
 cam:"竖幅 3:4，裤装挂拍占 75–80%，腰头到裤脚完整",
 styl:"裤夹挂拍，两条裤腿平行下垂，中缝对齐",
 act:"——",
 sell:"金属扣/挂饰细节特写，突出设计点"},
{cat:"长裤",mode:"静物",name:"卷起特写 · 露绒里",space:"极简台面特写",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:2,
 scene:"极简台面，裤腿卷起或翻折，露出加绒内里",
 lightTxt:"柔光近距离，绒面质感蓬松可见，纹理不糊",
 cam:"1:1 近景特写，主体占 85%，卷边成为视觉焦点",
 styl:"卷起/翻折摆放，边缘整理利落",
 act:"——",
 sell:"火焰保暖标 + 「加绒内里」特写，功能最直白"},
{cat:"长裤",mode:"静物",name:"深灰底 · 对比挂拍",space:"深灰背景挂拍",bgTone:"dark",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"深灰或近黑背景，裤装挂拍，浅色裤身在暗背景上被压出来",
 lightTxt:"柔光控边、背景压暗，弱轮廓光勾出裤腿边缘，裤面不过曝",
 cam:"竖幅 3:4，裤装居中占 75%，腰头到裤脚完整，背景留窄边",
 styl:"裤夹挂拍，双腿平行，中缝与侧缝对齐",
 act:"——",
 sell:"高对比撞色感 + 版型短句，浅色款尤其适合压深底"},
/* 牛仔 · 模拍 */
{cat:"牛仔",mode:"模拍",name:"街头门廊 · 门头",space:"门廊与门头",bgTone:"mid",warmth:"neutral",sat:"low",density:"detail",light:"soft",bigSub:3,
 scene:"沿街门廊、门头与台阶，复古街头语境，背景略虚",
 lightTxt:"自然漫射偏侧光，光比柔和，水洗层次清楚",
 cam:"竖幅 3:4，腰胯以下或全身，裤装占 65–75%",
 styl:"白 T 或黑 T + 白鞋，墨镜与项链克制",
 act:"插袋站立或上台阶，重心自然",
 sell:"水洗/破洞/做旧细节特写，版型短句"},
{cat:"牛仔",mode:"模拍",name:"冷峻混凝土 · 极简建筑",space:"冷峻混凝土建筑",bgTone:"mid",warmth:"cold",sat:"low",density:"clean",light:"hard",bigSub:3,
 scene:"混凝土墙与几何线条，冷峻极简，无道具",
 lightTxt:"棚拍硬光偏正或硬侧光，光比中等，质感略粗粝",
 cam:"竖幅 3:4，腰胯以下特写，裤装占 80%",
 styl:"黑 T + 黑靴，腰线以上尽量简洁",
 act:"单腿搭墙或靠墙站立，双腿交叉",
 sell:"超宽廓形与垂坠堆叠说明，靠体量自证"},
{cat:"牛仔",mode:"模拍",name:"极简棚拍 · 直角墙",space:"直角墙影棚",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅灰直角墙，纯色无干扰，裤型为唯一主角",
 lightTxt:"棚拍漫射正面光、光比小、曝光偏亮，水洗干净",
 cam:"竖幅 3:4，腰胯以下或全身，裤装占 80%",
 styl:"白 T + 白鞋，或赤膊露腹强化裤型",
 act:"正面站立、双腿微张，或坐姿插袋",
 sell:"版型标签 + 后袋/侧扣特写"},
{cat:"牛仔",mode:"模拍",name:"户外街道 · 黄线撞色",space:"户外街道黄线",bgTone:"light",warmth:"neutral",sat:"mid",density:"detail",light:"hard",bigSub:2,
 scene:"街道黄线与建筑立面，红灰撞色，视觉冲击强",
 lightTxt:"户外直射、高反差，蓝牛仔与黄色形成互补",
 cam:"竖幅 3:4，下半身满屏，裤装占 80%",
 styl:"印花上衣 + 撞色鞋，街头张扬",
 act:"站立微张腿，或行走抓拍",
 sell:"印花大字 + 件数标，突出个性"},
/* 牛仔 · 静物 */
{cat:"牛仔",mode:"静物",name:"灰白渐变 · 挂拍",space:"灰白渐变背景",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"灰白渐变背景，裤装挂拍，背景干净无道具",
 lightTxt:"柔和均匀棚拍光，影子轻，水洗与刺绣清楚",
 cam:"竖幅 3:4，裤装占 75%，腰头到裤脚完整",
 styl:"挂拍，裤腿平行，后袋刺绣朝镜头",
 act:"——",
 sell:"刺绣/贴布细节放大，讲工艺"},
{cat:"牛仔",mode:"静物",name:"灰地白台面 · 正面平铺",space:"灰色背景 + 白台面",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"灰色纯背景，白色台面，裤装正面居中",
 lightTxt:"亮柔和、棚拍感强，影子轻，水洗清楚",
 cam:"竖幅 3:4，裤装居中占 80%，腰头与裤脚完整",
 styl:"平铺，双腿平行微张，口袋自然打开",
 act:"——",
 sell:"水洗渐变与阔腿版型说明"},
{cat:"牛仔",mode:"静物",name:"纯白底 · 多色并排",space:"纯白影棚",bgTone:"light",warmth:"neutral",sat:"mid",density:"clean",light:"soft",bigSub:3,
 scene:"纯白无缝背景，同版型多色并排陈列",
 lightTxt:"白底亮光均匀，各色都清楚不失真，影子轻",
 cam:"1:1 或 4:3，多条并排占中下部，腰到鞋完整",
 styl:"并排平铺或挂拍，间距一致，中间主推色略前",
 act:"——",
 sell:"「一款多色」色卡条 + 主推色标注"},
{cat:"牛仔",mode:"静物",name:"水泥地 · 做旧平铺",space:"水泥地面",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"水泥地面，微做旧纹理，克制不抢裤身",
 lightTxt:"偏暗柔和光，轮廓清楚，破洞与毛边可读",
 cam:"竖幅 3:4，裤装偏右下斜放，占 75%",
 styl:"平铺斜放，一侧裤腿翻折露破洞与内衬",
 act:"——",
 sell:"破洞/毛边/拼接细节特写，做旧工艺为主角"},
/* 毛衫针织 · 模拍 */
{cat:"毛衫 · 针织 · 开衫",mode:"模拍",name:"无影墙 · 直角墙棚拍",space:"无影墙／直角墙影棚",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"灰或暖米色无影墙、直角墙，纯色干净，只留服装",
 lightTxt:"亮而柔和的均匀棚拍光，影子轻，无过曝发白",
 cam:"竖幅 3:4，半身（可裁头）或全身，主体占 60–75%",
 styl:"白 T + 白裤基础内搭，或同色系套装；干净短发",
 act:"手部互动：拉链、扣合开衫、插兜，放大面料与工艺",
 sell:"「100% CASHMERE」或成分文字 + 织纹特写"},
{cat:"毛衫 · 针织 · 开衫",mode:"模拍",name:"户外街景 · 暖光",space:"户外街景",bgTone:"mid",warmth:"warm",sat:"mid",density:"detail",light:"soft",bigSub:2,
 scene:"街道或建筑前，暖光包裹，背景虚化有层次",
 lightTxt:"偏暖自然光，中等亮度，柔和不刺眼，针织纹路清楚",
 cam:"竖幅 3:4，半身居中偏右占 65%",
 styl:"基础内搭 + 长裤，手持帽或手机做道具",
 act:"手持帽子或手机，侧身站立，随性松弛",
 sell:"织纹与针法特写小图，讲手感"},
{cat:"毛衫 · 针织 · 开衫",mode:"模拍",name:"建筑入口 · 冬日通勤",space:"建筑入口与台阶",bgTone:"mid",warmth:"cold",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅色建筑入口与台阶，通勤语境，背景干净",
 lightTxt:"柔和自然光，冷调偏中性，阴影轻",
 cam:"竖幅 3:4，全身或半身，主体占 70%",
 styl:"高领内搭 + 直筒裤 + 皮鞋，利落通勤",
 act:"走下台阶或站立整理袖口",
 sell:"版型与领型说明，通勤场景词"},
{cat:"毛衫 · 针织 · 开衫",mode:"模拍",name:"居家客厅 · 暖木",space:"室内暖色起居空间",bgTone:"mid",warmth:"warm",sat:"mid",density:"detail",light:"soft",bigSub:2,
 scene:"暖木家具与织物的起居空间，生活气息，背景虚化",
 lightTxt:"偏暖柔光，阴影柔和，织物肌理与扣子清楚",
 cam:"竖幅 3:4，坐姿半身居中偏右，主体占 60%",
 styl:"基础内搭 + 休闲长裤，赤足或居家鞋",
 act:"坐姿插兜或手扶膝，姿态松弛",
 sell:"柔软度与居家场景短句"},
{cat:"毛衫 · 针织 · 开衫",mode:"模拍",name:"学院套装 · 街景",space:"学院风街景",bgTone:"mid",warmth:"neutral",sat:"low",density:"detail",light:"soft",bigSub:3,
 scene:"校园或老建筑街区，学院风语境，环境整洁",
 lightTxt:"自然日光，层次分明，配色统一",
 cam:"竖幅 3:4，全身居中，主体占 70%",
 styl:"衬衫 + 针织开衫 + 长裤的完整套装",
 act:"自然行走或站立，书或包做道具",
 sell:"套装搭配说明，卖整体而非单件"},
{cat:"毛衫 · 针织 · 开衫",mode:"模拍",name:"户外斑马线 · 醒目图案",space:"斑马线街道",bgTone:"light",warmth:"neutral",sat:"mid",density:"detail",light:"hard",bigSub:2,
 scene:"斑马线与浅色街区，直线条做背景，主角是图案",
 lightTxt:"自然直射光，对比强，图案颜色饱和",
 cam:"竖幅 3:4，正面全身居中占 65%",
 styl:"撞色下装 + 白鞋，配饰克制",
 act:"双手展示戒指或整理衣摆，正面朝镜头",
 sell:"「MORE COLORS」色块或多色并排"},
/* 毛衫针织 · 静物 */
{cat:"毛衫 · 针织 · 开衫",mode:"静物",name:"灰底 · 挂拍",space:"灰色背景挂拍",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅灰纯色背景，针织挂拍，肩线与下摆完整",
 lightTxt:"柔光均匀、低反差，针法纹理清晰不发糊",
 cam:"竖幅 3:4，主体居中占 75%，正面平视",
 styl:"木衣架挂拍，袖口自然下垂，扣子扣一半",
 act:"——",
 sell:"材质成分文字 + 织纹放大圆标"},
{cat:"毛衫 · 针织 · 开衫",mode:"静物",name:"暖木凳 · 平铺叠放",space:"暖色木凳台面",bgTone:"mid",warmth:"warm",sat:"mid",density:"detail",light:"soft",bigSub:2,
 scene:"暖木台面或木凳，单品平铺叠放，旁配一本书",
 lightTxt:"暖调自然光，织物起绒有层次，阴影轻",
 cam:"竖幅 3:4，主体居中偏上占 70%",
 styl:"平铺/折叠叠放，袖子交叠露出针法",
 act:"——",
 sell:"触感与厚度短句，秋冬质感为主"},
{cat:"毛衫 · 针织 · 开衫",mode:"静物",name:"3D 手持 · 组合陈列",space:"浅底组合陈列",bgTone:"light",warmth:"neutral",sat:"high",density:"clean",light:"hard",bigSub:3,
 scene:"浅色背景，单品组合陈列或以 3D 手持形式呈现，卖点分区",
 lightTxt:"棚拍清洁光，立体感强，边缘利落",
 cam:"1:1，主体居中占 70%，左侧或上方竖排图标区",
 styl:"组合或手持摆位，与其他配色并置",
 act:"——",
 sell:"左侧竖排 3 枚图标（材质／厚度／舒适）+ 一句卖点"},
{cat:"毛衫 · 针织 · 开衫",mode:"静物",name:"细节拼图 · 深色底",space:"深色背景拼图排版",bgTone:"dark",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:2,
 scene:"深色底，单件主图 + 3–4 张细节小图拼合，一图看全",
 lightTxt:"柔和棚拍光，主体明亮突出的同时细节图不暗",
 cam:"1:1 拼图，主图占 60%，细节格居侧",
 styl:"主图挂拍，细节图为领口、袖口、下摆、扣子",
 act:"——",
 sell:"细节拼图本身即卖点：走线、扣子、材质成分"}
,
/* 风衣大衣 · 模拍 */
{cat:"风衣大衣",mode:"模拍",name:"欧式石墙街角 · 晨雾",space:"老城石砌建筑街角",bgTone:"mid",warmth:"cold",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"老城石砌建筑转角，墙面有风化肌理与拱形门洞，地面湿润反光，远处街景虚化收干净",
 lightTxt:"清晨薄雾漫射光，冷调低光比，人物侧脸留柔和轮廓光，衣摆褶皱保留明暗层次",
 cam:"竖幅 3:4，正面平视略仰，人物占画面 3/4，下摆完整入画不裁断，腰带与开襟结构清晰可读",
 styl:"深色高领内搭 + 直筒西裤 + 皮质短靴，发型利落，可留干净短须",
 act:"正面站立、单手插袋、另一手自然垂落，翻领立起一半，表情冷静克制",
 sell:"靠挺括肩线与垂坠下摆自证版型，左上角一句「防风挺括 · 通勤可穿」短句，不加大图标"},
{cat:"风衣大衣",mode:"模拍",name:"鹅卵石巷 · 阴天纵深",space:"欧洲老城鹅卵石巷道",bgTone:"dark",warmth:"cold",sat:"low",density:"detail",light:"soft",bigSub:2,
 scene:"狭窄鹅卵石巷道向内延伸，两侧斑驳石墙与旧木门，尽头一处浅色光斑形成纵深引导",
 lightTxt:"阴天均匀散射光，无直射硬影，石墙深色压低，人物与浅色下摆形成明暗分离",
 cam:"竖幅 3:4，全身入画，人物居中偏左，巷道透视线收向人物身后",
 styl:"米色风衣 + 黑色针织内搭 + 深色长裤 + 切尔西靴，围巾可省",
 act:"迈步向前走，衣摆随步幅微扬，目光看向镜头外",
 sell:"以「中长款 · 过膝不拖沓」为卖点，右下角小字标注衣长与尺码建议"},
{cat:"风衣大衣",mode:"模拍",name:"极简混凝土门廊",space:"清水混凝土门廊",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"hard",bigSub:3,
 scene:"大面积清水混凝土墙面与方形门洞，几何分割干净，地面为同一材质的浅灰水泥",
 lightTxt:"午后硬光斜切，墙面出现清晰几何阴影，人物用柔光板补正面，避免面部死影",
 cam:"竖幅 3:4，中近景至全身，主体居中共 75%，门洞线条作为构图框架",
 styl:"黑色大衣 + 同色系高领 + 直筒裤，全身同色系，突出廓形",
 act:"倚靠门框站立，一手扶翻领，肩线放松，视线微侧",
 sell:"强调「廓形与肩线」，画面极简，仅保留右下角品牌小标"},
{cat:"风衣大衣",mode:"模拍",name:"金融区玻璃幕墙 · 都市冷调",space:"都市写字楼玻璃幕墙前",bgTone:"mid",warmth:"cold",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"写字楼玻璃幕墙反射冷蓝天光，人行道铺装整洁，背景行人与车辆全部虚化",
 lightTxt:"建筑反射的柔和冷光为主光，光比小，金属与纽扣保留细高光但不炸白",
 cam:"竖幅 3:4，正面平视，人物占 70%，头顶留少量幕墙结构",
 styl:"卡其风衣 + 白衬衫 + 深色西裤 + 皮鞋，商务通勤语境",
 act:"正面行走抓拍，一手提公文包，另一手自然摆动，步幅自然",
 sell:"「通勤抗皱 · 一衣三季」，右上角轻量图标，克制不抢人"},
{cat:"风衣大衣",mode:"模拍",name:"秋日林荫道 · 落叶暖调",space:"城市林荫大道",bgTone:"mid",warmth:"warm",sat:"mid",density:"detail",light:"soft",bigSub:2,
 scene:"两侧高大行道树，黄叶铺满人行道，午后阳光透过树冠形成斑驳光斑",
 lightTxt:"斑驳侧逆光，暖调，人物面部用反光板提亮，衣料在光斑下呈现明暗过渡",
 cam:"竖幅 3:4，略低机位仰拍拉长身形，全身入画，下摆与鞋底完整",
 styl:"驼色大衣 + 米白毛衣 + 深棕长裤 + 短靴，暖色系配色",
 act:"行走中回头，一手插袋，风衣下摆自然摆动",
 sell:"「羊毛混纺 · 垂坠不起球」，靠面料光泽与褶皱自然呈现，不加贴图"},
{cat:"风衣大衣",mode:"模拍",name:"雨夜街道 · 湿润反光",space:"雨后城市街道",bgTone:"dark",warmth:"cold",sat:"mid",density:"detail",light:"soft",bigSub:3,
 scene:"雨后柏油路面反射霓虹与路灯，远处车灯虚化成光斑，建筑立面暗部占大面积",
 lightTxt:"低照度环境光 + 暖色路灯补光，高光集中在湿地面与衣料涂层，暗部保留细节不死黑",
 cam:"竖幅 3:4，人物占 75%，正面略侧，地面反光带出下半身轮廓",
 styl:"黑色长款风衣 + 深灰高领 + 黑裤 + 皮质短靴",
 act:"撑伞站立或收伞行走，一手插袋，肩线放松，表情沉静",
 sell:"「防泼水 · 抗风」，用湿面反光与衣料拒水质感自证，文字极简"},
/* 风衣大衣 · 静物 */
{cat:"风衣大衣",mode:"静物",name:"白麻布墙 · 挂拍侧光",space:"白色影棚（麻布背景）",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"白麻布纹理背景前挂拍，衣身自然下垂，腰带松松系起，下摆距地面留白",
 lightTxt:"左上方大面积柔光，右侧弱补光，衣料褶皱过渡柔和，纽扣与缝线有细高光",
 cam:"竖幅 3:4，正面平视，主体占 78%，整件含下摆与袖口完整入画",
 styl:"单件悬挂，配同色系衣架，不出现多余道具",
 act:"——",
 sell:"左侧竖排小字标「中长款 / 双排扣 / 可拆腰带」，右下角面料成分标注"},
{cat:"风衣大衣",mode:"静物",name:"灰水泥地 · 人台立式",space:"灰色影棚（水泥地台）",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅灰水泥地台与同色背板，无接缝过渡，人台立式穿版，投影柔和落在地台",
 lightTxt:"顶部大面积柔光箱，前侧补光，地面出现淡投影，廓形边缘清晰不糊",
 cam:"竖幅 3:4，正面略侧 3/4 视角，主体占 75%，完整呈现肩线与下摆",
 styl:"无头人台，内搭同色高领打底，下配深色西裤与皮鞋",
 act:"——",
 sell:"右下角「肩宽 / 衣长 / 胸围」三行数据，克制不遮挡主体"},
{cat:"风衣大衣",mode:"静物",name:"木纹台面 · 折叠与腰带特写",space:"浅木纹台面",bgTone:"mid",warmth:"warm",sat:"low",density:"clean",light:"soft",bigSub:2,
 scene:"浅木纹台面上将大衣对折平摊，腰带盘成圈置于一侧，旁边放同色皮手套作为道具",
 lightTxt:"侧上方柔光，木纹与衣料质感清晰，折痕处有自然明暗，无直射硬影",
 cam:"1:1 方图，45 度俯拍，主体占 70%，道具占比不超过 15%",
 styl:"折叠平摊 + 腰带盘圈 + 皮手套点缀",
 act:"——",
 sell:"「双面呢工艺」小标 + 面料成分，靠折边断面与表面绒感自证质地"},
{cat:"风衣大衣",mode:"静物",name:"米色肌理墙 · 半身挂拍",space:"米色肌理墙影棚",bgTone:"light",warmth:"warm",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"米色肌理墙前挂拍半身，翻领立起展现领型，袖口自然垂下露出袖扣设计",
 lightTxt:"右侧柔光主光，左侧补光，墙面肌理与衣料形成同色系层次",
 cam:"竖幅 3:4，上半身至腰线，主体占 80%，翻领与肩线为焦点",
 styl:"单件挂拍，翻领立起，腰带垂落",
 act:"——",
 sell:"「翻领立起更挺括」细节标注，引出领型卖点"},
/* 短裤 · 模拍 */
{cat:"短裤",mode:"模拍",name:"海边木栈道 · 正午强光",space:"海滨木栈道",bgTone:"light",warmth:"warm",sat:"mid",density:"clean",light:"hard",bigSub:3,
 scene:"海边木栈道，远处海面高光闪烁与浅色天空，栈道木板纹理清晰，背景无杂物",
 lightTxt:"正午顶光偏硬，人物面部用反光板补，短裤布料在强光下呈现清晰褶皱与织纹",
 cam:"竖幅 3:4，从胸口下缘附近取景至鞋底，膝上长度完整可见，主体占 75%，脚部完整入画",
 styl:"白色短袖 T + 卡其短裤 + 白色运动鞋，配墨镜，色调清爽",
 act:"一手插袋、身体微侧站立，另一手自然垂落，重心落在单腿",
 sell:"「速干透气 · 五分长度」短句 + 小图标，靠裤型比例与垂顺感自证"},
{cat:"短裤",mode:"模拍",name:"城市街头 · 夏日斑马线",space:"城市路口斑马线",bgTone:"mid",warmth:"neutral",sat:"low",density:"detail",light:"hard",bigSub:2,
 scene:"城市路口斑马线与灰色路面，背景车流与建筑虚化，地面有浅色反光",
 lightTxt:"午后侧硬光，投影清晰拉长，短裤侧缝与口袋结构在明暗对比中可读",
 cam:"竖幅 3:4，从胸口下缘附近取景至鞋底，人物占 65%，保留地面投影作为构图元素",
 styl:"纯色 T 恤 + 黑色工装短裤 + 板鞋 + 中筒袜",
 act:"迈步过马路抓拍，手臂自然摆动，裤口随动作轻摆",
 sell:"「多口袋工装 · 宽松版型」，右下角小标标注裤长与腰围"},
{cat:"短裤",mode:"模拍",name:"水泥球场 · 午后运动",space:"户外水泥篮球场",bgTone:"mid",warmth:"neutral",sat:"mid",density:"detail",light:"hard",bigSub:3,
 scene:"户外水泥球场，地面有旧划线痕迹，背景篮板与铁丝网虚化",
 lightTxt:"午后强侧光，地面反光柔和，运动面料的高光与织物纹理清晰",
 cam:"竖幅 3:4，从胸口下缘附近至膝部重点呈现，主体占 70%，保留地面接触阴影",
 styl:"运动背心 + 网眼运动短裤 + 跑鞋，小腿肌肉线条自然",
 act:"做投篮动作或弯腰扶膝，动势中等，表情自然不夸张",
 sell:"「双层防走光 · 弹力速干」短句，靠网眼织纹与活动褶皱自证"},
{cat:"短裤",mode:"模拍",name:"度假泳池边 · 清爽蓝调",space:"度假酒店泳池边",bgTone:"light",warmth:"cold",sat:"mid",density:"clean",light:"soft",bigSub:2,
 scene:"泳池浅蓝水面与浅色地砖，背景棕榈叶与白色躺椅虚化，水光形成柔和反光",
 lightTxt:"晴天漫射光加水面反光补光，整体明亮通透，低对比通透感",
 cam:"竖幅 3:4，腰部至膝上取景，主体占 65%，脚部与地面完整",
 styl:"亚麻衬衫敞开 + 沙滩短裤 + 皮质凉鞋",
 act:"双手插袋站立，肩膀放松，视线看向远处",
 sell:"「轻量速干 · 度假日常两用」，用轻盈垂顺感自证，不加贴图"},
{cat:"短裤",mode:"模拍",name:"纯灰棚拍 · 版型演示",space:"灰色影棚",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"纯灰无缝背景与灰色地台，无任何环境道具，仅保留人物与投影",
 lightTxt:"左前上方柔光箱为主光，右侧补光，光比控制在 1:2，裤型褶皱层次清晰",
 cam:"竖幅 3:4，从胸口下缘附近至鞋底正面取景，主体占 78%，腰头到裤口完整入画",
 styl:"同色系简洁上衣束入腰头 + 白色运动鞋，突出裤型",
 act:"正面站立，双腿自然分开与肩同宽，一手插袋",
 sell:"左下角标注「腰围 / 裤长 / 腿围」三行数据，克制不抢主体"},
/* 短裤 · 静物 */
{cat:"短裤",mode:"静物",name:"纯白无缝 · 平铺立体",space:"纯白影棚",bgTone:"light",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"纯白无缝背景，短裤正面平铺并在腰头处人为做出立体起伏，裤口自然外扩",
 lightTxt:"顶部柔光箱 + 双侧面补光，白底纯白不偏色，布料织纹与缝线清晰",
 cam:"竖幅 3:4 或 1:1，45 度俯拍，主体占 75%，腰头与裤口完整",
 styl:"单件平铺，腰头略立起呈现立体，抽绳对称摆开",
 act:"——",
 sell:"右上角小标「面料 / 版型 / 尺码」，右下角放大袋口细节小图"},
{cat:"短裤",mode:"静物",name:"浅木地板 · 挂拍",space:"浅木地板影棚",bgTone:"light",warmth:"warm",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"浅色木地板与暖白墙面，短裤侧面挂拍，投影落在地面形成自然层次",
 lightTxt:"侧上方柔光，木地板出现柔和反光，裤型侧面轮廓与裤口开衩清晰",
 cam:"竖幅 3:4，侧面挂拍，主体占 72%，腰头至裤口完整",
 styl:"单件挂拍，腰头用夹子固定，裤口自然张开",
 act:"——",
 sell:"侧缝与裤口结构标注，引出「开衩设计 / 活动不受限」"},
{cat:"短裤",mode:"静物",name:"亚麻布平铺 · 度假道具",space:"米色亚麻布台面",bgTone:"light",warmth:"warm",sat:"mid",density:"detail",light:"soft",bigSub:2,
 scene:"米色亚麻布台面，短裤平铺，旁边搭配草编帽、墨镜与贝壳作为度假语境道具",
 lightTxt:"自然侧光模拟窗光，布面肌理与亚麻纹路清晰，柔和不硬",
 cam:"1:1 方图，俯拍，主体占 65%，道具分布在四角不压主体",
 styl:"平铺 + 草编帽 / 墨镜 / 贝壳点缀",
 act:"——",
 sell:"「度假系列」调性小标 + 速干说明，靠场景道具传递使用场景"},
{cat:"短裤",mode:"静物",name:"灰底展台 · 折角立体",space:"灰色影棚展台",bgTone:"mid",warmth:"neutral",sat:"low",density:"clean",light:"soft",bigSub:3,
 scene:"灰色展台上一件短裤侧折出立体三角，腰头立起，投影柔和落在台面",
 lightTxt:"左上柔光为主，右侧弱补，折角处有明暗过渡，面料厚度可见",
 cam:"1:1 方图，45 度俯拍，主体占 70%，折角结构为焦点",
 styl:"单件折角摆放，腰头立起，抽绳自然垂落",
 act:"——",
 sell:"折角处标注「面料厚度 / 内里结构」，右下角同色多色块并排"}
];

/* ---------- 场景诊断的候选场景：直接取自 Step 02 场景库 ---------- */
var DG_LEGACY_SCENES = DG_SCENES.slice();
var SCENE_TOK_FAM = {
  'T恤·POLO':['卫衣帽衫'], '衬衫':['卫衣帽衫'], '针织/毛衣':['毛衫 · 针织 · 开衫'],
  '夹克/外套':['夹克外套'], '卫衣/连帽':['卫衣帽衫'], '棉服/羽绒':['棉服羽绒'],
  '长裤':['长裤'], '短裤':['短裤'], '牛仔':['牛仔'], '工装/丹宁/加固工艺':['牛仔'],
  '套装':['风衣大衣'], '正装':['风衣大衣'], '传统服饰':['风衣大衣'],
  '泳装':['短裤'], '运动功能':['卫衣帽衫'],
  '运动套装/球衣/短裤':['卫衣帽衫','短裤'],
  '亚麻衬衫/短裤/泳装':['卫衣帽衫','短裤'],
  '防风/防泼水/防寒外套':['夹克外套'],
  '全品类（首选）':DG_CATS.slice(), '全品类（下摆 / 腹围）':DG_CATS.slice()
};
/* 静物模式可用的棚拍场景 */
var DG_STILL_IDS = ['minimal','back','fitdemo','woodwall','concrete','gradient','redcrate','textwall','poster'];

var FAM_STYL = {
  '棉服羽绒':'深色下装 + 同色内搭，靴子完整出镜，发型利落',
  '夹克外套':'深色直筒裤 + 素色内搭，鞋面干净，腰线不被外套压住',
  '卫衣帽衫':'直筒长裤 + 素色板鞋，配饰只留一处，避免抢画面',
  '长裤':'上装塞进腰头或短款收在腰线以上，鞋型清爽，裤口不遮鞋面',
  '牛仔':'同色系上下装 + 干净白鞋，卷边与洗水细节完整可见',
  '毛衫 · 针织 · 开衫':'浅色下装做明度对比，袖口与下摆纹理不被遮挡',
  '风衣大衣':'深色高领内搭 + 西裤，衣襟敞开露出层次，长度比例清晰',
  '短裤':'上装偏短或塞入腰头，露出完整膝上裤长，鞋袜干净'
};
var FAM_SELL = {
  '棉服羽绒':'蓬松度与绗缝线条是核心，靠体积感与领口厚度自证保暖',
  '夹克外套':'门襟、拉链与肩线结构是核心，靠轮廓清晰自证挺括',
  '卫衣帽衫':'面料克重与领口回弹是核心，靠褶皱的真实垂坠自证质感',
  '长裤':'裤线与裤长比例是核心，靠裤口与鞋面的关系自证版型',
  '牛仔':'洗水层次与五金细节是核心，靠侧缝与口袋走线自证工艺',
  '毛衫 · 针织 · 开衫':'针法与绒面质感是核心，靠贴身光影自证柔软度',
  '风衣大衣':'衣长与肩背轮廓是核心，靠下摆完整入画自证垂坠',
  '短裤':'裤长比例与裤口处理是核心，靠完整膝上长度自证版型'
};

function famsOfSceneCat(cat){
  var out=[], toks=String(cat||'').split('·');
  for(var i=0;i<toks.length;i++){
    var t=toks[i].replace(/\s+/g,'').replace(/／/g,'/');
    if(/全品类/.test(t)){ DG_CATS.forEach(function(f){ if(out.indexOf(f)<0) out.push(f); }); continue; }
    var hit=SCENE_TOK_FAM[t];
    if(!hit){ for(var k in SCENE_TOK_FAM){ if(t.indexOf(k.replace(/\s+/g,''))>-1||k.replace(/\s+/g,'').indexOf(t)>-1){ hit=SCENE_TOK_FAM[k]; break; } } }
    if(hit) hit.forEach(function(f){ if(out.indexOf(f)<0) out.push(f); });
  }
  return out;
}

function dgAttrsOf(s){
  var t = (s.lightZh||'')+' '+(s.sceneZh||'')+' '+(s.palZh||'')+' '+(s.moodZh||'')+' '+(s.bgZh||'')+' '+(s.floorZh||'');
  var light = /直射|晴天|强光|硬光|烈日|阳光下|强对比/.test(t) ? 'hard' : 'soft';
  var warmV = /冷调|冷色|阴天|雪|水泥|混凝土|金属|霓虹|雨|青灰|蓝灰/.test(t) ? 'cold' : '';
  if(!warmV && /暖调|暖色|黄昏|夕阳|金色|橙|木色|炉火|壁炉|烛|琥珀|暖光/.test(t)) warmV='warm';
  if(!warmV) warmV='neutral';
  var sat = /低饱和|极简|纯色|素色|莫兰迪|灰调|克制/.test(t) ? 'low' : (/鲜|艳|撞色|荧光|高饱和/.test(t) ? 'high' : 'mid');
  var density = /虚化|极简|纯净|无缝|干净|简洁|留白|素净/.test(t) ? 'clean' : 'detail';
  var tone = /深灰|玄|黑|夜|炭|暗调|低调|阴影重/.test(t) ? 'dark' : (/白墙|浅色|米|奶油|浅灰|雪|明亮|高键|亮白/.test(t) ? 'light' : 'mid');
  if(tone==='dark' && /浅|白|明亮/.test(s.bgZh||'')) tone='mid';
  var comp = s.compZh||'';
  var bigSub = /特写|近景|半身/.test(comp) ? 4 : (/远景|开阔|全身|环境/.test(comp) ? 2 : 3);
  return {light:light, warmth:warmV, sat:sat, density:density, bgTone:tone, bigSub:bigSub};
}

function dgSceneFromLib(s, fam, mode){
  var a = dgAttrsOf(s);
  var sceneTxt = [s.sceneZh, s.bgZh, s.floorZh].filter(function(x){ return x; }).join('，');
  var act = mode==='模拍'
    ? [s.sideZh, s.exprZh].filter(function(x){ return x; }).join('，') || '自然站立，视线平视镜头'
    : '——';
  var styl = mode==='模拍'
    ? ((FAM_STYL[fam]||'深色下装 + 素色内搭，妆发干净') + (s.palZh ? '；配色以 '+s.palZh+' 为基调' : ''))
    : ('平铺或挂拍摆位，服装整烫平整、口袋与下摆铺平' + (s.palZh ? '；背景与配色以 '+s.palZh+' 为基调' : ''));
  return {
    cat:fam, mode:mode, libId:s.id, id:s.id,
    name:s.zh,
    space:((s.sceneZh||s.zh||'').split(/[，,]/)[0]||s.zh),
    bgTone:a.bgTone, warmth:a.warmth, sat:a.sat, density:a.density, light:a.light, bigSub:a.bigSub,
    scene:sceneTxt || s.zh,
    lightTxt:s.lightZh || '柔和均匀的自然光，光比温和',
    cam:(s.compZh||'竖幅 3:4，主体居中') + (s.moodZh ? '；情绪为'+s.moodZh : ''),
    styl:styl, act:act,
    sell:FAM_SELL[fam] || '靠版型轮廓与面料质感自证品质'
  };
}

/* 用场景库重建诊断候选：每个族 × 模拍/静物 */
function buildDGScenesFromLib(){
  var out=[];
  SCENES.forEach(function(s){
    var fams = famsOfSceneCat(s.cat);
    fams.forEach(function(fam){
      out.push(dgSceneFromLib(s, fam, '模拍'));
    });
    if(DG_STILL_IDS.indexOf(s.id)>-1){
      fams.forEach(function(fam){ out.push(dgSceneFromLib(s, fam, '静物')); });
    }
  });
  /* 覆盖面兜底：某族某模式不足 3 个时，用原诊断场景补齐 */
  DG_CATS.forEach(function(fam){
    DG_MODES.forEach(function(mode){
      var have = out.filter(function(x){ return x.cat===fam && x.mode===mode; }).length;
      if(have < 3){
        DG_LEGACY_SCENES.filter(function(x){ return x.cat===fam && x.mode===mode; }).slice(0, 3-have).forEach(function(x){
          var c={}; for(var k in x) c[k]=x[k]; c.libId=''; out.push(c);
        });
      }
    });
  });
  return out;
}
DG_SCENES = buildDGScenesFromLib();

/* ==================== 5 维度达标线 ==================== */
var DG_STD = {
"棉服羽绒|模拍":[["视觉基调","高级克制、冬季保暖叙事，色相统一（黑/墨绿/浅灰）","色彩杂乱、廉价特效"],
  ["构图框型","竖幅3:4，大主体居中60–85%，毛领/领口为焦点不靠边","主体过小、裁断毛领或下摆"],
  ["场景","极简纯色棚拍 或 强叙事雪景/城市街道，二选一","中性杂乱背景、货架感"],
  ["搭配妆发","完整内搭+下装+鞋靴，利落短发、妆发干净","只拍上半身、内搭草率"],
  ["情绪动作","插兜/行走/拉领，冷峻沉静但不夸张","表情做作、动作僵硬"]],
"棉服羽绒|静物":[["视觉基调","极简高级或功能冲击，低饱和或高级亮面","水印过重、廉价特效"],
  ["构图框型","主体居中70–85%，竖幅或1:1","主体过小、道具抢戏"],
  ["场景","纯白/纯色渐变棚拍 或 道具场景（木纹、展台、合成雪山）","合成穿帮、货架感"],
  ["面料质感","开襟露内衬/抓绒/绗缝/亮面反光清晰可见","平铺立体感弱、质感糊掉"],
  ["卖点排版","火焰/温度/多色图标 + 一句文案，信息克制","信息过载、特效盖过产品"]],
"夹克外套|模拍":[["视觉基调","都市/街头/户外/机车硬朗，色相统一","色彩杂乱、促销廉价感"],
  ["构图框型","竖幅3:4，中近景大主体占65–80%，突出肩背廓形","主体过小、裁断设计点"],
  ["场景","强叙事场景：都市街角/欧式石墙/机车载具/混凝土墙","杂乱背景、合成穿帮"],
  ["搭配妆发","完整内搭+下装，内搭有层次，男模妆发利落","只拍上半身、妆发凌乱"],
  ["情绪动作","倚墙/拉领/行走/坐姿，克制有力量","表情夸张、过度摆拍"]],
"夹克外套|静物":[["视觉基调","机能/复古/潮流，色相统一","色彩杂乱、水印重"],
  ["构图框型","主体占60–80%，正面或双角度，细节图不抢主体","主体过小、构图松散"],
  ["场景","水泥/木地板/极简纯色/雪山岩石合成，四选一","合成生硬、背景过亮"],
  ["面料质感","皮革光泽、麂皮绒、格纹织法清晰","质感糊掉、反光炸白"],
  ["卖点排版","面料或版型图标 + 一句短句","信息堆叠、无任何卖点暗示"]],
"卫衣帽衫|模拍":[["视觉基调","街头/运动/功能/极简，第一眼有记忆点","平凡纯色、风格混杂"],
  ["构图框型","主体占60–70%，半身或全身，印花/帽口不裁","主体偏小、背景抢镜"],
  ["场景","纯色棚拍聚焦，或简化街头/雪景强化气质","背景杂乱、与服装融色"],
  ["搭配妆发","内搭基础 + 利落短发，配饰克制","搭配乱、妆发出戏"],
  ["情绪动作","动作服务卖点：拉帽口/掀衣摆/背对露印花","僵直站桩、动作无关"]],
"卫衣帽衫|静物":[["视觉基调","街头冷峻 + 冬季保暖双气质，黑麻灰藏青","颜色杂、无主题标签"],
  ["构图框型","主体占70–85%，正背双角度，不截断设计点","主体偏小、留白过多"],
  ["场景","灰底棚拍或简化街头，背景只做氛围","背景与服装抢戏"],
  ["摆放形式","平铺摊平、抽绳对称、帽兜立起","摆放随意、褶皱乱"],
  ["卖点排版","印花/刺绣放大 + 一件数或多色标签","无任何卖点暗示"]],
"长裤|模拍":[["视觉基调","以裤型为核心的强风格标签（机能/高级/街头）","无风格、裤型不突出"],
  ["构图框型","腰胯以下或全身竖幅，裤装占60–80%","主体偏小、裤腿被裁"],
  ["场景","街头/冷峻建筑/极简棚拍/门廊，场景服务气质","背景杂乱抢裤"],
  ["搭配妆发","白T/黑T+白鞋，配饰克制，突出裤型","搭配杂乱、妆发夸张"],
  ["情绪动作","行走/扶栏/坐姿插兜/搭墙，有态度","表情夸张、动作僵硬"]],
"长裤|静物":[["视觉基调","加绒保暖或百搭实用，低饱和","无功能主题、质感平淡"],
  ["构图框型","主体占60–75%，腰头与裤脚完整","主体偏小、细节被裁"],
  ["场景","白底/灰地/水泥/大理石，干净不抢","背景杂乱"],
  ["摆放形式","平铺/折叠/挂拍，裤型清楚","摆放乱、角度怪异"],
  ["卖点排版","绒内里可视 + 火焰标 + 多色并排","平铺直叙、无传达"]],
"牛仔|模拍":[["视觉基调","街头/机能/复古/极简，裤型为主要记忆点","无风格、平铺直叙"],
  ["构图框型","腰胯以下或全身，裤装占60–80%，放大廓形","主体偏小、裁断裤脚设计"],
  ["场景","街头门廊/冷峻建筑/极简棚拍/广场黄线","背景杂乱抢裤"],
  ["搭配妆发","白T黑T+白鞋，墨镜项链克制，靠身材带裤型","搭配杂乱抢裤"],
  ["情绪动作","行走/扶栏/坐姿插兜/搭墙，松弛自信或张扬","表情夸张、无张力"]],
"牛仔|静物":[["视觉基调","极简复古街头或轻工装，调性统一","风格混杂、廉价"],
  ["构图框型","裤占大半，腰头/口袋/裤脚尽量完整","主体偏小、裁断关键部位"],
  ["场景","灰瓷砖/水泥/大理石/纯白渐变，干净","店内杂物入镜"],
  ["摆放形式","平铺/挂拍/斜放，裤型自然清楚","摆得乱、角度怪异"],
  ["卖点排版","水洗/破洞/刺绣细节放大，多色并排","无任何卖点暗示"]],
"毛衫 · 针织 · 开衫|模拍":[["视觉基调","秋冬高质感，灰藏青米白低饱和，材质为主","颜色杂、平价感"],
  ["构图框型","主体占60–75%，半身可裁头，版型完整","主体偏小、版型截断"],
  ["场景","灰/暖色棚拍聚焦，或户外街景/建筑入口/居家","背景杂乱抢衣"],
  ["搭配妆发","白T+白裤基础内搭或学院套装，手部互动","搭配杂乱、妆发抢戏"],
  ["情绪动作","手部拉链/扣合/插兜，街头或居家松弛","表情夸张、过于促销"]],
"毛衫 · 针织 · 开衫|静物":[["视觉基调","材质质感为主，低饱和高级","无材质主题"],
  ["构图框型","主体占70%，挂拍或平铺，肩线完整","版型被裁、结构不清"],
  ["场景","灰底/暖木/浅色组合陈列台","背景杂乱、道具过度"],
  ["面料质感","针法织纹、起绒、扣子清晰可读","纹理糊掉、光线过平"],
  ["卖点排版","成分文字/织纹圆标/多色色块","无材质卖点表达"]],
"风衣大衣|模拍":[["视觉基调","克制高级的都市通勤叙事，黑/驼/炭灰等经典色相统一","色彩花哨、廉价电商感"],
  ["构图框型","竖幅3:4，全身或中近景，主体占65–80%，下摆与袖口完整不裁断","裁断下摆、衣长读不出"],
  ["场景","欧式石墙/老城巷道/混凝土门廊/玻璃幕墙/林荫道，强叙事且背景虚化收干净","背景杂乱抢衣、合成穿帮"],
  ["搭配妆发","高领内搭+直筒西裤+皮质短靴，发型利落，可留干净短须","只拍上半身、内搭草率、妆发出戏"],
  ["情绪动作","行走摆摆、立领插袋、倚墙回望，克制有力量，衣摆要有动势","僵直站桩、表情夸张"]],
"风衣大衣|静物":[["视觉基调","面料质感与廓形为主导，低饱和高级，不靠贴图卖点","水印重、色彩讨好式过饱和"],
  ["构图框型","主体占70–85%，挂拍/人台/平铺，肩线与下摆完整，腰带位置清楚","主体过小、裁断翻领或下摆"],
  ["场景","白麻布墙/浅灰水泥地台/木纹台面/米色肌理墙，干净有质感","背景杂乱、道具过度抢戏"],
  ["面料质感","羊毛呢绒感、双面呢折边、走线与纽扣细节清晰可读","质感糊掉、反光炸白、纹理丢失"],
  ["卖点排版","肩宽/衣长/胸围数据或面料成分一行小字，克制不遮主体","信息堆叠、大字压主体"]],
"短裤|模拍":[["视觉基调","夏日清爽或运动机能，白/卡其/黑为主，调性统一","色彩杂乱、度假与通勤混杂"],
  ["构图框型","竖幅3:4，从胸口下缘附近至鞋底取景，膝上裤长完整可见，主体占65–80%，脚部入画且上衣完整穿着","裁断裤口、裤长比例读不出"],
  ["场景","海边木栈道/城市街口/水泥球场/泳池边/纯灰棚拍，背景虚化收干净","背景杂乱抢裤、道具过度"],
  ["搭配妆发","简洁T恤或背心+跑鞋或凉鞋+中筒袜，配饰克制以突出裤型","搭配杂乱、上装抢戏"],
  ["情绪动作","迈步插袋、投篮扶膝、度假站立，动作服务裤型与活动量","僵直站桩、动作与品类无关"]],
"短裤|静物":[["视觉基调","清爽轻盈或功能实用，低饱和干净，突出面料轻薄","风格混杂、促销廉价感"],
  ["构图框型","主体占65–78%，平铺/挂拍/折角立体，腰头与裤口完整","主体过小、裤型塌陷读不出"],
  ["场景","纯白无缝/浅木地板/亚麻布台面/灰底展台，干净不抢","背景杂乱、道具压主体"],
  ["面料质感","织纹、抽绳、内里结构、袋口走线清晰可读","质感糊掉、光线过平无立体"],
  ["卖点排版","腰围/裤长/腿围数据或速干说明小字，多色并排","无卖点表达、信息堆叠"]]
};

/* ==================== 分析 ==================== */
function dgAnalyze(img){
  var W=520, h=Math.max(1,Math.round(img.naturalHeight*W/img.naturalWidth));
  var c=document.createElement('canvas'); c.width=W; c.height=h;
  var x=c.getContext('2d',{willReadFrequently:true});
  x.drawImage(img,0,0,W,h);
  var d=x.getImageData(0,0,W,h).data, N=W*h;
  var lum=new Float32Array(N), sat=new Float32Array(N), hue=new Float32Array(N);
  var sumL=0,sumS=0, hueBins=new Float32Array(12), satW=0;
  for(var i=0,p=0;i<N;i++,p+=4){
    var r=d[p]/255,g=d[p+1]/255,b=d[p+2]/255;
    var mx=Math.max(r,g,b), mn=Math.min(r,g,b), l=(mx+mn)/2;
    var s=mx===0?0:(mx-mn)/mx;
    lum[i]=l; sat[i]=s;
    var hu=0;
    if(mx!==mn){
      if(mx===r) hu=((g-b)/(mx-mn))%6; else if(mx===g) hu=(b-r)/(mx-mn)+2; else hu=(r-g)/(mx-mn)+4;
      hu*=60; if(hu<0)hu+=360;
    }
    hue[i]=hu;
    sumL+=l; sumS+=s;
    if(s>0.14){ hueBins[Math.floor(hu/30)%12]+=s; satW+=s; }
  }
  var meanL=sumL/N, meanS=sumS/N;
  var va=0; for(var i2=0;i2<N;i2++){var dd=lum[i2]-meanL; va+=dd*dd;}
  var stdL=Math.sqrt(va/N);
  // 边缘环采样（背景）
  var ring=0.09, rL=[],rS=[],rN=0;
  var x0=Math.floor(W*ring), x1=Math.floor(W*(1-ring)), y0=Math.floor(h*ring), y1=Math.floor(h*(1-ring));
  for(var yy=0;yy<h;yy++)for(var xx=0;xx<W;xx++){
    if(xx>=x0&&xx<x1&&yy>=y0&&yy<y1) continue;
    var idx=yy*W+xx; rL.push(lum[idx]); rS.push(sat[idx]); rN++;
  }
  rL.sort(function(a,b){return a-b;});
  var bgRing=rL[Math.floor(rN*0.5)];
  var bgRingSpread=Math.abs(rL[Math.floor(rN*0.9)]-rL[Math.floor(rN*0.1)]);
  var cw=Math.max(1,Math.floor(W*0.13)), chh=Math.max(1,Math.floor(h*0.10)), corn=[];
  var patches=[[0,0],[W-cw,0],[0,h-chh],[W-cw,h-chh]];
  for(var pc=0;pc<4;pc++){ var px0=patches[pc][0], py0=patches[pc][1];
    for(var py=py0;py<py0+chh&&py<h;py++){ for(var px=px0;px<px0+cw&&px<W;px++){ corn.push(lum[py*W+px]); } } }
  corn.sort(function(a,b){return a-b;});
  var bgL=corn[Math.floor(corn.length*0.5)], bgL10=corn[Math.floor(corn.length*0.1)], bgL90=corn[Math.floor(corn.length*0.9)];
  var bgSpread=Math.abs(bgL90-bgL10);
  // 主体占比
  var occ=0;
  for(var i3=0;i3<N;i3++){ if(Math.abs(lum[i3]-bgL)>0.075) occ++; }
  occ=occ/N;
  if(occ>0.94) occ=0.94;
  // 边缘密度
  var edge=0;
  for(var yy2=0;yy2<h-1;yy2+=1)for(var xx2=0;xx2<W-1;xx2+=1){
    var a=yy2*W+xx2, dv=Math.abs(lum[a]-lum[a+1])+Math.abs(lum[a]-lum[a+W]);
    if(dv>0.10) edge++;
  }
  edge=edge/(N);
  // 主体形状与纵向分布
  var minY=h,maxY=-1,minX=W,maxX=-1,cntS=0, rowc=new Float32Array(h), colc=new Float32Array(W);
  for(var yy4=0;yy4<h;yy4++){
    for(var xx4=0;xx4<W;xx4++){
      var id4=yy4*W+xx4;
      if(Math.abs(lum[id4]-bgL)>0.075){
        cntS++; rowc[yy4]++; colc[xx4]++;
        if(yy4<minY)minY=yy4; if(yy4>maxY)maxY=yy4;
        if(xx4<minX)minX=xx4; if(xx4>maxX)maxX=xx4;
      }
    }
  }
  var sbAspect=1, sbW=1, sbH=1, fill=0, rowSpan=0, colSpan=0, topMass=0, midMass=0, botMass=0, cy=0.5, rowVar=0;
  if(cntS>10){
    var bw=maxX-minX+1, bh=maxY-minY+1;
    sbAspect=bh/Math.max(bw,1); sbW=bw/W; sbH=bh/h; fill=cntS/Math.max(bw*bh,1);
    var rTh=W*0.02, cTh=h*0.02, rs=0, cs2=0, tot6=0, wsum=0, yy9;
    for(yy9=0;yy9<h;yy9++){ if(rowc[yy9]>rTh) rs++; tot6+=rowc[yy9]; wsum+=rowc[yy9]*yy9; }
    for(var xx9=0;xx9<W;xx9++){ if(colc[xx9]>cTh) cs2++; }
    rowSpan=rs/h; colSpan=cs2/W;
    var t3=Math.max(Math.floor(h/3),1), m1=0,m2=0,m3=0;
    for(yy9=0;yy9<h;yy9++){ if(yy9<t3) m1+=rowc[yy9]; else if(yy9<2*t3) m2+=rowc[yy9]; else m3+=rowc[yy9]; }
    tot6=Math.max(tot6,1);
    topMass=m1/tot6; midMass=m2/tot6; botMass=m3/tot6; cy=wsum/tot6/h;
    var nz=0, mu3=0, v3=0;
    for(yy9=0;yy9<h;yy9++){ if(rowc[yy9]>rTh){ mu3+=rowc[yy9]; nz++; } }
    mu3=mu3/Math.max(nz,1);
    for(yy9=0;yy9<h;yy9++){ if(rowc[yy9]>rTh) v3+=(rowc[yy9]-mu3)*(rowc[yy9]-mu3); }
    rowVar=Math.sqrt(v3/Math.max(nz,1))/Math.max(mu3,1);
  }
  // 高光
  var gloss=0;
  for(var i4=0;i4<N;i4++){ if(lum[i4]>0.94&&sat[i4]<0.13) gloss++; }
  gloss=gloss/N;
  // 色板
  var bins={};
  for(var i5=0;i5<N;i5+=3){
    if(Math.abs(lum[i5]-bgL)<0.06 && occ<0.9) continue;
    var p5=i5*4;
    var key=(d[p5]>>5)+'-'+(d[p5+1]>>5)+'-'+(d[p5+2]>>5);
    bins[key]=(bins[key]||0)+1;
  }
  var arr=Object.keys(bins).map(function(k){return {k:k,n:bins[k]};}).sort(function(a,b){return b.n-a.n;});
  var pal=[];
  for(var pk=0;pk<arr.length&&pal.length<5;pk++){
    var parts=arr[pk].k.split('-').map(Number);
    var rr=parts[0]*32+16, gg=parts[1]*32+16, bb=parts[2]*32+16;
    var hx='#'+((1<<24)+(rr<<16)+(gg<<8)+bb).toString(16).slice(1);
    var dup=false;
    for(var q=0;q<pal.length;q++){ if(Math.abs(pal[q].r-rr)+Math.abs(pal[q].g-gg)+Math.abs(pal[q].b-bb)<60) dup=true; }
    if(!dup) pal.push({r:rr,g:gg,b:bb,hex:hx});
  }
  // 主体亮度（非背景区）
  var sL=0,sN=0, sS=0;
  for(var i6=0;i6<N;i6++){ if(Math.abs(lum[i6]-bgL)>0.075){ sL+=lum[i6]; sS+=sat[i6]; sN++; } }
  var subjL=sN? sL/sN : meanL;
  var subjS=sN? sS/sN : meanS;
  // 色温：暖色相占比
  var warmW=0, coldW=0;
  for(var bi=0;bi<12;bi++){
    var deg=bi*30+15;
    if(deg>=0&&deg<70) warmW+=hueBins[bi];
    if(deg>=70&&deg<190) warmW+=hueBins[bi]*0.25;
    if(deg>=190&&deg<300) coldW+=hueBins[bi];
  }
  var warm= satW>0? warmW/(warmW+coldW+0.0001) : 0.5;
  // 肤色占比（判断是否人像）
  var skin=0;
  for(var i7=0;i7<N;i7++){
    if(hue[i7]>4&&hue[i7]<42&&sat[i7]>0.16&&sat[i7]<0.62&&lum[i7]>0.30&&lum[i7]<0.86) skin++;
  }
  skin=skin/N;
  return {
    bgRing:bgRing,bgRingSpread:bgRingSpread,
    w:img.naturalWidth,h:img.naturalHeight,ratio:img.naturalWidth/img.naturalHeight,
    meanL:meanL,meanS:meanS,stdL:stdL,subjL:subjL,subjS:subjS,
    bgL:bgL,bgSpread:bgSpread,occ:occ,edge:edge,gloss:gloss,pal:pal,warm:warm,skin:skin,
    sbAspect:sbAspect,sbW:sbW,sbH:sbH,fill:fill,rowSpan:rowSpan,colSpan:colSpan,
    topMass:topMass,midMass:midMass,botMass:botMass,cy:cy,rowVar:rowVar,
    hueBins:Array.prototype.slice.call(hueBins)
  };
}

/* ==================== 视图切换 ==================== */
function switchView(v, noScroll){
  document.querySelectorAll('.view').forEach(function(el){ el.classList.toggle('on', el.id==='view'+v.charAt(0).toUpperCase()+v.slice(1)); });
  document.querySelectorAll('.tb').forEach(function(b){ b.classList.toggle('on', b.dataset.view===v); });
  if(!noScroll) window.scrollTo({top:0,behavior:'smooth'});
  document.documentElement.setAttribute('data-view', v);
}
document.querySelectorAll('.tb').forEach(function(b){
  b.onclick=function(){ switchView(b.dataset.view); };
});
document.documentElement.setAttribute('data-view','diag');
/* ==================== 场景诊断（Step 01）逻辑层 ==================== */
var DG = (function(){

var D = {cat:'夹克外套', catId:'jacket', mode:'模拍', st:null, img:null, top:[], title:''};

function syncCategorySelection(id){
  if(!(CATS||[]).some(function(c){return c.id===id;})) return;
  D.catId=id;
  D.cat=catZhOf(id)||D.cat;
  S.category=id;
  var mainSelect=$('category');
  if(mainSelect) mainSelect.value=id;
  if(W) W.category=id;
}

/* 校准阈值：取自 144 张真实 Temu 男装主图的特征分位（p25 / p75） */
var CAL = {
  dark:0.29, light:0.48,          // 主体明度 p25 / p75（n=191 真实主图）
  satLow:0.14, satHigh:0.32,      // 主体饱和度 p25 / p75
  glossHi:0.110,                  // 亮面门槛 p75（牛仔/呢料几乎无高光，亮面皮衣才触发）
  edgeHi:0.107, edgeLo:0.046,     // 图案/结构密度 p75 / p25
  occLow:0.61, occHigh:0.82,      // 主体占比 p25 / p75
  warmHi:0.75, warmLo:0.30,       // 暖色倾向 p75 / p25（牛仔群集在 0.14，呢料群集在 0.83）
  whiteBg:0.90, whiteSpread:0.10  // 白底棚拍判定（角部采样）
};
function isStudioBg(st){ return st.bgL>CAL.whiteBg && st.bgSpread<CAL.whiteSpread; }

function $(id){ return document.getElementById(id); }
function pctn(v){ return (Math.round(v*1000)/10).toFixed(1); }
function esc2(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* ---------- 中性特征：未上传图片时按品类通用口径排序 ---------- */
function neutralSt(){
  return {w:1080,h:1440,ratio:0.75,meanL:0.62,meanS:0.18,stdL:0.14,
    subjL:0.48,subjS:0.18,bgL:0.86,bgSpread:0.10,occ:0.62,edge:0.055,gloss:0.10,
    warm:0.45,skin:0.02,sbAspect:1.40,sbW:0.58,sbH:0.80,fill:0.46,
    rowSpan:0.70,colSpan:0.55,topMass:0.30,midMass:0.34,botMass:0.36,cy:0.50,rowVar:0.22,
    hueBins:[0,0,0,0,0,0,0,0,0,0,0,0],
    pal:[{hex:'#efeeea'},{hex:'#c9c6bf'},{hex:'#8d8a84'},{hex:'#4a4844'},{hex:'#22211f'}]};
}

/* ---------- 打分：校准后的连续（软阈值）评分 ----------
   旧版用硬阈值加减分，144 张真实主图实测首选场景高度集中（同一场景吃下 57% 的样本），
   区分度不足。这里改成每维度先算 [0,1] 匹配度再加权，最终映射到 30–95 分。 */
function clamp01(v){ return v<0?0:(v>1?1:v); }
function band(v, lo, hi){ return clamp01((v-lo)/(hi-lo)); }

function scoreScene(sc, st){
  var why=[];
  // 光位权重随高光强度放大：越亮的材质，柔光/硬光的差别越致命
  var glossBand = band(st.gloss, CAL.glossHi, 0.41);
  var W = {tone:20, sat:12, light:10 + 18*glossBand, density:14, mass:11, warm:8, ctx:5};
  var sumW = 0, sumMax = 0;

  // 1) 影调：深色商品要浅底、浅色商品要深底
  var toneFit;
  if(sc.bgTone==='light'){
    toneFit = band(CAL.light - st.subjL, 0, CAL.light - CAL.dark);
    if(st.subjL > CAL.light) { toneFit = 0; why.push('主体偏浅，浅底拍浅色商品边界会丢失'); }
    else if(toneFit > 0.7) why.push('主体偏深（'+pctn(st.subjL*100)+'%），浅色背景把轮廓拉出来');
  }else if(sc.bgTone==='dark'){
    toneFit = band(st.subjL - CAL.dark, 0, CAL.light - CAL.dark);
    if(st.subjL < CAL.dark){ toneFit = 0; why.push('主体偏深又压深底，深色商品容易糊边'); }
    else if(toneFit > 0.7) why.push('主体偏浅（'+pctn(st.subjL*100)+'%），深一级背景让边缘清晰');
  }else{
    var mid = (CAL.dark + CAL.light) / 2;
    toneFit = 1 - clamp01(Math.abs(st.subjL - mid) / (CAL.light - CAL.dark));
  }
  sumW += toneFit * W.tone; sumMax += W.tone;

  // 2) 饱和度：素色商品给场景补色，高饱和商品给低饱和背景
  var satFit;
  if(sc.sat==='low'){
    satFit = 1 - band(st.subjS, CAL.satLow, CAL.satHigh);
    if(st.subjS > CAL.satHigh){ why.push('商品本身饱和度高，低饱和背景不抢主体'); }
  }else if(sc.sat==='high'){
    satFit = band(st.subjS, CAL.satLow, CAL.satHigh);
    if(st.subjS > CAL.satHigh) why.push('双方都高饱和，容易互相打架');
  }else{
    satFit = 0.5 + 0.5 * band(st.subjS, CAL.satLow, CAL.satHigh);
    if(st.subjS < CAL.satLow) why.push('商品是素色，场景色能补足画面记忆点');
  }
  sumW += satFit * W.sat; sumMax += W.sat;

  // 3) 光位：亮面材质吃柔光
  var lightFit;
  if(st.gloss > CAL.glossHi){
    lightFit = sc.light==='soft' ? 1 : 0.05;
    if(sc.light==='soft') why.push('高光占 '+pctn(st.gloss*100)+'%，亮面吃柔光，避免高光炸白');
    else why.push('硬光会让亮面出现死白高光');
  }else{
    lightFit = 0.85;
  }
  sumW += lightFit * W.light; sumMax += W.light;

  // 4) 背景密度：图案复杂要干净背景，画面素可上细节场景
  var densityFit;
  if(sc.density==='clean'){
    densityFit = 0.35 + 0.65 * band(st.edge, CAL.edgeLo, CAL.edgeHi);
    if(st.edge > CAL.edgeHi) why.push('边缘密度 '+pctn(st.edge*100)+'%，图案/结构复杂，干净背景让设计点可读');
  }else if(sc.density==='detail'){
    densityFit = 0.35 + 0.65 * (1 - band(st.edge, CAL.edgeLo, CAL.edgeHi));
    if(st.edge < CAL.edgeLo) why.push('画面本身很素，场景道具能补足故事感');
  }else{
    densityFit = 0.7;
  }
  sumW += densityFit * W.density; sumMax += W.density;

  // 5) 主体档位：主体小的图需要大主体居中构图
  var massFit;
  var mid2 = (CAL.occLow + CAL.occHigh) / 2;
  massFit = 1 - clamp01(Math.abs(st.occ - mid2) / 0.30);
  if(st.occ < CAL.occLow){
    massFit *= (sc.bigSub>=3 ? 1 : 0.55);
    why.push('主体只占 '+pctn(st.occ)+'%，需要大主体居中构图补足');
  }else if(st.occ > CAL.occHigh){
    massFit *= (sc.bigSub>=3 ? 0.85 : 1);
  }
  sumW += massFit * W.mass; sumMax += W.mass;

  // 6) 色温
  var warmFit;
  if(sc.warmth==='warm') warmFit = band(st.warm, CAL.warmLo, CAL.warmHi);
  else if(sc.warmth==='cold') warmFit = 1 - band(st.warm, CAL.warmLo, CAL.warmHi);
  else warmFit = 1 - clamp01(Math.abs(st.warm - (CAL.warmLo+CAL.warmHi)/2) / 0.40);
  if(sc.warmth==='warm' && st.warm > CAL.warmHi) why.push('暖调商品与暖调环境同源，色彩更顺');
  if(sc.warmth==='cold' && st.warm < CAL.warmLo) why.push('冷调商品与冷环境一致，色温不打架');
  sumW += warmFit * W.warm; sumMax += W.warm;

  // 7) 语境同源：原图是白底还是已有环境
  var ctxFit = 0.5;
  var studioBg = isStudioBg(st);
  var isStudioScene = (sc.space.indexOf('影棚')>=0 || sc.space.indexOf('背景')>=0);
  var isStreetScene = /街|城市|建筑|巷|墙|店|广场/.test(sc.space);
  if(studioBg && isStudioScene){ ctxFit = 1; }
  else if(!studioBg && isStreetScene){ ctxFit = 1; why.push('原图已有环境语境，与街景叙事同源'); }
  else if(studioBg && isStreetScene){ ctxFit = 0.25; }
  sumW += ctxFit * W.ctx; sumMax += W.ctx;

  var score = Math.round(30 + 65 * (sumW / Math.max(sumMax, 1e-6)));
  score = Math.max(14, Math.min(97, score));
  return {score:score, why:why.slice(0,3)};
}

function rankScenes(){
  var fam=famOf(D.catId, D.cat);
  var list=DG_SCENES.filter(function(s){return s.cat===fam&&s.mode===D.mode;});
  var st = D.st || neutralSt();
  return list.map(function(s){
    var r=scoreScene(s,st);
    return {s:s, score:r.score, why:r.why};
  }).sort(function(a,b){return b.score-a.score;});
}

function lvOf(sc){
  if(sc>=82) return ['强推荐','a'];
  if(sc>=70) return ['推荐',''];
  if(sc>=58) return ['可用',''];
  return ['备选',''];
}

/* ---------- 提示词 ---------- */
function sceneFamOfCat(){ return famOf(D.catId, D.cat); }
function buildPrompt(item){
  var s=item.s, st=D.st||neutralSt(), L=[];
  var fam=sceneFamOfCat();
  L.push('【品类与形态】男装 · '+D.cat+' · '+D.mode+'主图');
  L.push('【场景】'+s.scene);
  L.push('【光线】'+s.lightTxt);
  L.push('【机位与构图】'+s.cam+'；主体在画面中的占比与居中对齐，画面不出现无关道具');
  if(D.mode==='模拍'){
    if(fam==='长裤'||fam==='牛仔'||fam==='短裤'){
      L.push('【完整穿搭与裤装重点构图硬约束】模特始终完整穿着上衣、所选裤装与鞋，不得裸露躯干或省略衣物；从胸口下缘附近取景至鞋底，完整裤装占画面视觉主体约 2/3，上衣只作少量搭配参照，不露头脸、不抢主体；裤腰、裤裆、裤口与鞋履完整可读'+(fam==='短裤'?'，膝上裤长完整可见、裤口不得裁断':''));
    }else if(fam==='风衣大衣'){
      L.push('【完整穿搭硬约束】模特始终完整穿着所选外套、内搭、下装与鞋，不得裸露躯干或省略衣物；采用全身或中近景，外套下摆、袖口及衣长比例完整可读，不得裁断');
    }else{
      L.push('【完整穿搭与上装重点构图硬约束】模特始终完整穿着所选上衣、覆盖腰腹与腿部的下装及鞋，不得裸露躯干、腰腹或下身；从头顶取景至大腿中部，所选上衣占画面视觉主体约 2/3，下装在画面下方自然露出且不抢主体');
    }
    L.push('【模特与动作】'+s.styl+'；'+s.act);
  }else{
    L.push('【摆放与道具】'+s.styl+(s.act&&s.act!=='——'?'；'+s.act:''));
  }
  L.push('【卖点可视化】'+s.sell);
  L.push('【色彩与材质还原】忠实还原商品原本的颜色 '+(st.pal&&st.pal.length?st.pal.slice(0,3).map(function(p){return p.hex;}).join(' / '):'原色')+'，保持版型、口袋位置、缝线、纽扣与洗水层次不变');
  L.push('【负向】水印、二维码、促销大字、杂乱背景、货架感、模特面部变形、多余手指、商品结构改变、颜色失真、过度磨皮、明显 AI 涂抹感');
  return L.join('\n');
}

/* ---------- 初步分析：按原图特征推测品类 ---------- */
function guessCats(st){
  if(!st) return [];
  var a = st.sbAspect || 1.4;          // 主体外框 高/宽
  var w = (st.warm==null?0.45:st.warm); // 0 冷 / 1 暖
  var e = (st.edge==null?0.06:st.edge); // 结构/图案密度
  var g = (st.gloss==null?0.02:st.gloss);
  var f = (st.fill==null?0.45:st.fill); // 主体填充率
  var top = st.topMass||0.33, bot = st.botMass||0.33;
  var white = (st.bgL>0.90) && (st.bgSpread<0.10);
  var dark = (st.lum!=null) && st.lum<0.34;
  var list = [];
  function add(id,p,why){ list.push({id:id,p:p,why:why}); }

  if(a>=2.05){ add('pants', 58, '主体呈细长竖向、几乎占满画面高度，裤装特征最明显'); }
  if(a>=2.05 && w<0.32){ add('denim', 52, '细长形态叠加偏冷的蓝调，牛仔下装概率较高'); }
  if(a>=1.15 && a<1.95 && bot>top*1.12){ add('shorts', 44, '下半身占明显更大，短裤类版型更像'); }
  if(f>=0.55 && e>=0.088){ add('jacket', 46, '主体填满画面、分割线与结构边缘密集，属外套结构'); }
  if(f>=0.58 && w>0.55){ add('coat', 40, '大面积暖调 + 长线条轮廓，风衣 / 大衣类'); }
  if(dark && g>0.055){ add('leather', 34, '整体偏暗且有明显高光，疑似皮革或亮面材质'); }
  if(white && f<0.52){ add('tee', 42, '白底 + 主体占比偏小，更像平铺或挂拍的上装'); }
  if(e<0.070 && g<0.048){ add('knit', 38, '纹理密度低、几乎无镜面高光，针织 / 毛衣类特征'); }
  if(e>=0.085 && f>=0.40 && a<2.05){ add('hoodie', 36, '图案与结构密度偏高，卫衣 / 印花上装可能性较大'); }
  if(white && f<0.40 && a>=2.05){ add('overall', 32, '白底平铺且形态细长，可能为连体或背带类'); }

  if(!list.length){ add('jacket', 34, '原图特征中性，先按常规长袖上装处理'); }
  list.sort(function(x,y){ return y.p-x.p; });
  var seen={}, out=[];
  for(var i=0;i<list.length;i++){ if(!seen[list[i].id]){ seen[list[i].id]=1; out.push(list[i]); } }
  var top3 = out.slice(0,3), sum = 0;
  top3.forEach(function(x){ sum += x.p; });
  top3.forEach(function(x){ x.pct = Math.round(x.p/sum*100); });
  return top3;
}

function renderGuess(){
  if(!$('dgGuess')) return;
  var box=$('dgGuess'), tag=$('dgGuessTag');
  if(!box) return;
  if(!D.st){
    box.innerHTML = '<div class="dg-empty">上传商品图后，这里给出品类初步判断与依据。</div>';
    if(tag) tag.textContent = '上传后推测品类';
    return;
  }
  var g = guessCats(D.st);
  var cur = CATS.filter(function(c){return c.id===D.catId;})[0];
  if(tag) tag.textContent = '初步判断 · ' + (g[0] ? catZhOf(g[0].id) : '—');
  box.innerHTML = g.map(function(x){
    var zh = catZhOf(x.id) || x.id;
    var on = (x.id===D.catId);
    return '<div class="dgg-row"><div class="dgg-n"><b>'+esc2(zh)+'</b><i>'+esc2(x.why)+'</i></div>'+
      '<div class="dgg-bar"><span style="width:'+x.pct+'%"></span></div>'+
      '<div class="dgg-p">'+x.pct+'%</div>'+
      '<button type="button" class="dgg-take'+(on?' on':'')+'" data-gcat="'+x.id+'">'+(on?'已选':'采用')+'</button></div>';
  }).join('')+
  '<p class="dg3-note">仅依据画面明度、主体占比、边缘密度、光泽与色温推测，供参考；以实际商品为准。</p>';
  box.querySelectorAll('[data-gcat]').forEach(function(b){
    b.onclick=function(){
      var id=b.getAttribute('data-gcat');
      syncCategorySelection(id);
      renderChips(); refresh();
      if(typeof render==='function') render();
      if($('dgWiz') && $('dgWiz').classList.contains('on')){ try{ renderWizBody(); }catch(e){} }
    };
  });
}

/* ---------- 渲染：品类 / 模式 ---------- */
function renderChips(){
  var sel = $('dgCatSel');
  if(sel){
    sel.innerHTML = catOptionsHTML(D.catId || '');
    if(D.catId) sel.value = D.catId;
    var note=$('dgCatNote');
    if(note){
      var c0=CATS.filter(function(x){return x.id===D.catId;})[0];
      var fam=famOf(D.catId, D.cat);
      note.innerHTML = c0
        ? ('已选 <b>'+esc2(c0.zh)+'</b> · 场景库复用「'+esc2(fam)+'」口径，共 '+
           DG_SCENES.filter(function(x){return x.cat===fam&&x.mode===D.mode;}).length+' 套场景可用。')
        : '请选择商品品类。男装全类目已全部列出，直接选即可。';
      var mc=$('mergeCat'); if(mc) mc.textContent=(D.cat||'—')+' · '+D.mode;
    }
    sel.onchange=function(){
      syncCategorySelection(sel.value);
      renderChips(); refresh();
      if(typeof renderScenes==='function') renderScenes();
      if(typeof render==='function') render();
    };
  }
  var modeBox=$('dgMode');
  if(!modeBox) return;
  modeBox.innerHTML = DG_MODES.map(function(m){
    return '<button type="button" class="dg-chip'+(D.mode===m?' on':'')+'" data-mode="'+esc2(m)+'">'+esc2(m)+'</button>';
  }).join('');
  modeBox.querySelectorAll('.dg-chip').forEach(function(el){
    el.onclick=function(){ D.mode=el.dataset.mode; renderChips(); refresh(); };
  });
}

/* ---------- 渲染：指标 ---------- */
function renderMetrics(st){
  var rows=[
    ['画面尺寸', st.w+' × '+st.h, Math.min(1,st.ratio/2)],
    ['平均明度', pctn(st.meanL)+'%', st.meanL],
    ['主体明度', pctn(st.subjL)+'%', st.subjL],
    ['主体饱和', pctn(st.subjS)+'%', st.subjS],
    ['背景明度', pctn(st.bgL)+'%', st.bgL],
    ['主体占比', pctn(st.occ)+'%', st.occ],
    ['边缘密度', pctn(st.edge*100)+'%', Math.min(1,st.edge/0.14)],
    ['高光占比', pctn(st.gloss*100)+'%', Math.min(1,st.gloss/0.55)],
    ['暖色倾向', pctn(st.warm*100)+'%', st.warm],
    ['人像倾向', pctn(st.skin*100)+'%', Math.min(1,st.skin/0.40)]
  ];
  $('dgMetrics').innerHTML = rows.map(function(r){
    return '<div class="dg-mcell"><div class="k">'+r[0]+'</div><div class="v">'+r[1]+'</div>'+
      '<div class="dg-bar"><i style="width:'+Math.round(r[2]*100)+'%"></i></div></div>';
  }).join('');
  $('dgPal').innerHTML = (st.pal||[]).map(function(p){
    return '<span class="dg-sw" style="background:'+p.hex+'" title="'+p.hex+'"></span>';
  }).join('');
}

/* ---------- 渲染：结论 ---------- */
function toneWord(st){ return st.subjL<CAL.dark?'深色':(st.subjL>CAL.light?'浅色':'中间调'); }

function renderVerdict(st){
  var bits=[];
  var studioBg = isStudioBg(st);
  bits.push('这张图是<b>'+toneWord(st)+'</b>商品、主体占画面 <b>'+pctn(st.occ)+'%</b>'+
    (studioBg?'，背景接近纯白且干净，属于可直接换景的棚拍底图':'，原图已带环境语境'));
  if(st.edge>CAL.edgeHi) bits.push('边缘密度 '+pctn(st.edge*100)+'%（样本 p75 为 '+pctn(CAL.edgeHi*100)+'%），说明图案或结构细节多，背景必须做减法');
  else if(st.edge<CAL.edgeLo) bits.push('边缘密度仅 '+pctn(st.edge*100)+'%（低于样本 p25），画面很素，可以适当加道具与纵深补故事感');
  if(st.gloss>CAL.glossHi) bits.push('高光占 '+pctn(st.gloss*100)+'%（超过样本 p75），面料偏亮面，优先柔光场景，避开硬直射与镜面反射');
  if(st.occ<CAL.occLow) bits.push('主体占比 '+pctn(st.occ)+'%（低于样本 p25 的 '+pctn(CAL.occLow*100)+'%），提示词要强制「主体居中、占画面 70% 以上」');
  if(st.skin>0.012&&D.mode==='静物') bits.push('原图检出人像肤色（'+pctn(st.skin*100)+'%），可直接切到「模拍」取模特场景；若要保持静物口径，请确认生成时人物不进入画面');
  else if(st.skin<=0.012&&D.mode==='模拍') bits.push('原图未见人像，切「模拍」时模特体型与姿态需由提示词重新定义');
  else if(st.skin>0.05) bits.push('检出人像肤色，建议沿用人像叙事的场景，避免与静物棚拍混搭');
  var best = D.top && D.top.length ? D.top[0] : null;
  var tail = best ? '综合判定首选场景：<b>'+esc2(best.s.name)+'</b>（适配度 '+best.score+'）。' : '';
  $('dgVerdict').innerHTML = '<p>'+bits.join('；')+'。</p>'+tail;
  renderPeer(st);
}

/* ---------- 渲染：场景卡片 ---------- */

/* 与同类目真实主图的中位数对照：把校准数据用在你这一张图上 */
function renderPeer(st){
  var C = (typeof DG_CALIB!=='undefined') ? DG_CALIB : null;
  var el = $('dgPeer');
  if(!el) return;
  var fam = famOf(D.catId, D.cat);
  if(!C || !C.per || !C.per[fam]){ el.innerHTML=''; return; }
  var v = C.per[fam];
  var rows = [
    ['主体明度', st.subjL, v.subjL, '越深越需要浅底'],
    ['主体占比', st.occ,   v.occ,   '低于同类说明构图偏松'],
    ['边缘密度', st.edge,  v.edge,  '高于同类说明图案更碎'],
    ['高光占比', st.gloss, v.gloss, '高于同类说明更亮面']
  ];
  var html = '<div class="dg-peer"><div class="dg-peer-h">本品 vs '+esc2(D.cat)+' 真实样本（n='+v.n+'）</div>';
  rows.forEach(function(r){
    var me = r[1], ref = r[2], d = me - ref;
    var tag = Math.abs(d) < 0.02 ? '持平' : (d>0 ? '偏高' : '偏低');
    var cls = Math.abs(d) < 0.02 ? 'eq' : (d>0 ? 'up' : 'dn');
    html += '<div class="dg-peer-row"><span>'+r[0]+'</span>'+
      '<b>'+pctn(me)+'%</b><i class="'+cls+'">'+tag+' '+pctn(Math.abs(d))+'pct</i>'+
      '<em>同类中位 '+pctn(ref)+'%</em></div>';
  });
  html += '</div>';
  el.innerHTML = html;
}

function renderScenes(){
  var ranked = rankScenes();
  D.top = ranked;
  $('dgScCount').textContent = ranked.length+' 个候选 · '+D.cat+' / '+D.mode;
  var ssel=$('dgSceneSel');
  if(ssel){
    ssel.innerHTML = ranked.map(function(it,i){
      return '<option value="'+i+'">'+(i+1)+' · '+esc2(it.s.name)+' · '+it.score+' 分</option>';
    }).join('');
    ssel.onchange=function(){
      var i=+ssel.value, box=$('dgScenes'), card=box?box.children[i]:null;
      if(card){
        if(card.scrollIntoView) card.scrollIntoView({block:'nearest'});
        card.classList.add('flash');
        setTimeout(function(){ card.classList.remove('flash'); },1300);
      }
    };
    var cntEl=$('dgSceneCnt');
    if(cntEl) cntEl.textContent = '共 '+ranked.length+' 套';
  }
  if(!ranked.length){
    $('dgScenes').innerHTML = '<div class="dg-empty">该品类与拍摄模式暂未收录场景，请切换品类或模式。</div>';
    return;
  }
  $('dgScenes').innerHTML = ranked.map(function(it,i){
    var lv = lvOf(it.score);
    var why = (it.why||[]).slice(0,2).map(function(w){return '· '+esc2(w);}).join('<br/>');
    return '<article class="dg-sc'+(lv[1]==='a'?' top':'')+'">'+
      '<div class="dg-sc-h"><span class="dg-rank">'+(i+1)+'</span>'+
        '<div class="dg-sc-n"><b>'+esc2(it.s.name)+'</b><span>'+esc2(it.s.space)+'</span></div>'+
        '<div class="dg-sc-s"><b>'+it.score+'</b><span>'+lv[0]+'</span></div></div>'+
      '<div class="dg-sc-b"><p>'+esc2(it.s.scene)+'</p>'+
        (why?'<div class="dg-why">'+why+'</div>':'')+
        '<div class="dg-sc-meta"><span>光位 '+esc2(it.s.light)+'</span><span>背景 '+esc2(it.s.bgTone)+'</span>'+
        '<span>色温 '+esc2(it.s.warmth)+'</span><span>主体档位 '+it.s.bigSub+'</span></div>'+
        '<div class="dg-sc-act"><button type="button" class="dg-go" data-i="'+i+'">带入提示词生成 →</button>'+
        '<button type="button" class="dg-ghost" data-p="'+i+'">看场景提示词</button></div>'+
        '<pre class="dg-pre" id="dgPre'+i+'" hidden></pre></div></article>';
  }).join('');
  $('dgScenes').querySelectorAll('.dg-go').forEach(function(b){
    b.onclick=function(){ applyToGen(D.top[+b.dataset.i]); };
  });
  $('dgScenes').querySelectorAll('.dg-ghost').forEach(function(b){
    b.onclick=function(){
      var i=+b.dataset.p, pre=$('dgPre'+i);
      if(pre.hidden){ pre.textContent=buildPrompt(D.top[i]); pre.hidden=false; b.textContent='收起提示词'; }
      else { pre.hidden=true; b.textContent='看场景提示词'; }
    };
  });
}

/* ---------- 渲染：五维达标线 ---------- */

/* ---------- 46 个商品品类 × 2 模式的五维达标线 ---------- */
var STD_SPEC = {
  tee:['领口罗纹与下摆不得裁断，袖口完整入画','肩线落在肩峰，衣长过胯 3–5cm，胸围松量自然不显塌','纯棉平纹的透光与褶皱要真实，避免被磨平成纸片','浅灰或白底配同色下装，靠明度反差把轮廓托出来'],
  longtee:['袖口与下摆完整入画，袖子不得裁','衣长到臀下 5–8cm，垂坠自然不僵','中厚棉的垂坠感与肘部褶皱可读','低饱和背景，背景与主体明度差至少一档'],
  henley:['门襟纽扣数量与领口开合角度完整可见','门襟长度与肩宽比例协调，领口不塌','华夫格或罗纹的凹凸肌理清晰','浅灰或米色背景，暖中性光'],
  polo:['领型自然立起、门襟纽扣完整，领尖不得裁','领高 3–4cm，肩线利落，衣长过胯','珠地网眼凹凸质感与门襟压线','低饱和纯色背景，避免花色抢镜'],
  shirt:['领尖、门襟与袖口完整，袖口纽扣可见','肩线、胸围松量与下摆弧度协调','府绸或牛津纺的织纹与挺括度','浅灰、米白或浅蓝背景，中性色温'],
  linen:['袖口与下摆不裁，自然褶皱保留','宽松廓形不贴身，肩线略带落肩','亚麻的竹节与透气孔隙要看得见','米色或浅木色背景，暖中性光'],
  hoodie:['帽口、抽绳与口袋完整，不得裁断','帽深与肩宽比例协调，下摆罗纹收口','抓绒或毛圈的绒面厚度可读','灰底或简化街头背景，不与印花抢戏'],
  sweatshirt:['领口罗纹、袖口与下摆收口完整','衣长与袖长比例协调，落肩版型不垮','面料克重与下摆罗纹回弹','纯色棚拍为主，全图色盘不超过 3 色'],
  knit:['袖口与下摆罗纹完整，针脚不得裁','肩线随体、胸围松量合适，不起吊不空荡','针法（麻花 / 平针）与绒面质感清晰','浅色背景提亮，柔光避免绒面糊成一片'],
  cardigan:['门襟全开或半开可见，纽扣完整','衣长与开襟宽度协调，垂坠不僵','针织密度与门襟罗纹厚度','暖中性背景（木色 / 米色），色温偏暖'],
  jacket:['肩线、门襟拉链与袖口完整，设计点不裁','肩宽与胸围廓形挺括，衣长过胯','面料硬挺度、缝线与五金件清晰','都市或混凝土背景，与主体明度差 1–2 档'],
  bomber:['罗纹领口、袖口与下摆完整','短款衣长到腰线下 2–3cm，肩袖饱满','尼龙光泽或缎面反光可控，不死白','低饱和街头背景，避免高反光地面'],
  denimjacket:['门襟、口袋盖与袖口完整，洗水层次可见','肩线略落、衣长短于胯部','丹宁斜纹、黄线走线与做旧层次','浅色石墙或灰底，蓝色调还原准确'],
  leather:['拉链、肩章与袖口完整，皮面不被截断','肩线与袖笼立体，皮面不塌陷','皮面高光集中在小面积，避免大片死白','深色背景或深灰，允许用硬光控制轮廓'],
  coat:['下摆与袖口一律完整入画，衣长比例可读','衣长过膝或及膝，肩背廓形垂坠','呢面或斜纹的厚度与垂坠感','街头或极简背景，深色主体配浅底'],
  trench:['下摆、腰带与袖口不裁断','腰带系法、衣长过膝、翻领宽度清晰','防泼水斜纹的挺括与微光泽','阴天或混凝土背景，整图低饱和'],
  woolcoat:['下摆与袖口完整，长款不得裁','肩线立挺、衣长及膝，廓形不收腰','呢料绒面与克重厚度可读','浅灰背景，柔光避免深色吸光糊成一团'],
  puffer:['毛领、绗缝分段与下摆完整，蓬松轮廓不裁','充绒厚度与分段绗缝清晰，肩袖饱满','哑光或亮面的反光与压线走向','纯色棚拍或雪景，主体与背景反差明确'],
  downvest:['领口、袖笼与下摆完整，手臂不遮主体','马甲的横向绗缝与厚度一致','亮面或哑面尼龙的压线与光泽','深色内搭配浅底，全图色盘不超过 3 色'],
  vest:['袖笼、门襟与下摆完整','肩宽与衣长（到腰线）协调，版型不垮','功能面料的透气网与拉链细节','都市或运动场景，明度反差清晰'],
  sunprotect:['帽口、袖口与拉链完整','轻薄廓形不贴身，肩线自然','防晒面料的透光率与微光泽','明亮户外背景，但要避免整体过曝'],
  raincoat:['帽口、门襟压胶与袖口完整','三层压胶的硬挺廓形与肩背线条','防泼水哑光表面与压胶条细节','阴天或雨景，冷调背景更贴合功能叙事'],
  cycle:['袖口、下摆与反光条完整','骑行版型贴身但不勒，后背口袋可见','速干面料的微光与弹性褶皱','城市道路或灰底，整体冷调'],
  suit:['驳领、门襟与袖口纽扣完整，裤线不裁断','肩线、胸围与腰线剪裁立挺，不塌肩','精纺呢面的平整与克制的微光','极简棚拍或石墙背景，深色配浅底'],
  suitvest:['驳领、门襟纽扣与下摆完整','马甲长度到腰线，后背可调扣可见','呢面平整度与织纹方向','浅色背景，柔光配轻微侧光'],
  tuxedo:['缎面驳领、袖口与燕尾下摆完整','收腰剪裁与肩线清晰，燕尾弧度自然','缎面驳领的反光要压住，避免过曝','深色背景配轮廓光，避免主体吞边'],
  dressshirt:['领尖挺立、袖口与门襟完整','领围、肩线与胸围合体，不空不勒','高支棉的挺括与细腻织纹','白或浅灰背景，中性色温'],
  track:['上下装同框，裤口与袖口完整','上衣与裤子比例一致，裤长盖踝','速干面料的垂坠与织纹','运动场景或纯色棚拍，明亮基调'],
  workout:['上下装完整，连体腰线不裁','连体版型的腰线与活动余量充足','弹力面料的贴合度与回弹褶皱','浅色棚拍或运动空间，光比柔和'],
  compression:['领口、袖口与下摆完整','贴合肌肉的压缩感清晰，不出现淹模','紧身面料的高光控制与压线走向','深色背景，冷光勾勒轮廓'],
  swim:['裤腰与裤口完整，系带可见','裤长（膝上或及膝）与腰头弹力','速干面料的轻薄与微光泽','海边或纯色背景，明亮光、色盘清爽'],
  overall:['背带、胸扣与裤口完整，连体结构不裁','背带长度与腰线位置协调','丹宁或工装的斜纹与五金件','街头或石墙背景，暖中性光'],
  bibshorts:['背带与裤口完整，裤长可读','背带宽度与短裤长度比例协调','轻量面料的褶皱与织纹','明亮背景，暖光更贴合松弛感'],
  coverall:['门襟、袖口与裤口完整，连体全貌可读','一体式腰线与活动余量，不卡裆','厚织工装的硬挺与洗水痕迹','车间或车库场景，低饱和背景'],
  homewear:['领口、袖口与裤口完整','宽松松量，不贴身也不肥大','柔软面料的褶皱与绒感','居家场景（床品 / 窗光），暖中性光'],
  underwear:['领口、袖笼与下摆完整','贴身版型的合体度，不出现走光或变形','莫代尔或棉的细腻与弹性','纯色背景，柔光近距离拍摄'],
  sock:['袜口、袜尖与跟部完整，成对陈列','袜筒高度与罗纹回弹','针织罗纹密度与织物厚度','浅底微距，主体占画面 60% 以上'],
  denim:['裤腰、门襟与裤口完整，侧缝走线不得裁','腰线与臀围合体，裤长盖踝或及踝','丹宁斜纹、黄线走线与洗水层次清晰','石墙或水泥背景，蓝色还原准确、不偏紫'],
  jeans:['裤腰、门襟、裤口与后袋完整，裤脚不裁断','腰臀与腿型合体，裤长与堆叠量自然','水洗层次、猫须与破洞位置可读，不糊成一片','浅色或中灰背景，蓝色不偏绿不偏紫'],
  pants:['裤腰、门襟、裤口完整，裤线不裁','腰线与裤长（及踝或九分）比例可读，垂坠自然','西裤的平整度、压线走向与面料微光','极简棚拍为主，深色裤配浅底'],
  cargo:['侧袋、裤口与抽绳完整，立体口袋不裁','宽松廓形不臃肿，膝围与裤口收放清晰','斜纹布的厚度、织带与五金件细节','工装或混凝土背景，低饱和暖中性光'],
  jogger:['束脚口、侧袋与裤腰完整','锥形裤型上宽下收，脚口收束不堆','卫裤的绒面与罗纹脚口回弹','运动场景或纯色棚拍，色调清爽'],
  sweatpants:['裤腰抽绳、裤口与侧条完整','宽松直筒的垂坠与裤长盖踝','速干或抓绒的厚度与褶皱形态','明亮棚拍或运动空间，全图不超过 3 色'],
  shorts:['裤腰、裤口与侧袋完整，膝上裤长不得裁断','裤长比例（膝上 5–10cm）清晰，裤口平顺不翻卷','梭织或速干的轻薄度与垂坠','明亮背景，光比柔和'],
  denimshorts:['裤腰、裤口与后袋完整，卷边层次可见','裤长与裤口宽窄比例，毛边处理自然','丹宁斜纹、洗水与磨破位置清晰','浅色石墙或灰底，蓝色还原准确'],
  other:['领口、袖口与下摆完整','版型比例与垂坠自然','面料纹理与厚度可读','低饱和背景，色盘不超过 3 色']
};
var FAM_RANGE = {'卫衣帽衫':'60–75%','毛衫 · 针织 · 开衫':'65–80%','夹克外套':'65–80%','风衣大衣':'70–85%','棉服羽绒':'60–85%','长裤':'70–85%','牛仔':'70–85%','短裤':'70–85%'};
var FAM_VIEW = {'卫衣帽衫':'上半身重点构图至大腿中部，完整穿搭自然入画','毛衫 · 针织 · 开衫':'上半身重点构图，完整穿搭自然入画，袖口与下摆可读','夹克外套':'上半身重点构图，完整穿搭自然入画，肩线与门襟完整','风衣大衣':'全身或中近景，下摆与袖口不得裁断','棉服羽绒':'全身或中近景，蓬松轮廓与毛领完整','长裤':'胸口下缘附近至鞋底，裤装完整入画、上衣完整穿着作参照','牛仔':'胸口下缘附近至鞋底，裤装完整入画、侧缝与口袋走线可读','短裤':'胸口下缘附近至鞋底，膝上裤长完整、裤口不裁断'};
var FAM_LIGHT = {'卫衣帽衫':'均匀柔光，褶皱保留细节，避免平光把面料拍薄','毛衫 · 针织 · 开衫':'近距离柔光，避免硬光在绒面留死白','夹克外套':'柔光配侧向轮廓光，硬挺面料可用中硬光强调肩线','风衣大衣':'侧逆柔光强调垂坠，暗部保留细节','棉服羽绒':'柔光为主、弱轮廓光勾绗缝，硬光会把蓬松度压扁','长裤':'侧上方柔光，裤线投出细长阴影，避免正面平光','牛仔':'中硬侧光，斜纹与洗水层次才出得来','短裤':'明亮柔光，膝上区域不加厚重阴影'};

function buildStdCat(){
  var out={};
  CATS.forEach(function(c){
    var spec=STD_SPEC[c.id]; if(!spec) return;
    var fam=famOf(c.id, c.zh);
    var range=FAM_RANGE[fam]||'65–80%';
    var view=FAM_VIEW[fam]||'全身或中近景，关键设计点不裁断';
    var light=FAM_LIGHT[fam]||'柔光为主，光比温和';
    out[c.id+'|模拍']=[
      ['构图框型','竖幅 3:4，主体居中占 '+range+'，头顶留 5–8% 空间，左右留白对称','主体过小、头顶挤压、构图歪斜'],
      ['取景边界',spec[0]+'；'+view+'，'+c.zh+'的关键设计点一个都不能裁','裁断设计点、边缘贴框'],
      ['版型与比例',spec[1],'版型被拉宽或压扁、比例失真'],
      ['面料与光位',spec[2]+'；'+light,'质感被磨平、反光炸白或发灰'],
      ['背景与配色',spec[3]+'；背景明度与主体至少差一档，全图色盘不超过 3 色','背景与服装融色、色盘过杂']
    ];
    out[c.id+'|静物']=[
      ['构图框型','竖幅或 1:1，主体居中占 70–85%，正面与背面各出一张','主体偏小、留白过多'],
      ['结构展示',spec[0]+'；平铺时左右对称展开，折叠线不得压住结构判断','结构被遮挡、折叠压住设计点'],
      ['版型与比例',spec[1]+'；平铺前整烫，表面无死褶','死褶遮版型、下摆歪斜'],
      ['面料与质感',spec[2]+'；另出一张微距对准关键工艺（走线 / 五金 / 织纹）','质感糊掉、色差明显'],
      ['背景与卖点',spec[3]+'；卖点只留一处图标 + 一句短句，不压主体','信息堆叠、水印过重']
    ];
  });
  return out;
}
var DG_STD_CAT = buildStdCat();

function renderStd(){
  if(!$('dgStd')) return;
  var fam = famOf(D.catId, D.cat);
  var rows = (DG_STD_CAT && DG_STD_CAT[D.catId+'|'+D.mode]) || DG_STD[fam+'|'+D.mode] || null;
  if(!rows){
    $('dgStd').innerHTML = '<div class="dg-empty">该品类与模式的达标线暂无收录。</div>';
    $('dgStdTitle').textContent = D.cat+' · '+D.mode;
    return;
  }
  $('dgStdTitle').textContent = D.cat+' · '+D.mode+' · 5 维';
  $('dgStd').innerHTML = '<div class="dgstd-scroll"><table class="dg-table"><thead><tr><th>达标维度</th><th>达标线（照此执行）</th><th>常见扣分</th></tr></thead><tbody>'+
    rows.map(function(r){
      return '<tr><td>'+esc2(r[0])+'</td><td>'+esc2(r[1])+'</td><td class="neg">'+esc2(r[2])+'</td></tr>';
    }).join('')+'</tbody></table></div>';
}

/* ---------- 渲染：风险提示 ---------- */
function renderRisks(st){
  var out=[];
  if(isStudioBg(st)&&st.subjL>0.60) out.push('商品与背景都是高亮区，抠图或叠景容易丢边，建议先做一级压暗再加背景。');
  if(st.occ<CAL.occLow) out.push('主体只占 '+pctn(st.occ)+'%，提示词里务必写清「主体居中、占画面 70% 以上」，否则模型容易把衣服缩小。');
  if(st.edge>CAL.edgeHi) out.push('图案密度偏高，叠加复杂背景后设计点会读不清，优先用干净背景 + 局部特写。');
  if(st.gloss>CAL.glossHi) out.push('亮面高光明显，避免强直射与镜面反射场景，否则会出现大片死白。');
  if(st.w<800) out.push('原图宽度仅 '+st.w+'px，生成前建议换更大尺寸的原图，否则细节（走线、五金）无法被还原。');
  if(st.ratio<0.92) out.push('原图为竖幅，可直接对应 3:4 竖版主图；若要 1:1 需预留上下裁切余量。');
  out.push('生成后逐项核对：版型比例、口袋位置、拉链/纽扣数量、洗水与印花文字——AI 最容易在这四处走样。');
  if(isStudioBg(st)) out.push('白底图换场景时，务必让生成图保留原商品的投影方向与接触阴影，否则会有「贴上去」的假感。');
  out.push('同一件商品的多张图请固定同一模特与同一光位，避免详情页出现「换人换光」的割裂感。');
  $('dgRisks').innerHTML = out.map(function(t){return '<div class="dg-risk">'+esc2(t)+'</div>';}).join('');
}


/* ---------- 刷新 ---------- */
function refresh(){
  renderScenes();
}

/* ---------- 上传 ---------- */
function loadFile(f){
  if(!f||!/^image\//.test(f.type)) return;
  var fr=new FileReader();
  fr.onload=function(e){
    var img=new Image();
    img.onload=function(){
      D.img=img;
      D.st=dgAnalyze(img);
      $('dgImg').src=img.src;
      $('dgPrev').classList.add('on');
      $('dgDrop').classList.add('mini');
      $('dgFileName').textContent=f.name+' · '+D.st.w+'×'+D.st.h;
      try{
        var gs=guessCats(D.st);
        if(gs && gs.length){
          syncCategorySelection(gs[0].id);
          var au=$('dgCatAuto');
          if(au){
            au.hidden=false; au.className='dg-auto';
            au.innerHTML='<b>商品品类已按图片自动匹配：'+esc2(D.cat)+'</b> · 置信 '+gs[0].pct+'%，依据画面形态、面料与色温。如匹配不准，请在上方下拉中手动修改。';
          }
          renderChips();
        }
      }catch(e){}
      refresh();
      if(typeof render==='function') render();
      /* 解析完成即自动弹出四步定稿，让用户逐屏确认或修改 */
      if(!window.__dgWizAuto){ window.__dgWizAuto=1; setTimeout(function(){ try{ openWiz(); }catch(e){} }, 420); }
    };
    img.src=e.target.result;
  };
  fr.readAsDataURL(f);
}

/* ---------- 带入 Step 02 ---------- */
function applyToGen(item){
  if(!item) return;
  var s=item.s;
  var desc = s.scene + '，' + s.lightTxt + '，构图要求为' + s.cam +
    '，' + (D.mode==='模拍' ? ('模特造型为'+s.styl+'，动作与姿态为'+s.act) : ('摆放与道具为'+s.styl+(s.act&&s.act!=='——'?'，'+s.act:''))) +
    '，画面需让卖点可读：' + s.sell;
  try{
    var libId = s.libId || s.id || '';
    var found=null;
    for(var i=0;i<SCENES.length;i++){ if(SCENES[i].id===libId){ found=SCENES[i]; break; } }
    if(!found){
      found=null;
    }
    if(found && D.mode==='静物') found.rg='场景库 · 静物模式';
  }catch(err){}

  S.scene = (item && (item.s.libId||item.s.id)) || S.scene;
  S.category = D.catId || S.category;
  S.ratio='3:4';
  S.imageType = (D.mode==='模拍') ? 'model' : 'main';
  S.tasks = [D.mode==='模拍' ? 'model' : 'still'];
  S.crop='auto';
  try{ initStatic(); render(); }catch(err){}
  switchView('gen', true);
  var el=$('prompt');
  if(el){ var y=el.getBoundingClientRect().top+window.pageYOffset-120; window.scrollTo({top:y,behavior:'smooth'}); }
  if(typeof toast==='function') toast('已带入：'+D.cat+' · '+D.mode+' · '+s.name);
}


/* ==================== 四步定稿流程（商品与任务 → 区域与裔群 → 场景库 → 一致性与输出） ==================== */
var WIZ_STEPS = [
  {t:'商品与任务',     d:'定这次要出什么图、交给谁看'},
  {t:'区域与裔群档案', d:'定市场、人种与体型档位'},
  {t:'场景库',         d:'从诊断排序里挑定一个场景'},
  {t:'一致性与输出控制',d:'定多图一致项与输出规格'}
];

var W = null;

function newW(){
  var st = D.st || neutralSt();
  var genCat = S.category || D.catId || 'jacket';
  var warm = st.warm;
  // 区域：按原图色温与场景叙事推定（暖调偏拉美/中东，冷调偏欧区/日韩）
  var region = 'us';
  if(warm >= 0.66) region = 'lat';
  else if(warm <= 0.26) region = 'jk';
  else if(warm >= 0.52 && (D.cat==='风衣大衣'||D.cat==='棉服羽绒')) region = 'me';
  else if(D.cat==='风衣大衣'||D.cat==='长裤') region = 'eu';
  var ethList = (typeof ETH!=='undefined'? ETH : []).filter(function(e){ return e.region===region; });
  var eth = ethList.length ? ethList[0].id : 'us-latino';
  if(region==='us' && ethList.some(function(e){return e.id==='us-latino';})) eth='us-latino';
  // 旧预设与诊断流程统一映射到两种展示方式。
  var tasks = typeof normalizeTaskSelection==='function'
    ? normalizeTaskSelection(S.tasks,S.imageType)
    : [D.mode==='模拍'?'model':'still'];
  var imgType = tasks[0]==='model' ? 'model' : 'main';
  // 基调：跟场景语境走
  var tone = 'street';
  var scn = (D.top && D.top.length) ? D.top[0].s : null;
  if(scn){
    var sp = scn.space||'', nm = scn.name||'';
    if(/户外|山|林|营地|徒步|雪/.test(sp+nm)) tone='outdoor';
    else if(/球|运动|健身房|跑道/.test(sp+nm)) tone='sport';
    else if(/影棚|背景|纯色|极简/.test(sp+nm)) tone='clean';
    else if(/海|度假|沙滩|泳池/.test(sp+nm)) tone='resort';
  }
  return {
    step:0,
    category:genCat, imageType:imgType, tasks:tasks, ratio:'3:4', styling:'full', tone:tone,
    region:region, eth:eth, buildMode:'plus', build:'T3', age:'adult',
    stance:'P1', crop:'auto',
    sceneIdx:0,
    locks:{model:true, light:true, palette:true, camera:false},
    variants:1, badges:false, extra:(S.extra||'')
  };
}

function optList(arr, cur){
  return arr.map(function(x){
    return '<option value="'+x.id+'"'+(x.id===cur?' selected':'')+'>'+esc2(x.zh||x.en||x.id)+'</option>';
  }).join('');
}
function fieldRow(label, note, inner){
  return '<div class="dgw-f"><div class="dgw-fh"><b>'+esc2(label)+'</b>'+(note?'<span>'+esc2(note)+'</span>':'')+'</div>'+inner+'</div>';
}

function regZh(id){ var r=(REGIONS||[]).filter(function(x){return x.id===id;})[0]; return r?r.zh:id; }
function ethObj(id){ return (ETH||[]).filter(function(x){return x.id===id;})[0]; }

function renderWizSteps(){
  $('dgWizSteps').innerHTML = WIZ_STEPS.map(function(s,i){
    var cls = i===W.step ? 'on' : (i<W.step ? 'done' : '');
    return '<div class="dgw-s '+cls+'"><i>'+(i+1)+'</i><b>'+esc2(s.t)+'</b><span>'+esc2(s.d)+'</span></div>';
  }).join('');
}

var WIZ_HINT3 = '主页面「场景库」区块有更多场景可选，这里只列出按你的品类的诊断排序结果。';

/* 弹窗裔群档案：悬停出人模样张（与主页面同一套图） */
function bindWizEthPV(){
  var grid = document.querySelector('#dgWizBody .dgw-ethgrid');
  if(!grid || !W) return;
  var showFor = function(el, id){
    var e = ethObj(id); if(!e) return;
    var set = (ETH_IMG && ETH_IMG[id]) || {};
    var plus = W.buildMode === 'plus';
    var tk = plus && set[W.build] ? W.build : 'T3';
    var tr = (TIERS||[]).filter(function(x){return x.id===tk;})[0];
    var a = set[tk] || '', b = (ETH_AVG && ETH_AVG[id]) || '';
    if(!a && !b) return;
    showTip(el,
      '<div class="ot-h"><b>'+esc2(e.zh)+'</b><i>'+esc2(e.en||'')+'</i></div>'+
      '<div class="ot-fig" style="gap:10px">'+
        (a?'<div class="ot-photo" style="width:150px"><img src="'+a+'" alt=""><div class="ot-tag">大码 '+(plus&&tr?tr.size:'2XL–3XL')+'</div></div>':'')+
        (b?'<div class="ot-photo" style="width:150px"><img src="'+b+'" alt=""><div class="ot-tag">常规体型 · 匀称普通型</div></div>':'')+
      '</div>'+
      '<div class="lg">'+esc2(e.full||e.zh)+'<br/><span class="ot-tag">仅展示，非实际图片</span></div>');
  };
  [].forEach.call(grid.querySelectorAll('[data-ethw]'), function(el){
    var id = el.getAttribute('data-ethw');
    el.addEventListener('mouseenter', function(){ showFor(el, id); });
    el.addEventListener('focus', function(){ showFor(el, id); });
    el.addEventListener('mouseleave', hideTip);
    el.addEventListener('blur', hideTip);
  });
}

function renderWizBody(){
  CUR_BUILD = (W && W.buildMode==='plus') ? 'plus' : 'std';
  var body=$('dgWizBody'), st=D.st||neutralSt();

  if(W.step===0){
    var taskHtml = '<div class="dgw-chips">'+(typeof TASKS!=='undefined'?TASKS:[]).map(function(t){
      var on = W.tasks.indexOf(t.id)>=0;
      return '<button type="button" class="dgw-chip'+(on?' on':'')+'" data-task="'+t.id+'">'+esc2(t.zh)+'</button>';
    }).join('')+'</div>';
    var ratioHtml = '<div class="dgw-chips">'+['1:1','4:5','3:4','16:9'].map(function(r){
      return '<button type="button" class="dgw-chip'+(W.ratio===r?' on':'')+'" data-ratio="'+r+'">'+r+'</button>';
    }).join('')+'</div>';
    body.innerHTML =
      fieldRow('商品品类 · CATEGORY','男装全类目 · 直接选，不做映射','<select class="dgw-sel" data-sel="category">'+catOptionsHTML(W.category)+'</select>')+
      fieldRow('图片类型','这张图要承担什么角色','<select class="dgw-sel" data-sel="imageType">'+optList(IMAGE_TYPES,W.imageType)+'</select>')+
      fieldRow('画幅','主图统一走竖图','<div class="dgw-chips">'+['1:1','4:5','3:4','16:9'].map(function(r){
        return '<button type="button" class="dgw-chip'+(W.ratio===r?' on':'')+'" data-ratio="'+r+'">'+r+'</button>';}).join('')+'</div>')+
      fieldRow('你要 AI 做什么','静物仅展示商品，不生成模特','<div class="dgw-chips">'+(typeof TASKS!=='undefined'?TASKS:[]).map(function(t){
        var on = W.tasks.indexOf(t.id)>=0;
        return '<button type="button" class="dgw-chip'+(on?' on':'')+'" data-task="'+t.id+'">'+esc2(t.zh)+'</button>';}).join('')+'</div>')+
      fieldRow('画面基调','与场景语境的调性对齐','<select class="dgw-sel" data-sel="tone">'+optList(TONES,W.tone)+'</select>');
  }

  if(W.step===1){
    var eths=(ETH||[]).filter(function(e){ return e.region===W.region; });
    var builds = W.buildMode==='plus' ? TIERS : NORMAL_BUILDS;
    if(!builds.some(function(b){return b.id===W.build;})) W.build = builds[0].id;
    var eo = ethObj(W.eth);
    body.innerHTML =
      fieldRow('区域','决定光线、色温与文案口径','<select class="dgw-sel" data-sel="region">'+optList(REGIONS,W.region)+'</select>'+
        '<p class="dgw-tip">'+(REGIONS.filter(function(r){return r.id===W.region;})[0]||{}).note+'</p>')+
      fieldRow('裔群档案','逐个悬停即换人模样张，点击选中','<div class="dgw-ethgrid">'+eths.map(function(e){
        return '<button type="button" class="dgw-eth'+(W.eth===e.id?' on':'')+'" data-ethw="'+e.id+'">'+
          '<b>'+esc2(e.zh)+'</b><span>'+esc2(e.en||'')+'</span></button>';}).join('')+'</div>'+
        (eo?'<p class="dgw-tip">'+esc2(eo.full||eo.zh)+'</p>':''))+
      fieldRow('体型档位','','<div class="dgw-chips">'+
        '<button type="button" class="dgw-chip'+(W.buildMode==='plus'?' on':'')+'" data-bm="plus">大码档</button>'+
        '<button type="button" class="dgw-chip'+(W.buildMode==='normal'?' on':'')+'" data-bm="normal">常规档</button></div>'+
        '<select class="dgw-sel" style="margin-top:8px" data-sel="build">'+optList(builds,W.build)+'</select>'+
        (W.buildMode==='plus'?'<p class="dgw-tip dgw-size-reminder">大码模特建议：优先选择 3XL–4XL 体型。</p>':''))+
      fieldRow('模特年龄','影响面部与体态描述','<select class="dgw-sel" data-sel="age">'+optList(AGES,W.age)+'</select>')+
      fieldRow('姿势','18 式 · 悬停看参考图与动作全文','<div class="dgw-chips">'+POSES.map(function(p){
        return '<button type="button" class="dgw-chip'+(W.stance===p.id?' on':'')+'" data-pose="'+p.id+'">'+esc2(p.zh)+'</button>';}).join('')+'</div>')+
      fieldRow('构图','悬停看确切的入画边界','<div class="dgw-chips">'+CROPS.map(function(c){
        return '<button type="button" class="dgw-chip'+(W.crop===c.id?' on':'')+'" data-cropw="'+c.id+'">'+esc2(c.zh.split('（')[0])+'</button>';}).join('')+'</div>'+
        '<p class="dgw-tip">'+(FRAMING[W.crop==='auto'?autoFrameKey(W.category):W.crop]||{}).zh+'</p>');
  }

  if(W.step===2){
    var top=(D.top||[]).slice(0,8);
    var cards = top.map(function(it,i){
      var s=it.s, on=i===W.sceneIdx;
      return '<button type="button" class="dgw-sc'+(on?' on':'')+'" data-sc="'+i+'">'+
        '<div class="dgw-sct"><b>'+esc2(s.name)+'</b><i>'+it.score+'</i></div>'+
        '<div class="dgw-scb">'+esc2(s.space||'')+' · '+esc2(s.lightTxt||'').slice(0,26)+'</div>'+
        '<div class="dgw-scw">'+esc2((it.why&&it.why.length?it.why[0]:'与当前画面特征匹配'))+'</div></button>';
    }).join('');
    body.innerHTML =
      '<div class="dgw-auto"><div>· 以下为诊断排序前 8 名，已按你的品类「'+esc2(D.cat)+'」与模式「'+esc2(D.mode)+'」打分</div>'+
        '<div>· '+esc2(WIZ_HINT3)+'</div></div>'+
      '<div class="dgw-scbar"><span class="k">场景快选</span><select class="dgw-sel" data-scsel="1">'+
        top.map(function(it,i){ return '<option value="'+i+'"'+(i===W.sceneIdx?' selected':'')+'>'+(i+1)+' · '+esc2(it.s.name)+' · '+it.score+' 分</option>'; }).join('')+
        '</select></div>'+
      '<div class="dgw-scs dgw-scroll">'+cards+'</div>'+
      fieldRow('已选场景','将写入提示词的场景段','<div class="dgw-selbox">'+
        esc2((top[W.sceneIdx]||{}).s?top[W.sceneIdx].s.name:'—')+'</div>');
  }

  if(W.step===3){
    function lockRow(k,label,note){
      return '<label class="dgw-ck'+(W.locks[k]?' on':'')+'"><input type="checkbox" data-lock="'+k+'"'+(W.locks[k]?' checked':'')+'/>'+
        '<span><b>'+esc2(label)+'</b><i>'+esc2(note)+'</i></span></label>';
    }
    body.innerHTML =
      '<div class="dgw-auto"><div>· 一致性项会作为硬约束写进提示词，多图同项目时优先锁定模特与光位</div></div>'+
      fieldRow('一致性锁定','多张图之间必须保持一致的部分','<div class="dgw-cks">'+
        lockRow('model','同一模特','面孔、体型、发型、肤色跨图不变')+
        lockRow('light','同一光位与色温','主光方向、光比、色温锁定')+
        lockRow('palette','同一色盘','背景与道具颜色不跳')+
        lockRow('camera','同一机位语言','焦段与机位高度统一')+'</div>')+
      fieldRow('输出变体','同一场景下的备选数量','<div class="dgw-chips">'+[1,2,3,4].map(function(n){
        return '<button type="button" class="dgw-chip'+(W.variants===n?' on':'')+'" data-var="'+n+'">'+n+' 版</button>';}).join('')+'</div>')+
      fieldRow('角标/贴纸','主图上的功能角标','<div class="dgw-chips">'+
        '<button type="button" class="dgw-chip'+(W.badges?' on':'')+'" data-badge="1">允许 1–2 个角标</button>'+
        '<button type="button" class="dgw-chip'+(!W.badges?' on':'')+'" data-badge="0">不放角标</button></div>')+
      fieldRow('补充要求','会并入商品呈现段','<textarea class="dgw-ta" data-ta="extra" rows="3" placeholder="例如：保留吊牌、腰头做旧必须有；不要出现任何字母">'+esc2(W.extra)+'</textarea>'+
        '<p class="dgw-tip prompt-sync-status" id="wizPromptSyncStatus" role="status" aria-live="polite"></p>');
  }

  // 头部与底部
  $('dgWizKicker').textContent = '第 '+(W.step+1)+' / 4 步 · 场景诊断已自动预选';
  $('dgWizTitle').textContent = WIZ_STEPS[W.step].t;
  bindWizEthPV();
  $('dgWizNext').textContent = W.step===3 ? '完成并带入 Step 02' : '下一步';
  $('dgWizHint').textContent = W.step===3 ? '点击后自动切到提示词生成，并把场景与全部选择写入提示词' : WIZ_STEPS[W.step].d;
  renderWizSteps();
  bindWizHover();
}

/* 向导内的姿势 / 构图悬停视图 */
function bindWizHover(){
  var box=$('dgWizBody'); if(!box || !box.querySelectorAll) return;
  box.querySelectorAll('[data-pose]').forEach(function(el){
    var id=el.getAttribute('data-pose');
    var p=POSES.filter(function(x){return x.id===id;})[0]; if(!p) return;
    el.onmouseenter=function(){ showTip(el, poseTipHTML(p)); };
    el.onmouseleave=hideTip;
  });
  box.querySelectorAll('.dgw-sc').forEach(function(el){
    var i = Number(el.getAttribute('data-sc'));
    var it = (D.top||[])[i]; if(!it) return;
    var sname = it.s.name || '';
    var sid = it.s.id, mk = mkKeyOf(sname);
    var set = (CUR_BUILD === 'plus') ? SCENE_MODEL.plus : SCENE_MODEL.std;
    var img = set[sid] || set[mk] || '';
    var isModel = !!img;
    if(!img) img = (window.SCENE_BLANK||{})[sid] || SCENE_IMG[sid] || '';
    el.onmouseenter=function(){
      if(!img) return;
      var cap = '仅展示，非实际图片';
      var who = isModel ? (CUR_BUILD==='plus' ? '大码体型演示' : '标码体型演示') : '空景 · 仅示意';
      showTip(el,
        '<div class="ot-h"><b>'+esc2(sname)+'</b><i>'+it.score+' 分</i></div>'+
        '<div class="ot-fig"><div class="ot-photo" style="width:150px"><img src="'+img+'" alt=""></div>'+
        '<div class="lg"><b>'+who+'</b><br/>'+esc2((it.why&&it.why.length?it.why[0]:'与当前画面特征匹配'))+
        '<br/><span class="ot-tag">'+cap+'</span></div></div>');
    };
    el.onmouseleave=hideTip;
  });
  box.querySelectorAll('[data-cropw]').forEach(function(el){
    var id=el.getAttribute('data-cropw');
    var c=CROPS.filter(function(x){return x.id===id;})[0]; if(!c) return;
    el.onmouseenter=function(){ showTip(el, cropTipHTML(c)); };
    el.onmouseleave=hideTip;
  });
}

function wizBind(){
  var box=$('dgWiz');
  box.addEventListener('focusin', function(e){
    if(e.target && e.target.hasAttribute && e.target.hasAttribute('data-ta')){
      extraInputFocused=true;
      renderPromptOutput();
    }
  });
  box.addEventListener('focusout', function(e){
    if(e.target && e.target.hasAttribute && e.target.hasAttribute('data-ta')){
      extraInputFocused=false;
      renderPromptOutput();
    }
  });
  box.addEventListener('click', function(e){
    var t=e.target;
    var btn=t.closest?t.closest('[data-wiz]'):null;
    if(btn){ var act=btn.getAttribute('data-wiz');
      if(act==='close') closeWiz();
      else if(act==='prev'){ if(W.step>0){ W.step--; renderWizBody(); } }
      else if(act==='next'){ if(W.step<3){ W.step++; renderWizBody(); } else finishWiz(); }
      return;
    }
    var c=t.closest?t.closest('[data-task],[data-ratio],[data-bm],[data-sc],[data-var],[data-badge],[data-lock],[data-pose],[data-cropw],[data-ethw]'):null;
    if(!c) return;
    if(c.hasAttribute('data-task')){
      var id=c.getAttribute('data-task');
      W.tasks=[id];
      W.imageType=id==='model'?'model':'main';
      D.mode=id==='model'?'模拍':'静物';
      D.top=rankScenes();
      W.sceneIdx=0;
      renderChips();
      refresh();
      renderWizBody();
    }
    else if(c.hasAttribute('data-ratio')){ W.ratio=c.getAttribute('data-ratio'); renderWizBody(); }
    else if(c.hasAttribute('data-bm')){
      W.buildMode=c.getAttribute('data-bm');
      W.build = W.buildMode==='plus' ? 'T3' : 'average';
      renderWizBody();
    }
    else if(c.hasAttribute('data-sc')){ W.sceneIdx=Number(c.getAttribute('data-sc')); renderWizBody(); }
    else if(c.hasAttribute('data-var')){ W.variants=Number(c.getAttribute('data-var')); renderWizBody(); }
    else if(c.hasAttribute('data-badge')){ W.badges=c.getAttribute('data-badge')==='1'; renderWizBody(); }
    else if(c.hasAttribute('data-lock')){
      var k=c.getAttribute('data-lock'); W.locks[k]=!W.locks[k]; renderWizBody();
    }
    else if(c.hasAttribute('data-ethw')){ W.eth=c.getAttribute('data-ethw'); hideTip(); renderWizBody(); }
    else if(c.hasAttribute('data-pose')){ W.stance=c.getAttribute('data-pose'); renderWizBody(); }
    else if(c.hasAttribute('data-cropw')){ W.crop=c.getAttribute('data-cropw'); renderWizBody(); }
  });
  box.addEventListener('change', function(e){
    var t=e.target;
    if(t.hasAttribute&&t.hasAttribute('data-scsel')){ W.sceneIdx=Number(t.value); renderWizBody(); return; }
    if(t.hasAttribute&&t.hasAttribute('data-sel')){
      var k=t.getAttribute('data-sel'); W[k]=t.value;
      if(k==='imageType'){
        W.tasks=typeof normalizeTaskSelection==='function'
          ? normalizeTaskSelection([],W.imageType)
          : [W.imageType==='model'||W.imageType==='lifestyle'?'model':'still'];
        D.mode=W.tasks[0]==='model'?'模拍':'静物';
        D.top=rankScenes();
        W.sceneIdx=0;
        renderChips();
        refresh();
      }
      if(k==='region'){
        var list=(ETH||[]).filter(function(x){ return x.region===W.region; });
        if(list.length && !list.some(function(x){return x.id===W.eth;})) W.eth=list[0].id;
      }
      if(k==='category'){
        /* 用户在定稿里改品类：诊断侧品类、场景排序、达标线全部跟着改 */
        syncCategorySelection(W.category);
        D.top = rankScenes();
        W.sceneIdx = 0;
        renderChips();
        if(typeof renderScenes==='function') renderScenes();
        if(typeof render==='function') render();
      }
      renderWizBody();
    }
    if(t.hasAttribute&&t.hasAttribute('data-lock')){
      var k2=t.getAttribute('data-lock'); W.locks[k2]=t.checked; renderWizBody();
    }
  });
  box.addEventListener('input', function(e){
    var t=e.target;
    if(t.hasAttribute&&t.hasAttribute('data-ta')){
      W.extra=t.value;
      if(typeof window.syncExtraPrompt==='function') window.syncExtraPrompt(t.value);
    }
  });
  document.addEventListener('keydown', function(e){
    if(!W) return;
    var open=$('dgWiz').classList.contains('on');
    if(!open) return;
    if(e.key==='Escape') closeWiz();
  });
}

function openWiz(){
  syncCategorySelection(S.category||D.catId||'jacket');
  var selectedTasks=typeof normalizeTaskSelection==='function'
    ? normalizeTaskSelection(S.tasks,S.imageType)
    : [D.mode==='模拍'?'model':'still'];
  D.mode=selectedTasks[0]==='model'?'模拍':'静物';
  D.top=rankScenes();
  W = newW();
  var box=$('dgWiz');
  box.classList.add('on'); box.setAttribute('aria-hidden','false');
  renderWizBody();
}
function closeWiz(){
  var box=$('dgWiz');
  box.classList.remove('on'); box.setAttribute('aria-hidden','true');
}

/* 组装用户补充要求与独立输出约束 */
function composeExtra(){
  return String(W.extra||'').trim();
}
function composeOutputRules(){
  var L=[];
  var lk=W.locks||{};
  var locks=[];
  var modelOutput=W.tasks.indexOf('model')>-1;
  if(lk.model&&modelOutput) locks.push('同一模特（面孔、体型、发型、肤色跨图不变）');
  if(lk.light) locks.push('同一光位与色温（主光方向、光比、色温锁定）');
  if(lk.palette) locks.push('同一色盘（背景与道具颜色不跳）');
  if(lk.camera) locks.push('同一机位语言（焦段与机位高度统一）');
  if(locks.length) L.push('多图一致性：'+locks.join('；'));
  if(W.variants>1) L.push('输出 '+W.variants+' 个变体，差异只体现在姿势与表情，服装结构与颜色必须一致');
  return L.join('；');
}

/* 完成：写入生成器状态并跳转 */
function finishWiz(){
  var item=(D.top&&D.top.length)?(D.top[W.sceneIdx]||D.top[0]):null;
  if(item){ syncCategorySelection(W.category); D.mode = W.tasks.indexOf('model')>-1?'模拍':'静物'; }
  closeWiz();
  if(!item){ if(typeof toast==='function') toast('请先在上方选择品类，再进入生成流程'); return; }
  applyToGen(item);
  try{
    S.category=W.category; S.imageType=W.tasks.indexOf('model')>-1?'model':'main'; S.tasks=W.tasks.slice();
    S.ratio=W.ratio; S.styling='full'; S.tone=W.tone;
    S.region=W.region; S.eth=W.eth; S.buildMode=W.buildMode; S.build=W.build; S.age=W.age;
    if(W.stance) S.stance=W.stance;
    if(W.crop) S.crop=W.crop;
    S.extra=composeExtra();
    S.badges=W.badges;
    S.badgeBrief=W.badges && item.s.sell ? item.s.sell : '';
    S.outputRules=composeOutputRules();
    initStatic(); render(); renderChips(); refresh();
  }catch(err){ if(typeof console!=='undefined') console.error('写入定稿参数失败',err); }
  if(typeof toast==='function') toast('已带入：'+W.category+' · '+regZh(W.region)+' · 场景第 '+(W.sceneIdx+1)+' 名');
}

/* ---------- 导出 ---------- */
return {
  init:function(){
    renderChips(); refresh();
    wizBind();
    var sb=$('dgStart'); if(sb) sb.onclick=openWiz;
  },
  apply:applyToGen,
  wizard:openWiz,
  wizGo:function(i){ if(!W) W=newW(); W.step=i; renderWizBody(); },
  finish:finishWiz,
  __W:function(){ return W; },
  applyPresetW:function(st){
    if(!W) return false;
    ['imageType','category','tone','region','eth','buildMode','build','age','stance','crop','ratio'].forEach(function(k){
      if(typeof st[k]!=='undefined') W[k]=st[k];
    });
    W.styling='full';
    if(st.tasks) W.tasks=typeof normalizeTaskSelection==='function'
      ? normalizeTaskSelection(st.tasks,st.imageType)
      : (st.tasks.indexOf('model')>-1||st.tasks.indexOf('lifestyle')>-1?['model']:['still']);
    else W.tasks=typeof normalizeTaskSelection==='function'
      ? normalizeTaskSelection([],W.imageType)
      : [W.imageType==='model'||W.imageType==='lifestyle'?'model':'still'];
    if(W.tasks[0]==='still' && (W.imageType==='model'||W.imageType==='lifestyle')) W.imageType='main';
    syncCategorySelection(W.category);
    D.top=rankScenes();
    var idx=(D.top||[]).findIndex(function(it){ return it.s && it.s.id===st.scene; });
    W.sceneIdx = idx>=0?idx:0;
    renderChips();
    refresh();
    if($('dgWiz') && $('dgWiz').classList.contains('on')) renderWizBody();
    return true;
  },
  syncCategory:function(id){
    if(!(CATS||[]).some(function(c){return c.id===id;})) return;
    var selectedScene=W&&D.top[W.sceneIdx]&&D.top[W.sceneIdx].s?D.top[W.sceneIdx].s.id:'';
    syncCategorySelection(id);
    D.top=rankScenes();
    if(W){
      var index=D.top.findIndex(function(it){return it.s&&it.s.id===selectedScene;});
      W.sceneIdx=index>=0?index:0;
      if($('dgWiz')&&$('dgWiz').classList.contains('on')) renderWizBody();
    }
    renderChips();
    refresh();
  }
};
})();

/* ==================== 合并布局：上传与达标线并入生成页 ==================== */
function initMerge(){
  function cardOf(sel){ var el=document.querySelector(sel); return el?el.closest('.dgcard'):null; }
  var wiz=document.getElementById('dgWiz');
  if(wiz && wiz.parentNode!==document.body) document.body.appendChild(wiz);
  /* 悬浮预览层与灯箱原在诊断视图内，视图隐藏后会导致悬停/点击无反应，统一提到 body */
  ['pv','lb','toast','optTip','psv'].forEach(function(id){
    var n=document.getElementById(id);
    if(n && n.parentNode!==document.body) document.body.appendChild(n);
  });
  var diag=document.getElementById('viewDiag'); if(diag) diag.classList.remove('on');
  var gen=document.getElementById('viewGen'); if(gen) gen.classList.add('on');
  var nav=document.getElementById('navWiz');
  if(nav) nav.onclick=function(){ try{ DG.wizard(); }catch(e){} };
  var go=document.getElementById('stepsGo');
  if(go) go.onclick=function(){ try{ DG.wizard(); }catch(e){} };
  var navD=document.getElementById('navDiag');
  if(navD) navD.onclick=function(){ switchView('diag'); };
  /* 诊断详情页：把剩余卡片补进左列，避免留空 */
  if(diag){
    var l=diag.querySelector('.dgcol');
    var sc=cardOf('#dgScenes'), rk=cardOf('#dgRisks');
    if(l){ if(sc) l.appendChild(sc); if(rk) l.appendChild(rk); }
  }
}

/* ==================== 诊断台启动 ==================== */
(function(){
  var boot=function(){ try{ DG.init(); }catch(e){} try{ initMerge(); }catch(e){} };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
})();
