$(document).ready(function(){
	$(".tnTab li a").click(function(){
			var n=$(".tnTab li a").index($(this));
			$(".tnTabContent").eq(n).addClass("current").siblings().removeClass("current"),
			$(".tnTab li").eq(n).addClass("current").siblings().removeClass("current")}),
			$(".tips").hover(function(){$(this).next(".tips-shadow").show()
		}
	);
});