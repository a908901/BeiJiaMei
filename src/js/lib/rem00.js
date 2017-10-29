(function(win){
	var docEl = win.document.documentElement;
	var timer = '';
	function changeRem(){
		var width = docEl.getBoundingClientRect().width;
		if (width > 2048)
		{
			width = 2048;
		}else if( width < 768){
			width = 768;
		}
		var fontS = width/10;
		docEl.style.fontSize = fontS + "px";
	}
	win.addEventListener("resize",function(){
		clearTimeout(timer);
		timer = setTimeout(changeRem,30);
	},false);
	
	win.addEventListener("pageshow",function(e){
		if (e.persisted)
		{
			clearTimeout(timer);
			timer = setTimeout(changeRem,30);
		}
	},false);
	changeRem();
})(window)