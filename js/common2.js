
/*
$(function() {

	// 固定导航
	(function(){
		var fixedMenu = $( '#fixed-menu' );
		$(window).on( 'resize scroll' , function(){
			_showMenu();
		});
		function _showMenu(){
			var t = document.documentElement.scrollTop || document.body.scrollTop;
			if( t >= 32 ){
				fixedMenu.show();
			}else{
				fixedMenu.hide();
			}
		}
		_showMenu();
	})();
});*/

window.onscroll = function () {
	var elements=document.getElementById("fixed-menu");
	if (document.documentElement.scrollTop + document.body.scrollTop > 32) {
		elements.style.display = "block";
		document.getElementById("drListTitle").style.top="64px";
		document.getElementById("drListTitle").style.position="fixed";
	}
	else { 
		elements.style.display = "none";
		document.getElementById("drListTitle").style.top="98px";
		document.getElementById("drListTitle").style.position="absolute";
	}
} 
