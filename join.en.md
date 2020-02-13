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


### Registration is open


New Registration method now online!
Invite your friends join together!

[Discord invite link](https://discord.gg/b2VqaNb)


<hr/>

### bot command generator:

#### register account  !reg:

<div class="input-group">
	<span class="input-group-addon">login account</span><input id="acc" onkeyup="gencmd(this)" type="text" class="form-control" placeholder="acc001" >
</div>
<div class="input-group">
	<span class="input-group-addon">login password</span><input id="pwd" onkeyup="gencmd(this)" type="text" class="form-control" placeholder="pwd123" >
</div>
<div class="input-group">
<span class="input-group-addon">in-game nickname</span><input id="nick" onkeyup="gencmd(this)" type="text" class="form-control" placeholder="MSGO-IMBA" >
</div>

<hr/>

<div class="input-group"><span class="input-group-addon">register command</span><input id="reg" type="text" class="form-control" placeholder="!reg <acc> <pwd> <nick>" readonly><span class="input-group-btn"><button class="btn btn-default" type="button" onclick="cp(this)">copy</button></span></div>

<hr/>
<script type="text/javascript">
function gencmd(ele){
	var acc = document.querySelector('#acc').value;
	var pwd = document.querySelector('#pwd').value;
	var nick = document.querySelector('#nick').value;
	var all = '!reg '+ acc +' '+ pwd +' '+ nick;
	document.querySelector('#reg').value = all;
}
function cp(ele){
	var e = document.querySelector('#reg');
	e.select();
	e.setSelectionRange(0, 99999);
	document.execCommand("copy");
}
</script>



### What could you get if join now:

ps.**first 6 page empty** for player place their units, other units **start from page 7**~~~

![units](GOnlineScreenShot_20190527_165042.jpg)

