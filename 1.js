
var box = document.getElementById(id); //获取元素
 	var disX = 0;
 	var disY = 0;
 	box.addEventListener('mousedown',down);//给box添加 mousedown事件处理函数
 	function down(ev){
 		//计算鼠标按下的位置
 		disX = ev.clientX -this.offsetLeft;
 		disY = ev.clientY -this.offsetTop;
 		document.addEventListener('mousemove',move);
	function move(ev){
	 	//计算box移动的位置
	 		box.style.left = ev.clientX - disX+'px';
	 		box.style.top = ev.clientY -disY+'px';
	 	}

 	}


