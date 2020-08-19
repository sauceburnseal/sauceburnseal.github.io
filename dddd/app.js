'use strict';

function calc(count) {
	var lim = Math.sqrt(count)
	return Math.ceil(lim)
}

function updateIFrame() {
	var wins = $('.window')
	var screen = $('div.block.content')
	var count = wins.length - 1 // 1 is template
	var div = 1

	var ww = window.innerWidth
	var wh = window.innerHeight
	if (ww > wh) {
		div = calc(count)
		$('body').css('height', '100vh')
	} else {
		$('body').css('height', '')
	}

	var iframe = wins.find('iframe')
	var hdr = wins.find('.header')
	var wvw = Math.floor(ww / div) - (div*4)
	wins.width(wvw)

	var hdrh = (hdr.length)? hdr[0].offsetHeight : 0;
	var w = wvw
	var h2 = wh / Math.ceil(count / div)
	var h = (w * 9.0 / 16.0)
	var h1 = h + hdrh
	h = (h1 > h2)? h2 : h
	iframe.height(h-hdrh - 2)
	console.log('updateIFrame()', ww, wh, wins, count, w, h, wvw)
}

function tryUrl(url) {
	switch (true) {
	case /youtube.com\//.test(url) :
		var vid = url.match(/v=([a-zA-Z0-9\-_]+)/)
		if (vid && vid.length == 2) {
			return 'https://www.youtube.com/embed/' + vid[1] + '?autoplay=1'
		}
		break;
	case /twitch.tv\//.test(url) :
		var vid = url.match(/videos\/([0-9]+)/)
		if (vid && vid.length == 2) {
			return 'http://player.twitch.tv/?video=' + vid[1]
		}

		var channel = url.match(/twitch.tv\/([a-zA-Z0-9\-_]+)/)
		if (channel && channel.length == 2) {
			return 'http://player.twitch.tv/?channel=' + channel[1]
		}
		break;
	}
	return url
}

function init(){
	// modal
	$('.modal > .content .close, .modal > .content .cancel.btn').on('click', function(e){
		$('.modal').css('display', 'none')
	})
	$('.modal').on('click', function(e){
		if(e.target == this) $('.modal').css('display', 'none')
	})

	var goUrl = function(e){
		var header = $(this).parent()
		var url = header.find('input.url').val()
		console.log('goto()', e, this, url)
		header.parent().find('iframe').attr('src', tryUrl(url))
	}
	var closeTab = function(e){
		var tab = $(this).parent().parent()
		console.log('closeTab()', e, this)
		tab.remove()
		updateIFrame()
	}

	$('#add-tab').on('click', function(e){
		$('#new-tab').css('display', 'block')
	})
	$('#open-tab').on('click', function(e){
		$('.modal').css('display', 'none')
		var input = $(this).parent().find('input')
		var url = input.val()
		input.val('')

		var tmpl = $('#tmpl > div.window').clone()
		tmpl.appendTo($('div.block.content'))
		tmpl.find('iframe').attr('src', tryUrl(url))
		tmpl.find('input.url').val(url)
		tmpl.find('span.go.btn').on('click', goUrl)
		tmpl.find('span.close.btn').on('click', closeTab)
		console.log('open-tab()', url, tryUrl(url))

		updateIFrame()
	})

	$('.window > .header > span.go.btn').on('click', goUrl)
	$('.window > .header > span.close.btn').on('click', closeTab)
	$(window).on('resize', updateIFrame)
}

$(window).on('load', function(e) {
	init()
	updateIFrame()
})

