
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
	var lis_0 = $(".top_right")[0].children;
	for(var i=0;i<lis_0.length;i++){
		lis_0[i].onmouseover = function(){
			this.style.cssText=`
				border-left:1px solid #ddd;
				border-right:1px solid #ddd;
				border-bottom:1px solid #fff;
			`;
			this.lastElementChild.style.display="block";
			this.firstElementChild.children[0].style.backgroundPosition=`right -32px`;
		}
		lis_0[i].onmouseout = function(){
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
	//banner右下切换
	let lis_2 = $(".uls_box")[0].children;
	for(var i=0;i<lis_2.length;i++){
		lis_2[i].setAttribute("index",i);
		lis_2[i].onmouseover=function(){
			for(var j=0;j<lis_2.length;j++){
				lis_2[j].style="";
			}
			this.style.cssText=`
				background:white;
				border-bottom:none;
			`;
			let boxs_2 = $(".brb_cnt")[0].children;
			for(var k=0;k<boxs_2.length;k++){
				boxs_2[k].style.display="none";
			}
			let index = this.getAttribute("index");
			boxs_2[index].style.display="block";
		}
	}
}

$(function(){
	let left1 = $(".bcb_box_1").css("left");
	let left2 = $(".bcb_box_2").css("left");
	let left3 = $(".bcb_box_3").css("left");
		$(".ban_cnt_btm > span:first").click(function(){
			$(".bcb_box").animate({left:'+=700px'},"slow");
		});
		$(".ban_cnt_btm > span:last").click(function(){
			$(".bcb_box").animate({left:'-=700px'},"slow");
		});
});