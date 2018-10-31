// JavaScript Document
$(function(){
	var l_index=0;
	var index_abc=1;
	$(".abc").click(function(){
		var $this=$(this);
		index_abc=$this.find("a").html();
		l_index = parseInt(index_abc-1);
		if($this.hasClass("current"));
		else{
			$(".abc").each(function(index, element) {
                $(this).removeClass("current");
            });
			$this.addClass("current");
			$("#zy_middel_img").attr("src","images/step"+index_abc+".jpg");
			$(".bcd").each(function(index, element) {
				if(index == index_abc-1){
					$(this).addClass("current");
				}else{
                	$(this).removeClass("current");
				}
            });
		}
	});
	
	$(".left").click(function(){
		if(index_abc!=1){
			l_index=parseInt(index_abc-1);
			index_abc=l_index;
		}
		l_index--;
		if(l_index<0) l_index=3;
		changeStyle();
	});
	
	$(".right").click(function(){
		if(index_abc!=1){
			l_index=parseInt(index_abc-1);
			index_abc=l_index;
		}
		l_index++;
		if(l_index>3) l_index=0;
		changeStyle();
	});
	
	function changeStyle(){
		$("#zy_middel_img").attr("src","images/step"+parseInt(l_index+1)+".jpg");
		$(".abc").each(function(index, element) {
			if(index!=l_index){
                $(this).removeClass("current");
			}else{
				$(this).addClass("current");
			}
        });
		$(".bcd").each(function(index, element) {
			if(index == l_index){
				$(this).addClass("current");
			}else{
				$(this).removeClass("current");
			}
        });
	}
})
