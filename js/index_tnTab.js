$(document).ready(function(){
	$(".tnTab_index li a").click(function(){
			var n=$(".tnTab_index li a").index($(this));
			DrawCharts_sz(n);
			$(".tnTabContent_index").eq(n).addClass("current").siblings().removeClass("current"),
			$(".tnTab_index li").eq(n).addClass("current").siblings().removeClass("current")})
});