var dkCSS = ['./css/cj_index.css','./css/desktop.css'];
var dkJS = [
	'./js/dk_data.js',
	'./js/cj_index.js',
	'./js/dk_desk.js',
	'./js/pb_right.js',
	'./js/cj_about.js'
];

var dkHTML = `

	<!-- loading -->
	<div id="loading">
		<div class="loadingmiddle">
			<span>HteOS</span>-与众不同的<span>web</span>
			<p>正在加载应用...</p>
		</div>
	</div>

	
	<div class="pack" style="width: 100%;height: 100%;">
			<!-- loading -->
			<div class="loading">
				<div class="loadingmiddle">
					<span>HteOS</span>-与众不同的<span>web</span>
					<p>正在加载应用...</p>
				</div>
			</div>
			<!-- 最外层盒子 start -->
			<div class="outWrap" >
				<!--滚动条-->
				<div class="scrollbar">
					<div class="slider"></div>
				</div>
				<!--展开左边栏-->
				<div class="hte-quickbar-show setColor">
					<img src="./images/turn.png" />
				</div>

				<!--左边栏-->
				<div class="hte-quickbar setColor">
					<div class="hte-quickbar-header">
						<img src="./images/turn.png" />
					</div>
					<div class="hte-quickbar-body">
						<!--爱奇艺  个性化设置  我的hteos-->
						<span class="hte-quickbar1">
						<img src="./images/background/mycallmenu.png" />
					</span>
						<span class="hte-quickbar1">
						<img src="./images/background/aiqiyi.png" />
					</span>
						<span class="hte-quickbar1">
						<img src="./images/background/logo.png" />
					</span>
					</div>
				</div>

				<!--底边栏-->
				<div class="hte-taskbar setColor">
					<!--底边左侧-->
					<div class="hte-taskbar-action-left">
						<span  class="hte-taskbar-action" style="background-image: url(images/xitong.png);" title="桌面"></span>
						<span id="p_user" class="hte-taskbar-action" style="background-image: url(images/user.png);" title="我的HteOS" id="p_user"></span>
						<span id="p_manage" class="hte-taskbar-action" style="background-image: url(images/list.png);" title="应用管理" id="p_manage"></span>
					</div>
					<!--底边中间-->
					<div class="hte-taskbar-inner">
						<!-- <div class="hte-task-bottom">
							<img class="hte-task-icon" src="images/youdao.png">
							<span class="hte-task-name">有道词典</span>
						</div> -->
					</div>

					<!--底边右侧-->
					<div class="hte-taskbar-action-right">
						<!--<span class="hte-taskbar-action" style="background-image: url(images/yingyong.png);" title="应用市场"></span>
						<span class="hte-taskbar-action" style="background-image: url(images/about.png);" title="即时通讯"></span>-->
						<span class="hte-taskbar-action" style="background-image: url(images/shezhi.png);" title="个性化设置"></span>
					<!--	<span class="hte-taskbar-action" style="background-image: url(images/shili.png);" title="示例"></span>-->
						<span class="hte-taskbar-action" style="background-image: url(images/fankui.png);" title="反馈意见"></span>
						<span class="hte-taskbar-action" style="background-image: url(images/xixin.png);" title="关于HteOS"></span>
						<!--底边右侧时间-->
						<span class="hte-taskbar-action hte-taskbar-action-time"></span>
						<span class="hte-taskbar-action" style="width:5px;border-left:1px solid #ccc"></span>
					</div>
				</div>

				<!--<section class="foot_right_nav"> 右边栏 -->
				<!--
            	登陆
            -->
				<div class="foot_nav_inner setColor" id="myhteos">
					<!--顶部标题 -->
					<header class="nav_inner_head">
						<h3>
						<span>我的HteOS</span>
					</h3>
					</header>
					<div class="nav_inner_body myhteos" id="myhteos_s">
						<!--登陆选项-->
						<div class="nav_inner_content">
							<!--登陆界面-->
							<div class="nav_inner_active login">
								<div class="alert_title">
									<span>您还没有登陆，请登录</span>
								</div>
								<div class="hdp">
									<img src="./images/desktop/mycallmenu.png" />
								</div>
								<div class="username">
									<input type="email" class="user_case name" placeholder="邮箱" />
								</div>
								<div class="username">
									<input type="password" class="user_case word" placeholder="密码" />
								</div>
								<div class="input_checked">
									<label class="pull-left">
									 <input type="checkbox" name="autoLogin"/>记住我
								</label>
									<a href="#" class="rem_password">忘记密码?</a>
								</div>
								<div class="pb_loading">
									<img src="images/preloader.gif" />
								</div>
								<div class="login_bottons">
									<div class="login_btn left" id="logining">
										<a href="#" class="login_btn_login" id="logined">登&nbsp;&nbsp;陆</a>
									</div>
									<div class="login_btn right" id="zhuce">
										<a href="#" class="login_btn_login" id="zhuced">注&nbsp;&nbsp;册</a>
									</div>
									<div class="login_btn left down">
										<a href="javascript:;" class="login_btn_smt">
											<img src="./images/desktop/qq.png" />使用QQ登陆
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--注册界面-->
					<div class="nav_inner_body mylogin" id="mylogin">

						<div class="nav_inner_content">

							<div class="nav_inner_active sign">
								<div class="hdp">
									<img src="./images/desktop/mycallmenu.png" />
								</div>
								<div class="username">
									<input type="email" class="user_case name" placeholder="邮箱" />
								</div>
								<div class="username">
									<input type="password" class="user_case word" placeholder="密码" />
								</div>
								<div class="username">
									<input type="password" class="user_case word" placeholder="确认密码" />
								</div>
								<div class="pb_loading">
									<img src="images/preloader.gif" />
								</div>
								<div class="login_bottons">
									<div class="login_btn right" id="zhuced_s">
										<a href="#" class="login_btn_login">注&nbsp;&nbsp;册</a>
									</div>
									<div class="login_btn left" id="logined_s">
										<a href="#" class="login_btn_login">登&nbsp;&nbsp;陆</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="nav_inner_body mylogined" id="mylogined">
						<div class="nav_inner_content">
							<div class="nav_inner_active login_ed">
								<div class="login_ed_body">
									<div class="hdp login_hdp">
										<img src="./images/desktop/mycallmenu.png" />
									</div>
									<h4>欢迎您：吴彦祖</h4>
								<p>位置：中国 - 香港</p>
								</div>
							</div>
						</div>

					</div>

					<div class="login_ed_bottons  denglu" id="login_bottons">
						<div class="login_ed_btns lock">
							<a href="#">
								<span class="lock_icon"></span><br /> 锁定屏幕
							</a>
						</div>
						<div class="login_ed_btns out" id="out">
							<a href="#">
								<span class="out_icon"></span><br /> 退出
							</a>
						</div>
					</div>
				</div>

				<!--
            	应用管理
            -->
				<div class="foot_nav_inner yy setColor" id="yy">
					<!--顶部标题 -->
					<header class="nav_inner_head">
						<h3>
						<span>应用管理</span>
					</h3>
					</header>

					<div class="nav_inner_body">
						<!--登陆选项-->
						<div class="nav_inner_content">
							<!--登陆界面-->
							<div class="nav_inner_active aibition">
								<div class="abt_content">
									<input type="text" placeholder="输入关键字进行搜索" class="abt_content_sec" />
									<div class="abt_con_nav" id="abt_content">
										<div class="abt_con_group">公司新闻</div>
										<div class="abt_con_item">
											<div class="abt_con_item_icon">
												<img src="./images/desktop/newsQQ.png" />
											</div>
											<div class="abt_con_item_name">腾讯新闻</div>
										</div>
									</div>
									<!--
                                	右键点击应用管理选项
                                -->
									<ul class="right_show">
										<li class="right_show_item">
											<a href="#" class="open">打开</a>
										</li>
										<li class="right_show_item">
											<a href="#" class="show">显示</a>
										</li>
										<li class="right_show_item">
											<a href="#" class="none">隐藏</a>
										</li>
										<li class="right_show_item">
											<a href="#" class="unload">卸载</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--
				个性化设置
			-->
				<div class="foot_nav_inner indt setColor">
					<!--顶部标题 -->
					<header class="nav_inner_head">
						<h3>
					<span>个性化设置</span>
				</h3>
					</header>

					<div class="nav_inner_body">

						<div class="nav_inner_content">

							<div class="nav_inner_active ">
								<div class="theme_tit">
									<span class="theme_tit_udline"></span>
									<h4 class="">主题</h4>
									<h4 class="">背景</h4>
								</div>
								
								<div class="theme_content_pack">
									<!--滚动条-->
									<div class="themescro" >
										<div class="themeslider"></div>
									</div>
									<div class=" theme_content theme ">
										<div class="theme_content_bgc "></div>
										<div class="theme_content_bgc "></div>
										<div class="theme_content_bgc "></div>
										<div class="theme_content_bgc "></div>
										<div class="theme_content_bgc "></div>
										<div class="theme_content_bgc "></div>
										<div class="theme_content_bgc "></div>
									</div>
									<div class="theme_content wallpaper ">
										<ul class="theme_content_bgm ">
											
											<li>
												<img src="./images/desktop/wallpaper.jpg " />
											</li>
											<li>
												<img src="./images/desktop/cloud.jpg " />
											</li>
											<li>
												<img src="./images/desktop/Wood.jpg " />
											</li>
											<li>
												<img src="./images/desktop/11.jpg " />
											</li>
											<li>
												<img src="./images/desktop/10.jpg " />
											</li>
										</ul>

									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<!--
        	即时通讯
        -->
				
				<!--</section>-->
				<div class="outBox_magnetism ">
					<!--顶部logo盒子 start-->
					<header class="logoContent setBlue ">
						<div class="logoBox ">
							<img src="./images/logo.png " class="logoImg " />
							<a href="# ">
								<span class="logoSpet ">HteOS</span>-
								<small>与众不同 <span class="logoSpet ">Web</span></small>
							</a>
						</div>
					</header>
					<!--顶部logo盒子 end -->

					<!-- 磁贴模块内容 start-->
					<section class="modulesWrap ">

						<!--模块内容集合-->
						<div class="modulesContent ">
							<!-- 响应式 模块化内容盒子-->
							<div class='flex_module_wrap'>

								

							</div>

						</div>

					</section>
					<div class="out_Wrap clearfix auto " id="auto_con">
					<!-- 展开左边栏
			



					<!--底栏任务右键菜单
-->
					<ul class="hte-task-contextmenu ">
						<li class="hte-menu-item ">
							<a href="javascript:; "><span class="hte-menu-icon "></span>&nbsp;&nbsp;还原</a>
						</li>
						<li class="hte-menu-item ">
							<a href="javascript:; "><span class="hte-menu-icon "></span>&nbsp;&nbsp;最小化</a>
						</li>
						<li class="hte-menu-item ">
							<a href="javascript:; "><span class="hte-menu-icon "></span>&nbsp;&nbsp;最大化</a>
						</li>
						<li role="presentation " class="divider "></li>
						<li class="hte-menu-item ">
							<a href="javascript:; "><span class="hte-menu-icon "></span>&nbsp;&nbsp;关闭</a>
						</li>
						<li class="hte-menu-item ">
							<a href="javascript:; "><span class="hte-menu-icon "></span>&nbsp;&nbsp;关闭其它</a>
						</li>
						<li class="hte-menu-item ">
							<a href="javascript:; "><span class="hte-menu-icon "></span>&nbsp;&nbsp;关闭所有</a>
						</li>
					</ul>
					<!-- 反馈意见 -->
					<div class="cjmessager " >
						<div class="cjmessagercontent setColor">
							<h2>意见反馈</h2>
							<p>我们迫切希望得到您有价值的反馈，有您的反馈，我们会做的更好！</p>
							<input type="text " placeholder="联系方式 " />
							<textarea placeholder="反馈意见 "></textarea>
							<button>取消</button>
							<button>确定</button>
						</div>

						<!-- 关于HteOS -->
						<div class="cjmessagercontent cjmessagerabout setColor"  >
							<h2>欢迎</h2>
							<p>感谢您关注HteOS，HteOS是一个全新的Web桌面应用开发框架！</p>
							<ul>
								<li>全新UI设计、多套皮肤，使用动态磁贴技术灵活配置，完美适配PC端和移动端</li>
								<li>模块化开发模式，使用SASS进行CSS皮肤设置，使用Grunt自动编译生成文档</li>
								<li>磁贴和图标两种桌面模式，兼容Chrome、Firefox、Edge、IE8+等主流浏览器</li>
								<li>纯前端框架，不依赖于后台语言，与Java、.NET、PHP等服务器平台无缝集成</li>
							</ul>
							<p>如果您对HteOS有问题或意见，欢迎提出，谢谢。</p>
							<button>确定</button>
						</div>
					</div>

				</div>
					<!-- 磁贴模块内容 end-->
				</div>

				<!-- 图标页面 -->

				
			</div>
		
		<!-- 弹出iframe层 -->
		<div class="market_alert">
			<div class="market_alert_con">
				<div class="market_con_tit">
					<div class="market_tit_logo">
						<a href="#">应用市场</a>
					</div>
					<a href="#" class="c_close"></a>
					<a href="#" class="c_big"></a>
					<a href="#" class="c_small"></a>
					
				</div>
			</div>
			<iframe src="">
				
			</iframe>
		</div>

		<!--点击桌面右键菜单start-->

			<ul id="dkClick" class="right_onclick" style="display:none;">
				<li id='DKchangeToLGC'>切换图标模式</li>
				<li>个性化设置</li>
				<li>意见反馈</li>
				<li>关于HTEOS</li>
			</ul>


		</div>
		<!-- 最外层盒子 end -->	
`;


