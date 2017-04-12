!function(){
	var auto_con=document.getElementById('auto_con');
	var cjmessager=auto_con.getElementsByClassName('cjmessager')[0];
	var taskbar_action_right=document.getElementsByClassName('hte-taskbar-action-right')[0];//底部右边栏

	var sure=cjmessager.children[1].getElementsByTagName('button')[0];
	var canSure=cjmessager.children[0].getElementsByTagName('button');
	
	//右键菜单
	var dkClick = document.getElementById('dkClick');
	var dkList = dkClick.getElementsByTagName('li');
	
	
	dkList[2].onclick = function(ev){
		
		ev.cancelBubble = true;
		forView();
		
	};
	dkList[3].onclick = function(ev){
		
		ev.cancelBubble = true;
		forAbout();
	};

	//点击关于弹出欢迎界面和确定
	taskbar_action_right.children[2].addEventListener('click',forAbout);
	function forAbout(){
		cjmessager.children[1].style.backgroundColor=css(setColor[0], 'background-color');

		cjmessager.style.display='block';
		cjmessager.children[0].style.display='none';
		cjmessager.children[1].style.display='block';
		dkClick.style.display = 'none';
	}
	sure.addEventListener('click',forSure);
	function forSure(){
		cjmessager.style.display='';
	}

	//点击意见反馈和确定取消
	taskbar_action_right.children[1].addEventListener('click',forView);
	function forView(){
		cjmessager.children[0].style.backgroundColor=css(setColor[0], 'background-color');

		cjmessager.style.display='block';
		cjmessager.children[0].style.display='block';
		cjmessager.children[1].style.display='none';
		dkClick.style.display = 'none';
	}
	canSure[0].addEventListener('click',forSure);
	canSure[1].addEventListener('click',forSure);

/*	//右下角点击即时通讯
	var msg=document.getElementsByClassName('msg')[0];
	taskbar_action_right.children[0].onclick = function(){
		
		alert('应用市场暂未开放');
	};
	taskbar_action_right.children[1].addEventListener('click',function(){
		
		
		alert('游客不能使用即时通讯功能');
	});*/
}();