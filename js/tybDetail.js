// JavaScript Document
$(function(){
	$(".why_icon").each(function(i) {
		var currEl = $(this);
		currEl.hover(function(){
			//alert(currEl.parent().next().html())
			currEl.parent().next().find(".ui-pop-con").show();
		},function(){
			currEl.parent().next().find(".ui-pop-con").hide();
		})
	});
})
