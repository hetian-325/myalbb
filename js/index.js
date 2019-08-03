
window.onload = function(){
	// 顶部左侧
	$(".cnt_c")[0].onmouseover = function(){
		$(".c_box")[0].style.display = "block";
	}
	$(".cnt_c")[0].onmouseout = function(){
		$(".c_box")[0].style.display = "none";
	}
	$(".c_box2")[0].onclick = function(){
		$(".c_box")[0].style.display = "none";
	}
	// 顶部右侧
	var lis = $(".top_right")[0].children;
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			this.style.cssText=`
				border-left:1px solid #ddd;
				border-right:1px solid #ddd;
				border-bottom:1px solid #fff;
			`;
			this.lastElementChild.style.display="block";
			this.firstElementChild.children[0].style.backgroundPosition=`right -32px`;
		}
		lis[i].onmouseout = function(){
			this.style.cssText=`
				border:none;
			`;
			this.lastElementChild.style.display="none";
			this.firstElementChild.children[0].style.backgroundPosition=`right 6px`;
		}
	}
	// 二维码
	$(".ewm_box")[0].onmouseover = function(){
		this.firstElementChild.children[1].style.opacity="1";
	}
	$(".ewm_box")[0].firstElementChild.children[1].onmouseover=function(event){
		var evt = event || window.event;
		evt.stopPropagation();
	}
	$(".ewm_box")[0].onmouseout = function(){
		this.firstElementChild.children[1].style.opacity="0";
	}
	// banner左侧切换
	var lis=$(".ban_uls")[0].children;
	var boxs=$(".big_box")[0].children;
	for(let i=0;i<lis.length;i++){
		lis[i].setAttribute("index",i);
		lis[i].style.cssText=`
			background:url(img/ban_left.png) no-repeat 10px ${i*(-28)}px;
		`;
		lis[i].onmouseover = function(){
			var index=this.getAttribute("index");
			this.style.cssText=`
				background:#ff6000 url(img/ban_left.png) no-repeat -22px ${i*(-28)}px;
			`;
			boxs[index].style.display="block";
		}
		lis[i].onmouseout = function(){
			var index=this.getAttribute("index");
			this.style.cssText=`
				background:url(img/ban_left.png) no-repeat 10px ${i*(-28)}px;
			`;
			boxs[index].style.display="none";
		}
		boxs[i].onmouseover = function(){
			this.style.display="block";
			lis[i].style.cssText=`
				background:#ff6000 url(img/ban_left.png) no-repeat -22px ${i*(-28)}px;
			`;
		}
		boxs[i].onmouseout = function(){
			this.style.display="none";
			lis[i].style.cssText=`
				background:url(img/ban_left.png) no-repeat 10px ${i*(-28)}px;
			`;
		}
	}
	// banner右上侧切换
	var lis_1=$(".brt_6")[0].children;
	for(var i=0;i<lis_1.length;i++){
		lis_1[i].onmouseover = function(){
			this.style.cssText=`
				box-sizing:border-box;
				border:1px solid #f66000;
			`;
			this.lastElementChild.style.display="block";
		}
		lis_1[i].onmouseout = function(){
			this.style.cssText=`
				border:1px solid #f1f1f1;
				border-left:none;
			`;
			this.lastElementChild.style.display="none";
		}
	}
}

function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}