var cjmessager=document.getElementsByClassName('cjmessager')[0];
var taskbar_action_right=document.getElementsByClassName('hte-taskbar-action-right')[0];//底部右边栏

var sure=cjmessager.children[1].getElementsByTagName('button')[0];
var canSure=cjmessager.children[0].getElementsByTagName('button');

var aboutMyIconHetOS = document.getElementById('aboutMyIconHetOS');

//点击关于弹出欢迎界面和确定
taskbar_action_right.children[2].addEventListener('click',forAbout);
function forAbout(){
	cjmessager.style.display='block';
	cjmessager.children[0].style.display='none';
	cjmessager.children[1].style.display='block';
}

sure.addEventListener('click',forSure);
function forSure(){
	cjmessager.style.display='';

}

aboutMyIconHetOS.onclick = function(ev)
{
	forAbout();
	this.parentNode.parentNode.style.display = 'none';
}


//点击意见反馈和确定取消
taskbar_action_right.children[1].addEventListener('click',forView);
function forView(){
	cjmessager.style.display='block';
	cjmessager.children[0].style.display='block';
	cjmessager.children[1].style.display='none';
	console.log('ss');
}
canSure[0].addEventListener('click',forSure);
canSure[1].addEventListener('click',forSure);

var lgcIconPageTime = document.getElementById('lgcIconPageTime');

var lgcIconPageTimeTimer = null;

lgcIconPageTimeTimer = setInterval(function(){

	var date = new Date();

	var hour = myAddZero(date.getHours());
	var min = myAddZero(date.getMinutes());

	var str = hour + ':' + min;

	lgcIconPageTime.innerHTML = str;

},1000);


function myAddZero(num)
{
	if(num < 10)
	{
		num = '0' + num;
	}

	return num;
}
