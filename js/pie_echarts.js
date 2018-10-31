// JavaScript Document
	// 路径配置
pieCharts();
function pieCharts(legend,data){
	var currLegend=legend;
	var seriesData=data;
	require.config({
		paths: {
			echarts: 'http://echarts.baidu.com/build/dist'
		}
	});
	// 使用
	require(
		[
			'echarts',
			'echarts/chart/pie',
		],
		function (ec) {
			// 基于准备好的dom，初始化echarts图表
			var myChart = ec.init(document.getElementById('pie_area')); 
			var option = {
					
					tooltip : {
						trigger: 'item',
						formatter: "{b} : {c} ({d}%)"
					},
					legend: {
						orient : 'vertical',
						x : 'left',
						y : '18%',
						data:[
							{value:535,icon : 'bar', name:'>20%'},
							{value:310,icon : 'bar', name:'>10%'},
							{value:234,icon : 'bar', name:'>0%'},
							{value:135,icon : 'bar', name:'<-10%'},
							{value:1348,icon : 'bar', name:'<-20%'}	
						]
					},
					toolbox: {
						show : false,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {
								show: true, 
								type: ['pie', 'funnel'],
								option: {
									funnel: {
										x: '25%',
										width: '50%',
										funnelAlign: 'left',
										max: 1548
									}
								}
							},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					calculable : false,
					series : [
						{
							type:'pie',
							radius : '55%',
							center: ['60%', '40%'],
							itemStyle: {
								normal: {
									label: {
										show: false,
									},
									labelLine: {
										show: false
									}
								}
							},
							data:[
								{value:535, name:'>20%'},
								{value:310, name:'>10%'},
								{value:234, name:'>0%'},
								{value:135, name:'<-10%'},
								{value:1348, name:'<-20%'}
							]
						}
					]
				};
				// 为echarts对象加载数据 
			myChart.setOption(option); 
		}
		);
}