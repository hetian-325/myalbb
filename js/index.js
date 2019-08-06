	// 轮播图
	let box1 = $(".ban_cnt_top");
	let box2 = $(".bct_box_1");
	let box3 = $(".bct_box_2");
	let arrImg1 = ['url(img/banner1.webp)','url(img/banner4.webp)','url(img/banner7.webp)','url(img/banner10.webp)','url(img/banner13.webp)'];
	let arrImg2 = ['url(img/banner2.webp)','url(img/banner5.webp)','url(img/banner8.webp)','url(img/banner11.webp)','url(img/banner14.webp)'];
	let arrImg3 = ['url(img/banner3.webp)','url(img/banner6.webp)','url(img/banner9.webp)','url(img/banner12.webp)','url(img/banner15.webp)'];
	let liDoms = $(".douBox")[0].children;
	let myTimer = null;
	let ord = 0;
	function autoPlay(){
		if(myTimer!=null){
			return;
		}
		myTimer = setInterval(function(){
			var preOrd = ord;
			reset();
			ord++;
			if(ord>4){
				ord=0;
			}
			auto();
			liDoms[preOrd].style.backgroundColor="";
			liDoms[ord].style.backgroundColor="red";
		},3000);
	}
	function auto(){
		box1.css("background",arrImg1[ord]);
		box2.css("background",arrImg2[ord]);
		box3.css("background",arrImg3[ord]);
		box2.animate({
			left:0
		},500,function(){
			box3.animate({
				left:0,
				opacity:1
			});
		});
	}
	function reset(){
		box1.css("background",arrImg1[ord]);
		box2.css("left","-700px");
		box3.css({
			opacity:0,
			left:'-50px'
		});
	}
	function stopPlay(){
		window.clearInterval(myTimer);
		myTimer = null;
	}
	function goImg(transOrd){
		var preOrd = ord;
		ord = transOrd;

		if(ord>4){
			ord = 0;
		}else if(ord<0){
			ord = 4;
		}
		render(preOrd,ord);
	}
	function render(preOrd,ord){
		reset();
		auto();
		// 改豆豆的颜色
		liDoms[preOrd].style.backgroundColor="";
		liDoms[ord].style.backgroundColor="red";
	}
	function preImg(){
		goImg(ord-1);
	}
	function nextImg(){
		goImg(ord+1);
	}

window.onload = function(){
	let liDoms = $(".douBox")[0].children;
	liDoms[ord].style.backgroundColor="red";
	box1.css("background",arrImg1[ord]);
	reset();
	auto();
	//自动播放
	autoPlay();
	//鼠标放在轮播图上会停止
	$(".ban_cnt_top")[0].onmouseover = function(){
		stopPlay();
		$(".arrowBox > span").css("display","block");
	};
	//鼠标离开轮播图会继续播放
	$(".ban_cnt_top")[0].onmouseout = function(){
		autoPlay();
		$(".arrowBox > span").css("display","none");
	};
	//鼠标移入按钮
	$(".arrowBox > span").mouseenter(function(){
		$(this).css("opacity",".6");
	});
	//鼠标移出按钮
	$(".arrowBox > span").mouseleave(function(){
		$(this).css("opacity",".3");
	});
	//点击豆豆，跳转到对应的图片
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].setAttribute("index",i);
		liDoms[i].onclick = function(){
			goImg(parseInt(this.getAttribute("index")));
		};
	}
	//左右按钮
	let leftBtn = $(".arrowBox")[0].firstElementChild;
	leftBtn.onclick = function(){
		preImg();
	}
	let rightBtn = $(".arrowBox")[0].lastElementChild;
	rightBtn.onclick = function(){
		nextImg();
	}
	// 轮播图结束
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
	$(".ban_cnt_btm > span:first").click(function(){
		if($(".bcb_bigBox").css('left')>="0px"){
			$(".bcb_bigBox").animate({left:'0px'});
		}else{
			$(".bcb_bigBox").animate({left:'+=700px'},"slow");
		}
	});
	$(".ban_cnt_btm > span:last").click(function(){
		if($(".bcb_bigBox").css('left')<="-1400px"){
			$(".bcb_bigBox").animate({left:'-1400px'});
		}else{
			$(".bcb_bigBox").animate({left:'-=700px'},"slow");
		}
	});
});

$(function(){
	var myTimer = setInterval(function(){
		$(".gun_box > div").animate({
			top:'-=20'
		},"slow",function(){
			if($(".gun_box > div").css("top")=="-82px"){
				$(".gun_box > div").css("top","-2px");
			}
		});
	},2000);
});