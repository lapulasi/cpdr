// JavaScript Document
/*视频框相关*/		
var media=document.getElementById("layshipin");
function vedio_start(){
	media.play();
	document.getElementById("popWindow").style.display="block";
	document.getElementById("shipin").style.display="block";
}
function hide_div(){
	media.pause();
	document.getElementById("popWindow").style.display="none";
	document.getElementById("shipin").style.display="none";
}

/*banner图片切换*/
$(document).ready(function(){
	/*左右箭头*/
	$(".main_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
	},function(){
		$("#btn_prev,#btn_next").fadeOut()
	});
	
	$dragBln = false;/*判断是否拖拽*/
	
	$(".main_image").touchSlider({
		flexible : true,
		speed : 800,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".flicking_con a"),
		counter : function (e){
			$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	$(".main_image").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_image").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_image a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	/*通过给向下箭头绑定点击事件实现轮播*/
	timer = setInterval(function(){
		$("#btn_next").click();
	}, 3000);
	
	$(".main_visual").hover(function(){
		clearInterval(timer);/*鼠标在图片上则清除自动轮播*/
	},function(){
		timer = setInterval(function(){
			$("#btn_next").click();/*鼠标移开恢复轮播功能*/
		},3000);
	});
	
	/*当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。*/
	$(".main_image").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 3000);
	});
/*	$(".wx_top a").hover(function(){
		$(".wx_topimg").show();
	},function(){
		$(".wx_topimg").hide();
	})
	$(".gzwx span").hover(function(){
		$(".wx_gz").show();
	},function(){
		$(".wx_gz").hide();
	})
*/
	var temp_time=-1;
	var pos = 0;
    $(".hqgl dl").each(function(index, element) {
        var $this =  $(this);
		$this.find("dt").hover(function(){
			if(index!=3){
				$(".hqgl dl:last-child dt").removeClass("add_line");
				$(".hqgl dl:last-child dt").addClass("less_line");
			}else{
				$(".hqgl dl:last-child dt").addClass("add_line");
				$(".hqgl dl:last-child dt").removeClass("less_line");
			}
		    $(".hqgl dl dd").removeClass('on');
		    $this.find("dd").addClass("on");
			clearTimeout(temp_time);
		    temp_time = DrawCharts_sz(index);
			pos = $this.index();
		})
		clearTimeout(temp_time);
		/*temp_time = setInterval(function(){
			DrawCharts_sz(pos);
			//alert("index=="+pos);
		},15000)*/
    });
	$(".hqgl dl dt div").hover(function(){
		$(this).find(".current").addClass("hqSlideUp_animate");
		$(this).find(".next").addClass("hqSlidedown_animate");
	})
});

