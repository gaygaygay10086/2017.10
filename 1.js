document.addEventListener('mouseup',up);
function up(){
	 		//鼠标抬起的时候移除鼠标移动移动事件和鼠标抬起事件
	 		document.removeEventListener('mousemove',move);
	 		document.removeEventListener('mouseup',up);
	 	}