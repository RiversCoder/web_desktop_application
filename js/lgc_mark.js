var mark = 
{
	init : function()
	{
		var markBox = document.getElementsByClassName('market_alert');
		var outer = document.getElementById('iconPage');
		
		/*
			var markTitle = markBox.getElementsByClassName('market_alert_con')[0];
			var markMin = markBox.getElementsByClassName('c_small')[0];
			var markMax = markBox.getElementsByClassName('c_big')[0];
			var markClose = markBox.getElementsByClassName('c_close')[0];
		*/
		var maxOnoff = true;


		for(var i=0;i<markBox.length;i++)
		{	
			var markTitle = markBox[i].getElementsByClassName('market_alert_con')[0];
			var markMax = markBox[i].getElementsByClassName('c_big')[0];
			var markMin = markBox[i].getElementsByClassName('c_small')[0];
			var markClose = markBox[i].getElementsByClassName('c_close')[0];
			
			markMax.addEventListener('click',markMaxFn);
			markMin.addEventListener('click',markMinFn);
			markClose.addEventListener('click',markCloseFn);
		}
		
		//drag(markBox);


		function markMinFn()
		{
			var markBox = this.parentNode.parentNode.parentNode;
			var bottomFrameBox = tools.getBottomElemById(markBox.dataset.id);
			
			var l = bottomFrameBox.getBoundingClientRect().left;
			var t = bottomFrameBox.getBoundingClientRect().top;
			var w = bottomFrameBox.clientWidth;
			var h = bottomFrameBox.clientHeight;

			markBox.style.transition = '0.3s';
			markBox.style.left = l +'px';
			markBox.style.top = t + 'px';
			markBox.style.width = w + 'px';
			markBox.style.height = h + 'px';
			markBox.style.opacity = 0;

			markBox.addEventListener('transitionend',fn);

			function fn()
			{
				this.style.display = 'none';

				this.removeEventListener('transitionend',fn);
			}
		}

		function markMaxFn()
		{	
			var markBox = this.parentNode.parentNode.parentNode;
			markBox.style.transition = '0.3s';
			if(maxOnoff)
			{
				var cW = document.body.clientWidth;
				var cH = document.body.clientHeight;

				markBox.style.width = cW - 2 + 'px';
				markBox.style.height = cH -2 + 'px';
				markBox.style.left = 0;
				markBox.style.top = 0;
				markBox.style.marginLeft = 0;
				markBox.style.marginTop = 0;
				markBox.style.zIndex = 9999;
			}
			else
			{
				markBox.style.cssText = 'display:block;';
			}
			
			maxOnoff = !maxOnoff;
		}

		function markCloseFn()
		{	
			var markBox = this.parentNode.parentNode.parentNode;
			markBox.style.cssText = 'display:none;';
			//var iframeBox = markBox.getElementsByClassName('iframeBox')[0];
			//iframeBox.close();
			outer.removeChild(markBox);
			
			//底部
			var hteT = document.getElementById('hte-taskbar-inner');
			var obj = tools.getBottomElemById(markBox.dataset.id);
			hteT.removeChild(obj);
		}

		function drag(obj)
		{
			var img = obj;

			img.onmousedown = function(ev)
			{
				var ev = ev || window.event;

				var sX = ev.clientX - this.getBoundingClientRect().left;
				var sY = ev.clientY - this.getBoundingClientRect().top;
				img.style.transition = '0s';

				var disW = document.body.clientWidth - this.offsetWidth;
				var disH = document.body.clientHeight - this.offsetHeight;


				document.addEventListener('mousemove',moveFn);

				document.addEventListener('mouseup',function(ev){
					document.removeEventListener('mousemove',moveFn);
				});
				

				function moveFn(ev)
				{

					var ev = ev || window.event;

					var disX = ev.clientX - sX;
					var disY = ev.clientY - sY;

					

					if(disX < 0)
					{
						disX = 0;
					}
					if(disY < 0)
					{
						disY = 0;
					}
					if(disX > disW)
					{
						disX = disW;
					}
					if(disY > disH)
					{
						disY = disH;
					}



					img.style.left = disX + 'px';
					img.style.top = disY + 'px';
				}

				return false;
			}
		}
	}
};
