var media = 
{
	init : function()
	{	
		this.myMediaBox = document.getElementById('myMediaBox');
		this.mvbox = document.getElementById('mvbox');
		this.mvshow = this.mvbox.getElementsByClassName('mvshow')[0];
		this.mvshowImg = document.getElementById('mvshowImg');	
		this.closes = this.myMediaBox.getElementsByClassName('pclose')[0];
		this.mvcplay = this.mvbox.getElementsByClassName('mvcplay')[0];
		this.audio = document.getElementById('myaudio');
		this.video = document.getElementById('videoMedia');
		this.prevBtn = this.mvbox.getElementsByClassName('mvprevplay')[0];
		this.nextBtn = this.mvbox.getElementsByClassName('mvnextplay')[0];
		this.mvpPathway = this.mvbox.getElementsByClassName('mvpPathway')[0];
		this.mvpMoveway = this.mvbox.getElementsByClassName('mvpMoveway')[0];
		this.timer = null;

		//音频初始化
		this.meidaInit(this.audio);

		//拖拽盒子
		this.dragBox();

	},
	meidaInit : function(media)
	{
		//点击播放按钮 切换 播放以及暂停，以及样式的切换 
		this.play(media);

		//点击快进
		this.movefastForwrad(media);

		//点击快退
		this.movefastBack(media);

		//点击进度条 
		this.clickProgress(media);

		//关闭遮罩层
		this.closeFun(media);

	},
	play : function(media)
	{	
		var This = this;
		var play = this.mvcplay;
		var bool = null;
		
		//点击播放以及暂停
		play.onclick = function()
		{	
			This.toggleBtn(this,media);
		}
	},
	toggleBtn : function(obj,media)
	{	
		var This = this;
		var bool = obj.classList.toggle('mvcpause');

		if(bool)
		{	
			This.renderProgress(media);
			media.play();
		}
		else
		{	
			media.pause();
			clearInterval(media.timer);
		}
	},
	movefastForwrad : function(obj)
	{
		var This = this;
		var next = this.nextBtn;
		var time = null;

		//点击快进
		next.onclick = function()
		{	
			obj.currentTime += 5;
			This.renderProgress(obj);		
		}
	},
	movefastBack : function(obj)
	{
		var This = this;
		var prev = this.prevBtn;
		var time = null;

		//点击快退
		prev.onclick = function()
		{	
			obj.currentTime -= 5;

			This.renderProgress(obj);		
		}
	},
	renderProgress : function(obj)
	{
		var This = this;
		var progress = this.mvpMoveway;
		//var duration = obj.duration;
		var oWidth = this.mvpPathway.offsetWidth;
		

		if(obj.timer)
		{
			clearInterval(obj.timer);
		}
		

		obj.timer = setInterval(function()
		{
			var time  = obj.currentTime;
			var myWidth = parseFloat(time/obj.duration)*oWidth;

			progress.style.width = parseInt(myWidth) + 'px';

			if(time == obj.duration)
			{
				clearInterval(obj.timer);
			}

		},30);
	},
	clickProgress : function(obj)
	{
		var This = this;
		var pathway = this.mvpPathway;
		var progress = this.mvpMoveway;
		var durations = 299;
		var oWidth = this.mvpPathway.offsetWidth;

		pathway.onclick = function(ev)
		{
			var ev = ev || window.event;
			var l = ev.clientX - this.getBoundingClientRect().left;

			var c = parseFloat(parseInt((l/oWidth)*100)/100)*obj.duration;

			//progress.style.width = l + 'px';
			
			//obj.currentTime = c;
			
			ev.cancelBubble = true;
		}
		
	},
	dragBox : function()
	{
		var img = this.mvbox;

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
	closeFun : function(obj)
	{	
		var This = this;

		This.closes.onclick = function()
		{
			This.myMediaBox.style.display = 'none';
			obj.pause();
			This.toggleBtn(This.mvcplay,obj);
		}
	}
}