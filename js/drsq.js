// JavaScript Document
$(function(){
	$("#sjld").sjld("#shenfen","#chengshi","#quyu");
	
	$(".dr_lable span").click(function(){
		if($(this).hasClass("span_focus")){
			$(this).removeClass("span_focus");
			$(this).css("color","#999");
			$(this).css("border","1px solid #c4c4c4");
		}else{
			$(this).addClass("span_focus");
			$(this).css("color","#fff");
			$(this).css("border","1px solid #379ee5");
		}
	})
	$("input,textarea").focus(function(){
		$(this).css("color","#666");
		$(this).css("fontSize","14px;");
	})
	$("input,textarea").blur(function(){
		$(this).css("color","#666");
		$(this).css("fontSize","14px;");
	})
})
