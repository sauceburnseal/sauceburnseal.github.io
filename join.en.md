<select class="btn lang" onchange="setLang(this)" style="display: block; position: absolute; z-index: 50;right:0;">
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


### What could you get if join now:

ps.**first 6 page empty** for player place their units, other units **start from page 7**~~~

![units](GOnlineScreenShot_20190527_165042.jpg)

