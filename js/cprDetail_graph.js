// JavaScript Document
	// 路径配置
	DrawCharts();
	// 使用
	function DrawCharts(num,time,data1,data2){
		require.config({
			paths: {
				echarts: 'js'
			}
		});
/*		var hover_index = parseInt(num+1);
		alert(hover_index);
		var currDate = time;
		var series_jz_Data = data1;
		var series_hs_Data = data2;
*/		require(
			[
				'echarts',
				'echarts/theme/macarons', 
				'echarts/chart/line' ,
				'echarts/chart/bar'
			],
		function (ec,theme) {  
				   //--- 折柱 ---  
				  // alert(hover_index);
			var myChart2 = ec.init(document.getElementById('cprqx'),e_macarons);
			var option = {
			tooltip : {
				trigger: 'axis',//axis有背景的蓝色线，item时没有蓝色线
			},
			calculable : true,
			legend: {
				data:['当日净值','沪深300'],
				x:'39',
				y:'20'
			},
		   grid :{
				  x: '40',
				  y: '45',
				  x2:'30',
				  y2:'40',
				  borderWidth :0
			  },
			toolbox: {
				show : false,
				feature : {
					mark : {show: true},
					dataView : {show: true},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			xAxis : [
				{
					type : 'category',
					boundaryGap: true,
					interval :'auto',
					axisTick :false,
					axisLine : {    // 轴线
						onZero:false,
						show:true
					},
					axisLabel : {
						textStyle :{
									color: '#989898',
									fontSize:14
								}
					},
					splitLine : {
						show: true
					},
					data : [
               			 '08-03','08-04','08-05','08-06','08-07','08-08','08-09','08-10','08-11','08-12'
            			]
				},
			],
		  
			yAxis : [
				{
					type : 'value',
					splitNumber: 4,
					min : 0.90,
					max : 1.10,
					boundaryGap: [0,0.1],
				   /* axisLine : true,*/
					axisLabel : {
						show:true,
						interval: 'auto',    // {number}
						formatter: '{value}',
									textStyle :{
										color: '#999999',
										fontSize:12
									}
					},
					splitLine : {
						show: true
					}
				}
			],
			series : [
				{
					name:'当日净值',
					type: 'line',
					z : 2,
					//smooth: true,
					symbolSize : 4,
					yAxisIndex: 0,
					itemStyle: {
						normal: {
							color : 'rgba(255,125,0,1)',
							lineStyle : {
								width : 2
							}
						}
					},
					data: [1.0, 0.92, 0.93, 0.95, 0.93, 0.92, 0.93, 0.94, 0.90, 0.95]
				},
				{
					name:'沪深300',
					type: 'line',
					z : 2,
					//smooth: true,
					symbolSize : 4,
					yAxisIndex: 0,
					itemStyle: {
						normal: {
							color : 'rgba(38,140,236,1)',
							lineStyle : {
								width : 2
							}
						}
					},
					data: [1.07, 1.02, 1.03, 1.05, 0.93, 0.92, 1.03, 1.04, 1.0, 1.05]
				}
			]
		};               
			// 为echarts对象加载数据 
			myChart2.setOption(option); 
		}
		  );
	}
	
$(function(){
	$(".drListhmjh li").click(function(){
		$(".drListhmjh li").removeClass("liFocus");
		$(this).addClass("liFocus");
		DrawCharts();
	});
	var isOpen=false;
	$(".downOpen").click(function(){
		if(!isOpen){
			$(".cutText").css("height","280px");
			$(".cutText").removeClass("cutTextCss");
			$(this).find("img").attr("src","images/upLoad.png");
			isOpen=true;
		}else{
			$(".cutText").css("height","28px");
			$(".cutText").addClass("cutTextCss");
			isOpen=false;
			$(this).find("img").attr("src","images/downLoad.png");
		}
	})
})
