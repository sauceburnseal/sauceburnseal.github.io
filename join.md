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

<hr/>

### bot指令產生器:

#### 註冊帳號!reg:
<form role="form" data-toggle="validator">
<div class="form-group"><div class="input-group"><span class="input-group-addon">登入帳號</span><input id="acc" pattern="^[A-Za-z0-9]{1,}$" maxlength="12" onkeyup="gencmd(this)" type="text" class="form-control" placeholder="acc001" required></div><div class="help-block">最多12碼, 只可英文&數字, 區分大小寫</div></div>

<div class="form-group"><div class="input-group"><span class="input-group-addon">登入密碼</span><input id="pwd" pattern="^[A-Za-z0-9]{4,14}$" maxlength="14" onkeyup="gencmd(this)" type="text" class="form-control" placeholder="pwd123" required></div><div class="help-block">最少4碼, 最多14碼, 只可英文&數字, 區分大小寫</div></div>

<div class="form-group"><div class="input-group"><span class="input-group-addon">遊戲暱稱(頭上的)</span><input id="nick" pattern="^[^\s]+$" maxlength="16" onkeyup="gencmd(this)" type="text" class="form-control" placeholder="MSGO-IMBA" required></div><div class="help-block">不可包含空白</div></div>

</form>
<hr/>
<div class="input-group"><span class="input-group-addon">註冊指令</span><input id="reg" type="text" class="form-control" placeholder="!reg <acc> <pwd> <nick>" readonly><span class="input-group-btn"><button class="btn btn-default" type="button" onclick="cp(this)">複製</button></span></div>
<hr/>
<script src="validator.min.js" integrity="sha256-dHf/YjH1A4tewEsKUSmNnV05DDbfGN3g7NMq86xgGh8=" crossorigin="anonymous"></script>
<script type="text/javascript">
var form = 1;
var ok = 0;
function gencmd(ele){
if(form){
	$('form').validator().on('valid.bs.validator', function (e) {
		ok = 1;
	})
	form = 0;
	return
}
if(ok){
	var acc = document.querySelector('#acc').value;
	var pwd = document.querySelector('#pwd').value;
	var nick = document.querySelector('#nick').value;
	var all = '!reg '+ acc +' '+ pwd +' '+ nick;
	document.querySelector('#reg').value = all;
}
}
function cp(ele){
	var e = document.querySelector('#reg');
	e.select();
	e.setSelectionRange(0, 99999);
	document.execCommand("copy");
}
</script>

### 現階段加入後能獲得:

ps.**前6頁留空**是為了方便玩家放置愛機, 請從**第7頁開始找機體**~~~

![機庫圖](GOnlineScreenShot_20190527_165042.jpg)

