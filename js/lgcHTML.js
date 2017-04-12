var lgcHTML = `	
		
		<!-- loading -->
		<div id="loading" class='setColor'>
			<div class="loadingmiddle">
				<span>HteOS</span>-与众不同的<span>web</span>
				<p>正在加载应用...</p>
			</div>
		</div>

		<!-- 图标页面 -->
		<div class="outWrap clearfix" id="iconPage" style="display:block;">
			

			<!--点击桌面右键菜单start-->
			<ul class="right_onclick" style="display:none;">
				<li class="rgt_click_item">
					<span class="glyphicon-menu-right"></span>
					<a href="javascript:;" class="menuitem">图标显示</a>
					<ul class="rgt_click_item_ul">
						<li><a href="javascript:;" class="rClickItemAbig">大</a></li>
						<li><a href="javascript:;" class="rClickItemAsmall">小</a></li>
					</ul>
				</li>
				<li class="rgt_click_item">
					<span class="glyphicon-menu-right"></span>
					<a href="javascript:;" class="menuitem">桌面样式</a>
					<ul class="rgt_click_item_ul">
						<li><a href="javascript:;" id='toggleStyleChangeToDK'>磁铁</a></li>
						<li><a href="javascript:;">图标</a></li>
					</ul>
				</li>
				<li class="rgt_click_item">
					<a href="javascript:;" class="menuitem goFullScreenShow" style='display:block;'>全屏显示</a>
					<a href="javascript:;" class="menuitem outFullScreenShow" style='display:none;'>退出全屏</a>
				</li>
				<li class="divider"></li>
				<li class="rgt_click_item">
					<a href="javascript:;" class="menuitem" id='myIconYyGl'>应用管理</a>
				</li>
				<li class="rgt_click_item" style="height:0;">
					
				</li>
				<li class="divider"></li>
				<li class="rgt_click_item">
					<a href="javascript:;" class="menuitem" id='myIconGxHsZ'>个性化设置</a>
				</li>
				<li class="rgt_click_item">
					<a href="javascript:;" class="menuitem" id='myIconHetOS' >我的HetOS</a>
				</li>
				<li class="divider"></li>
				<li class="rgt_click_item">
					<a href="javascript:;" class="menuitem" id='aboutMyIconHetOS' >关于HetOS</a>
				</li>
			</ul>
			
			<!--点击桌面右键菜单end-->

			<!-- 钟表 -->
			<div id="clocks">
				<span class="shiz" style="display:block;"></span>
				<span class="miaoz" style="display:block;"></span>
				<span class="fenz" style="display:block;"></span>

				<!--电子时间-->
				<div id="elecTime">
					<div class="elcItem elecHour">
						<span>1</span>
						<span>1</span>
					</div>
					<span class="elcItem elecMin">
						<span>22</span>
						<span>22</span>
					</span>
					<span class="elcItem elecSec">
						<span>33</span>
						<span>34</span>
					</span>
				</div>

			</div>


			<!--文件夹操作区域-->
			<div id='folderAreaWrap' class="">
				<div class="folderOpenBtn"><</div>
				<div id='folderArea' >
					<div class="folderMenu">
						<a href="javascript:;">返回目录</a>
						<!-- <a href="javascript:;">文件夹</a>
						<a href="javascript:;">我的音乐</a>
						<a href="javascript:;">周杰伦－夜曲.mp3</a> -->
					</div>
					<div class="folderContent" id='folderContent'>

						<!--单个文件夹-->
						<!-- <div class="fcItem">
							<dl class="fciCon">
								<dt><img src="./images/folder/Candy.png" /></dt>
								<dd>
									<p class="fciName">我的文件夹</p>
									<p class="fciName"><input type="text" name="" class="fciRName"></p>
								</dd>
							</dl>
						</div> -->
					</div>
				</div>
			</div>


			<!-- 预览图片 -->
			<div id='previewPic'>
				<span class="pclose">X</span>
				<img  class="pimg" />
			</div>


			<!--媒体播放器 开始-->
			<div id="myMediaBox">
				<span class="pclose">X</span>
				<audio src="" id='myaudio'></audio>
				<div class="mvbox" id='mvbox'>
					<div class="mvshow">
						<img src="" id="mvshowImg"  />
						<video src="" id='videoMedia'></video>
					</div>
					<div class="mvcontrol">


						<!--进度条块-->
						<div class="mvprogress">
							<div class="mvpPathway">
								<div class="mvpMoveway"></div>
							</div>
						</div>

						<!--播放按钮块-->
						<div class="mvcontrols">
							<div class="mvprevplay"></div>
							<div class="mvcplay"></div>
							<div class="mvnextplay"></div>
						</div>


					</div>
				</div>
			</div>
			<!-- 媒体播放器 结束-->




			<!--展开左边栏-->
			<div class="hte-quickbar-show">
				<img src="./images/turn.png" />
			</div>



			<!--左边栏-->
			<div class="hte-quickbar">
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
					<span class="hte-taskbar-action" style="background-image: url(images/xitong.png);" title="桌面"></span>
					<span id="p_user" class="hte-taskbar-action" style="background-image: url(images/user.png);" title="我的HteOS"></span>
					<span id="p_manage" class="hte-taskbar-action" style="background-image: url(images/list.png);" title="应用管理"></span>
				</div>
				



				<!-- 底边中间 iframe框最小化 -->
				<div class="hte-taskbar-inner" id="hte-taskbar-inner">
					<!-- <div class="hte-task-bottom">
						<img class="hte-task-icon" src="images/youdao.png">
						<span class="hte-task-name">有道词典</span>
					</div>
					<div class="hte-task-bottom">
						<img class="hte-task-icon" src="images/youdao.png">
						<span class="hte-task-name">有道词典</span>
					</div>
					<div class="hte-task-bottom">
						<img class="hte-task-icon" src="images/youdao.png">
						<span class="hte-task-name">有道词典</span>
					</div>
					<div class="hte-task-bottom">
						<img class="hte-task-icon" src="images/youdao.png">
						<span class="hte-task-name">有道词典</span>
					</div>
					<div class="hte-task-bottom">
						<img class="hte-task-icon" src="images/youdao.png">
						<span class="hte-task-name">有道词典</span>
					</div> -->
				</div>




				<!--底边右侧-->
				<div class="hte-taskbar-action-right">
					<span class="hte-taskbar-action" style="background-image: url(images/shezhi.png);" title="个性化设置"></span>
					<span class="hte-taskbar-action" style="background-image: url(images/fankui.png);" title="反馈意见"></span>
					<span class="hte-taskbar-action" style="background-image: url(images/xixin.png);" title="关于HteOS"></span>

					<!--底边右侧时间-->
					<span class="hte-taskbar-action hte-taskbar-action-time" id='lgcIconPageTime'>00:00</span>
					<span class="hte-taskbar-action" style="width:5px;border-left:1px solid #ccc"></span>
				</div>
			</div>
			


			<!--应用盒子-->
			<div id='appsFolder'  style="">
				<span class=appFoClose>X</span>
				<h3>我的应用</h3>
				<div class="appsFCon" id="appsFConBox">
					<!-- <div class="hte-shortcut">
						<img src="images/background/100yi.png" />
						<p class="hte-shortcut-name">快递1001</p>
					</div> -->
				</div>
			</div>



			<!-- 图标显示 -->
			<div class="outBox-icon  auto" id='iconsBox'>
				<!-- <div class="hte-shortcut hte-shortcut-bg">
					<img src="images/background/100yi.png" />
					<p class="hte-shortcut-name">快递100</p>
				</div>
				<div class="hte-shortcut">
					<img src="images/background/100yi.png" />
					<p>快递100</p>
				</div> -->
			</div>




			<!--底栏任务右键菜单-->			
			<ul class="hte-task-contextmenu" style="display:none;">
				<li class="hte-menu-item">
					<a href="javascript:;"><span class="hte-menu-icon"></span>&nbsp;&nbsp;还原</a>
				</li>
				<li class="hte-menu-item">
					<a href="javascript:;"><span class="hte-menu-icon"></span>&nbsp;&nbsp;最小化</a>
				</li>
				<li class="hte-menu-item">
					<a href="javascript:;"><span class="hte-menu-icon"></span>&nbsp;&nbsp;最大化</a>
				</li>
				<li role="presentation" class="divider"></li>
				<li class="hte-menu-item">
					<a href="javascript:;"><span class="hte-menu-icon"></span>&nbsp;&nbsp;关闭</a>
				</li>
				<li class="hte-menu-item">
					<a href="javascript:;"><span class="hte-menu-icon"></span>&nbsp;&nbsp;关闭其它</a>
				</li>
				<li class="hte-menu-item">
					<a href="javascript:;"><span class="hte-menu-icon"></span>&nbsp;&nbsp;关闭所有</a>
				</li>
			</ul>
		</div>
		<!-- 底边栏 结束 --> 



		<!--个性化设置  开始-->
		<div class="foot_nav_inner indt setColor" style="right:-25%;"> <!-- indt -->
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
								<div class="themescro">
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
										<li class="operate_btn" style="height:0px;" >
											
										</li>
										<li>
											<img src="./images/background/wallpaper.jpg " />
										</li>
										<li>
											<img src="./images/background/cloud.jpg " />
										</li>
										<li>
											<img src="./images/background/Wood.jpg " />
										</li>
										<li>
											<img src="./images/background/11.jpg " />
										</li>
										<li>
											<img src="./images/background/10.jpg " />
										</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<!--个性化设置  结束-->


			<!--登陆 注册 开始-->
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
				<div class="nav_inner_body mylogin setColor" id="mylogin">
					
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
									<a href="#" class="login_btn_login" >注&nbsp;&nbsp;册</a>
								</div>
								<div class="login_btn left" id="logined_s">
									<a href="#" class="login_btn_login">登&nbsp;&nbsp;陆</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="nav_inner_body mylogined setColor" id="mylogined">
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
							<span class="lock_icon"></span><br />
							锁定屏幕
						</a>
					</div>
					<div class="login_ed_btns out" id="out">
						<a href="#">
							<span class="out_icon"></span><br />
							退出
						</a>
					</div>
				</div>
			</div>
			<!--登陆 注册 结束-->

	</div>






	<!--应用管理 start-->	
	<div class="foot_nav_inner yy setColor" id="yy">
	<!--顶部标题 -->
		<header class="nav_inner_head">
			<h3>
				<span>应用管理</span>
			</h3>
		</header>
		<input type="text" placeholder="输入关键字进行搜索" class="abt_content_sec" id="abt_content_sec"/>
		<div class="nav_inner_body">
			<!--登陆选项-->
			
			<!--登陆界面-->
			<div class="nav_inner_active aibition">
        		<div class="abt_content" >
        			
        			<div class="nav_inner_abt_content" id="abt_content">
        				<!--<div class="abt_con_nav">
        					<div class="abt_con_group">公司新闻</div>
            				<div class="abt_con_item">
            					<div class="abt_con_item_icon">
            						<img src="./images/desktop/newsQQ.png" />
            					</div>
            					<div class="abt_con_item_name">腾讯新闻</div>
            				</div>
            			</div>-->
            			
        			</div>
        			<div class="scroll_bars" style='display:none;'>
        				<div class="scroll_bars_nav" id="scroll_bars_nav">
            				<div class="scroll_bars_son" id="p_slied"></div>
            			</div>
        			</div>
        		</div>
        	</div>
		</div>
		<!--应用管理  end-->	

		</div>


			<!-- 反馈意见 start-->
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
		<!-- 反馈意见 end-->

	</div>		




	<!--iframe框-->
	<div class="market_alert" style='display:none;'>
		<div class="market_alert_con">
			<div class="market_con_tit">
				<div class="market_tit_logo">
					<a href="javascript:;" id="market_alert_title">应用市场</a>
				</div>
				<a href="javascript:;" class="c_close"></a>
				<a href="javascript:;" class="c_big"></a>
				<a href="javascript:;" class="c_small"></a>
				
			</div>
		</div>
		<iframe src="" class="iframeBox"></iframe>
	</div>

<script type="text/javascript" src='./js/lgc_DesktopaData.js'></script>
<script type="text/javascript" src='./js/lgc_tools.js'></script>
<script type="text/javascript" src='./js/lgc_iconDesktop.js'></script>
<script type="text/javascript">
	iconDesktop.init();
</script>
<script type="text/javascript" src='./js/lgc_folderData.js'></script>
<script type="text/javascript" src='./js/lgc_folder.js'></script>
<script type="text/javascript" src='./media/js/media.js'></script>
<script type="text/javascript">
	Folder.init();
	media.init();
</script>
<script type="text/javascript" src='./js/lgc_mark.js'></script>
<script type="text/javascript">
	mark.init();
</script>
<script type="text/javascript" src='./js/lgc_myBottomBox.js'></script>

<script type="text/javascript" src='./js/lgc_pb_right.js'></script>
<script type="text/javascript" src='./js/lgc_about.js'></script>`;