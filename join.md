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


### 註冊已開啟

新的註冊方式已經上線囉 快找以前的戰友一同玩樂吧

[Discord邀請連結](https://discord.gg/b2VqaNb)

[~~點此(google表單)~~(舊表單目前已關閉, 請改用新方式註冊)](https://docs.google.com/forms/d/e/1FAIpQLSckJFNTx3hw9qQC1FuxM9dkVvExda9fR18dowrv2EQVHxLJZA/viewform)

### 現階段加入後能獲得:

ps.**前6頁留空**是為了方便玩家放置愛機, 請從**第7頁開始找機體**~~~

![機庫圖](GOnlineScreenShot_20190527_165042.jpg)

