


//改变主题颜色
var taskbarActionRight = document.getElementsByClassName('hte-taskbar-action-right')[0]; //底部右栏
var indt = document.getElementsByClassName('indt')[0];
var theme_tit = document.getElementsByClassName('theme_tit')[0];
var theme_tit_udline = document.getElementsByClassName('theme_tit_udline')[0];
var theme_content = document.getElementsByClassName('theme_content');
var theme_content_pack = document.getElementsByClassName('theme_content_pack')[0];

var myIconGxHsZ = document.getElementById('myIconGxHsZ');




//点击弹出个性化设置
taskbarActionRight.children[0].addEventListener('click', forSet);
myIconGxHsZ.onclick = function(ev)
{
	forSet(ev);
	this.parentNode.parentNode.style.display = 'none';
}




function forSet(ev) {
	
	indt.style.display = 'block';
	indt.style.right = -indt.offsetWidth + 'px';
	indt.style.opacity = 0;

	setTimeout(function(){
		indt.style.right = 0 + 'px';
		indt.style.opacity = 1;
		indt.style.transform = 'translate(0)';
	},30);
	

	ev.stopPropagation();
	theme_content_pack.style.height = window.innerHeight - 72 - 65 - 20 + 'px';
	if(theme_content[0].style.display != 'none') {
		fnPd();
	}
	themescro.style.left = theme_content_pack.offsetWidth - 12 + 'px';

}
//点击隐藏个性设置
document.addEventListener('click', forSetno);

function forSetno() {

	indt.style.right = - indt.offsetWidth + 'px';
	indt.style.opacity = 1;
	indt.style.transform = 'translate(100%)';
	setTimeout(function(){
		//indt.style.display = 'none';
	},30);
};
indt.addEventListener('click', forCb);

function forCb(ev) {
	ev.stopPropagation();
};
//点击主题
theme_tit.children[1].addEventListener('click', forTheme);

function forTheme(ev) {
	themeslider.style.top = 0;
	theme_content[0].style.display = 'block';
	theme_content[1].style.display = 'none';
	theme_tit_udline.style.left = '';
	theme_content_pack.style.height = window.innerHeight - 72 - 65 - 20 + 'px';
	fnPd();
	themescro.style.left = theme_content_pack.offsetWidth - 12 + 'px';
}
//点击背景
theme_tit.children[2].addEventListener('click', forBg);

function forBg(ev) {
	themeslider.style.top = 0;
	theme_content[1].style.top = 0;
	themescro.style.display = 'block';
	theme_content[0].style.display = 'none';
	theme_content[1].style.display = 'block';
	theme_tit_udline.style.left = theme_tit_udline.parentNode.offsetWidth / 2 + 'px';
}

//页面高度变化个性设置出现滚动条
var themeslider = document.getElementsByClassName('themeslider')[0];
var themescro = document.getElementsByClassName('themescro')[0];

window.addEventListener('resize', function() {

	indt.style.height = window.innerHeight + 'px';
	//indt.style.right = indt.offsetWidth + 'px';
	theme_content_pack.style.height = window.innerHeight - 72 - 65 - 20 + 'px';

	fnPd();
	themescro.style.left = theme_content_pack.offsetWidth - 12 + 'px';

	if(theme_content[1].style.display == 'block') {
		themescro.style.display = 'block';
		theme_tit_udline.style.left = theme_tit_udline.parentNode.offsetWidth / 2 + 'px';
	}
});

//按住拖动滚动条
themeslider.addEventListener('mousedown', forTs);

function forTs(ev) {
	var ev = ev || event;
	var disy = ev.clientY - this.offsetTop;
	document.addEventListener('mousemove', forslider2);

	function forslider2(ev) {
		var t = ev.clientY - disy;
		if(t < 0) { t = 0; }
		if(t > themescro.clientHeight - themeslider.clientHeight) {
			t = themescro.clientHeight - themeslider.clientHeight;
		}
		themeslider.style.top = t + 'px';

		var scale = t / (themescro.clientHeight - themeslider.clientHeight);
		theme_content[0].style.top = scale * (theme_content_pack.clientHeight - theme_content[0].offsetHeight) + 'px';
		theme_content[1].style.top = scale * (theme_content_pack.clientHeight - theme_content[1].offsetHeight) + 'px';
	};
	document.addEventListener('mouseup', forslider3);

	function forslider3() {
		document.removeEventListener('mousemove', forslider2);
	};
	ev.preventDefault();
};

//添加滚轮
theme_content_pack.onmousewheel = forWheel;
theme_content_pack.addEventListener('DOMMouseScroll', forWheel);

function forWheel(ev) {
	var detail;
	if(ev.wheelDelta) {
		detail = ev.wheelDelta;
	} else {
		detail = -ev.detail;
	}
	var y = themeslider.offsetTop;
	var num = 30;

	//最大可以移动距离
	var maxH = themescro.clientHeight - themeslider.offsetHeight;

	if(detail < 0) {
		y += num;
	} else {
		y -= num;
	}

	//范围限制
	if(y < 0) y = 0;
	if(y > maxH) y = maxH;

	var scaleY = y / maxH;

	themeslider.style.top = y + 'px';
	var value = (theme_content_pack.clientHeight - theme_content[0].offsetHeight) * scaleY;
	var value2 = (theme_content_pack.clientHeight - theme_content[1].offsetHeight) * scaleY;
	theme_content[0].style.top = value + 'px';
	theme_content[1].style.top = value2 + 'px';
}

//点击变色
var theme_content_bgc = document.getElementsByClassName('theme_content_bgc');
var hteTaskbar = document.getElementsByClassName('hte-taskbar')[0];
var setColor = document.getElementsByClassName('setColor');

var mbm_title = document.getElementsByClassName('mbm_title');
for(var i = 0; i < theme_content_bgc.length; i++) {
	theme_content_bgc[i].index = i;
	theme_content_bgc[i].onclick = function(ev) {
		for(var j = 0; j < setColor.length; j++) {
			setColor[j].style.backgroundColor = css(this, 'background-color');
		}
		hteTaskbar.style.opacity = '.8';


	};
}

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

//改变背景壁纸
var bgPic = document.getElementsByClassName('theme_content_bgm')[0].getElementsByTagName('img');
var html = document.getElementsByTagName('html')[0];
var outer = document.getElementById('iconPage');
var arrPic = ['./images/background/10.jpg', './images/background/11.jpg', './images/background/cloud.jpg', './images/background/Wood.jpg']
for(var i = 0; i < bgPic.length; i++) {
	bgPic[i].addEventListener('click', changeBg);
}

function changeBg() {
	outer.style.backgroundImage = 'url(' + this.src + ')';
};


function fnPd(){
if(theme_content[0].offsetHeight - 7 > theme_content_pack.clientHeight) {
		themescro.style.display = 'block';
		theme_content[0].style.top = 0;
		theme_content[0].style.width = 92 + '%';
	} else {
		themescro.style.display = '';
		theme_content[0].style.width = '';
		theme_content[0].style.top = 0;
	}
}		
//获取css样式
function css(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}



