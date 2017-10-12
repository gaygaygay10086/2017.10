document.addEventListener('mousemove',move);
function move(ev){
	 	//计算box移动的位置
	 		box.style.left = ev.clientX - disX+'px';
	 		box.style.top = ev.clientY -disY+'px';
	 	}