	//我的HteOS
	var p_deskTop = document.getElementById('p_deskTop');
	var p_user = document.getElementById('p_user');
	var p_manage = document.getElementById('p_manage');
	var myhteos = document.getElementById('myhteos');
	var myhteos_s = document.getElementById('myhteos_s');
	var p_contro = document.getElementsByClassName('foot_nav_inner');
	var login = document.getElementById('logining');
	var mylogin = document.getElementById('mylogin');
	var mylogined = document.getElementById('mylogined');
	var zhuce = document.getElementById('zhuce');
	var login_bottons = document.getElementById('login_bottons');
	var out = document.getElementById('out');
	var logined = document.getElementById('logined');
	var zhuced = document.getElementById('zhuced');
	var logined_s = document.getElementById('logined_s');
	var outer  =document.getElementById('iconPage');
	var footNavInner = document.getElementsByClassName('foot_nav_inner');

	var myIconYyGl = document.getElementById('myIconYyGl');

	var myIconHetOS = document.getElementById('myIconHetOS');


	//点击用户图标
	p_user.onclick = function(ev)
	{
		mhtos();
		ev.cancelBubble = true;
	};


	function mhtos()
	{
		for(var i=0;i<p_contro.length;i++)
		{
			p_contro[i].style.transform = 'translate(100%)';
		}
		myhteos.style.transform = 'translateX(0%)';
	}

	login.onclick = function(ev){
		mylogined.style.display = 'block';
		myhteos_s.style.display = 'none';
		login_bottons.style.display = 'block';

		ev.cancelBubble = true;
	};
	out.onclick = function(){
		myhteos.style.transform = 'translateX(100%)';
		mylogined.style.display = 'none';
		myhteos_s.style.display = 'block';
		login_bottons.style.display = 'none';
		
	};
	zhuce.onclick = function(ev){
		myhteos_s.style.display = 'none';
		mylogin.style.display = 'block';

		ev.cancelBubble = true;
	};
	logined_s.onclick = function(ev){
		mylogin.style.display = 'none';
		myhteos_s.style.display = 'block';

		ev.cancelBubble = true;
	};
	
	var yy = document.getElementById('yy');
	p_manage.onclick = yyFn;


	function yyFn(ev)
	{
		for(var i=0;i<p_contro.length;i++)
		{
			p_contro[i].style.transform = 'translate(100%)';
		}
		yy.style.transform = 'translate(0)';

		ev.cancelBubble = true;
	};

	myIconYyGl.onclick = function(ev)
	{
		for(var i=0;i<p_contro.length;i++)
		{
			p_contro[i].style.transform = 'translate(100%)';
		}
		yy.style.transform = 'translate(0)';

		myIconYyGl.parentNode.parentNode.style.display = 'none';
		ev.cancelBubble = true;
	};


	myIconHetOS.onclick = function(ev)
	{
		mhtos();
		ev.cancelBubble = true;
		this.parentNode.parentNode.style.display = 'none';
	}



	tools.click(document,function()
	{	
		for(var i=0;i<footNavInner.length;i++)
		{
			footNavInner[i].style.transform = 'translate(100%)';
		}
	});


	for(var i=0;i<footNavInner.length;i++)
	{
		tools.click(footNavInner[i],function(ev){
			ev.cancelBubble = true;
		});
	}


	//应用管理数据生成
	var abt_content = document.getElementById('abt_content');


	//生成新闻分类标题
	var news=`<div class="abt_con_nav">
				<div class="abt_con_nav">
					<div class="abt_con_group">${Desktop.homepage.stickDesktop.module.news.title}</div>
				</div>
			</div>`;
			
	var len_1 = Desktop.homepage.stickDesktop.module.news.content;
	
	for(var i=0;i<len_1.length;i++){
		news +=`
			<div class="abt_con_item">
				<div class="abt_con_item_icon">
					<img src="${Desktop.homepage.stickDesktop.module.news.content[i].image}" />
				</div>
				<div class="abt_con_item_name">${Desktop.homepage.stickDesktop.module.news.content[i].title}</div>
			</div>`;
	}
	//生成任务管理新闻
	var mission = `<div class="abt_con_nav">
						<div class="abt_con_nav">
							<div class="abt_con_group">${Desktop.homepage.stickDesktop.module.mission.title}</div>
						</div>
					</div>`;
	var len_2 = Desktop.homepage.stickDesktop.module.mission.content;
	for(var i=0;i<len_2.length;i++){
		mission +=`
			<div class="abt_con_item">
				<div class="abt_con_item_icon">
					<img src="${Desktop.homepage.stickDesktop.module.mission.content[i].image}" />
				</div>
				<div class="abt_con_item_name">${Desktop.homepage.stickDesktop.module.mission.content[i].title}</div>
			</div>`;
	}
	
	//生成知识文档模块
	
	var knowledge = `<div class="abt_con_nav">
						<div class="abt_con_nav">
							<div class="abt_con_group">${Desktop.homepage.stickDesktop.module.knowledge.title}</div>
						</div>
					</div>`;
	var len_3 = Desktop.homepage.stickDesktop.module.knowledge.content;
	for(var i=0;i<len_3.length;i++){
		knowledge +=`
			<div class="abt_con_item">
				<div class="abt_con_item_icon">
					<img src="${Desktop.homepage.stickDesktop.module.knowledge.content[i].image}" />
				</div>
				<div class="abt_con_item_name">${Desktop.homepage.stickDesktop.module.knowledge.content[i].title}</div>
			</div>`;
	}
	
	//生成督查督办
	
	var inspector = `<div class="abt_con_nav">
						<div class="abt_con_nav">
							<div class="abt_con_group">${Desktop.homepage.stickDesktop.module.inspector.title}</div>
						</div>
					</div>`;
	var len_4 = Desktop.homepage.stickDesktop.module.inspector.content;
	for(var i=0;i<len_4.length;i++){
		inspector +=`
			<div class="abt_con_item">
				<div class="abt_con_item_icon">
					<img src="${Desktop.homepage.stickDesktop.module.inspector.content[i].image}" />
				</div>
				<div class="abt_con_item_name">${Desktop.homepage.stickDesktop.module.inspector.content[i].title}</div>
			</div>`;
	}
	
	//生成流程管理
	
	var flowManage = `<div class="abt_con_nav">
						<div class="abt_con_nav">
							<div class="abt_con_group">${Desktop.homepage.stickDesktop.module.flowManage.title}</div>
						</div>
					</div>`;
	var len_5 = Desktop.homepage.stickDesktop.module.flowManage.content;
	for(var i=0;i<len_5.length;i++){
		flowManage +=`
			<div class="abt_con_item">
				<div class="abt_con_item_icon">
					<img src="${Desktop.homepage.stickDesktop.module.flowManage.content[i].image}" />
				</div>
				<div class="abt_con_item_name">${Desktop.homepage.stickDesktop.module.flowManage.content[i].title}</div>
			</div>`;
	}
	
	//生成快速启动
	
	var fastStart = `<div class="abt_con_nav">
						<div class="abt_con_nav">
							<div class="abt_con_group">${Desktop.homepage.stickDesktop.module.fastStart.title}</div>
						</div>
					</div>`;
	var len_6 = Desktop.homepage.stickDesktop.module.fastStart.content;
	for(var i=0;i<len_6.length;i++){
		fastStart +=`
			<div class="abt_con_item">
				<div class="abt_con_item_icon">
					<img src="${Desktop.homepage.stickDesktop.module.fastStart.content[i].image}" />
				</div>
				<div class="abt_con_item_name">${Desktop.homepage.stickDesktop.module.fastStart.content[i].title}</div>
			</div>`;
	}
	
	//模块儿相加
	
	abt_content.innerHTML = news+mission+knowledge+inspector+flowManage+fastStart;

	
	//滚动条
	
	var scroll_bars_nav = document.getElementById('scroll_bars_nav');
	var p_slied = document.getElementById('p_slied');
	var abt_contents = document.getElementsByClassName('abt_content');
	p_slied.onmousedown = function(ev){
		
		var disy = ev.clientY - getPos(this).top;
		
		
		var maxH = scroll_bars_nav.clientHeight - this.offsetHeight;
		document.onmousemove = function(ev){
			var y = ev.clientY - disy;
			if(y<0) y=0;
			if(y>maxH) y=maxH;
			//滚动条移动比例
			var scaleY = y/maxH;
			p_slied.style.top = y+'px';
			
			var value = abt_content.clientHeight*scaleY;
			abt_content.style.top = -value+ 'px';
		};
		document.onmouseup = function(){
			document.onmousemove = null;
		};
		
		ev.preventDefault();
		return false;
	};
	//添加滚轮事件
	abt_content.onmousewheel = fn;
	abt_content.addEventListener('DOMMouseScroll', fn);

	function fn(ev){
		var detail;
		if(ev.wheelDelta){
			detail = ev.wheelDelta;
		}else{
			detail = -ev.detail;
		}
		var y = p_slied.offsetTop;
		var num = 50;
		
		//最大可以移动距离
		var maxH = abt_content.clientHeight - p_slied.offsetHeight;
		
		if(detail<0){//负数向下，每次加一点
			
			y+=num;

		}else{
			y-=num;

		}

		//范围限制
		if(y<0) y = 0;

		if(y>maxH) y = maxH;
	
		//计算滚蛋条移动的比例。
		var scaleY = y/maxH;

		p_slied.style.top = y+'px';
		//根据滚蛋条比例计算内容显示的位置。
	
		var value = abt_content.clientHeight*scaleY;
		abt_content.style.top = -value+'px';

		//阻止默认行为
		ev.preventDefault();
		return false;
	}
	function getPos(obj){
		return obj.getBoundingClientRect();
	}
	



