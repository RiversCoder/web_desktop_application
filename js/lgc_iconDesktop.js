var iconDesktop  =
{
	init : function()
	{	

		this.outer = tools.$(document,'#iconPage');
		this.outBoxIcon = document.getElementById('iconsBox');
		
		//图标数据
		this.icoData = Desktop.iconDesktop;

		//显示图标
		this.showIcon(this.outBoxIcon);

		//获取icons
		this.icons = tools.$(this.outBoxIcon,'.hte-shortcut');

		//app应用框
		this.appsFolder = tools.$(document,'#appsFolder');
		this.appsFCon = tools.$(this.appsFolder,'.appsFCon')[0];
		this.appsFCboxs = tools.$(this.appsFCon,'.hte-shortcut');

		//动态排列图标
		this.arrangeIcon();

		//窗口改变 图标排列动态改变
		this.windowChange();

		//拖拽图标
		this.dragIcons();

		//钟表
		this.clock();

		//生成应用文件夹内容
		this.createAppFolderContent();

		//应用文件夹
		this.appFolder();

		//切换打开关闭应用文件夹
		this.toggleAppFolder();

		//右键菜单
		this.rightClickMenuList();

	},
	showIcon : function(parent)
	{	
		var out = this.outer;
		var data = this.icoData;
		var str = '';

		for(var i=0;i<data.length;i++)
		{
			str += 
				`<div class="hte-shortcut" data-id="${data[i].id}" data-file-type="${data[i].type}" data-url ="${data[i].url}"  data-title="${data[i].title}" data-image="${data[i].image}">
					<img src="${data[i].image}" data-title="${data[i].title}" />
					<p class="hte-shortcut-name">${data[i].title}</p>
				</div>`;
		}

		parent.innerHTML = str;
	},
	createAppFolderContent : function()
	{
		var boxs = this.appsFCon;
		var str  = '';

		var data = this.icoData;

		for(var i=0;i<data.length;i++)
		{
			if(data[i].id == 13000)
			{
				for(var j=0;j<data[i].child.length;j++)
				{
					str += 
					`<div class="hte-shortcut" data-id="${data[i].child[j].id}" data-file-type="${data[i].child[j].type}" data-url ="${data[i].child[j].url}"  data-title="${data[i].child[j].title}"  data-image="${data[i].child[j].image}">
						<img src="${data[i].child[j].image}" />
						<p class="hte-shortcut-name">${data[i].child[j].title}</p>
					</div>`;
				}
			}
		}

		boxs.innerHTML = str;

	},
	arrangeIcon : function()
	{	
		var parent = this.outBoxIcon;
		var icoChilds = parent.getElementsByClassName('hte-shortcut');

		var wH = parent.clientHeight;
		var oW = icoChilds[0].offsetWidth;
		var oH = icoChilds[0].offsetHeight;

		var num = parseInt(wH/(oH+30));

		//排列图标
		for(var i=0;i<icoChilds.length;i++)
		{	
			icoChilds[i].style.top = (oH+30)*(i%num) + 30 + 'px';
			icoChilds[i].style.left = (oW+30)*Math.floor(i/num) + 30 + 'px';
		}
	},
	iconClicksb : function(s,b)
	{	
		var This = this;
		var outIcon = this.outBoxIcon;
		var biger = b;
		var smaller = s;
		var css = 'outBox-middle-icon';

		//图标变大
		tools.click(biger,function(){
			outIcon.classList.add(css);
			This.arrangeIcon();
		});


		//图标变小
		tools.click(smaller,function(){
			outIcon.classList.remove(css);
			This.arrangeIcon();
		});

	},
	dragIcons : function()   //拖拽icons
	{
		var This = this;
		var icons = this.outBoxIcon.getElementsByClassName('hte-shortcut');

		for(var i=0;i<icons.length;i++)
		{	
			icons[i].index = i;
			tools.drag(icons[i],icons,'desktopIcons');
		}
	},	
	windowChange : function() //窗口尺寸大小改变
	{	
		var This = this;
		tools.resize(function(){
			This.arrangeIcon();
		});
	},
	fullScreen : function(gofull,outfull)   //窗口全屏显示  切换
	{	
		var This = this;
		var outer = This.outer;

		//全屏
		tools.click(gofull,function(){
			gofull.style.display = 'none';
			outfull.style.display = 'block';
			tools.checkFullScreen(outer);

		});

		//取消全屏
		tools.click(outfull,function(){
			outfull.style.display = 'none';
			gofull.style.display = 'block';
			tools.checkExitFullScreen();
		});
	},	
	appFolder : function()
	{
		this.arrangeChildsBoxs(this.appsFCon,20);
		this.dragElem(this.appsFCboxs);	
	},
	toggleAppFolder : function()
	{	
		var This = this;
		var appFClose = tools.$(this.appsFolder,'.appFoClose')[0];
		
		appFClose.onclick = function()
		{	
			This.appsFolder.style.top = '-50%';
			This.appsFolder.style.opacity = '0';
		}

	},
	dragElem : function(elems) //拖拽我的应用 app
	{
		var This = this;
		var icons = elems;

		for(var i=0;i<icons.length;i++)
		{	
			icons[i].index = i;
			tools.drag(icons[i],icons,'appIcons');
		}
	},
	arrangeChildsBoxs : function(obj,dis)
	{
		var parent = obj;
		var icoChilds = parent.children;

		var wW = parent.clientWidth;

		var oW = icoChilds[0].offsetWidth;
		var oH = icoChilds[0].offsetHeight;;

		var num = parseInt(wW/(oW+dis));


		//排列图标
		for(var i=0;i<icoChilds.length;i++)
		{	
			icoChilds[i].style.left = (oW+dis)*Math.floor(i%num) + dis + 'px';
			icoChilds[i].style.top = (oH+dis)*Math.floor(i/num) + dis + 'px';
		}
	},
	rightClickMenuList : function()  //右键菜单
	{
		var outer = this.outer;
		var menu = outer.getElementsByClassName('right_onclick')[0];
		var aLi = menu.getElementsByTagName('li');

		//多级菜单切换样式
		this.rightMenuClickStyleChange(aLi);

		//菜单内容点击 图标变大变小
		var small = menu.getElementsByClassName('rClickItemAsmall')[0];
		var big = menu.getElementsByClassName('rClickItemAbig')[0];
		this.iconClicksb(small,big);

		//菜单内容点击 全屏和非全屏
		var goFullScreenShow = menu.getElementsByClassName('goFullScreenShow')[0];
		var outFullScreenShow = menu.getElementsByClassName('outFullScreenShow')[0];
		this.fullScreen(goFullScreenShow,outFullScreenShow);

		//桌面右键菜单点击
		this.deskRightMenuClick(outer,menu);

		//菜单内容点击 切换到此贴页面
		var toggleStyleChangeToDK = document.getElementById('toggleStyleChangeToDK');

		this.toggleStyleChangeToDKS(toggleStyleChangeToDK);
	},
	deskRightMenuClick : function(outer,obj)
	{
		outer.oncontextmenu = function(ev)
		{
			var ev = ev || window.event;

			var x = ev.clientX;
			var y = ev.clientY;

			obj.style.display = 'block';
			obj.style.left = x + 'px';
			obj.style.top = y + 'px';

			return false;
		};

		outer.addEventListener('click',function(ev)
		{
			var ev = ev || window.event;

			obj.style.display = 'none';
		},false);
	},
	rightMenuClickStyleChange : function(aLi)
	{
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].onmouseenter = function()
			{	
				for(var i=0;i<this.children.length;i++)
				{	
					if(this.children[i].tagName == 'UL')
					{	
						
						this.children[i].style.display = 'block';
					}
					else
					{
						continue;
					}
				}
			}

			aLi[i].onmouseleave = function()
			{	
				for(var i=0;i<this.children.length;i++)
				{
					if(this.children[i].tagName == 'UL')
					{
						this.children[i].style.display = 'none';
					}
					else
					{
						continue;
					}
				}
			}
		}
	},
	toggleStyleChangeToDKS : function(obj)
	{	
		var odkHTML = dkHTML;
		var odkCSS = dkCSS;
		var odkJS = dkJS;
		var This = this;

		obj.onclick = function()
		{
			var myHead = document.getElementById('myHead');
			var myBody = document.getElementById('myBody');

			myBody.innerHTML = dkHTML;

			This.createCSS(myHead,odkCSS);
			This.createJS(myBody,odkJS);

			var color = colorLoadingArr[Math.ceil(Math.random()*colorLoadingArr.length)];
			var loading = document.getElementById('loading');
			loading.style.backgroundColor = color;

			setTimeout(function(){
				loading.style.display = 'none';
			},1000);
		}
	},
	createCSS : function (header,aCss)
	{	
		var links = header.getElementsByTagName('link');
		
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
	},
	createJS : function(Body,aJs)
	{	
		for(var i=0;i<aJs.length;i++)
		{
			var script = document.createElement('script');
			script.setAttribute('type','text/javascript');
			script.setAttribute('src',aJs[i]);

			Body.appendChild(script);
		}
	},
	clock : function()
	{
		var clock = document.getElementById('clocks');
		var shi = clock.getElementsByClassName('shiz')[0];
		var fen = clock.getElementsByClassName('fenz')[0];
		var miao = clock.getElementsByClassName('miaoz')[0];
		var elecClock = document.getElementById('elecTime');
		var elecItems = elecClock.getElementsByClassName('elcItem');
		var shie = elecClock.getElementsByClassName('elecHour')[0];
		var fene = elecClock.getElementsByClassName('elecMin')[0];
		var miaoe = elecClock.getElementsByClassName('elecSec')[0];
		var oldHours = '0';
		var oldMins = '0';
		var oldsecs = '0';

		clock.timer = setInterval(function(){
			var date = new Date();

			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();

			var oHours = shie.getElementsByTagName('span')[0];
			var oMins = fene.getElementsByTagName('span')[0];
			var oSecs = miaoe.getElementsByTagName('span')[0];

			var cHours = shie.getElementsByTagName('span')[1];
			var cMins = fene.getElementsByTagName('span')[1];
			var cSecs = miaoe.getElementsByTagName('span')[1];

			oHours.innerHTML = oldHours;
			oMins.innerHTML = oldMins;
			oSecs.innerHTML  = oldsecs;


			cHours.innerHTML = hour;
			cMins.innerHTML = min;
			cSecs.innerHTML  = sec;


			//时钟滚动
			for(var i=0;i<elecItems.length;i++)
			{
				var spn1 = elecItems[i].getElementsByTagName('span')[0];
				var spn2 = elecItems[i].getElementsByTagName('span')[1];


				if(spn1.innerHTML != spn2.innerHTML)
				{	

					elecItems[i].style.transition = '1s';
					elecItems[i].style.top = '-36px';

					elecItems[i].addEventListener('transitionend',function(){
						this.style.transition = '0s';
						this.style.top = 0;

						var tspn1 = this.getElementsByTagName('span')[0];
						var tspn2 = this.getElementsByTagName('span')[1];
						
						//tspn1.innerHTML = spn2.innerHTML;
					});
				}
			}


			oldHours = hour;
			oldMins = min;
			oldsecs = sec;


			shi.style.transform = 'rotate('+ ((hour+(min*60+sec)/3600)/12*360) +'deg)';
			fen.style.transform = 'rotate('+ (min+ sec/60)/60*360 + 'deg)';
			miao.style.transform = 'rotate('+ (sec/60*360) +'deg)';

		},1000);
	}	
}