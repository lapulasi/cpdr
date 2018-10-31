// JavaScript Document
$(function(){
	/*$(".downList").hover(function(){
		$(this).find("div").show();
		$(this).css("box-shadow","0 0 10px #e5e9ec");
	},
	function(){
		$(this).find("div").hide();
		$(this).css("box-shadow","none")
	});*/
	
	
	$(".tnTabContent table tr:first-child td").hover(
		/*function(){
			$(".tnTabContent table tr:first-child td").find("img").css("opacity",0);
			$(this).find("img").css("opacity",1);
		},function(){
			$(this).find("img").css("opacity",0);
		}*/)
	var isFirstClick = true;	
	$(".tnTabContent tr:first-child td").click(function(){
		var $this = $(this);
		$(".tnTabContent table tr:first-child td").find("img").css("opacity",0);
		if($this.hasClass("hasIcon")){
			if(isFirstClick){
				$this.find("img").css("opacity",1);
				isFirstClick = false;
			}else{
				$this.find("img").css("opacity",1);
				$this.find("img").attr("src","images/down.png");
				$this.removeClass("hasIcon");
			}
		}else{
			$(this).find("img").attr("src","images/up.png");
			$(this).addClass("hasIcon");
			$(this).find("img").css("opacity",1);
		}
	});
})