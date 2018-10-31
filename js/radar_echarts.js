// JavaScript Document
	// 路径配置
radarCharts();
function radarCharts(legend,data){
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
			'echarts/chart/radar',
		],
		function (ec) {
			// 基于准备好的dom，初始化echarts图表
			var myChart = ec.init(document.getElementById('echarts_qxt')); 
			var option = {
					calculable : true,
					polar : [
						{
							indicator : [
								{text : '进攻', max  : 100},
								{text : '选股能力', max  : 100},
								{text : '体能', max  : 100},
								{text : '速度', max  : 100},
								{text : '技巧技巧', max  : 100}
							],
							radius : 80
						}
					],
					series : [
						{
							type: 'radar',
							itemStyle: {
								normal: {
									areaStyle: {
										type: 'default'
									}
								}
							},
							data : [
								{
									value : [97, 92, 88, 94,90, 86]
								}
							]
						}
					]
				};
				// 为echarts对象加载数据 
			myChart.setOption(option); 
		}
		);
}