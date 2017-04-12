var tools = 
{
	$ : function(obj,csstr) //选取元素
	{	
		if(csstr.charAt(0) == '.')
		{
			return obj.getElementsByClassName(csstr.substring(1));
		}
		else if(csstr.charAt(0) != '.' && csstr.charAt(0) != '#')
		{
			return obj.getElementsByTagName(csstr);
		}
		else if(csstr.charAt(0) == '#')
		{
			return document.getElementById(csstr.substring(1));
		}
		
	},
	resize : function(callback)  //封装多次调用window.onresize方法
	{
		var old = window.onresize;
		
		if(typeof window.onresize != 'function')
		{
			window.onresize = callback;
		}	
		else
		{
			window.onresize = function()
			{	
				old();
				callback&&callback();
			};
		}
	},
	click : function(obj,callback)   //点击方法封装
	{
		var old = obj.onclick;
		
		if(typeof obj.onclick != 'function')
		{
			obj.onclick = callback;
		}	
		else
		{
			obj.onclick = function()
			{	
				old();
				callback&&callback();
			};
		}
	},
	drag : function(obj,arr,check)   //拖拽元素 并且生成 克隆元素
	{	
		var This = this;
		// var outBoxIcon = document.getElementById('iconsBox');
		// var arr = tools.$(outBoxIcon,'.hte-shortcut');
		

		obj.onmousedown = function(ev)
		{	
			var ev = ev || window.event;
			var sX = ev.clientX - this.getBoundingClientRect().left;
			var sY = ev.clientY - this.getBoundingClientRect().top;


			var clone = obj.cloneNode(true);
			document.body.appendChild(clone);
			clone.style.transition = '0s';
			clone.style.opacity = '0';
			clone.style.zIndex = 100;
			var disW = document.body.clientWidth - clone.offsetWidth;
			var disH = document.body.clientHeight - clone.offsetHeight;
			var oldArr = arr;
			arr = This.splices(arr,obj.index);

			//1.检测拖拽行为  2.获取鼠标抬起的位置
			var checkDisX = 0;
			var checkDisY = 0;


			document.onmousemove = function(ev)
			{	
				var ev = ev || window.event;

				var eX = ev.clientX - sX;
				var eY = ev.clientY - sY;
				
				console.log(eX,eY,sX,sY); //234 132 27 31
				
				//设定X拖动范围
				if(eX < 0)
				{
					eX = 0;
				}
				else if(eX > disW)
				{
					eX = disW;
				}

				//设定Y拖动范围
				if(eY < 0)
				{
					eY = 0;
				}
				else if(eY > disH)
				{
					eY = disH;
				}

				//console.log(eY,eX);
				//运动
				clone.style.opacity = 1;
				clone.style.left  = eX +  'px';
				clone.style.top  = eY + 'px';
				
				//检测碰撞
				This.checkCrash(clone,arr,function(arr,i){
					This.setCrashElemStyle(arr,i);
				});
				
				//给当前位置赋值
				checkDisX = Math.abs(eX - obj.getBoundingClientRect().left);
				checkDisY = Math.abs(eY - obj.getBoundingClientRect().top);
			};

			document.onmouseup = function()
			{	
				var parentBox = This.$(document,'#appsFConBox');
				var parentDeskBox = This.$(document,'#iconsBox');


				if(check == 'desktopIcons')
				{
					//清除样式
					This.setCrashElemStyle(arr);

					//鼠标松开后操作
					This.checkCrash(clone,arr,function(arr,i){
						This.crashMouseUp(arr,i,obj);
					});

					//检测是否移入应用框中
					// 1.在桌面中删除该节点元素 2.在应用框中添加该元素运动 3.给该元素绑定拖动事件
					
					//检测鼠标抬起时是否 已经进入应用框范围 如果进入 执行删除节点
					This.checkMoveOut(clone,parentBox,function(){},function(){

						//移出我的应用之后的操作
						This.operateAppBoxs(obj,parentDeskBox,function(){

							//1.删除节点后 重新进行排序
							This.arrangeIcon();

							//2.在应用框添加该元素并 重新排序 生成坐标位置 从鼠标抬起位置 运动到桌面布局坐标
							This.appBoxAddElem(parentBox,clone,function(){
								This.arrangeAppIcon(parentBox,20);
							});

							//3.再次绑定拖动事件
							This.dragReflashIcons(parentBox,'appIcons');

							//初始化 点击弹出弹框
							mark.init();
						});

					});


					//显示我的应用盒子
					//检测不属于拖拽行为
					//console.log(checkDisX,checkDisY)
					console.log(checkDisX,checkDisY);
					if(checkDisX < 10 && checkDisY < 10)
					{	
						console.log('ss');
						This.showAppBox(obj);
						This.showAppIframe(obj);
						This.showBottomAppIframe(obj);
						This.bottomAppIframeBoxClick();
					}
					
				}

				if(check == 'appIcons')
				{
					//清除样式
					This.setCrashElemStyle(arr);

					//鼠标松开后操作
					This.checkCrash(clone,arr,function(arr,i){
						This.crashAppMouseUp(arr,i,obj);
					});

					//检测移出 
					// 1.在应用框中删除该节点元素 2.在桌面添加该元素运动
		
					//检测出来属于拖动行为后开始执行
					if(checkDisX > 10 || checkDisY > 10)
					{
						//检测鼠标抬起时是否 已经超出应用框范围 如果超出 执行删除节点
						This.checkMoveOut(clone,parentBox,function(){

							//移出我的应用之后的操作;
							This.operateAppBoxs(obj,parentBox,function(){
								

								//1.删除节点后 重新进行排序
								This.arrangeAppIcon(parentBox,20);

								//2.在桌面添加该元素并 重新排序 生成坐标位置 从鼠标抬起位置 运动到桌面布局坐标
								/*This.deskTopAddData(clone,function(data)
								{	
									This.deskCreatePageIcons(parentDeskBox,data);
									This.arrangeIcon();
								});	*/

								This.deskTopAddElem(parentDeskBox,clone,function(){
									This.arrangeIcon();
								});

								//3.再次绑定拖动事件
								This.dragReflashIcons(parentDeskBox,'desktopIcons');
							});
						});
					}
				}
				

				//其他方法:
				
				

				document.body.removeChild(clone);
				document.onmousemove = document.onmouseup = null;
			};

			ev.cancelBubble = true;
			return false;
		};
		
	},
	checkCrash : function(obj,arr,callback)
	{	
		var This = this;

		//检测边界
		var l = This.getPos(obj).left;
		var t = This.getPos(obj).top;
		var b = This.getPos(obj).bottom;
		var r = This.getPos(obj).right;


		//用当前克隆元素去碰撞 当前所有元素
		var i=0;
		for(i=0;i<arr.length;i++)
		{	
			//如果没有碰撞
			if(l > This.getPos(arr[i]).right || t > This.getPos(arr[i]).bottom || b < This.getPos(arr[i]).top || r < This.getPos(arr[i]).left)
			{
				//没有发生碰撞
			}
			else
			{	
				callback&&callback(arr,i);
				return;
			}
		}
	},
	checkMoveOut : function(obj,parent,callback,callback2)
	{
		var This = this;

		//检测边界
		var l = This.getPos(obj).left;
		var t = This.getPos(obj).top;
		var b = This.getPos(obj).bottom;
		var r = This.getPos(obj).right;

		//再检测 parent 的边界
		var pl = This.getPos(parent).left;
		var pr = This.getPos(parent).right;
		var pt = This.getPos(parent).top;
		var pb = This.getPos(parent).bottom;

		//如果子级与父级没有发生碰撞 则说明 已经移出父级框
		//如果没有碰撞
		if(l > pr || t > pb || b < pt || r < pl)
		{
			callback&&callback();
		}
		else
		{
			callback2&&callback2();
		}
	},
	operateAppBoxs : function(obj,parent,callback)
	{	

		if(obj.dataset.fileType == 'appsfolder')
		{
			return;
		}

		parent.removeChild(obj);
		callback&&callback();
	},
	deskTopAddData : function(obj,callback)  //移出框后在桌面添加数据
	{
		var data = Desktop.iconDesktop;
		var oId = obj.dataset.id;
		var oType = obj.dataset.fileType;
		var oUrl = obj.dataset.url;
		var oTitle = obj.dataset.title;
		var oImage = obj.dataset.image;

		var object = 
		{
			id : oId,
			type : oType,
			url : oUrl,
			title : oTitle,
			image : oImage
		}

		data.push(object);

		callback&&callback(data);
	},
	dragReflashIcons : function(parent,str)   //拖拽icons
	{
		var icons = parent.getElementsByClassName('hte-shortcut');

		for(var i=0;i<icons.length;i++)
		{	
			icons[i].index = i;
			this.drag(icons[i],icons,str);
		}
	},
	deskTopAddElem : function(parent,obj,callback)
	{	
		

		var newClone = obj.cloneNode(true);
		newClone.style.transition = '.2s';
		newClone.style.zIndex = 2;
		parent.appendChild(newClone);

		callback&&callback();
	},
	appBoxAddElem : function(parent,obj,callback)
	{	
		var This = this;

		var newClone = obj.cloneNode(true);

		var l =  This.getPos(obj).left;
		var t =  This.getPos(obj).top;
		var pl = This.getPos(parent).left;
		var pt = This.getPos(parent).top;

		var tX = l - pl;
		var tY = t - pt;

		newClone.style.left = tX + 'px';
		newClone.style.top = tY + 'px';
		newClone.style.transition = '.2s';
		newClone.style.zIndex = 100;
		parent.appendChild(newClone);

		callback&&callback();
	},
	deskCreatePageIcons : function(parent,data)
	{	
		var str = '';
		for(var i=0;i<data.length;i++)
		{
			str += 
				`<div class="hte-shortcut" data-id="${data[i].id}" data-file-type="${data[i].type}" data-url ="${data[i].url}"  data-title="${data[i].title}">
					<img src="${data[i].image}" data-title="${data[i].title}" />
					<p class="hte-shortcut-name">${data[i].title}</p>
				</div>`;
		}

		parent.innerHTML = str;
	},
	showAppBox : function(obj)
	{	
		
		if(obj.dataset.fileType == 'appsfolder')
		{
			var appBox = this.$(document,'#appsFolder');
			appBox.style.top = '50%';
			appBox.style.opacity = 1;
			//appBox.style.transform = 'scale(1)';
		}
	},
	showAppIframe : function(obj)
	{
		if(obj.dataset.fileType == 'app')
		{
			var appBox = this.$(document,'#appsFolder');
			var outer = document.getElementById('iconPage');
			// var markBoxWrap = document.getElementsByClassName('market_alert')[0];
			// var iframeBox = document.getElementById('iframeBox');
			// var market_alert_title = document.getElementById('market_alert_title');


			var newMarkBox = document.createElement('div');
			newMarkBox.className = 'market_alert';
			newMarkBox.style.display = 'block';
			newMarkBox.setAttribute('data-id',obj.dataset.id);

			var str = `
				<div class="market_alert_con">
					<div class="market_con_tit">
						<div class="market_tit_logo">
							<a href="javascript:;" class="market_alert_title">${obj.dataset.title}</a>
						</div>
						<a href="javascript:;" class="c_close"></a>
						<a href="javascript:;" class="c_big"></a>
						<a href="javascript:;" class="c_small"></a>
						
					</div>
				</div>
				<iframe src="${obj.dataset.url}" class="iframeBox"></iframe>`;

			newMarkBox.innerHTML = str;

			outer.appendChild(newMarkBox);
			mark.init();
		}
	},
	showBottomAppIframe : function(obj)
	{	
		if(obj.dataset.fileType != 'app')
		{
			return;
		}

		var hteTaskbarInner = this.$(document,'#hte-taskbar-inner');
		var str = hteTaskbarInner.innerHTML;

		str += 
		`<div class="hte-task-bottom" data-url="${obj.dataset.url}" data-file-type="app" data-id="${obj.dataset.id}">
				<img class="hte-task-icon" src="${obj.dataset.image}">
				<span class="hte-task-name">${obj.dataset.title}</span>
		</div>`;

		hteTaskbarInner.innerHTML = str;

		mark.init();
	},
	bottomAppIframeBoxClick : function()
	{
		var hteTaskbarInner = this.$(document,'#hte-taskbar-inner');
		var boxs = hteTaskbarInner.getElementsByClassName('hte-task-bottom');
		var This = this;


		for(var i=0;i<boxs.length;i++)
		{
			boxs[i].onclick = function()
			{	
				var iframe = This.getIframeBoxElemById(this.dataset.id);
				iframe.style.display = 'block';
				iframe.style.opacity = 0;
				var timer = null;

				clearTimeout(timer);
				timer = setTimeout(function(){
					iframe.style.cssText = 'display:block;left:calc(50% - 450px);top:calc(50% - 250px);width:898px;height:498px;opacity:1;';
					clearTimeout(timer);
				},30)
			}
		}
	},
	splices : function(arr,index)
	{	
		var newArr = [];
		var i=0;

		for(i=0;i<arr.length;i++)
		{
			if(i == index)
			{
				continue;
			}
			newArr.push(arr[i]);
		}

		return newArr;
	},
	setCrashElemStyle : function(arr,index) //设置碰撞的元素样式变化
	{	
		var css = 'hte-shortcut-bg';

		//碰撞后样式变化
		for(var i=0;i<arr.length;i++)
		{
			arr[i].classList.remove(css);
		}

		if(index)
		{
			arr[index].classList.add(css);
		}

	},
	crashMouseUp : function(arr,index,obj) //鼠标松开后依旧处于碰撞的情况下
	{	
		var This = this;
		var outBoxIcon = document.getElementById('iconsBox');

		//插入后 重新排列
		outBoxIcon.insertBefore(obj,arr[index]);

		This.arrangeIcon();
	},
	crashAppMouseUp : function(arr,index,obj)
	{
		var This = this;
		var outBoxIcon = document.getElementById('appsFConBox');

		//插入后 重新排列
		outBoxIcon.insertBefore(obj,arr[index]);

		This.arrangeAppIcon(outBoxIcon,20);
	},
	arrangeIcon : function()
	{	
		var parent = document.getElementById('iconsBox');;
		var icoChilds = parent.getElementsByClassName('hte-shortcut');

		var wH = parent.clientHeight;
		var oW = icoChilds[0].offsetWidth;
		var oH = icoChilds[0].offsetWidth;

		var num = parseInt(wH/(oH+30));

		//排列图标
		for(var i=0;i<icoChilds.length;i++)
		{	
			icoChilds[i].style.top = (oH+30)*(i%num) + 30 + 'px';
			icoChilds[i].style.left = (oW+30)*Math.floor(i/num) + 30 + 'px';
		}
	},
	arrangeAppIcon : function(obj,dis)
	{
		var parent = obj;
		var icoChilds = parent.children;

		if(icoChilds.length<=0)
		{
			return;
		}

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
	getPos : function(obj)   //获取getBoundingClientRect()
	{
		return obj.getBoundingClientRect();
	},
	getCss : function(obj,attr)   //获取css样式值
	{
		return parseFloat(obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr]);
	},
	checkFullScreen : function(element) 
	{ 
	  if(element.requestFullScreen) 
	  { 
	 	   element.requestFullScreen(); 
	  } 
	  else if(element.webkitRequestFullScreen ) 
	  { 
		   element.webkitRequestFullScreen(); 
	  } 
	  else if(element.mozRequestFullScreen) 
	  { 
		  element.mozRequestFullScreen(); 
	  } 
	},
	checkExitFullScreen : function()
	{
	  if(document.exitFullscreen) 
	  { 
	 	   document.exitFullscreen(); 
	  } 
	  else if(document.webkitExitFullscreen ) 
	  { 
		   document.webkitExitFullscreen(); 
	  } 
	  else if(document.mozExitFullscreen) 
	  { 
		  document.mozExitFullscreen(); 
	  } 
	},
	getBottomElemById : function(Id)
	{
		var hteTaskbarInner = this.$(document,'#hte-taskbar-inner');
		var boxs = hteTaskbarInner.getElementsByClassName('hte-task-bottom');

		for(var i=0;i<boxs.length;i++)
		{
			if(boxs[i].dataset.id == Id)
			{
				return boxs[i];
			}
		}
	},
	getIframeBoxElemById : function(Id)
	{
		var iframeBoxs = this.$(document,'.market_alert');

		for(var i=0;i<iframeBoxs.length;i++)
		{
			if(iframeBoxs[i].dataset.id == Id)
			{
				return iframeBoxs[i];
			}
		}
	}
} 