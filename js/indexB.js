
window.onload = function(){
	$(".ewm img").click(function(){
		$(".cr_cen_1").show();
	});
	$(".ewm1 img").click(function(){
		$(".cr_cen_1").hide();
	});
	$(".ewm2 img").mouseenter(function(){
		$(".ewm2").animate({
			right:'180px'
		},function(){
			$(".ewm3").show("slow");;
		});
	});
	$(".ewm2 img").mouseleave(function(){
		$(".ewm2").animate({
			right:'105px'
		},function(){
			$(".ewm3").hide();
		});
	});
}
