<link rel="stylesheet" type="text/css" href="gacharwd.css"></style>
<select class="form-control lang" onchange="setLang(this)" style="display:block;position:absolute;z-index:50;right:0;width:auto;">
	<option value="">auto</option>
	<option value="zh">zh</option>
	<option value="en">en</option>
</select>

<script type="text/javascript">
function goLang(){
	var userLang = localStorage.getItem('lang') || navigator.language || navigator.userLanguage;
	var isZh = !!userLang.match('zh');
	var pageEn = !!window.location.hash.match('.en.md$');
	var page = window.location.hash.match('(#!.*)\.md$')[1];
	if(pageEn) page = page.match('(.*)\.en$')[1];
	if(!isZh && !pageEn) window.location.hash = page + '.en.md';
	if(isZh && pageEn) window.location.hash =  page + '.md';
	document.querySelector('select.lang').value = (localStorage.getItem('lang') == '')? '' : (isZh)? 'zh':'en';
}

function setLang(ele){
	localStorage.setItem('lang', ele.value);
	goLang();
}
goLang();
</script>

### 蛋池資訊

**Warning!!**
**遊戲內顯示的瀏覽畫面不準!!**

**請`以公告的出貨表為準`!!**
**別再問為毛抽出來的不一樣!!!**

原則上每個池有10台, 機率均等, 沒抽超過100抽別OO沒有放進去, 那只是單純你臉黑....

**`反正抽抽不用錢, 繼續抽就對啦!!!`**


### 轉蛋列表 (gacha pool list)

版本: v0423

感謝各位整理提供常見簡稱 :)

| 蛋池編號(pool No.) 	| 等級(Rank) 	| 名稱(Name)                              	| 英文名稱(Name)                                 	| 常見簡稱(Common short name)       	|
|-------------------:	|------------	|-----------------------------------------	|------------------------------------------------	|-----------------------------------	|
|                  1 	| A          	| 深淵鋼彈                              	| Abyss Gundam                                  	|                                   	|
|                  1 	| A          	| 德天使鋼彈                              	| Gundam Virtue                                  	|                                   	|
|                  1 	| AR         	| 砲裝型脈衝鋼彈                          	| Blast Impulse Gundam                           	| 砲脈                              	|
|                  1 	| AS         	| 德天使鋼彈 (實體彈武裝)                 	| Gundam Virtue Physical                         	| 實彈德天  物理德天                	|
|                  1 	| BS         	| 量產型丘貝雷 (光束加農裝備)             	| Qubeley Mass Production Type (Active Cannon)   	| 紫丘                              	|
|                  1 	| CR         	| 力克.德姆II (熱能軍刀裝備)              	| Rick Dom II (Heat Sabre)                       	|                                   	|
|                  1 	| CR         	| 前鋒型吉姆II                            	| GM II Semi Striker                             	|                                   	|
|                  1 	| CR         	| 薩克II (馬哲蘭砲裝備)                   	| Zaku II (Magella Cannon)                       	| 馬砲                              	|
|                  1 	| CR         	| M1異端鋼彈 (宇宙型)                     	| M1A Astray                                     	|                                   	|
|                  1 	| CU         	| 鋼坦克 (CU)                             	| Guntank (CU)                                   	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                  2 	| A          	| 呂布 托爾吉斯                           	| Lu Bu Tallgeese                                	|                                   	|
|                  2 	| A          	| 明鏡鋼彈                                	| Gundam Spiegel                                 	|                                   	|
|                  2 	| A          	| 勇士鋼彈                                	| Dreadnaught Gundam                             	|                                   	|
|                  2 	| AS         	| 卡托專用傑爾古格                        	| Gelgog (Gato Custom)                           	| 卡托豬 藍豬                       	|
|                  2 	| AS         	| X異端鋼彈                               	| X Astray                                       	| X勇士                             	|
|                  2 	| B          	| 巴烏                                    	| Bawoo                                          	| 龍飛                              	|
|                  2 	| BR         	| 藍色宿命2號機 (尼姆巴斯專用機)          	| Blue Destiny Unit-2 (Nimbus Custom)            	|                                   	|
|                  2 	| BR         	| GN-XII 巨劍型                           	| GN-XII Sword                                   	|                                   	|
|                  2 	| BS         	| 火器運用試驗型蓋茨改                    	| GuAIZ Experimental Firearms Type               	|                                   	|
|                  2 	| BS         	| 豹式基恩 米歇爾特裝型                   	| Ginn (Miguel Custom)                           	| 黃昏的魔彈                        	|
|                    	|            	|                                         	|                                                	|                                   	|
|                  3 	| A          	| 笑傲江湖                                	|                                                	| 球                                	|
|                  3 	| A          	| 轟大帝孫權鋼彈                          	|                                                	|                                   	|
|                  3 	| A          	| GN-XIV                                  	| GN-XIV                                         	|                                   	|
|                  3 	| AR         	| 蓋亞鋼彈 (安德魯‧沃特菲德專用機)        	|                                                	| 老虎蓋亞                          	|
|                  3 	| AS         	| 加迪薩 (希林專用機)                     	|                                                	|                                   	|
|                  3 	| BR         	| 異端鋼彈藍色機二型改                    	|                                                	| 二改 二型R                        	|
|                  3 	| S          	| 自由鋼彈                                	|                                                	|                                   	|
|                  3 	| S          	| 拉芙蕾西亞                              	|                                                	| 妖花                              	|
|                  3 	| S          	| 骨十字鋼彈X1                            	|                                                	|                                   	|
|                  3 	| S          	| 斑豹毀滅者 (G獵鷹)                      	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                  4 	| A          	| 扎姆紮紮                                	|                                                	|                                   	|
|                  4 	| A          	| 吉翁克                                  	|                                                	| 鬼頭                              	|
|                  4 	| A          	| 玫瑰祖魯                                	|                                                	|                                   	|
|                  4 	| A          	| 侵略鋼彈                                	|                                                	|                                   	|
|                  4 	| A          	| 飛翼鋼彈零式                            	| Wing Gundam 0                                  	| 飛E04                             	|
|                  4 	| AR         	| 斯摩 (金色機)                           	|                                                	| 金斯摩                            	|
|                  4 	| AR         	| S鋼彈  (光束智能步槍)                   	|                                                	|                                   	|
|                  4 	| BR         	| 加姆路．芬                              	|                                                	| 倒地仔                            	|
|                  4 	| C          	| 威達                                    	| Windam                                         	|                                   	|
|                  4 	| CR         	| 吉姆III (UC)                            	| GM III (UC)                                    	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                  5 	| AR         	| 狙擊型吉姆 K-9                          	|                                                	| K9 K-9                            	|
|                  5 	| AR         	| V-Dash Hexa                             	|                                                	| VDH                               	|
|                  5 	| AS         	| GN-XIV (指揮官用)                       	|                                                	|                                   	|
|                  5 	| B          	| 孔明靈格斯                              	|                                                	|                                   	|
|                  5 	| B          	| 孫策鋼彈GP02                            	|                                                	|                                   	|
|                  5 	| C          	| 亞凱                                    	| Acguy                                          	|                                   	|
|                  5 	| C          	| 基恩 (D裝備)                            	| Ginn                                           	| 基恩D 基恩導彈                    	|
|                  5 	| S          	| 利克·康提奧                             	|                                                	|                                   	|
|                  5 	| S          	| 昆.曼莎                                 	|                                                	| 昆曼沙 昆慢傻                     	|
|                  5 	| S          	| α 阿吉爾                                	|                                                	| 阿法阿吉爾 海星                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                  6 	| AR         	| 杜賓狼 (UC)                             	|                                                	|                                   	|
|                  6 	| AR         	| 鋼彈試作4號機 卡貝拉                    	|                                                	| GP04                              	|
|                  6 	| AS         	| 杜賓狼 (達卡蘭專用機)                   	|                                                	|                                   	|
|                  6 	| AS         	| 驚異薩克                                	|                                                	|                                   	|
|                  6 	| S          	| 天帝鋼彈                                	|                                                	| 神諭                              	|
|                  6 	| S          	| 正義鋼彈                                	|                                                	|                                   	|
|                  6 	| S          	| 托爾吉斯III                             	|                                                	| 托3 T3                            	|
|                  6 	| S          	| 沙薩比                                  	|                                                	| 山楂餅 SSB                        	|
|                  6 	| S          	| 命運鋼彈                                	|                                                	| 3命運鋼彈                         	|
|                  6 	| S          	| 曉鋼彈 (不知火裝備)                     	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                  7 	| AS         	| 巨星鋼彈 (超級模式)                     	|                                                	| 超級麥克                          	|
|                  7 	| AS         	| 次代鋼彈                                	|                                                	|                                   	|
|                  7 	| AS         	| 玫瑰鋼彈 (超級模式)                     	|                                                	| 超級薔薇                          	|
|                  7 	| AS         	| 重型鋼彈 (超級模式)                     	|                                                	| 超重                              	|
|                  7 	| AS         	| 飛龍鋼彈 (超級模式)                     	|                                                	| 超級天龍                          	|
|                  7 	| AS         	| 閃光鋼彈 (超級模式)                     	|                                                	| 超閃                              	|
|                  7 	| AS         	| 豪傑式                                  	|                                                	| 磨修羅生                          	|
|                  7 	| AS         	| THE-O (大型光束軍刀)                    	|                                                	| 劍胖                              	|
|                  7 	| B          	| 蒼藍命運一號機                          	|                                                	| BD1                               	|
|                  7 	| S          	| 自由鋼彈 (高機動空戰模式)               	|                                                	| 空戰自由 HiMAT                    	|
|                    	|            	|                                         	|                                                	|                                   	|
|                  8 	| AS         	| 強化ZZ鋼彈                              	|                                                	| 強化ZZ                            	|
|                  8 	| B          	| 孫權鋼彈                                	|                                                	|                                   	|
|                  8 	| B          	| 異端鋼彈藍色機                          	|                                                	| 藍異端                            	|
|                  8 	| BR         	| 甘恩                                    	|                                                	| 吉昂                              	|
|                  8 	| BS         	| 0鋼彈 (A.C.D型)                         	|                                                	| 實戰 0鋼                          	|
|                  8 	| C          	| 加茲伍特                                	| GAZuOOT                                        	|                                   	|
|                  8 	| C          	| 瞬發型薩克戰士                          	| Zaku Warrior (Blaze Wizard)                    	|                                   	|
|                  8 	| C          	| 聯合實訓式 (塔利比亞)                   	| Union Realdo (Taribia Colour)                  	|                                   	|
|                  8 	| CR         	| 薩克幻影 (槍擊型先導裝備)               	| Zaku Phantom (Gunner Wizard)                   	|                                   	|
|                  8 	| CU         	| 茲寇克 (CU)                             	| Z'Gok                                          	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                  9 	| AR         	| 力天使鋼彈 (GN 全裝盾套)                	|                                                	| AR力天                            	|
|                  9 	| AR         	| 巨劍型瘟神鋼彈                          	|                                                	| 劍瘟                              	|
|                  9 	| AR         	| 帕拉斯·雅典娜 (大型導彈裝備)            	|                                                	| 大導                              	|
|                  9 	| AR         	| 能天使鋼彈 (七劍)                       	|                                                	|                                   	|
|                  9 	| AR         	| 救世主鋼彈                              	|                                                	| 救星                              	|
|                  9 	| AR         	| 漆黑攻擊鋼彈                            	|                                                	| 黑貓                              	|
|                  9 	| AR         	| G-3 鋼彈 (雙火箭炮裝備)                 	|                                                	|                                   	|
|                  9 	| AS         	| 百式 (霰射型火箭砲裝備)                 	|                                                	| 砲百                              	|
|                  9 	| BR         	| 里傑爾格 (導彈發射器裝備)               	|                                                	| 導彈豬                            	|
|                  9 	| CR         	| 威達 (核彈搭載型)                       	| Windam (Nuclear Missle)                        	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 10 	| A          	| 甘恩火神砲                              	|                                                	| 吉昂火神砲                        	|
|                 10 	| A          	| 重武裝鋼彈改                            	|                                                	| A重 重武裝改                      	|
|                 10 	| A          	| ZZ鋼彈                                  	|                                                	|                                   	|
|                 10 	| AR         	| 銀彈 (感應砲試驗型)                     	|                                                	|                                   	|
|                 10 	| AR         	| 鋼彈 6號機泥岩                          	|                                                	|                                   	|
|                 10 	| B          	| 洛特                                    	|                                                	|                                   	|
|                 10 	| BR         	| 蒼藍命運三號機                          	|                                                	| BD3                               	|
|                 10 	| BU         	| 席古 (BU)                               	|                                                	|                                   	|
|                 10 	| C          	| 亞修                                    	| Ash                                            	|                                   	|
|                 10 	| S          	| 全裝甲型ZZ鋼彈                          	|                                                	| FA-ZZ FAZZ SZZ                    	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 11 	| A          	| GN Flag                                 	|                                                	| 格拉漢姆專用 Union Flag 特裝型 II 	|
|                 11 	| AR         	| 百式 (光束軍刀裝備)                     	|                                                	| 劍百                              	|
|                 11 	| AR         	| 杜賓狼 (INCOM裝備型)                    	|                                                	|                                   	|
|                 11 	| AR         	| 進階型GN-X (艾米專用機)                 	|                                                	|                                   	|
|                 11 	| AR         	| 蔚藍決鬥鋼彈 (貫入彈)                   	|                                                	|                                   	|
|                 11 	| AR         	| 驚異肯普法                              	|                                                	|                                   	|
|                 11 	| AS         	| 巨劍型脈衝鋼彈                          	|                                                	| 劍脈                              	|
|                 11 	| AS         	| 蓋馬魯克 (光束加農)                     	|                                                	|                                   	|
|                 11 	| B          	| R.查加                                  	|                                                	| R++                               	|
|                 11 	| BS         	| 鋼彈Mk-II (飛行裝甲)                    	|                                                	| 飛兔                              	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 12 	| A          	| 座天使鋼彈一號機                        	|                                                	| 座1                               	|
|                 12 	| A          	| 座天使鋼彈二號機                        	|                                                	| 座2                               	|
|                 12 	| A          	| 座天使鋼彈三號機                        	|                                                	| 座3                               	|
|                 12 	| AS         	| 丘貝雷                                  	|                                                	| 白丘                              	|
|                 12 	| B          	| 肯普法                                  	|                                                	| KPF                               	|
|                 12 	| B          	| 鋼彈MKII (幽谷式樣)                     	|                                                	| 白兔                              	|
|                 12 	| BR         	| 鋼彈+B部件                              	|                                                	|                                   	|
|                 12 	| BS         	| 鋼彈試作1號機 全方位推進型              	|                                                	| GP01FB                            	|
|                 12 	| BS         	| 鋼彈Mk-II (提坦斯2號機)                 	|                                                	| 黑兔2                             	|
|                 12 	| BS         	| 鋼彈Mk-II (提迪斯式樣1號機)             	|                                                	| 黑兔                              	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 13 	| A          	| 決鬥鋼彈                                	|                                                	|                                   	|
|                 13 	| AR         	| 巨星鋼彈 (滑板裝備)                     	|                                                	|                                   	|
|                 13 	| AR         	| V-Hexa 鋼彈                             	|                                                	| VH                                	|
|                 13 	| AS         	| 明鏡鋼彈 (手裡劍)                       	|                                                	|                                   	|
|                 13 	| B          	| 周瑜百式                                	|                                                	|                                   	|
|                 13 	| BR         	| 托爾吉斯II                              	|                                                	| 托2                               	|
|                 13 	| BR         	| 鋼彈 (槍裝備)                           	|                                                	|                                   	|
|                 13 	| BS         	| 伊弗利特狂戰型                          	|                                                	|                                   	|
|                 13 	| BS         	| 傑爾古格M (西瑪專用機)                  	|                                                	| 西瑪豬                            	|
|                 13 	| CR         	| 巴庫 (二連裝磁軌砲裝備)                 	| BuCue (2*Rail Gun)                             	| 砲狗                              	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 14 	| A          	| 沙漠鋼彈改良型                          	|                                                	| A沙 沙漠改                        	|
|                 14 	| A          	| 腦波傳導型鋼彈                          	|                                                	| A腦                               	|
|                 14 	| AR         	| 暴風鋼彈 (對裝甲霰彈砲)                 	|                                                	| 散彈暴風                          	|
|                 14 	| AR         	| 獨角獸鋼彈2號機報喪女妖                 	|                                                	| A報喪                             	|
|                 14 	| AS         	| 丘貝雷Mk-II                             	|                                                	| 紅丘                              	|
|                 14 	| AS         	| V-Dash 鋼彈                             	|                                                	| VD                                	|
|                 14 	| B          	| 扎美爾                                  	|                                                	|                                   	|
|                 14 	| B          	| 傑爾古格加農                            	|                                                	| 砲豬                              	|
|                 14 	| B          	| 颶風迪亞斯                              	|                                                	|                                   	|
|                 14 	| B         	| 卡普爾 		                       	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 15 	| A          	| 鋼彈AGE-2 Normal                        	|                                                	| AGE2                              	|
|                 15 	| AR         	| 異端鋼彈藍色機3型                       	|                                                	|                                   	|
|                 15 	| AR         	| 鋼彈5號機 (Bst)                         	|                                                	|                                   	|
|                 15 	| AR         	| THE-O                                   	|                                                	| 槍胖                              	|
|                 15 	| AS         	| 主天使鋼彈 (導彈裝備)                   	|                                                	| 主天導彈                          	|
|                 15 	| B          	| 趙雲鋼彈                                	|                                                	|                                   	|
|                 15 	| BR         	| 薩克III改                               	|                                                	| 薩3                               	|
|                 15 	| BS         	| 地獄犬型巴庫 (亞雷克專用機)             	|                                                	| B狗                               	|
|                 15 	| BS         	| 拉寇                                    	|                                                	| 老虎 B狗                          	|
|                 15 	| CU         	| 茲沙 (CU)                               	| ZSSA (CU)                                      	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 16 	| A          	| 暴風鋼彈                                	|                                                	|                                   	|
|                 16 	| A          	| 優越型 GN-X                             	|                                                	|                                   	|
|                 16 	| AR         	| 力天使鋼彈修復型                        	|                                                	|                                   	|
|                 16 	| AR         	| 決鬥鋼彈突擊護甲型                      	|                                                	|                                   	|
|                 16 	| AR         	| 納德雷鋼彈                              	|                                                	| 中性                              	|
|                 16 	| AR         	| 康提歐                                  	|                                                	|                                   	|
|                 16 	| AR         	| 量產型百式改                            	|                                                	| 量百改                            	|
|                 16 	| AR         	| 腦波傳導型鋼彈 (米加粒子砲裝備)         	|                                                	| AR腦                              	|
|                 16 	| AR         	| 瘟神鋼彈 (長射程光束炮裝)               	|                                                	| 砲瘟                              	|
|                 16 	| B          	| 梅薩拉                                  	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 17 	| A          	| 獵犬                                    	|                                                	|                                   	|
|                 17 	| A          	| 雙頭龍鋼彈                              	|                                                	| A龍                               	|
|                 17 	| AR         	| 貝爾格·基羅斯 (黑之戰隊)                	|                                                	|                                   	|
|                 17 	| AR         	| 量產型ν鋼彈 (incom)                     	|                                                	| 量牛                              	|
|                 17 	| AS         	| 另類試制型炮裝攻擊E 盧卡斯專用機        	|                                                	| 綠貓                              	|
|                 17 	| AS         	| 巨劍型攻擊鋼彈                          	|                                                	| 劍攻 劍強                         	|
|                 17 	| AS         	| 重砲型攻擊鋼彈                          	|                                                	| 砲攻 砲強                         	|
|                 17 	| AS         	| 翔翼型攻擊鋼彈                          	|                                                	|                                   	|
|                 17 	| C          	| 巴比                                    	| Babi                                           	|                                   	|
|                 17 	| C          	| AWACS 迪因                              	| AWACS Dinn                                     	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 18 	| A          	| 力天使鋼彈                              	|                                                	| 裸力                              	|
|                 18 	| A          	| 主天使鋼彈                              	|                                                	|                                   	|
|                 18 	| A          	| 加迪薩 (里維爾專用機)                   	|                                                	|                                   	|
|                 18 	| A          	| 加萊佐 (布林格專用機)                   	|                                                	|                                   	|
|                 18 	| A          	| 先驅式武士道專用機                      	|                                                	|                                   	|
|                 18 	| A          	| 能天使鋼彈                              	|                                                	| 裸能                              	|
|                 18 	| A          	| G-3 鋼彈                                	|                                                	| G3                                	|
|                 18 	| AS         	| 威力型脈衝鋼彈                          	|                                                	| 威脈                              	|
|                 18 	| AS         	| S鋼彈 (Incom)                           	|                                                	|                                   	|
|                 18 	| BS         	| 席古 (克魯澤專用機)                     	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 19 	| A          	| 混沌鋼彈                                	|                                                	|                                   	|
|                 19 	| A          	| 斯摩 (銀色機)                           	|                                                	| 銀斯摩                            	|
|                 19 	| A          	| 禁斷鋼彈                                	|                                                	|                                   	|
|                 19 	| BR         	| 鋼彈 (最終戰式樣)                       	|                                                	|                                   	|
|                 19 	| BR         	| 鋼彈原型機                              	|                                                	| P鋼 RX-78-1                       	|
|                 19 	| BS         	| 異端鋼彈紅色機高出力型                  	|                                                	| 紅猩猩                            	|
|                 19 	| BS         	| 異端鋼彈藍色機2L型                      	|                                                	| 2L                                	|
|                 19 	| BS         	| 鋼彈 (超級流星錘裝備)                   	|                                                	|                                   	|
|                 19 	| BS         	| 鐵人桃子 (超兵專用機)                   	|                                                	|                                   	|
|                 19 	| BS         	| GN-X (2000次男專用機)                   	|                                                	| 可樂 2000次男                     	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 20 	| A          	| 巴爾.巴洛                               	|                                                	| 螃蟹                              	|
|                 20 	| A          	| 地獄死神鋼彈                            	|                                                	| A死 地死                          	|
|                 20 	| A          	| 艾爾美斯                                	|                                                	| 鯨魚                              	|
|                 20 	| A          	| 悍馬悍馬                                	|                                                	|                                   	|
|                 20 	| A          	| 畢格薩姆                                	|                                                	| 青蛙                              	|
|                 20 	| B          	| 姜維鋼彈F91                             	|                                                	|                                   	|
|                 20 	| B          	| 鋼彈 黃金紀念版                         	|                                                	| 黃金鋼彈                          	|
|                 20 	| B          	| 薩克II (指揮官專用)                     	|                                                	| 薩指                              	|
|                 20 	| B          	| 鐵人 (高機動型)                         	|                                                	|                                   	|
|                 20 	| BR         	| 卡斯巴爾專用鋼彈                        	|                                                	| 夏亞鋼彈                          	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 21 	| A          	| 九龍鋼彈                                	|                                                	|                                   	|
|                 21 	| A          	| 攻擊鋼彈E (盧卡斯專用機)                	|                                                	| 裸貓                              	|
|                 21 	| A          	| 翠綠暴風鋼彈                            	|                                                	|                                   	|
|                 21 	| A          	| 蔚藍決鬥鋼彈                            	|                                                	|                                   	|
|                 21 	| B          	| 0鋼彈                                   	|                                                	|                                   	|
|                 21 	| B          	| GN-X (戴瑞爾·道奇專用機)                	|                                                	|                                   	|
|                 21 	| BS         	| 迪傑SE-R                                	|                                                	| DJSER                             	|
|                 21 	| BS         	| 異端鋼彈藍色機2L型 (陽電子炮裝備)       	|                                                	| 2LL                               	|
|                 21 	| BS         	| GN-XII 加農                             	|                                                	|                                   	|
|                 21 	| CR         	| 工程用機 Desperado (土匪式)             	| Desperado                                      	| 礦工                              	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 22 	| A          	| 全裝甲鋼彈                              	|                                                	|                                   	|
|                 22 	| A          	| 貝爾格·基羅斯                           	|                                                	|                                   	|
|                 22 	| A          	| 神盾鋼彈                                	|                                                	| 2887                              	|
|                 22 	| A          	| 瘟神鋼彈                                	|                                                	|                                   	|
|                 22 	| AS         	| 夏亞專用傑爾古格                        	|                                                	| 夏亞豬 紅豬                       	|
|                 22 	| B          	| 夏侯淵 Dalas                            	|                                                	|                                   	|
|                 22 	| BS         	| 古夫特裝型 (諾利斯專用)                 	|                                                	|                                   	|
|                 22 	| BS         	| 伊薩克專用古夫烈焰型                    	|                                                	|                                   	|
|                 22 	| CR         	| 赫維剛 (4聯榴彈發射器裝)                	| Heavy Gun (4*Granade Launcher)                 	|                                   	|
|                 22 	| CR         	| 德姆熱帶型 (沙漠戰式樣)                 	| Dom Tropen (Desert Type)                       	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 23 	| B          	| 司馬懿沙薩比                            	|                                                	|                                   	|
|                 23 	| B          	| 地獄犬型巴庫                            	|                                                	| B狗                               	|
|                 23 	| B          	| 托爾吉斯                                	|                                                	| 托1 T1                            	|
|                 23 	| C          	| 鋼球K型                                 	| Ball (K Type)                                  	| K球                               	|
|                 23 	| CR         	| 斬擊型薩克幻影                          	| Zaku Phantom (Slash Wizard)                    	|                                   	|
|                 23 	| CR         	| 陸戰型鋼彈 (吉姆頭)                     	| Gundam Ground Type (GM Head)                   	|                                   	|
|                 23 	| CR         	| 德南·佐恩 (黑之戰隊)                    	| De'Nan-Zon (Black Vanguard)                    	|                                   	|
|                 23 	| CR         	| 鯊魚鋼球                                	| Ball (Shark Mouth Type)                        	|                                   	|
|                 23 	| CU         	| 艾亞利茲 (CU)                           	| Aries (CU)                                     	|                                   	|
|                 23 	| CU         	| 風車鋼彈 (CU)                           	| Nether Gundam (CU)                             	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 24 	| A          	| 完美鋼彈                                	|                                                	|                                   	|
|                 24 	| A          	| 攻擊鋼彈                                	|                                                	| 裸攻 裸強                         	|
|                 24 	| A          	| 帕拉斯·雅典娜                           	|                                                	|                                   	|
|                 24 	| A          	| 星創攻擊鋼彈                            	|                                                	| 創攻                              	|
|                 24 	| A          	| 脈衝鋼彈                                	|                                                	| 裸脈                              	|
|                 24 	| A          	| 傑爾古格 (指揮官專用)                   	|                                                	| 指揮豬                            	|
|                 24 	| A          	| 蓋馬魯克                                	|                                                	|                                   	|
|                 24 	| A          	| 鋼彈試作3號機 Stamen                    	|                                                	| GP03S                             	|
|                 24 	| A          	| V鋼彈                                   	|                                                	|                                   	|
|                 24 	| A          	| Z鋼彈                                   	|                                                	| 砲Z                               	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 25 	| A          	| 巨星鋼彈                                	|                                                	|                                   	|
|                 25 	| A          	| 杜賓狼                                  	|                                                	|                                   	|
|                 25 	| A          	| 玫瑰鋼彈                                	|                                                	| 薔薇                              	|
|                 25 	| A          	| 重型鋼彈                                	|                                                	|                                   	|
|                 25 	| A          	| 飛龍鋼彈                                	|                                                	|                                   	|
|                 25 	| A          	| 閃光鋼彈                                	|                                                	|                                   	|
|                 25 	| B          	| GN-XII                                  	|                                                	|                                   	|
|                 25 	| B          	| GN-XIII                                 	|                                                	|                                   	|
|                 25 	| B          	| GN-XIII (聯邦軍式樣)                    	|                                                	|                                   	|
|                 25 	| BR         	| 基拉祖魯 (安傑羅專用機)                 	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 26 	| AS         	| 完美吉翁克                              	|                                                	|                                   	|
|                 26 	| B          	| 蒼藍命運二號機                          	|                                                	| BD2                               	|
|                 26 	| BR         	| 先驅式                                  	|                                                	|                                   	|
|                 26 	| BR         	| 先驅式 (GN光束步槍)                     	|                                                	|                                   	|
|                 26 	| BR         	| 肯普法 (大型火箭砲裝備)                 	|                                                	| KPF                               	|
|                 26 	| BR         	| 陸戰型鋼彈 (流星錘裝備)                 	|                                                	|                                   	|
|                 26 	| BR         	| 量產型鋼加農 (白色獵犬式樣)             	|                                                	| 白狗隊                            	|
|                 26 	| BS         	| 吉姆狙擊型II (白色獵犬式樣)             	|                                                	| 白狗隊                            	|
|                 26 	| BS         	| 夏亞專用茲寇克                          	|                                                	| 紅蟹 夏亞蟹                       	|
|                 26 	| BS         	| 鋼彈試作2號機 Physalis                  	|                                                	| GP02A                             	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 27 	| B          	| 加布斯雷                                	|                                                	|                                   	|
|                 27 	| B          	| 死神鋼彈                                	|                                                	| B死                               	|
|                 27 	| B          	| 沙漠鋼彈                                	|                                                	| B沙                               	|
|                 27 	| B          	| 波里諾克薩曼                            	|                                                	| 拳黃 熊                           	|
|                 27 	| B          	| 空中霸王鋼彈                            	|                                                	| 空霸                              	|
|                 27 	| B          	| 重武裝鋼彈                              	|                                                	| B重                               	|
|                 27 	| B          	| 神龍鋼彈                                	|                                                	| B龍                               	|
|                 27 	| B          	| 斑豹鋼彈                                	|                                                	|                                   	|
|                 27 	| B          	| 達基·伊里斯                             	|                                                	|                                   	|
|                 27 	| B          	| 漢摩拉比                                	|                                                	| 魟魚                              	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 28 	| B          	| 呂蒙 迪傑                               	|                                                	|                                   	|
|                 28 	| B          	| 夏侯惇基拉斯                            	|                                                	|                                   	|
|                 28 	| B          	| 張飛鋼彈                                	|                                                	|                                   	|
|                 28 	| B          	| 張遼傑爾古格                            	|                                                	|                                   	|
|                 28 	| B          	| 曹丕鋼彈                                	|                                                	|                                   	|
|                 28 	| B          	| 曹操鋼彈                                	|                                                	|                                   	|
|                 28 	| B          	| 黃蓋古夫                                	|                                                	|                                   	|
|                 28 	| B          	| 劉備鋼彈                                	|                                                	|                                   	|
|                 28 	| B          	| 關平鋼彈                                	|                                                	|                                   	|
|                 28 	| B          	| 關羽鋼彈                                	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 29 	| B          	| 高機動鐵人B型                           	|                                                	|                                   	|
|                 29 	| B          	| 蓋茲                                    	|                                                	|                                   	|
|                 29 	| BR         	| 鋼彈 NT-1 (喬巴姆裝甲)                  	|                                                	| 全裝甲 亞雷克斯 FANT-1            	|
|                 29 	| BS         	| Re-GZ BWS                               	|                                                	| 靈格斯                            	|
|                 29 	| C          	| 沙貝特 (導彈發射器)                     	| Serpent (Missle Launcher)                      	|                                   	|
|                 29 	| C          	| G 加農                                  	| G-Cannon                                       	|                                   	|
|                 29 	| CR         	| 量產型鋼加農                            	| Guncannon Mass Production Type                 	|                                   	|
|                 29 	| CR         	| 鋼加農 (噴射型飛彈裝備)                 	| Guncannon (Spray Missle)                       	|                                   	|
|                 29 	| CR         	| 薩克幻影 (爆發先導裝備)                 	| Zaku Phantom (Blaze Wizard)                    	|                                   	|
|                 29 	| CU         	| 聯合旗艦式 (CU)                         	| Union Flag (CU)                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 30 	| B          	| 巴扎姆                                  	|                                                	| 巴薩姆                            	|
|                 30 	| B          	| 伊弗利特改                              	|                                                	| 伊改                              	|
|                 30 	| B          	| 德姆騎兵                                	|                                                	|                                   	|
|                 30 	| B          	| 鋼彈                                    	|                                                	| 初鋼 元祖鋼彈                     	|
|                 30 	| BU         	| 陸戰型鋼彈 (光束步槍裝備) (BU)          	|                                                	|                                   	|
|                 30 	| C          	| 攻擊刃                                  	| Strike Dagger                                  	|                                   	|
|                 30 	| C          	| 鋼球                                    	| Ball                                           	|                                   	|
|                 30 	| C          	| 薩克I                                   	| Zaku I                                         	|                                   	|
|                 30 	| CR         	| 吉姆打擊者                              	| GM Striker                                     	|                                   	|
|                 30 	| S          	| Z鋼彈 3號機                             	|                                                	| Z3                                	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 31 	| B          	| 卡貝拉.迪特拉                           	|                                                	|                                   	|
|                 31 	| B          	| 卡斯L                                   	|                                                	|                                   	|
|                 31 	| B          	| 卡斯R                                   	|                                                	|                                   	|
|                 31 	| B          	| 旭日鋼彈                                	|                                                	|                                   	|
|                 31 	| B          	| 實驗型茲寇克E型                         	|                                                	|                                   	|
|                 31 	| B          	| 諾貝爾鋼彈                              	|                                                	|                                   	|
|                 31 	| BR         	| 傑爾古格 (光束薙刀裝備)                 	|                                                	| 刀豬                              	|
|                 31 	| BR         	| 超級鋼彈                                	|                                                	| 超鋼                              	|
|                 31 	| BR         	| Z薩克                                   	|                                                	|                                   	|
|                 31 	| S          	| 鋼彈 AGE-2 黑獵犬型                     	|                                                	| 黑狗 打小孩專用                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 32 	| B          	| 拜亞蘭                                  	|                                                	|                                   	|
|                 32 	| B          	| 異端鋼彈金色機                          	|                                                	| 金異端                            	|
|                 32 	| B          	| 異端鋼彈紅色機                          	|                                                	| 紅異端                            	|
|                 32 	| BR          	| 異端鋼彈金色機 天 蜜娜		          	|                                                	| 	                           	|
|                 32 	| SR         	| 00 QAN[T] 全刃式                        	|                                                	| 00QFS                             	|
|                 32 	| SR         	| 逆A鋼彈 (月光蝶)                        	|                                                	| 月光蝶                            	|
|                 32 	| SR         	| 新安洲 (光束鐮斧)                       	|                                                	| SR新安洲                          	|
|                 32 	| SR         	| 鋼彈試作3號機 Dendrobium (折疊式火箭砲) 	|                                                	| GP03D                             	|
|                 32 	| SR         	| S鋼彈 深度強襲                          	|                                                	| DSS                               	|
|                 32 	| SS         	| 獨角獸鋼彈[光束加特林機關砲]            	|                                                	| SS 獨角                           	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 33 	| B          	| 加布蘭                                  	|                                                	|                                   	|
|                 33 	| B          	| 異端鋼彈綠色機                          	|                                                	| 綠異端                            	|
|                 33 	| B          	| 傑爾古格J                               	|                                                	| 狙豬                              	|
|                 33 	| BS         	| 亞克托.德卡                             	|                                                	| 青雞 綠鸚鵡                       	|
|                 33 	| BS         	| 奎絲專用亞克托．德卡                    	|                                                	|                                   	|
|                 33 	| C          	| 村雨                                    	| Murasame                                       	|                                   	|
|                 33 	| C          	| M1異端鋼彈                              	| M1 Astray                                      	|                                   	|
|                 33 	| CR         	| 吉姆狙擊型                              	| GM Sniper                                      	| 綠吉姆                            	|
|                 33 	| CU         	| 吉姆鎮暴型 (CU)                         	| GM Quel (CU)                                   	| 鎮暴吉                            	|
|                 33 	| CU         	| M1異端鋼彈 (CU)                         	| M1 Astray (CU)                                 	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 34 	| BR         	| 重武裝鋼彈 (誘導式飛彈裝備)             	|                                                	| BR重                              	|
|                 34 	| BR         	| 陸戰型鋼彈 (光束步槍裝備)               	|                                                	|                                   	|
|                 34 	| BR         	| 鋼彈Ez-8 (180mm加農炮裝備)              	|                                                	|                                   	|
|                 34 	| BR         	| 薩克III (光束炮裝備)                    	|                                                	| 嘴砲薩                            	|
|                 34 	| BS         	| 席古光束武器實驗型                      	|                                                	| 藍色席古                          	|
|                 34 	| CU         	| 高出力型吉姆 (CU)                       	| Powered GM (CU)                                	|                                   	|
|                 34 	| S          	| 骨十字鋼彈X2                            	|                                                	|                                   	|
|                 34 	| S          	| 骨十字鋼彈X3                            	|                                                	|                                   	|
|                 34 	| S          	| EX-S 鋼彈                               	|                                                	|                                   	|
|                 34 	| SR         	| 骨十字鋼彈X2改                          	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 35 	| AR         	| 鋼彈AGE-2Normal (特務隊式樣)            	|                                                	| AGE2特務                          	|
|                 35 	| C          	| 105刃                                   	| 105 Dagger                                     	|                                   	|
|                 35 	| C          	| 古夫                                    	| Gouf                                           	|                                   	|
|                 35 	| C          	| 鋼坦克                                  	| Guntank                                        	|                                   	|
|                 35 	| CU         	| 人魚鋼彈 (CU)                           	| Mermaid Gundam (CU)                            	|                                   	|
|                 35 	| CU         	| 基恩 (CU)                               	| Ginn (CU)                                      	|                                   	|
|                 35 	| CU         	| 德姆 (CU)                               	| Dom (CU)                                       	|                                   	|
|                 35 	| S          	| 再生鋼彈                                	|                                                	|                                   	|
|                 35 	| S          	| Delta 鋼彈                              	| Delta Gundam                                   	| δ (Delta, 德爾塔)                 	|
|                 35 	| SR         	| 墮天使鋼彈GNHW/M                        	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 36 	| B          	| 烈焰古夫                                	|                                                	|                                   	|
|                 36 	| C          	| 巴庫                                    	| BuCue                                          	| 狗                                	|
|                 36 	| C          	| 佐諾                                    	| Zno                                            	|                                   	|
|                 36 	| C          	| 高出力型吉姆                            	| Powered GM                                     	|                                   	|
|                 36 	| C          	| 基拉祖魯                                	| Geara Zulu                                     	|                                   	|
|                 36 	| C          	| 德姆                                    	| Dom                                            	|                                   	|
|                 36 	| C          	| 德南·佐恩                               	| De'Nan-Zon                                     	|                                   	|
|                 36 	| CR         	| 里歐 (宇宙型)                           	| Leo (Space Type)                               	|                                   	|
|                 36 	| CR         	| 基拉祖魯 (永久的布魯諾砲改)             	| Geara Zulu (Lange Bruno Gun Custom)            	|                                   	|
|                 36 	| CR         	| 基拉祖魯 (親衛隊機)                     	| Geara Zulu (Guards Type)                       	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 37 	| B          	| 傑爾古格海軍陸戰隊式樣                  	|                                                	| 傑爾古格M                         	|
|                 37 	| C          	| 重砲型薩克戰士                          	| Zaku Warrior (Gunner Wizard)                   	|                                   	|
|                 37 	| C          	| 訓練用MS-A                              	| Training MS-A                                  	| 小金人                            	|
|                 37 	| C          	| 訓練用MS-B                              	| Training MS-A                                  	| 小灰人                            	|
|                 37 	| C          	| 偵察型薩克                              	| EWAC Zack                                      	|                                   	|
|                 37 	| C          	| 基恩                                    	| Ginn                                           	|                                   	|
|                 37 	| C          	| 基恩高機動型                            	| Ginn High Maneuver                             	|                                   	|
|                 37 	| C          	| 薩克II改良型                            	| Zaku II Fz                                     	| 薩改                              	|
|                 37 	| CR         	| 偵察型薩克 (UC)                         	| EWAC Zack (UC)                                 	|                                   	|
|                 37 	| CR         	| 基恩 (豹式裝備)                         	| Ginn                                           	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 38 	| B          	| 亞席瑪                                  	|                                                	| 南瓜                              	|
|                 38 	| B          	| 傑爾古格                                	|                                                	| B豬                               	|
|                 38 	| B          	| 薩克III                                 	|                                                	| 薩3                               	|
|                 38 	| BU         	| 巴烏 (BU)                               	|                                                	| 龍飛                              	|
|                 38 	| C          	| 吉姆特裝型                              	| GM Custom                                      	|                                   	|
|                 38 	| C          	| 鐵人 (遠距離砲擊型)                     	| Tieren (Long-Range  Cannon Type)               	| 砲鐵                              	|
|                 38 	| CR         	| 高性能薩克 (光束步槍)                   	| HiZack (Beam Rifle)                            	|                                   	|
|                 38 	| CR         	| 基拉.德卡 (UC)                          	| Geara Doga (UC)                                	|                                   	|
|                 38 	| CS         	| 吉姆鎮暴型 (修理裝備)                   	| GM Quel (Repair)                               	|                                   	|
|                 38 	| CU         	| 薩伍特 (CU)                             	| ZuOOT (CU)                                     	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 39 	| B          	| 古夫特裝型                              	|                                                	|                                   	|
|                 39 	| B          	| 里傑爾格                                	|                                                	|                                   	|
|                 39 	| B          	| 蓋茲 (指揮官專用機)                     	|                                                	|                                   	|
|                 39 	| B          	| 鋼彈試作1號機 Zephyranthes              	|                                                	| GP01                              	|
|                 39 	| BR         	| 村雨 (渥特菲德專用機)                   	| Murasame (Waldfeld Custom)                     	| 老虎村雨                          	|
|                 39 	| BR         	| 異端鋼彈幻惑機                          	|                                                	| 紫異端                            	|
|                 39 	| BR         	| 德姆騎兵 (DR1巨型複合式發射器)          	|                                                	|                                   	|
|                 39 	| C          	| 高性能薩克特裝型                        	| HiZack Custom                                  	|                                   	|
|                 39 	| CS         	| 鋼球 (修理裝備)                         	| Ball                                           	|                                   	|
|                 39 	| S          	| 新安洲.原石                             	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 40 	| A          	| 蓋亞鋼彈                                	|                                                	| 狗王                              	|
|                 40 	| AR         	| 另類試制型巨劍攻擊E 盧卡斯專用機        	|                                                	| 藍貓                              	|
|                 40 	| AR         	| 杜賓狼 (大型對艦導彈)                   	|                                                	|                                   	|
|                 40 	| AS         	| 亥伯龍鋼彈1號機                         	|                                                	| 海波浪                            	|
|                 40 	| AS         	| Z鋼彈 (光束軍刀裝備)                    	|                                                	| 劍Z JZ 爛線次元刀                 	|
|                 40 	| B          	| 迪傑                                    	|                                                	| DJ                                	|
|                 40 	| C          	| 聯合實訓式                              	| Union Realdo                                   	|                                   	|
|                 40 	| CR         	| 吉姆III (光束軍刀裝備)                  	| GM III (Beam Sabre)                            	|                                   	|
|                 40 	| CU         	| 吉姆加農 (CU)                           	| GM Cannon (CU)                                 	|                                   	|
|                 40 	| SS         	| 全武裝獨角獸鋼彈 (覺醒模式)             	|                                                	| 綠光 綠角                         	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 41 	| AR         	| 劍裝瘟神鋼彈初號機                      	|                                                	|                                   	|
|                 41 	| AS         	| 攻擊鋼彈E IWSP (盧卡斯專用機)           	|                                                	| 白貓                              	|
|                 41 	| BR         	| 亥伯龍G (叢雲劾專用機)                  	|                                                	|                                   	|
|                 41 	| BR         	| 鋼彈試作2號機MLRS裝備                   	|                                                	| GP02 MLRS                         	|
|                 41 	| C          	| 里克.迪亞斯                             	| Rick Dias (Black)                              	|                                   	|
|                 41 	| CR         	| 里克.迪亞斯 (紅)                        	| Rick Dias (Red)                                	|                                   	|
|                 41 	| CS         	| M1異端鋼彈 (修理裝備)                   	| M1 Astray (Repair)                             	|                                   	|
|                 41 	| S          	| 曉鋼彈 大鷲型                           	|                                                	| 曉大鷲                            	|
|                 41 	| SS         	| 無限正義鋼彈                            	| Inifite Justice Gundam                         	| IJ                                	|
|                 41 	| SS         	| 鋼彈 AGE-FX                             	|                                                	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 42 	| B          	| 亞雷克斯 (NT-1)                         	|                                                	|                                   	|
|                 42 	| BS         	| 薩克I (蘭巴拉爾專用機)                  	|                                                	| 蒼色巨星                          	|
|                 42 	| CR         	| 陸戰型吉姆 (光束步槍裝備)               	| GM Ground Type (Beam Rifle)                    	|                                   	|
|                 42 	| CR         	| 傑鋼特裝型                              	| Stark Jegan                                    	| 傑鋼隊長 少了方舟反應爐的斯塔克   	|
|                 42 	| CU         	| 105刃 (CU)                              	| 105 Dagger (CU)                                	|                                   	|
|                 42 	| CU         	| 沙貝特 (CU)                             	| Serpent (CU)                                   	|                                   	|
|                 42 	| CU         	| 高性能葛克 (CU)                         	| Hygog (CU)                                     	|                                   	|
|                 42 	| S          	| F91                                     	|                                                	|                                   	|
|                 42 	| SR         	| 再生鋼彈 (線控式電磁爪)                 	|                                                	| SR再生                            	|
|                 42 	| SR         	| 諾耶.吉爾 (飛彈發射器)                  	|                                                	| SR諾耶                            	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 43 	| B          	| 席古                                    	| Cgue                                           	|                                   	|
|                 43 	| B          	| 陸戰型鋼彈                              	| Gundam Ground Type                             	|                                   	|
|                 43 	| B          	| 鋼彈Ez-8                                	| Gundam Ez8                                     	|                                   	|
|                 43 	| CR         	| 力克.德姆                               	| Rick-Dom                                       	|                                   	|
|                 43 	| CS         	| 寒帶型吉姆 (修理裝備)                   	| GM Cold District Type (Repair)                 	|                                   	|
|                 43 	| CU         	| 薩克II (CU)                             	| Zaku II (CU)                                   	|                                   	|
|                 43 	| S          	| 佩涅羅佩                                	| Penelope                                       	| 天鵝                              	|
|                 43 	| S          	| 重武裝鋼彈改良型 (EW)                   	| Gundam Heavy Arms Custom (EW)                  	|                                   	|
|                 43 	| S          	| Ξ鋼彈                                   	| Xi Gundam                                      	| Ξ (Xi, 克西)  三鋼                	|
|                 43 	| SR         	| 新吉恩克                                	| Neo Zeong                                      	| 大佛                              	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 44 	| B          	| 瑪拉塞                                  	| Marasai                                        	| 瑪拉糕                            	|
|                 44 	| BU         	| 鋼彈Ez-8 (BU)                           	| Gundam Ez8 (BU)                                	|                                   	|
|                 44 	| SR         	| 00 XN Raiser                            	| 00 XN Raiser                                   	|                                   	|
|                 44 	| SR         	| 妖天使鋼彈 (最終決戰式樣)               	| Gundam Harute (Final Mission Type)             	| SR妖天                            	|
|                 44 	| SR         	| 獄天使鋼彈 (最終決戰式樣)               	| Gundam Zabanya (Final Mission Type)            	| SR獄天                            	|
|                 44 	| SR         	| 鋼彈 AGE-3 堡壘型                       	| Gundam AGE-3 Fortress                          	|                                   	|
|                 44 	| SS         	| 00 Raiser                               	| 00 Raiser                                      	|                                   	|
|                 44 	| SS         	| 正義鋼彈 (流星裝備)                     	| Justice Gundam (Meteor)                        	|                                   	|
|                 44 	| SS         	| 星創攻擊鋼彈 (RG系統)                   	| Star Build Strike Gundam (RG System)           	|                                   	|
|                 44 	| SS         	| 鋼彈 AGE-3 軌道型                       	| Gundam AGE-3 Orbital                           	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 45 	| CU         	| 加爾波帝β (CU)                          	| Galbaldy β (CU)                                	| β (Beta, 貝塔)                    	|
|                 45 	| CU         	| 尼莫 (CU)                               	| Nemo (CU)                                      	|                                   	|
|                 45 	| SR         	| 全武裝型獨角獸鋼彈                      	| Full Armor Unicorn Gundam                      	| 紅光 FAUC                         	|
|                 45 	| SR         	| 攻擊自由鋼彈 (流星裝備)                 	| Strike Freedom Gundam (Meteor)                 	|                                   	|
|                 45 	| SR         	| 沙薩比 (腹部擴散米加粒子炮裝備)         	| Sazabi (Spread Mega Particle Cannon)           	| SR沙薩比 SSB                      	|
|                 45 	| SR         	| 智天使鋼彈GNHW/R                        	| Cherudim Gundam GNHW/R                         	| SR智天                            	|
|                 45 	| SR         	| 無限正義鋼彈 (流星裝備)                 	| Infinite Justice Gundam (Meteor)               	|                                   	|
|                 45 	| SR         	| 維根機兵希德                            	| Vagan Gear Sid                                 	|                                   	|
|                 45 	| SR         	| 熾天使鋼彈GNHW/B                        	| Seravee Gundam GNHW/B                          	|                                   	|
|                 45 	| SR         	| Hi-ν鋼彈                                	| Hi-ν Gundam                                    	| Hi Nu  海牛                       	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 46 	| BR         	| 正義女神鋼彈                            	| Gundam Astraea                                 	|                                   	|
|                 46 	| BR         	| 松永真專用薩克II                        	| Zaku II (Shin Matsunaga Custom)                	| 白狼                              	|
|                 46 	| BR         	| 強尼萊汀專用薩克Ⅱ                       	| Zaku II (Johnny Ridden Custom)                 	| 真紅閃電                          	|
|                 46 	| BR         	| Union Flag (天人式樣)                   	| Union Flag (Celestal Being Version)            	| 聯合旗幟式                        	|
|                 46 	| BS         	| 黑色三連星專用高機動型薩克II            	| Zaku II R-1A (Black Tri-Star Custom)           	|                                   	|
|                 46 	| BS         	| 薩克II (白色食人魔)                     	| Zaku II (White Ogre)                           	|                                   	|
|                 46 	| BS         	| 薩克II F2 (諾耶.彼得專用)               	| Zaku II F-2 (Newen Bitter Custom)              	|                                   	|
|                 46 	| S          	| 黑暗物質能天使鋼彈                      	| Gundam Exia Dark Matter                        	|                                   	|
|                 46 	| SR         	| 全裝甲百式改                            	| Full Armor Hyaku Shiki Custom                  	| FA百改                            	|
|                 46 	| SR         	| 骨十字鋼彈X1 全覆式披風                 	| Cross Bone Gundam X1 Full Cloth                	| X1FC                              	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 47 	| AS         	| 夏亞專用茲寇克/亞凱                     	| Z'Gok (Char Custom) / Acguy                    	|                                   	|
|                 47 	| AS         	| 翔翼型攻擊鋼彈 (穆拉 佛拉達專用)        	| Aile Strike (Mu La Flaga Custom)               	| 專用翔翼                          	|
|                 47 	| BS         	| <真>劉備鋼彈                            	| Liu Bei Gundam (Animation Ver.)                	|                                   	|
|                 47 	| BS         	| 阿普撒拉斯I                             	| Apsalus I                                      	| 普1 包1 饅頭1                     	|
|                 47 	| BS         	| 重斬幽靈薩克 (伊薩克專用)               	| Zaku Phantom (Slash Wizard) (Yzak Custom)      	|                                   	|
|                 47 	| BS         	| 異端鋼彈金色機天                        	| Astray Gold Amatsu                             	| 機天 金天                         	|
|                 47 	| BS         	| 薩克I狙擊型 (尤姆·卡克斯專用機)         	| Zaku I Sniper Type (Skirks Custom)             	|                                   	|
|                 47 	| S          	| 00 Quanta                               	| 00 Quan[T]                                     	| 00 量子型                         	|
|                 47 	| S          	| 重生鳳凰鋼彈                            	| Gundam Fenice Rinascita                        	|                                   	|
|                 47 	| S          	| 骨十字鋼彈魔王                          	| Cross Bone Gundam Maoh                         	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 48 	| AR         	| 勇者式一般用試驗機                      	|                                                	|                                   	|
|                 48 	| AS         	| 鋼彈/薩克II (夏亞專用)                  	| Gundam / Zaku II (Char Custom)                 	|                                   	|
|                 48 	| B          	| 梅塔斯                                  	|                                                	| 飛黃                              	|
|                 48 	| B          	| Over Flag                               	| Over Flag                                      	| 超限旗幟式                        	|
|                 48 	| BR         	| 安克夏                                  	|                                                	| 綠瓜                              	|
|                 48 	| C          	| 特拉傑                                  	| Dra-C                                          	|                                   	|
|                 48 	| C          	| 薩克II                                  	| Zaku II                                        	|                                   	|
|                 48 	| CR         	| 105刃屠殺式                             	| 105 Slaughter Dagger                           	| 屠殺刃                            	|
|                 48 	| CS         	| 砲筒型105刃                             	| Gunbarrel Dagger                               	|                                   	|
|                 48 	| SS         	| V2鋼彈 Assult Buster                    	|                                                	| V2鋼彈突擊爆擊型 V2AB             	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 49 	| A          	| 鋼彈 (磁氣覆膜)                         	|                                                	| 爆頭                              	|
|                 49 	| C          	| 尼羅                                    	| Nero                                           	|                                   	|
|                 49 	| C          	| 吉姆                                    	| GM                                             	|                                   	|
|                 49 	| C          	| 吉姆狙擊型II                            	| GM Sniper II                                   	|                                   	|
|                 49 	| C          	| 吉姆鎮暴型                              	| GM Quel                                        	|                                   	|
|                 49 	| C          	| 沙貝特                                  	| Serpent                                        	|                                   	|
|                 49 	| C          	| 迪因                                    	| Dinn                                           	|                                   	|
|                 49 	| C          	| 基拉.德卡                               	| Geara Doga                                     	|                                   	|
|                 49 	| C          	| 斬擊型薩克戰士                          	| Zaku Warrior (Slash Wizard)                    	|                                   	|
|                 49 	| CU         	| 重砲型薩克戰士 (CU)                     	| Zaku Warrior (Gunner Wizard) (CU)              	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 50 	| AR         	| 天翔龍孔明ν鋼彈                         	|                                                	|                                   	|
|                 50 	| C          	| 人魚鋼彈                                	| Mermaid Gundam                                 	|                                   	|
|                 50 	| C          	| 量產型鋼坦克                            	| Guntank Mass Production Type                   	|                                   	|
|                 50 	| C          	| 德南.格                                 	| De'Nan-Gei                                     	|                                   	|
|                 50 	| CR         	| 薩克I (指揮官專用機)                    	| Zaku I (Commander Type)                        	|                                   	|
|                 50 	| CR         	| 薩克II改良型 (火箭砲裝備)               	| Zaku II Fz (Zaku Bazooka)                      	|                                   	|
|                 50 	| CU         	| 長刃 (CU)                               	| Long Dagger (CU)                               	|                                   	|
|                 50 	| S          	| 加迪拉薩                                	|                                                	|                                   	|
|                 50 	| S          	| 鋼彈雷吉爾斯                            	|                                                	|                                   	|
|                 50 	| SR         	| 00鋼彈 (七劍裝備)                       	|                                                	| 007                               	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 51 	| A          	| GN弓兵                                  	| GN Archer                                      	|                                   	|
|                 51 	| BS         	| 馬拉塞 (鬥士步槍裝備)                   	|                                                	|                                   	|
|                 51 	| C          	| 長刃                                    	| Long Dagger                                    	|                                   	|
|                 51 	| CR         	| 德南.格 (黑之戰隊)                      	| De'Nan-Gei (Black Vanguard)                    	|                                   	|
|                 51 	| S          	| 剎帝利修復型                            	|                                                	| 爛椒                              	|
|                 51 	| S          	| 黃金自由鋼彈                            	| Freedom Gundam (Campaign Gold)                 	|                                   	|
|                 51 	| S          	| 傳說鋼彈                                	| Legend Gundam                                  	|                                   	|
|                 51 	| S          	| 新安州                                  	| Sinanju                                        	|                                   	|
|                 51 	| S          	| 鋼彈試作3號機 Denbrobium                	|                                                	| GP03D                             	|
|                 51 	| S          	| Turn X                                  	| Turn X                                         	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 52 	| B          	| 德萊森                                  	| Dreissen                                       	|                                   	|
|                 52 	| BS         	| 夏亞專用薩克II                          	| Zaku II (Char Custom)                          	|                                   	|
|                 52 	| C          	| 吉姆加農                                	| GM Cannon                                      	|                                   	|
|                 52 	| C          	| 吉姆加農II                              	| GM Cannon II                                   	|                                   	|
|                 52 	| C          	| 高性能薩克                              	| HiZack                                         	|                                   	|
|                 52 	| C          	| 鋼加農                                  	| Guncannon                                      	|                                   	|
|                 52 	| CR         	| 鐵人 (指揮官宇宙型)                     	| Tieren (Space Commander Type)                  	|                                   	|
|                 52 	| CU         	| 巴庫 (CU)                               	| BuCue (CU)                                     	| CU狗                              	|
|                 52 	| CU         	| 吉姆加農II (CU)                         	| GM Cannon II (CU)                              	|                                   	|
|                 52 	| CU         	| 鋼加農 (CU)                             	| Guncannon (CU)                                 	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 53 	| C          	| 吉姆狙擊特裝型                          	| GM Sniper Custom                               	|                                   	|
|                 53 	| C          	| 吉姆指揮型 (宇宙戰式樣)                 	| GM Command (Space Type)                        	|                                   	|
|                 53 	| C          	| 吉姆寒冷地式樣                          	| GM Cold Districts Type                         	|                                   	|
|                 53 	| C          	| 吉姆II (幽谷式樣)                       	| GM II (A.E.U.G)                                	|                                   	|
|                 53 	| C          	| 吉姆II (迪坦斯式樣)                     	| GM II (Titans)                                 	|                                   	|
|                 53 	| C          	| 吉姆III                                 	| GM III                                         	|                                   	|
|                 53 	| C          	| 陸戰型吉姆                              	| GM Ground Type                                 	|                                   	|
|                 53 	| CU         	| 吉姆狙擊特裝型 (CU)                     	| GM Sniper Custom (CU)                          	| 金鎗客                            	|
|                 53 	| CU         	| 吉姆III (CU)                            	| GM III (CU)                                    	|                                   	|
|                 53 	| CU         	| 陸戰型吉姆 (CU)                         	| GM Ground Type (CU)                            	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 54 	| C          	| 力克.德姆II                             	| Rick-Dom II                                    	|                                   	|
|                 54 	| C          	| 加爾波帝 β                              	| Galbaldy β                                     	|                                   	|
|                 54 	| C          	| 卡薩C                                   	| Gaza C                                         	|                                   	|
|                 54 	| C          	| 古夫飛行試作型                          	| Gouf Flight Type                               	|                                   	|
|                 54 	| C          	| 里歐 (地上型)                           	| Leo Ground Type                                	|                                   	|
|                 54 	| C          	| 茲沙                                    	| Zssa                                           	|                                   	|
|                 54 	| C          	| 茲寇克                                  	| Z'Gok                                          	|                                   	|
|                 54 	| C          	| 高性能葛克                              	| Hygog                                          	|                                   	|
|                 54 	| C          	| 德姆熱帶型                              	| Dom Tropen                                     	|                                   	|
|                 54 	| C          	| 薩伍特                                  	| ZuOOT                                          	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 55 	| C          	| 艾亞利茲                                	| Aries                                          	|                                   	|
|                 55 	| C          	| 傑剛A型                                 	| Jegan (Type R)                                 	|                                   	|
|                 55 	| C          	| 傑剛M型                                 	| Jegan (Type M)                                 	|                                   	|
|                 55 	| C          	| 赫維鋼                                  	| Heavy Gun                                      	|                                   	|
|                 55 	| C          	| 聯合旗幟式                              	| Union Flag                                     	|                                   	|
|                 55 	| C          	| 鐵人 (宇宙型)                           	| Tieren (Space Type)                            	|                                   	|
|                 55 	| C          	| 鐵人 (陸戰型)                           	| Tieren (Ground Type)                           	|                                   	|
|                 55 	| C          	| AEU制定式                               	|                                                	|                                   	|
|                 55 	| CU         	| 攻擊刃 (CU)                             	| Strike Dagger (CU)                             	|                                   	|
|                 55 	| CU         	| 里歐 (地上型) (CU)                      	| Leo Ground Type (CU)                           	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 56 	| A          	| 阿普撒拉斯II                            	| Apsalus II                                     	| 普2 包2 饅頭2                     	|
|                 56 	| B          	| 甘寧肯普法                              	| Gan Ning Kampfer                               	| 鯊魚                              	|
|                 56 	| B          	| 薩謝斯專用AEU制定式(莫利亞試作型)       	| AEU Enact Custom Moralia Type                  	|                                   	|
|                 56 	| BR         	| 里澤爾C型A單元(雷比爾將軍號配式)        	| ReZel Type C (GR)(Defenser a-Unit)             	|                                   	|
|                 56 	| BR         	| 槍擊型薩克勇士(露娜瑪利亞專用)          	| Zaku Warrior (Gunner Wizard)(Lunamaria Custom) 	|                                   	|
|                 56 	| BS         	| 迪因(克魯澤專用)                        	| Dinn (Rau Le Creuset Custom)                   	|                                   	|
|                 56 	| BS         	| 薩克II(德滋爾專用)                      	| Zaku II (Dozle Custom)                         	|                                   	|
|                 56 	| CS         	| 亞凱(修理裝備)                          	| Acguy (Repair)                                 	|                                   	|
|                 56 	| CS         	| 薩克加農                                	| Zaku Cannon                                    	|                                   	|
|                 56 	| SR         	| 獨角獸鋼彈2號機命運女神                 	| Unicorn Gundam 02 Banshee Norn                 	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 57 	| A          	| 全装甲鋼彈MK-II                         	| Full Armor Gundam MK II                        	| FAMK2                             	|
|                 57 	| AR         	| 阿斯特龍鋼彈                            	| Gundam Ashtaron                                	|                                   	|
|                 57 	| AS         	| 華沙哥鋼彈                              	| Gundam Virsago                                 	|                                   	|
|                 57 	| B          	| 飛翼鋼彈                                	| Wing Gundam                                    	| 小飛翼                            	|
|                 57 	| CS         	| 吉姆加農II(幽谷式樣)                    	| GM Cannon II (A.E.U.G)                         	|                                   	|
|                 57 	| S          	| 阿斯特龍鋼彈˙隱藏者                     	| Gundam Ashtaron Hermitcrab                     	|                                   	|
|                 57 	| S          	| 華沙哥鋼彈˙破壞者(胸部破壞砲)           	| Gundam Virsago Chestbreak                      	|                                   	|
|                 57 	| S          	| V2鋼彈暴擊型                            	| V2 Buster Gundam                               	| V2B                               	|
|                 57 	| S          	| Z II                                    	| Z II                                           	| Z2                                	|
|                 57 	| SS         	| 七槍型智天使鋼彈                        	| Cherudim Gundam Saga                           	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 58 	| S           	| 須左之男                                	| SUSANOWO                                          |                                   	|
|                 58 	| BR          	| 卡普爾(柯連專用機)	                 	|  			                      					|                                   	|
|                 58 	| AS         	| 漆黑攻擊鋼彈(二聯裝線性炮)	  			| 					    							|                                   	|
|                 58 	| SS         	| 攻擊自由鋼彈                   			| Strike Freedom Gundam                		     	|                                   	|
|                 58 	| A         	| 獨角獸鋼彈	                           	| Unicorn Gundam                     		     	|                                   	|
|                 58 	| A          	| X鋼彈	                                	| X Gundam                                        	|                                   	|
|                 58 	| AR          	| 能天使鋼彈R2                            	| Gundam EXIA RepairII                            	|                                   	|
|                 58 	| AR         	| 雪崩型能天使鋼彈                       	| Gundam Avalanche EXIA                           	|                                   	|
|                 58 	| AR         	| 雪崩突進型能天使鋼彈                     	| Gundam Avalanche EXIA Dash                       	|                                   	|
|                 58 	| AR         	| 1鋼彈               	                	| 1 Gundam                                      	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 59 	| AS         	| 鋼彈X魔王	                            	| Gundam X MAOH                                    	|                                   	|
|                 59	| AR         	| 戰國異端鋼彈                             	| Sengoku Astray Gundam                         	|                                   	|
|                 59 	| AR         	| 翠綠暴風鋼彈（二連裝光束步槍）            	| 	                          		      	|                                   	|
|                 59 	| BR        	| 飛翼鋼彈EW	                           	| Wing Gundam (EW)                                	|                                   	|
|                 59 	| BR           	| 死神鋼彈EW                             	| Gundam Deathscythe(EW)                           	|                                   	|
|                 59 	| BR         	| 神龍鋼彈EW                             	| Shenlong Gundam (EW)                             	|                                   	|
|                 59 	| BR         	| 沙漠鋼彈EW                              	| Gundam Sandrock (EW)                          	|                                   	|
|                 59 	| BR         	| 重武裝鋼彈EW                           	| Gundam Heavy Arms(EW)                           	|                                   	|
|                 59 	| SS         	| ν鋼彈HWS	                            	| ν Gundam HWS                                     	|                                   	|
|                 59 	| S          	| 阿爾瓦托雷                            	| Alvatore                               		  	|                                   	|
|                    	|            	|                                         	|                                                	|                                   	|
|                 60 	| AR         	| 鋼彈F91幻象	                            	|				                                   	|                                   	|
|                 60	| AR         	| ZETA PLUS A1                          	   	| 						                         	|                                   	|
|                 60 	| S         	| GN Arms Type-E 能天使鋼彈                    	|			                         		      	|                                   	|
|                 60 	| S      	  	| GN Arms Type-D 力天使鋼彈	                   	| 				                                	|                                   	|
|                 60 	| S           	| 獨角獸鋼彈二號機 報喪女妖(NT-D)              	| 						                           	|                                   	|
|                 60 	| C         	| 鋼坦克                            		 	| 					                             	|                                   	|
|                 60 	| AS         	| 另類試制型炮裝攻擊E盧卡斯專用機             	| 						                          	|                                   	|
|                 60 	| C         	| 薩克II                         			 	| 						                           	|                                   	|
|                 60 	| CR         	| 力克‧德姆	                       		     	| 			                                     	|                                   	|
|                 60 	| A          	| 艾爾美斯                          		  	| 			                               		  	|                                   	|
|                    	|            	|                  		                       	|                                                	|                                   	|
