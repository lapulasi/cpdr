// JavaScript Document
drawGraph();
function drawGraph(){
	var myChart=null;
	// 路径配置
	require.config({
		paths: {
			echarts: 'js'
		}
	});
	
	// 使用
	require(
		[
			'echarts',
			'echarts/theme/macarons', 
			'echarts/chart/line' ,
			'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
		],
	function (ec,theme) {  
			   //--- 折柱 ---  
		myChart = ec.init(document.getElementById('graph'),e_macarons);
		var min_item=-25;
		var max_item=75;
		var option = {
		tooltip : {
			trigger: 'axis',//axis有背景的蓝色线，item时没有蓝色线
		},
		calculable : true,
		legend: {
			data:['仓位','组合','沪深300'],
			x: 'left'
		},
	   grid :{
			x: '40',
			y: '55',
			x2:'25',
			y2:'55',
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
				axisTick :false,
				axisLine : {    // 轴线
					onZero:false,
					show:true
				},
				axisLabel : {
					interval: '3', 
					textStyle :{
								color: '#989898',
								fontSize:14
							}
				},
				splitLine : {
					show: false
				},
				data : [
					'08-03','08-04','08-03',' ',' ',' ',' ',' ',' ',' ',' ',' '
				]
			},
		],
	  
		yAxis : [
			{
				type : 'value',
				name : '仓位',
				nameTextStyle :{
					color: '#325e9d',
					fontSize:12
				},
				splitNumber: 4,
				min : 0,
				max : 100,
				boundaryGap: [0,0.1],
			   /* axisLine : true,*/
				axisLabel : {
					show:true,
					interval: 'auto',    // {number}
					formatter: '{value} %',
								textStyle :{
									color: '#999999',
									fontSize:12
								}
				},
				splitLine : {
					show: false
				}
			},
			{
				type : 'value',
				name : '收益率',
				nameTextStyle :{
					color: '#325e9d',
					fontSize:12
				},
				splitNumber: 4,
				min : -15,
				max : 45,
				/*min : min_item,
				max : max_item,
				splitNumber: 4,*/
				/*axisLine :true,*/
				axisLabel : {
					show:true,
					//formatter: '{value}',    // Template formatter!
					textStyle :{
						color: '#999999',
						fontSize:12
					}
				},
				splitLine : {
					show: true,
					lineStyle:{
						color:'#eee'
					}
				}
			}
		],
		series : [
			{
				name: '仓位',
				type: 'bar',
				z : 0,
				symbol : 'none',
				yAxisIndex :0,
				barMaxWidth:30,
				barGap :'20%',
				itemStyle: {
				   normal: {
					   color: 'rgba(219,237,247,1)'
				   },
				   emphasis: {
					   color: 'transparent' /*可以保证当鼠标在柱状图的时候折线图不被挡住*/
				   }
				},
				data:[20,30,20,0,0,0,0,0,0,0,0,0]
			},
			{
				name:'组合',
				type: 'line',
				symbol : 'none',
				z : 2,
				//smooth: true,
				//symbol : 'none',
				symbolSize : 4,
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color : 'rgba(255,125,0,1)',
						lineStyle : {
							width : 2
						}
					}
				},
				data: [2.0,4.0,2.0, , , , , , , , , ]
			},
			{
				name:'沪深300',
				type: 'line',
				symbol : 'none',
				z : 2,
				//smooth: true,
				//symbol : 'none',
				symbolSize : 4,
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color : 'rgba(38,140,236,1)',
						lineStyle : {
							width : 2
						}
					}
				},
				//markLine : {
				//	data : [
				//		// 纵轴，默认
				//		{type : 'max', name: '最大值', itemStyle:{normal:{color:'#dc143c'}}},
				//	]
				//},
				data: [12.0,10.8,12.0, , , , , , , , , ]
			}
		]
	};               
					// 为echarts对象加载数据 
					myChart.setOption(option); 
				}
			);
}
var sy_min=0;
var sy_max=0;		
function updateChart() {/*重置y轴步长*/
    var option = myChart.getOption();
	var step=4;
	var data_arr=[-16,0,20,30,69];
	for(var i=0,len=data_arr.length;i<len;i++){
		if(data_arr[i]<sy_min){
			sy_min = data_arr[i];
		}
		if(data_arr[i]>sy_max){
			sy_max = data_arr[i];
		}
	}
/*	sy_min=Math.min(-16,0,20,30,69);
	sy_max=Math.max(-16,0,20,30,69);
	alert("sy_min=="+sy_min)
*/    
	//动态设置y轴刻度追加单位
	if(sy_min>=-20 && sy_min<-15){
		sy_min = -20;
		var ls_max = 60;
		if(ls_max > sy_max){
			sy_max = ls_max;
		}else{
			reset_y(sy_max);
		}
	}else if(sy_min>=-15 && sy_min<-10){
		sy_min = -15;
		var ls_max = 45;
		if(ls_max > sy_max){
			sy_max = ls_max;
		}else{
			reset_y(sy_max);
		}
	}else{
		sy_min = -10;
		var ls_max = 30;
		if(ls_max > sy_max){
			sy_max = ls_max;
		}else{
			reset_y(sy_max);
		}
	}
	
    option.yAxis[1].min = sy_min;
	option.yAxis[1].max = sy_max;
	/*option.yAxis[0].splitNumber = */option.yAxis[1].splitNumber=4 /*Math.round(option.yAxis[1].max / step);*/
	//option.yAxis[0].splitNumber= 5;
    myChart.setOption(option);
}

function reset_y(num){
	var unit = Math.ceil(num/3);
		unit = Math.ceil(unit/5)*5;
		sy_max = unit*3//Math.ceil(sy_max/3)*3;
		sy_min = -unit;
}
