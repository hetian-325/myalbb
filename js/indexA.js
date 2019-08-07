
window.onload =function(){
	//顶部左侧
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
}
// 表单前端验证
	// 会员名
	$(".username")[0].onfocus = function(){
		this.style.border=`1px solid #ff6000`;
		$(".tan_box1").show("fast");
	}
	$(".username")[0].onblur = function(){
		if(check(this.value,"username")){
			$(".tan_word1").hide();
		}else{
			$(".tan_word1").show();
		}
		this.style.border=`2px solid #dcdcdc`;
		$(".tan_box1").hide();
	}
	// 密码
	$(".userpass")[0].onfocus = function(){
		this.style.border=`1px solid #ff6000`;
		$(".tan_box2").show("fast");
	}
	$(".userpass")[0].onblur = function(){
		if(check(this.value,"userpass")){
			$(".tan_word2").hide();
		}else{
			$(".tan_word2").show();
		}
		this.style.border=`2px solid #dcdcdc`;
		$(".tan_box2").hide();
	}
	// 密码确认
	$(".userpassA")[0].onfocus = function(){
		this.style.border=`1px solid #ff6000`;
	}
	$(".userpassA")[0].onblur = function(){
		if($(this).val()==$(".userpass").val()){
			$(".tan_word3").hide();
		}else{
			$(".tan_word3").show();
		}
		this.style.border=`2px solid #dcdcdc`;
	}
	// 手机号
	$(".mobile3").toggle(
		function(){
			$(".mobile3")[0].style.backgroundPosition="2px -36px";
			$(".mobile4").css("display","block");
			$(".mobileLeft")[0].style.border=`1px solid #ff6000`;
		},
		function(){
			$(".mobile3")[0].style.backgroundPosition="2px 3px";
			$(".mobile4").css("display","none");
			$(".mobileLeft")[0].style.border="";
		}
	);
	let lis = $(".guoBox").children();
	for(var i=0;i<lis.length;i++){
		lis[i].onclick = function(){
			let boxDom = this.children;
			$(".mobile1")[0].innerHTML=boxDom[0].firstElementChild.innerHTML;
			$(".mobile2")[0].innerHTML=boxDom[0].lastElementChild.innerHTML;
		}
	}
	$(".mobileRgt")[0].onfocus = function(){
		this.style.border=`1px solid #ff6000`;
		$(".mobile4").css("display","none");
		$(".mobileLeft")[0].style.border="";
	}
	$(".mobileRgt")[0].onblur = function(){
		if(check(this.value,"userphone")){
			$(".tan_word4").hide();
		}else{
			$(".tan_word4").show();
		}
		this.style.border=`2px solid #dcdcdc`;
		$(".tan_box2").hide();
	}
	// 验证码
	$(function(){
		let btn = $(".yzmBox")[0].firstElementChild;
		btn.onmousedown = function(event){
			var evt = event || window.event;
			var disx = evt.offsetX;
			var disy = evt.offsetY;
			document.body.onmousemove = (event)=>{
				var evt = event || window.event;
				var offsetLeft = this.parentNode.offsetLeft;
				var x = evt.clientX - disx - offsetLeft;
				x = x<0 ? 0 : (x>(this.parentNode.offsetWidth-this.offsetWidth) ? (this.parentNode.offsetWidth-this.offsetWidth) : x);
				this.style.left = x + "px";
			}
		}
		btn.onmouseup = function(event){
			var evt = event || window.event;
			document.body.onmousemove = "";
			if(this.offsetLeft < (this.parentNode.offsetWidth-this.offsetWidth)){
				move(this, {left:0});
			} else {
				this.style.left = this.parentNode.offsetWidth-this.offsetWidth+"px";
			}
		}
	});
	function move(ele, obj){
		var speed = 2;
		var timer = setInterval(function(){
			if(Math.abs(ele.offsetLeft - obj.left) < speed) {
				clearInterval(timer);
				ele.style.left = obj.left+"px";
				return;
			}
			ele.style.left = ele.offsetLeft - speed + "px";
		},4);
	}