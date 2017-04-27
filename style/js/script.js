$(function(){

	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"#\" class=\"btn1 btn-qq ycqq\"></a><div class=\"btn1 btn-wx\"><img class=\"pic\" src=\"/style/images/weixin.png\" onclick=\"window.location.href=\'#'\"/></div><div class=\"btn1 btn-phone\"><div class=\"phone\">400-180-5505</div></div><div class=\"btn1 btn-top\"></div></div>";
	$("#kefu").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();
			}else{
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});


//¿ØÖÆ¿Û¿Ûµ¯³ö²ã
$(function(){
	$(".ycqq").click(function(){
		$(".zcqq").show();
		});
	$(".zcqq ul li a").click(function(){
		$(".zcqq").hide();
		});
	})