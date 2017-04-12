var Folder = 
{
	init : function()
	{
		this.wrap = tools.$(document,'#folderAreaWrap');
		this.folderOpenBtn = tools.$(this.wrap,'.folderOpenBtn')[0];
		this.folderMenu = tools.$(this.wrap,'.folderMenu')[0];
		this.folderContent = tools.$(this.wrap,'.folderContent')[0];

		this.data = folderData.folder;

		//切换文件夹框 
		this.toggleFolder();

		//生成文件夹列表
		this.createFolderList(this.data);

		//顶部菜单列表点击
		this.folderBackArr = []; 
		this.folderMenuClick(this.data);

		//内容文件夹点击
		this.conFolderClick();

		//获取所有父级元素
		this.getPsData = [];
		this.folderElem = null;


		/* 图片视频音乐 */
		this.previewPic = document.getElementById('previewPic');
		this.pimg = this.previewPic.getElementsByClassName('pimg')[0];

		//拖动图片显示
		this.dragImg();

		//关闭图片遮罩层
		this.closeImg();

	},
	toggleFolder : function()
	{	
		var This = this;

		this.folderOpenBtn.onclick = function(ev)
		{	
			var ev  = window.event || ev;

			This.wrap.classList.toggle('folderToggle');
		}
	},
	createFolderList : function(data,callback)  //生成内容
	{
		var fCon = this.folderContent;
		var str = '';

		for(var i=0;i<data.length;i++)
		{
			str += `
			<div class="fcItem" data-file-type="${data[i].type}"  data-file-id="${data[i].id}" data-file-title="${data[i].title}"  data-file-pid="${data[i].pid}">
				<dl class="fciCon">
					<dt><img src="${data[i].icon}" /></dt>
					<dd>
						<p class="fciName">${data[i].title}</p>
						<p class="fciName"><input type="text" name="" class="fciRName"></p>
					</dd>
				</dl>
			</div>`;
		}
		fCon.innerHTML = str;

		callback&&callback(data);
	},
	folderMenuClick : function(data)
	{	
		var This = this;
		//this.addBackForData(this.folderBackArr,data);
		var backMenu = tools.$(this.folderMenu,'a')[0];

		backMenu.onclick = function()
		{

			//点击渲染上一层
			This.createFolderList(This.data);

			//再次添加绑定事件方法
			This.conFolderClick();
		}
	},
	addBackForData : function(arr,value)
	{	

		if(arr.length == 0)
		{
			arr.push(value);
			return;
		}

		for(var i=0;i<arr.length;i++)
		{
			if(arr[i] != value)
			{
				if(i >= arr.length-1)
				{	
					arr.push(value);
				}
			}
			else
			{
				break;
			}
		}
	},
	conFolderClick : function()   //给每个文件夹添加点击事件
	{	
		var That = this;
		var cons = tools.$(this.folderContent,'.fcItem');


		//给每个元素的onclick上绑定方法
		for(var i=0;i<cons.length;i++)
		{
			cons[i].onclick = fn;
		}

		//点击实现方法
		function fn()
		{	
			That.getDataById(this.dataset.fileId,That.data);
			var myaudio = document.getElementById('myaudio');
			var myMediaBox = document.getElementById('myMediaBox');
			var videoMedia = document.getElementById('videoMedia');

			if(this.dataset.fileType == 'folder')
			{	
				//渲染当前文件夹盒子
				That.contentRender(That.folderElem);
			}

			if(this.dataset.fileType == 'img')
			{	
				That.pimg.src = That.folderElem.src;
				That.showImg();
			}

			if(this.dataset.fileType == 'music')
			{	
				media.meidaInit(media.audio);
				myaudio.src = That.folderElem.src;
				mvshowImg.src = That.folderElem.image;
				mvshowImg.style.display = 'block';
				myMediaBox.style.display = 'block';
				videoMedia.style.display = 'none';
			}

			if(this.dataset.fileType == 'video')
			{	
				media.meidaInit(media.video);
				videoMedia.src = That.folderElem.src;
				videoMedia.style.display = 'block';
				mvshowImg.style.display = 'none';
				myMediaBox.style.display = 'block';
			}

			//每次点击后 在此给当前盒子内容 绑定点击事件
			That.conFolderClick();
		}

	},
	contentRender : function(obj)
	{	
		var child = obj.child;
		if(!child)
		{
			this.createFolderList([]);
			return;
		}
		
		var str = '';

		this.createFolderList(child);
	},
	getDataById(id,datas,callback)
	{	
		var data = datas;

		for(var i=0;i<data.length;i++)
		{
			if(data[i].id == id)
			{	
				this.folderElem = data[i];
				callback&&callback(data[i]);
			}
			else
			{
				if((data[i].child.length > 0))
				{	
					this.getDataById(id,data[i].child);
				}
			}
		}
	},
	forEach : function(arr,callback)
	{
		for(var i=0;i<arr.length;i++)
		{
			callback&&callback(arr[i],i,arr)
		}
	},
	dragImg : function()
	{
		var img = this.pimg;

		img.onmousedown = function(ev)
		{
			var ev = ev || window.event;

			var sX = ev.clientX - this.getBoundingClientRect().left;
			var sY = ev.clientY - this.getBoundingClientRect().top;

			document.onmousemove = function(ev)
			{
				var ev = ev || window.event;

				var disX = ev.clientX - sX;
				var disY = ev.clientY - sY;

				img.style.left = disX + 'px';
				img.style.top = disY + 'px';

			}

			document.onmouseup = function()
			{
				document.onmouseup = document.onmousemove = null;
			}
			
			return false;
		}
	},
	closeImg : function()
	{	
		var This = this;
		var btn = This.previewPic.getElementsByClassName('pclose')[0];

		btn.onclick = function()
		{
			This.previewPic.style.display = 'none';
		}
	},
	showImg : function()
	{
		this.previewPic.style.display = 'block';
	}
}