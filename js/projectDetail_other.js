// JavaScript Document
/*圆形进度条*/
$(function() {
    $('.circle').each(function(index, el) {
        var num = $(this).find('span').text() * 3.6;
        if (num<=180) {
/*			if(num<=108){
				$(this).find('.right_copy').css('transform', "rotate(" + -num + "deg)");
			}else{
				$(this).find('.right_copy').css('transform', "rotate(" + -108 + "deg)");
*/				$(this).find('.right_p').css('transform', "rotate(" + num + "deg)");
			//}
        } else {
			//$(this).find('.right_copy').css('transform', "rotate(" + -108 + "deg)");
            $(this).find('.right_p').css('transform', "rotate(180deg)");
            $(this).find('.left_p').css('transform', "rotate(" + (num - 180) + "deg)");
        };
    });
	
	$(".why_icon").each(function(i) {
		var currEl = $(this);
		currEl.hover(function(){
			//alert(currEl.parent().next().html())
			currEl.parent().next().find(".ui-pop-con").show();
		},function(){
			currEl.parent().next().find(".ui-pop-con").hide();
		})
	});
	
	var isnh = false;
	$(".rightTr").click(function(){
		if(!isnh){
			$(".currInfo_nhsyl").css("opacity","1");
			$(".currInfo_nhsyl").css("left","24px");
			//alert($(".currInfo_nhsyl").css("left"))
			$(".currInfo_ljsyl").css("left","184px");
			isnh = true;
			setTimeout(function(){
				$(".currInfo_ljsyl").css("left","-184px");
				$(".currInfo_ljsyl").css("opacity","0");
			},100);
		}else{
			$(".currInfo_ljsyl").css("opacity","1");
			$(".currInfo_ljsyl").css("left","24px");
			$(".currInfo_nhsyl").css("left","184px");
			isnh = false;
			setTimeout(function(){
				$(".currInfo_nhsyl").css("left","-184px");
				$(".currInfo_nhsyl").css("opacity","0");
			},100);
		}
	})
	$(".leftTr").click(function(){
		if(!isnh){
			$(".currInfo_nhsyl").css("opacity","1");
			$(".currInfo_nhsyl").css("left","24px");
			$(".currInfo_ljsyl").css("left","-184px");
			isnh = true;
			setTimeout(function(){
				$(".currInfo_ljsyl").css("left","184px");
				$(".currInfo_ljsyl").css("opacity","0");
			},100);
		}else{
			$(".currInfo_ljsyl").css("opacity","1");
			$(".currInfo_ljsyl").css("left","24px");
			$(".currInfo_nhsyl").css("left","-184px");
			isnh = false;
			setTimeout(function(){
				$(".currInfo_nhsyl").css("left","184px");
				$(".currInfo_nhsyl").css("opacity","0");
			},100);
		}
	})
});


