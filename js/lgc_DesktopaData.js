var Desktop = 
{	
	//主页 相关数据
	homepage : 
	{
		stickDesktop :  //磁贴桌面
		{
			title : 
			{
				logo : './images/logo.png',
				text : 'HteOS 与众不同的 Web',
			},
			module :  //磁贴模块
			{	
				//模块一 ：新闻类模块
				news :
				{	
					title : '公司新闻',
					content : 
					[	
						{
							id : 11,
							title : '图片新闻',
							image : './images/desktop/newsQQ.png'
						},
						{
							id : 12,
							title : '应用市场',
							image : './images/desktop/adf28bd4530214450153070163890009.png'
						},
						{
							id : 13,
							title : '新浪新闻',
							image : './images/desktop/xinlangimg.png',
							text : 
							[
								{
									text : '收评：恒指跌0.62%失守24000点 瑞声科技领跌蓝…',
									classify : '财经',
									time : '2017-2-24 16:14',
									href : ''
								},
								{
									text : '巴萨携手观澜湖集团共建足校 将克隆拉马西亚青训体系',
									classify : '体育',
									time : '2017-2-24 16:13',
									href : ''
								},
								{
									text : '新浪3X3黄金联赛携手我奥篮球 开启大数据时代',
									classify : '体育',
									time : '2017-2-24 16:13',
									href : ''
								},
								{
									text : '《耳畔》阎维文曝年轻时被批瞎唱 自侃招人恨',
									classify : '娱乐',
									time : '2017-2-24 16:13',
									href : ''
								},
								{
									text : '中甲诸强巡礼之毅腾：底蕴之师低调补强阵容',
									classify : '体育',
									time : '2017-2-24 16:13',
									href : ''
								},
								{
									text : '解决员工住房问题，董明珠马云马化腾刘强东都放了大招',
									classify : '科技',
									time : '2017-2-24 16:13',
									href : ''
								},
								{
									text : '美民调显示美国人对中国好感度创近30年来新高',
									classify : '军事',
									time : '2017-2-24 16:13',
									href : ''
								},
								{
									text : '大冶特钢：2016年度净利2.93亿 拟10派2元',
									classify : '财经',
									time : '2017-2-24 16:13',
									href : ''
								}
							]
						},
						{
							id : 14,
							title : '有道词典',
							image : './images/desktop/youdao.png'
						}
					]
				}, 		
				
				//模块二 ：任务管理模块
				mission : 
				{
					title : '任务管理',
					content : 
					[
						{	
							id : 15,
							title : '淘宝网',
							image : './images/desktop/taobao.png',
							text : '淘宝网'
						},
						{	
							id : 16,
							title : '北京 12 ~ -1℃',
							image : './images/desktop/duoyun.png',
							text : '多云/微风'
						},
						{	
							id : 17,
							title : '星期六',
							text : '2017-2-25',
							image : './images/desktop/duoyun.png',
						}
					]
				},

				//模块三 ：知识文档模块
				knowledge : 
				{
					title : '知识文档',
					content : 
					[
						{	
							id : 18,
							title : '音乐播放器',
							image : './images/desktop/kugoumusic.png',
							content : 
							[
								{
									music : '陪你到终点',
									author : '孙子涵',
									src : '',
									image : './images/desktop/142043.jpg'
								},
								{
									music : '歌曲名称',
									author : '作者',
									src : '链接地址',
									image : './images/desktop/142043.jpg'
								}
							]

						},
						{	
							id : 19,
							title : 'progressOn',
							image : './images/desktop/progressOn.png',
							text : 'progressOn'
						},
						{	
							id : 20,
							title : '微云',
							image : './images/desktop/weiyun.png'
						},
						{	
							id : 21,
							title : '新浪股票',
							image : './images/desktop/xinlangimg.png',
							content : 
							[
								{
									text : '卢森创业',
									data : '+0.12%',
									num : '1940.69'
								},
								{
									text : '深圳城指',
									data : '+0.22%',
									num : '1200.69'
								},
								{
									text : '卢深600',
									data : '-0.62%',
									num : '1900.69'
								},
								{
									text : '上证指数',
									data : '＋2.62%',
									num : '2658.88'
								}
							]
						}
					]
				},

				//模块四：督查督办
				inspector :
				{
					title : '督查督办',
					content : 
					[
						{
							id : 22,
							title : '乐视网',
							image : './images/desktop/leshi.png'
						},
						{
							id : 23,
							title : '网易新闻',
							image : './images/desktop/wangyi.png'
						},
						{
							id : 24,
							title : '快递100',
							image : './images/desktop/100yi.png'
						},
						{
							id : 25,
							title : '携程旅游',
							image : './images/desktop/xiecheng.png'
						},
						{
							id : 26,
							title : '美团外卖',
							image : './images/desktop/meituan.png'
						},
						{
							id : 27,
							title : '爱奇艺',
							image : './images/desktop/aiqiyi.png'
						},
						{
							id : 28,
							title : '知乎',
							image : './images/desktop/zhihu.png'
						}
					]
				},

				//模块五：流程管理
				flowManage :
				{
					title : '流程管理',
					content : 
					[
						{
							id : 29,
							title : '有道云笔记',
							image : './images/desktop/youdaobiji.png'
						},
						{
							id : 30,
							title : 'Youtube',
							image : './images/desktop/youtube.png'
						},
						{
							id : 31,
							title : 'QQ日历',
							image : './images/desktop/qqclock.png'
						},
						{
							id : 32,
							title : '唱吧',
							image : './images/desktop/cangba.png'
						},
						{
							id : 33,
							title : '酷狗音乐',
							image : './images/desktop/kugoumusic.png'
						}
					]
				},

				//模块六 ：快速启动  
				fastStart :
				{
					title : '快速启动',
					content : 
					[
						{
							id : 34,
							title : '我的桌面通讯',
							image : './images/desktop/mycallmenu.png'
						},
						{
							id : 35,
							title : '百度地图',
							image : './images/desktop/baiduditu.png'
						},
						{
							id : 36,
							title : '愤怒的小鸟',
							image : './images/desktop/angryBird.png'
						},
						{
							id : 37,
							title : '汽车之家',
							image : './images/desktop/qichezhijia.png'
						},
						{
							id : 38,
							title : '个性化设置',
							image : './images/desktop/logo.png',
							bgImage : './images/desktop/11.jpg'
						}
					]
				}
				
			}
		},
		bg :   //背景相关设置 
		{
			wallpaper : 
			[
				{
					id : 01,
					src : './images/background/10.jpg',
					title : 'bgImg01'
				},
				{
					id : 02,
					src : './images/background/11.jpg',
					title : 'bgImg02'
				},
				{
					id : 03,
					src : './images/background/cloud.jpg',
					title : 'bgImg03'
				},
				{
					id : 04,
					src : './images/background/wallpaper.jpg',
					title : 'bgImg04'
				},
				{
					id : 05,
					src : './images/background/Wood.jpg',
					title : 'bgImg05'
				},
				{
					id : 06,
					src : './images/background/Yuanye.jpg',
					title : 'bgImg06'
				}
			],
			theme : 
			[
				{
					id : 07,
					color : 'rgb(31,91,183)'
				},
				{
					id : 08,
					color : 'rgb(89,183,40)'
				},
				{
					id : 09,
					color : 'rgb(155,29,171)'
				},
				{
					id : 10,
					color : 'rgb(204,53,53)'
				},
				{
					id : 11,
					color : 'rgb(208, 150, 21)'
				},
				{
					id : 12,
					color : 'rgb(84, 74, 74)'
				}
			]
		}
	},

	iconDesktop :  //图标桌面 ｜ 应用管理
	[
		{	
			id : 100,
			type : 'app',
			title : '快递100',
			image : './images/desktop/100yi.png',
			url : 'http://www.kuaidi100.com/'
		},
		{	
			id : 101,
			type : 'app',
			title : '有道云笔记',
			image : './images/desktop/youdaobiji.png',
			url : 'http://note.youdao.com/'
		},
		{	
			id : 102,
			type : 'app',
			title : '网易新闻',
			image : './images/desktop/wangyi.png',
			url : 'http://news.163.com/'
		},
		{	
			id : 103,
			type : 'app',
			title : 'processOn',
			image : './images/desktop/progressOn.png',
			url : 'https://www.processon.com/'
		},
		{	
			id : 104,
			type : 'app',
			title : '新浪新闻',
			image : './images/desktop/xinlangimg.png',
			url : 'http://news.sina.com.cn/'
		},
		{	
			id : 105,
			type : 'app',
			title : '时钟',
			image : './images/desktop/shizhong.png',
			url : 'http://gb.weather.gov.hk/gts/time/clock_uc.html'
		},
		{	
			id : 106,
			type : 'app',
			title : 'Youtube',
			image : './images/desktop/youtube.png',
			url : 'http://baike.baidu.com/link?url=wGY9iIpf8dA5QQhp529zDUUxp9nBJCsYzNOgNkzJwOGSeqFcQ0E-976noYodffYUlgEhh8RefYl0cHvhE38Da_'
		},
		{	
			id : 107,
			type : 'app',
			title : 'QQ日历',
			image : './images/desktop/qqclock.png',
			url : 'http://qqapp.qq.com/app/100623928.html'
		},
		{	
			id : 108,
			type : 'app',
			title : '愤怒的小鸟',
			image : './images/desktop/angryBird.png',
			url : 'http://www.3366.com/flash/49401.shtml'
		},
		{	
			id : 109,
			type : 'app',
			title : '微云',
			image : './images/desktop/weiyun.png',
			url : 'https://www.weiyun.com/'
		},
		{	
			id : 110,
			type : 'app',
			title : '新浪股市',
			image : './images/desktop/xinlangimg.png',
			url : 'http://finance.sina.com.cn/'
		},
		{	
			id : 116,
			type : 'app',
			title : '应用市场',
			image : './images/desktop/yingyongshop.png',
			url : 'http://app.hicloud.com/'
		},
		{	
			id : 117,
			type : 'app',
			title : '携程旅游',
			image : './images/desktop/xiecheangico.png',
			url : 'http://www.ctrip.com/'
		},
		{	
			id : 13000,
			type : 'appsfolder',
			title : '应用合集',
			image : './images/desktop/appfolder.png',
			url : '',
			child : 
			[
				{	
					id : 118,
					type : 'app',
					title : '酷狗音乐',
					image : './images/desktop/kugoumusic.png',
					url : 'http://web.kugou.com'
				},
				{	
					id : 119,
					type : 'app',
					title : '乐视网',
					image : './images/desktop/leishiIco.png',
					url : 'http://www.le.com/'
				},
				{	
					id : 111,
					type : 'app',
					title : '唱吧',
					image : './images/desktop/cangbaico.png',
					url : 'http://changba.com/'
				},
				{	
					id : 112,
					type : 'app',
					title : '百度地图',
					image : './images/desktop/baiduditu.png',
					url : 'http://map.baidu.com/'
				},
				{	
					id : 113,
					type : 'app',
					title : '有道词典',
					image : './images/desktop/youdaocd.png',
					url : 'http://dict.youdao.com/'
				},
				{	
					id : 114,
					type : 'app',
					title : '百度天气',
					image : './images/desktop/baiducloud.png',
					url : 'http://weather.mipang.com/tianqi-36551'
				},
				{	
					id : 115,
					type : 'app',
					title : '汽车之家',
					image : './images/desktop/qichezhijia.png',
					url : 'http://www.autohome.com.cn/beijing/'
				}
			],
			url : ''
		}
	]
}