
!(function(){
	
	
	//时间
	var spanTime = document.querySelector('.hte-taskbar-action-time');
	
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	
	spanTime.style.fontSize = '13px';
	spanTime.innerHTML = addZero(hour)+':'+addZero(minute);
	
	setInterval(function(){
		
		var time = new Date();
		var hour = time.getHours();
		var minute = time.getMinutes();
		
		spanTime.innerHTML = addZero(hour)+':'+addZero(minute);
		
	},1000);

	
	function addZero(x){
		
		return x<10?x+'0':x+'';
	}
	var flexWrap = document.querySelector('.flex_module_wrap');

	//磁铁模块一
	var box1 = document.createElement('div');
	box1.className = 'module_box module_box_01';
	var str = '<span class="mbm_title"><p class="mbm_p mbm_t">'+Desktop.homepage.stickDesktop.module.news.title+'</p><p class="mbm_p mbm_i"><input type="text" value='+Desktop.homepage.stickDesktop.module.news.title+' class="mbm_input" /></p></span><span class="mbm_box mbm_box_middle"><img src="'+Desktop.homepage.stickDesktop.module.news.content[0].image+'" class="mbmid_img" /><p class="mbmid_title">'+Desktop.homepage.stickDesktop.module.news.content[0].title+'</p></span><span class="mbm_box mbm_box_small"><img src="'+Desktop.iconDesktop[16].image+'" class="mbsml_img" /><p class="mbsml_title">'+Desktop.iconDesktop[16].title+'</p></span><span class="mbm_box mbm_box_middle"><ul class="mbm_mid_info"><li class="mmi_list"><p>墨西哥赛解签：小德或战波特罗 决赛德纳决？</p><h4>体育</h4><time>2017-2-17 12:25</time></li><li class="mmi_list"><p>墨西哥赛解签：小德或战波特罗 决赛德纳决？</p><h4>体育</h4><time>2017-2-17 12:25</time></li><li class="mmi_list"><p>墨西哥赛解签：小德或战波特罗 决赛德纳决？</p><h4>体育</h4><time>2017-2-17 12:25</time></li></ul><p class="mbmid_title mbmid_title_mask">'+Desktop.homepage.stickDesktop.module.news.content[2].title+'</p></span><span class="mbm_box mbm_box_small mbm_box_smallyd"><span class="mbs_small mbs_small_default" ><img src="'+Desktop.homepage.stickDesktop.module.news.content[3].image+'" class="mbsml_img" /></span><span class="mbs_small mbs_small_hover"><p>'+Desktop.homepage.stickDesktop.module.news.content[3].title+'</p></span></span></div>';

	box1.innerHTML = str;
	flexWrap.appendChild(box1);
	//磁贴模块2
	var box2 = document.createElement('div');
	str = `<div class="module_box module_box_02">

				<span class="mbm_title">
					<p class="mbm_p mbm_t">${Desktop.homepage.stickDesktop.module.mission.title}</p>
					<p class="mbm_p mbm_i">
						<input type="text" value='${Desktop.homepage.stickDesktop.module.mission.title}' class="mbm_input" />
					</p>
				</span>

				<span class="mbm_box mbm_box_big mbm_box_big_tb">
					
					<span class="mbs_big mbs_big_default" >
						<img src="${Desktop.homepage.stickDesktop.module.mission.content[0].image}" class="mbbig_img" />
					</span>

					<span class="mbs_big mbs_big_hover">
						<p>${Desktop.homepage.stickDesktop.module.mission.content[0].text}</p>
					</span>

				</span>

				<span class="mbm_box mbm_box_small mbm_box_small_cloud">
					<h4>${Desktop.homepage.stickDesktop.module.mission.content[1].title}</h4>
					<img src="${Desktop.homepage.stickDesktop.module.mission.content[1].image}" />
					<p>多云转阴 / 北风微风</p>
				</span>

				<span class="mbm_box mbm_box_small mbm_box_small_week">
					<h3>${Desktop.homepage.stickDesktop.module.mission.content[2].title}</h3>
					<p>${Desktop.homepage.stickDesktop.module.mission.content[2].text}</p>
				</span>
			</div>`;
	box2.innerHTML = str;
	flexWrap.appendChild(box2);
	//磁贴模块3
	var box3 = document.createElement('div');
	str = `<div class="module_box module_box_03">

				<!--03_title-->
				<span class="mbm_title">
					<p class="mbm_p mbm_t">${Desktop.homepage.stickDesktop.module.knowledge.title}</p>
					<p class="mbm_p mbm_i">
						<input type="text" value='${Desktop.homepage.stickDesktop.module.knowledge.title}' class="mbm_input" />
					</p>
				</span>


				<!--03_1-->
				<span class="mbm_box mbm_box_middle mbm_box_middle_music">	
					<dl class="mbmm_music">
						<audio src=""></audio>
						<dt><img src="${Desktop.homepage.stickDesktop.module.knowledge.content[0].content[0].image}" /></dt>
						<dd>
							<h4>${Desktop.homepage.stickDesktop.module.knowledge.content[0].content[0].music}</h4>
							<h5>${Desktop.homepage.stickDesktop.module.knowledge.content[0].content[0].author}</h5>
							<p class="music_btns">
								<a href="javascript:;" class=""></a>
								<a href="javascript:;" class=""></a>
								<i class="ccurationTime">03:36</i>
							</p>
						</dd>
					</dl>
				</span>


				<!--03_2-->
				<span class="mbm_box mbm_box_small mbm_box_small_processon">
					<img src="${Desktop.homepage.stickDesktop.module.knowledge.content[1].image}" class="mbsml_img" />
					<p class="mbsml_title">${Desktop.homepage.stickDesktop.module.knowledge.content[1].title}</p>
				</span>

				<!--03_3-->
				<span class="mbm_box mbm_box_small mbm_box_small_weiyun">
					
					<!--默认图片-->
					<span class="mbs_small mbs_small_default" >
						<img src="${Desktop.homepage.stickDesktop.module.knowledge.content[2].image}" class="mbbig_img" />
					</span>

					<!--Hover滑过标题内容-->
					<span class="mbs_small mbs_small_hover">
						<p>${Desktop.homepage.stickDesktop.module.knowledge.content[2].title}</p>
					</span>

				</span>


				<!--03_4-->
				<span class="mbm_box mbm_box_middle mbm_box_middle_stock">
					<ul class="mbm_mid_info">
						<li class="mmi_list_stock">
							<h3>${Desktop.homepage.stickDesktop.module.knowledge.content[3].content[0].text}</h3>
							<h4>${Desktop.homepage.stickDesktop.module.knowledge.content[3].content[0].data}</h4>
							<h5>${Desktop.homepage.stickDesktop.module.knowledge.content[3].content[0].num}</h5>
							<h6>-11.62</h6>
						</li>
					</ul>
					<p class="mbmid_title mbmid_title_mask">${Desktop.homepage.stickDesktop.module.knowledge.content[3].title}</p>
				</span>

			</div>
		`;
	box3.innerHTML = str;
	flexWrap.appendChild(box3);
	var box4 = document.createElement('div');
	str = `
		<div class="module_box module_box_04">

				<!--04_title-->
				<span class="mbm_title">
					<p class="mbm_p mbm_t">${Desktop.homepage.stickDesktop.module.inspector.title}</p>
					<p class="mbm_p mbm_i">
						<input type="text" value='${Desktop.homepage.stickDesktop.module.inspector.title}' class="mbm_input" />
					</p>
				</span>


				<!--04_1 乐视网-->
				<span class="mbm_box mbm_box_small mbm_box_small_leshi">	
					
					<!--默认图片 -->
					<span class="mbs_small mbs_small_default" >
						<img src="${Desktop.homepage.stickDesktop.module.inspector.content[0].image}" class="mbbig_img" />
					</span>

					<!--Hover滑过标题内容-->
					<span class="mbs_small mbs_small_hover">
						<p>${Desktop.homepage.stickDesktop.module.inspector.content[0].title}</p>
					</span>

				</span>


				<!--04_2 网易新闻-->
				<span class="mbm_box mbm_box_small mbm_box_small_wangyi">
					<!--默认图片-->
					<span class="mbs_small mbs_small_default" >
						<img src="${Desktop.homepage.stickDesktop.module.inspector.content[1].image}" class="mbbig_img" />
					</span>

					<!--Hover滑过标题内容-->
					<span class="mbs_small mbs_small_hover">
						<p>${Desktop.homepage.stickDesktop.module.inspector.content[1].title}</p>
					</span>
				</span>


				<!--04_3 快递100 -->
				<span class="mbm_box mbm_box_small mbm_box_small_kuaidi">

					<!--默认图片-->
					<span class="mbs_small mbs_small_default" >
						<img src="${Desktop.homepage.stickDesktop.module.inspector.content[2].image}" class="mbbig_img" />
					</span>

					<!--Hover滑过标题内容-->
					<span class="mbs_small mbs_small_hover">
						<p>${Desktop.homepage.stickDesktop.module.inspector.content[2].title}</p>
					</span>

				</span>


				<!--04_4  携程网 -->
				<span class="mbm_box mbm_box_small mbm_box_small_xiecheng">

					<!--默认图片-->
					<span class="mbs_small mbs_small_default" >
						<img src="${Desktop.homepage.stickDesktop.module.inspector.content[3].image}" class="mbbig_img" />
					</span>

					<!--Hover滑过标题内容-->
					<span class="mbs_small mbs_small_hover">
						<p>${Desktop.homepage.stickDesktop.module.inspector.content[3].title}</p>
					</span>

				</span>


				<!--04_5 美团网-->
				<span class="mbm_box mbm_box_middle mbm_box_middle_meituan">
					<img src="${Desktop.homepage.stickDesktop.module.inspector.content[4].image}" class="meituan_img" />
					<p class="mbmid_title">${Desktop.homepage.stickDesktop.module.inspector.content[4].title}</p>
				</span>


				<!--04_6 爱奇艺-->
				<span class="mbm_box mbm_box_middle mbm_box_middle_aiqiyi">
					<!--默认图片-->
					<span class="mbs_middle mbs_middle_default" >
						<img src="${Desktop.homepage.stickDesktop.module.inspector.content[5].image}"  />
					</span>

					<!--Hover滑过标题内容-->
					<span class="mbs_middle mbs_middle_hover">
						<p>${Desktop.homepage.stickDesktop.module.inspector.content[5].title}</p>
					</span>
				</span>


				<!--04_7 知乎-->
				<span class="mbm_box mbm_box_small mbm_box_small_zhihu">	
					
					<!--默认图片 -->
					<span class="mbs_small mbs_small_default" >
						<img src="${Desktop.homepage.stickDesktop.module.inspector.content[6].image}" class="mbbig_img" />
					</span>

					<!--Hover滑过标题内容-->
					<span class="mbs_small mbs_small_hover">
						<p>${Desktop.homepage.stickDesktop.module.inspector.content[6].title}</p>
					</span>

				</span>

			</div>
	`;
	box4.innerHTML = str;
	flexWrap.appendChild(box4);

	//磁贴模块5
	var box5 = document.createElement('div');
	str = `

		<div class="module_box module_box_05">

			<!--05_title-->
			<span class="mbm_title">
				<p class="mbm_p mbm_t">${Desktop.homepage.stickDesktop.module.flowManage.title}</p>
				<p class="mbm_p mbm_i">
					<input type="text" value='${Desktop.homepage.stickDesktop.module.flowManage.title}' class="mbm_input" />
				</p>
			</span>


			
			<!--05_1 有道云笔记-->
			<span class="mbm_box mbm_box_big mbm_box_big_ydybj">
				
				<!--默认图片-->
				<span class="mbs_big mbs_big_default" >
					<img src="${Desktop.homepage.stickDesktop.module.flowManage.content[0].image}" class="mbbig_img" />
				</span>

				<!--Hover滑过标题内容-->
				<span class="mbs_big mbs_big_hover">
					<p>${Desktop.homepage.stickDesktop.module.flowManage.content[0].title}</p>
				</span>

			</span>


			<!--05_2 Youtube-->
			<span class="mbm_box mbm_box_small mbm_box_small_youtubi">
				<!--默认图片-->
				<span class="mbs_small mbs_small_default" >
					<img src="${Desktop.homepage.stickDesktop.module.flowManage.content[1].image}" class="mbbig_img" />
				</span>

				<!--Hover滑过标题内容-->
				<span class="mbs_small mbs_small_hover">
					<p>${Desktop.homepage.stickDesktop.module.flowManage.content[1].title}</p>
				</span>
			</span>




			<!--05_3 QQ闹钟 -->
			<span class="mbm_box mbm_box_small mbm_box_small_qqrl">
				<img src="${Desktop.homepage.stickDesktop.module.flowManage.content[2].image}" />
				<p class="mbsml_title">${Desktop.homepage.stickDesktop.module.flowManage.content[2].title}</p>
			</span>



			<!--05_4 唱吧-->
			<span class="mbm_box mbm_box_middle mbm_box_middle_cangba">
				<img src="${Desktop.homepage.stickDesktop.module.flowManage.content[3].image}" class="cangba_img" />
				<p class="mbmid_title">${Desktop.homepage.stickDesktop.module.flowManage.content[3].title}</p>
			</span>


			
			<!--05_5 知乎-->
			<span class="mbm_box mbm_box_small mbm_box_small_kugou">	
				
				<!--默认图片 -->
				<span class="mbs_small mbs_small_default" >
					<img src="${Desktop.homepage.stickDesktop.module.flowManage.content[4].image}" class="mbbig_img" />
				</span>

				<!--Hover滑过标题内容-->
				<span class="mbs_small mbs_small_hover">
					<p>${Desktop.homepage.stickDesktop.module.flowManage.content[4].title}</p>
				</span>

			</span>

		</div>
	`;
	box5.innerHTML = str;
	flexWrap.appendChild(box5);

	//磁贴6
	var box6 = document.createElement('div');
	str = `
		<div class="module_box module_box_06">

			<!--06_title-->
			<span class="mbm_title">
				<p class="mbm_p mbm_t">${Desktop.homepage.stickDesktop.module.fastStart.title}</p>
				<p class="mbm_p mbm_i">
					<input type="text" value='${Desktop.homepage.stickDesktop.module.fastStart.title}' class="mbm_input" />
				</p>
			</span>


			
			<!--06_1 我的HteOS-->
			<span class="mbm_box mbm_box_big mbm_box_big_myos">
				
				<!--默认图片-->
				<span class="mbs_big mbs_big_default" >
					<img src="${Desktop.homepage.stickDesktop.module.fastStart.content[0].image}" />
				</span>

				<!--Hover滑过标题内容-->
				<span class="mbs_big mbs_big_hover">
					<p>${Desktop.homepage.stickDesktop.module.fastStart.content[0].title}</p>
				</span>

			</span>


			<!--06_2 百度地图-->
			<span class="mbm_box mbm_box_small mbm_box_small_bddt">
				<!--默认图片-->
				<span class="mbs_small mbs_small_default" >
					<img src="${Desktop.homepage.stickDesktop.module.fastStart.content[1].image}" class="mbbig_img" />
				</span>

				<!--Hover滑过标题内容-->
				<span class="mbs_small mbs_small_hover">
					<p>${Desktop.homepage.stickDesktop.module.fastStart.content[1].title}</p>
				</span>
			</span>


			<!--06_3 愤怒的小鸟-->
			<span class="mbm_box mbm_box_small mbm_box_small_angreyBird">

				<!--默认图片-->
				<span class="mbs_small mbs_small_default" >
					<img src="${Desktop.homepage.stickDesktop.module.fastStart.content[2].image}" class="mbbig_img" />
				</span>

				<!--Hover滑过标题内容-->
				<span class="mbs_small mbs_small_hover">
					<p>${Desktop.homepage.stickDesktop.module.fastStart.content[2].title}</p>
				</span>
			</span>

			<!--06_4 汽车之家 -->
			<span class="mbm_box mbm_box_small mbm_box_small_qczj">
				<img src="${Desktop.homepage.stickDesktop.module.fastStart.content[3].image}" class="mbsml_img" />
				<p class="mbsml_title">${Desktop.homepage.stickDesktop.module.fastStart.content[3].title}</p>
			</span>


			<!--06_5 个性化设置 -->
			<span class="mbm_box mbm_box_middle mbm_box_middle_myset">
				<img src="${Desktop.homepage.stickDesktop.module.fastStart.content[4].image}" class="mbmid_img" />
				<p class="mbmid_title">${Desktop.homepage.stickDesktop.module.fastStart.content[4].title}</p>
			</span>
			
		</div>
	`;
	box6.innerHTML = str;
	flexWrap.appendChild(box6);

	//修复
	var fixedImg = document.querySelector('.mbm_box_small_qqrl img');
	var fixedImg1 = document.querySelector('.mbm_box_big_myos .mbs_big_default img');

	
	fixedImg.style.width = '32px';
	fixedImg.style.height = '32px';
	fixedImg.style.margin = '34px 0 0 34px';

	fixedImg1.style.width = '206px';
	fixedImg1.style.height = '206px';
	fixedImg1.style.marginTop = '-70px';
	fixedImg1.style.marginLeft = '-70px';

	document.addEventListener('mousemove',function(ev){

		var ev = ev||event;

		ev.preventDefault();	
	});

	//所有磁贴盒子
	var flexSpan = flexWrap.querySelectorAll('.mbm_box');


	//弹出的iframe
	var marketAlert = document.querySelector('.market_alert');
	var marketTit = marketAlert.querySelector('.market_con_tit');
	var iframe = marketAlert.querySelector('iframe');
	var iClose = marketAlert.querySelector('.c_close');
	var iBig = marketAlert.querySelector('.c_big');
	var iSmall = marketAlert.querySelector('.c_small');
	var bg = marketAlert.querySelector('.market_tit_logo a');

	var n = 0;
	var now = null;

	//底部
	
	var iBottom = document.querySelector('.hte-taskbar-inner');
	var iTask = iBottom.getElementsByTagName('div');
	
	

	
	var frameOff = true;
	var arrClick = [0,4,11,12,18];
	var arrText = ['腾讯新闻','淘宝网','乐视视频','网易新闻','有道云'];
	var arrImg = ['./images/desktop/newSQQ.png','./images/desktop/taobao.png','./images/desktop/leishiIco.png','./images/desktop/wangyi.png','./images/desktop/youdao.png']
	var arrLink = ['http://www.qq.com/','http://taobao.com','http://www.le.com/','http://163.com/','http://note.youdao.com/web/']

	for(var i=0; i<arrClick.length; i++){

		flexSpan[arrClick[i]].index = i;
		flexSpan[arrClick[i]].addEventListener('click',function(ev){
			marketAlert.style.display = 'block';
			iframe.src = arrLink[this.index];
			bg.style.backgroundImage = 'url('+arrImg[this.index]+')';
			bg.innerHTML = arrText[this.index];


			now = n;
			var div = document.createElement('div');
			div.className = 'hte-task-bottom';
			div.src = arrLink[this.index];
			div.index = n;
			n++;
			div.img = arrImg[this.index];
			div.txt = arrText[this.index];
			div.innerHTML = `<img class="hte-task-icon" src="${arrImg[this.index]}">
					<span class="hte-task-name">${arrText[this.index]}</span>`;

			iBottom.appendChild(div);
			console.log(iTask);

			for(var i=0; i<iTask.length; i++){
 
				iTask[i].onclick = function(){
			

				
					marketAlert.style.width = '898px';
					marketAlert.style.height = '498px';
				
					marketAlert.style.left = '50%';
				
					marketAlert.style.top = '50%';
					marketAlert.style.marginTop = '-250px';
					marketAlert.style.marginLeft = '-500px';
				};
			}

		});
	}

	var iTask = iBottom.getElementsByTagName('div');
	
	
	
	iSmall.onclick = function(){

		marketAlert.style.transition = '.5s';
		marketAlert.style.width = 0;
		marketAlert.style.height = 0;
		// 
		marketAlert.style.left = '300px';
		marketAlert.style.bottom = 0;
		marketAlert.style.marginTop = '50%';

		setTimeout(function(){

			marketAlert.style.transition = '';
		},600);
	};
	iClose.onclick = function(){

		marketAlert.style.display = 'none';
		console.log(now);
		iBottom.removeChild(iBottom.children[now]);
	};
	iBig.onclick = function(){

		if(frameOff){

			marketAlert.style.width = window.innerWidth + 'px';
			marketAlert.style.height = window.innerHeight + 'px';
			marketAlert.style.left = 0;
			marketAlert.style.top = 0;
			marketAlert.style.margin = 0;
		}else{

			marketAlert.style.width = '898px';
			marketAlert.style.height = '498px';
			marketAlert.style.left = '50%';
			marketAlert.style.top = '50%';
			marketAlert.style.marginLeft = '-45px';
			marketAlert.style.marginTop = '-250px';
		}

		frameOff = !frameOff;
	};
	for(let i=0; i<flexSpan.length; i++){


		//拖拽功能
		flexSpan[i].addEventListener('mousedown',function(ev){

			var ev = ev||event;
			var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
			var scrollLeft = document.body.scrollLeft||document.documentElement.scrollLeft;
			var sX = ev.clientX;
			var sY = ev.clientY;
			var deltaX = sX - getPos(this).left;
			var deltaY = sY - getPos(this).top;
			//创建阴影盒子
			var box = document.createElement('div');
			box.style.width = this.offsetWidth + 'px';
			box.style.height = this.offsetHeight + 'px';
			box.style.position = 'absolute';
			box.style.left = sX - deltaX + 'px';
			box.style.top = sY - deltaY  + 'px';
			box.style.zIndex = -1;
			box.style.cursor = 'move';
			//box.style.background = getStyle(this,'backgroundColor');
			box.style.background = 'rgba(0,0,0,0.3)';
			document.body.appendChild(box);

			document.addEventListener('mousemove',mousemove);
			document.addEventListener('mouseup',mouseup);

			function mousemove(ev){


				var ev = ev||event;
				var eX = ev.clientX;
				var eY = ev.clientY;

				flexSpan[i].style.display = 'none';
				box.style.left = eX - deltaX + scrollLeft + 'px';
				box.style.top = eY - deltaY  + scrollTop + 'px';
				box.style.zIndex = 2;

			}

			function mouseup(ev){
				
				var ev = ev||event;
				for(var j=0; j<flexSpan.length; j++){

					if(Math.abs(getPos(flexSpan[j]).left-getPos(box).left)<flexSpan[j].offsetWidth/2&&Math.abs(getPos(flexSpan[j]).top - getPos(box).top<flexSpan[j].offsetHeight/2)){

						if(flexSpan[i].parentNode==flexSpan[j].parentNode){

							flexSpan[i].parentNode.insertBefore(flexSpan[i],flexSpan[j]);
						}						
					}
				}
				document.body.removeChild(box);
				flexSpan[i].style.display = 'block';
				document.removeEventListener('mousemove',mousemove);
				document.removeEventListener('mouseup',mouseup);

			}

		});
		
		
	}
	
	var mbm_title = document.getElementsByClassName('mbm_title');
	//mbm_title移入移出颜色
	for(var i = 0; i < mbm_title.length; i++) {
		mbm_title[i].addEventListener('mouseover', forHover);
		mbm_title[i].addEventListener('mouseout', forOut);
	}
	
	function forHover() {
		this.style.backgroundColor = css(setColor[0], 'background-color');
	}
	
	function forOut() {
		this.style.backgroundColor = '';
	}
	
	//更改标题
	// var flexTitle = document.querySelectorAll('.mbm_title');
	// for(let i=0; i<flexTitle.length; i++){

	// 	flexTitle[i].onclick = function(){

	// 		var p = this.querySelector('.mbm_p');
	// 		var inp = this.querySelector('.mbm_i');
	// 		p.style.display = 'none';
	// 		inp.style.dispaly = 'block';
	// 	};
	// }
	// 
	//iframe封装
	
	
	
	objDrag(marketTit);

	function getStyle(obj,attr){

		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	}
	function getPos(obj){

		return obj.getBoundingClientRect();
	}
	//拖拽封装
	function objDrag(obj){

		obj.addEventListener('mousedown',function(ev){

			var ev = ev||event;

			//处理浏览器滚动条位置的兼容
			var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
			var scrollLeft = document.body.scrollLeft||document.documentElement.scrollLeft;

			var sX = ev.clientX;
			var sY = ev.clientY;

			//得到点击目标的具体位置与目标定位的差值
			var deltaX = sX - getPos(this).left;
			var deltaY = sY - getPos(this).top;
			//监听鼠标移动 鼠标抬起
			document.addEventListener('mousemove',mousemove);
			document.addEventListener('mouseup',mouseup);
			function mousemove(ev){

				var ev = ev||event;
				var eX = ev.clientX;
				var eY = ev.clientY;

				document.body.style.cursor = 'move';
				marketAlert.style.margin = '0';
				
				marketAlert.style.left = eX - deltaX + scrollLeft + 'px';
				marketAlert.style.top = eY - deltaY + scrollTop + 'px';
				
			}

			function mouseup(){
				
				document.body.style.cursor = '';
				document.removeEventListener('mousemove',mousemove);
				document.removeEventListener('mouseup',mouseup);
			}
		});
	}

	
	//切换桌面模式
	var DKchangeToLGC = document.getElementById('DKchangeToLGC');

	DKchangeToLGC.onclick = function()
	{
		this.parentNode.style.display = 'none';

		var olgcHTML = lgcHTML;;
		var olgcCSS = myCss;
		var olgcJS = arrLgcJs;

		var myHead = document.getElementById('myHead');
		var myBody = document.getElementById('myBody');

		//HTML
		myBody.innerHTML = lgcHTML;
		
		//CSS
		createCSS(myHead,olgcCSS);

		//JS
		for(var i=0;i<arrLgcJs.length;i++)
		{
			var script = document.createElement('script');
			script.setAttribute('type','text/javascript');
			script.setAttribute('src',arrLgcJs[i].src);
			script.innerHTML = arrLgcJs[i].content;
			myBody.appendChild(script);
		}

		var color = colorLoadingArr[Math.ceil(Math.random()*colorLoadingArr.length)];
		var loading = document.getElementById('loading');
		loading.style.backgroundColor = color;

		setTimeout(function(){
			iconDesktop.init();
			Folder.init();
			media.init();
			mark.init();

			
			setTimeout(function(){
				loading.style.display = 'none';
			},1000);

		},100);

	};


	//创建CSS列表
	function createCSS(header,aCss)
	{	
		var links = document.getElementsByTagName('link');

		for(var i=0;i<links.length;i++)
		{
			links[i].setAttribute('href','');
		}

		for(var i=0;i<aCss.length;i++)
		{
			var link = document.createElement('link');
			link.setAttribute('rel','stylesheet');
			link.setAttribute('type','text/css');
			link.setAttribute('href',aCss[i]);

			header.appendChild(link);
		}
	}

	//创建JS列表
	function createJS(Body,aJs)
	{	
		for(var i=0;i<aJs.length;i++)
		{
			var script = document.createElement('script');
			script.setAttribute('type','text/javascript');
			script.setAttribute('src',aJs[i]);

			Body.appendChild(script);
		}
	}

})();