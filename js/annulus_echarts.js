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
			var myChart = ec.init(document.getElementById('pie_qxt')); 
			var option = {
					tooltip : {
						trigger: 'item',
						formatter: "{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x : 'center',//水平居中
						y : 'center',
						itemWidth: 5,             // 图例图形(中间小圆点)宽度
        				itemHeight: 7,
						data:[
							{value:535,icon : 'bar', name:'直接访问'},
							{value:310,icon : 'bar', name:'邮件营销'},
							{value:535,icon : 'bar', name:'联盟广告'},
							{value:310,icon : 'bar', name:'视频广告'},
							{value:310,icon : 'bar', name:'搜索引擎'}
						]
					},
					toolbox: {
						show : true,
						feature : {
							mark : {show: false},
							dataView : {show: false, readOnly: false},
							magicType : {
								show: false, 
								type: ['pie', 'funnel'],
								option: {
									funnel: {
										x: '15%',
										width: '100%',
										funnelAlign: 'center',
										max: 1548
									}
								}
							},
							restore : {show: false},
							saveAsImage : {show: false}
						}
					},
					calculable : false,
					series : [
						{
							type:'pie',
							radius : ['60%', '90%'],
							itemStyle : {
								normal : {
									label : {
										show : false
									},
									labelLine : {
										show : false
									}
								},
								emphasis : {
									label : {
										show : false,//隐藏中间的字
										position : 'center',
										textStyle : {
											fontSize : '30',
											fontWeight : 'bold'
										}
									}
								}
							},
							data:[
								{value:335, name:'直接访问'},
								{value:310, name:'邮件营销'},
								{value:234, name:'联盟广告'},
								{value:135, name:'视频广告'},
								{value:1548, name:'搜索引擎'}
							]
						}
					]
				};
							  
				// 为echarts对象加载数据 
			myChart.setOption(option); 
		}
		);
	}