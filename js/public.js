var colorLoadingArr = ['#1f5bb7','#59b728','#9b1dab','#cc3535','#d09615','#544a4a','#2f8052'];

function windOnload(fn)
{
	var old = window.onload;

	if(typeof window.onload != 'function')
	{
		window.onload = fn;
	}
	else
	{
		window.onload = function()
		{
			old();
			fn();
		}
	}
}


//创建CSS列表
function createCSS(header,aCss)
{
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