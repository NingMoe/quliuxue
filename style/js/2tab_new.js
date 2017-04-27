// JavaScript Document
$(document).ready(function() { 

	$("#first-tab").addClass('buttonHover');
});

function navigate_tabs3(container, tab)
{	
	$(".a").css('display' , 'none');
	$(".b").css('display' , 'none');
	$(".c").css('display' , 'none');

	$("#first-tab").removeClass('buttonHover');
	$("#second-tab").removeClass('buttonHover');
	$("#third-tab").removeClass('buttonHover');

	$("#"+tab).addClass('buttonHover');
	$("."+container).show();
//	$("."+container).show('slow');
}


$(document).ready(function() { 

	$("#four-tab").addClass('buttonHover');
});

function navigate_tabs4(container, tab)
{	

	$(".d").css('display' , 'none');
	$(".e").css('display' , 'none');
	$(".ff").css('display' , 'none');


	$("#four-tab").removeClass('buttonHover');
    $("#five-tab").removeClass('buttonHover');
	$("#six-tab").removeClass('buttonHover');

	
	$("#"+tab).addClass('buttonHover');
	$("."+container).show();
//	$("."+container).show('slow');
}



$(document).ready(function() { 

	$("#serven-tab").addClass('buttonHover');
});

function navigate_tabs5(container, tab)
{	
	$(".g").css('display' , 'none');
	$(".h").css('display' , 'none');
	$(".i").css('display' , 'none');

	
	$("#serven-tab").removeClass('buttonHover');
	$("#eight-tab").removeClass('buttonHover');
	$("#nine-tab").removeClass('buttonHover');
	
	$("#"+tab).addClass('buttonHover');
	$("."+container).show();
//	$("."+container).show('slow');
}



$(document).ready(function() { 

	$("#ten-tab").addClass('buttonHover');
});

function navigate_tabs6(container, tab)
{	

	$(".j").css('display' , 'none');
	$(".k").css('display' , 'none');
	$(".l").css('display' , 'none');
	
	$("#ten-tab").removeClass('buttonHover');
	$("#eleven-tab").removeClass('buttonHover');
	$("#twelve-tab").removeClass('buttonHover');
	
	$("#"+tab).addClass('buttonHover');
	$("."+container).show();
//	$("."+container).show('slow');
}



$(document).ready(function() { 

	$("#thirteen-tab").addClass('buttonHover');
});

function navigate_tabs7(container, tab)
{	

	$(".m").css('display' , 'none');
	$(".n").css('display' , 'none');
	$(".o").css('display' , 'none');
	
	$("#thirteen-tab").removeClass('buttonHover');
	$("#fourteen-tab").removeClass('buttonHover');
	$("#fifteen-tab").removeClass('buttonHover');
	
	$("#"+tab).addClass('buttonHover');
	$("."+container).show();
//	$("."+container).show('slow');
}

// JavaScript Document
$(document).ready(function() { 

	$("#first-tab").addClass('buttonHover1');
});

function navigate_tabs1(container, tab)
{	
	$(".a").css('display' , 'none');
	$(".b").css('display' , 'none');
	$(".c").css('display' , 'none');
	$(".d").css('display' , 'none');
	$(".e").css('display' , 'none');
	
	$("#first-tab").removeClass('buttonHover1');
	$("#second-tab").removeClass('buttonHover1');
	$("#third-tab").removeClass('buttonHover1');
	$("#four-tab").removeClass('buttonHover1');
	$("#five-tab").removeClass('buttonHover1');
	
	$("#"+tab).addClass('buttonHover1');
	$("."+container).show();
//	$("."+container).show('slow');
}


//JavaScript Document
//$(document).ready(function() { 
//
//	$("#sb-tab").addClass('buttonHover2');
//});
//
//function navigate_tabs2(container, tab)
//{	
//	$(".sa").css('display' , 'none');
//	$(".sb").css('display' , 'none');
//	$(".sc").css('display' , 'none');
//	$(".sd").css('display' , 'none');
//	$(".se").css('display' , 'none');
//
//	
//	$("#sa-tab").removeClass('buttonHover2');
//	$("#sb-tab").removeClass('buttonHover2');
//	$("#sc-tab").removeClass('buttonHover2');
//	$("#sd-tab").removeClass('buttonHover2');
//	$("#se-tab").removeClass('buttonHover2');
//
//	
//	$("#"+tab).addClass('buttonHover2');
//	$("."+container).show();
////	$("."+container).show('slow');
//}

$(document).ready(function() { 

	$("#first-tab").addClass('buttonHover');
});

function navigate_tabs(container, tab)
{	
	$(".a").css('display' , 'none');
	$(".b").css('display' , 'none');
	$(".c").css('display' , 'none');
	$(".d").css('display' , 'none');
	
	$("#first-tab").removeClass('buttonHover');
	$("#second-tab").removeClass('buttonHover');
	$("#third-tab").removeClass('buttonHover');
	$("#four-tab").removeClass('buttonHover');
	
	$("#"+tab).addClass('buttonHover');
	$("."+container).show();
//	$("."+container).show('slow');
}



//(function() {
//	var tab  = $(".r-c .contry").find("a"),
//		root = false;
//	
//
//
//	tab.each(function(i) {
//		var t = $.trim($(".ss").eq(i).html());
//		if(t) {
//			!root&&(_run($(this),i),root=true);
//			$(this).on("click",function() {
//				_run($(this),i);
//			});
//		}
//		else
//		{
//		    $(this).css({"cursor":"default","color":"#666"});
		
		
//		}
//	});
//	function _run(obj,i) {
//		obj.addClass("buttonHover2").siblings().removeClass("buttonHover2");
//		$(".ss").hide().eq(i).show();
//	}
//})();

(function() {
	var tab = $(".contry").find("a");
	tab.each(function(i) {
		
		$(this).on("click",function() {
			$(this).addClass("buttonHover2").siblings().removeClass("buttonHover2");
			$(".ss").hide().eq(i).show();
		});
		
	});
})();
$(document).ready(function() { 
$(".contry a:eq(4)").addClass('buttonHover2');
$(".ss").eq(4).show()
});



(function() {
	if (($.trim($(".sa .rrr").html())== '')&& ($.trim($(".sb .rrr").html())== '')&&($.trim($(".sc .rrr").html())== '')&&($.trim($(".sd .rrr").html())== '')&&($.trim($(".se .rrr").html())== '')){
	$(".r-left .ccc").show();
	}
})();
(function() {
	if($.trim($(".c-2 .a").html()) == ''){ 
	$(".c-2 .a").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .b").html()) == ''){ 
	$(".c-2 .b").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .c").html()) == ''){ 
	$(".c-2 .c").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .d").html()) == ''){ 
	$(".c-2 .d").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .e").html()) == ''){ 
	$(".c-2 .e").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .ff").html()) == ''){ 
	$(".c-2 .ff").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .g").html()) == ''){ 
	$(".c-2 .g").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .h").html()) == ''){ 
	$(".c-2 .h").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .i").html()) == ''){ 
	$(".c-2 .i").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .j").html()) == ''){ 
	$(".c-2 .j").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
if($.trim($('.c-2 .k').html()) == ''){ 
$(".c-2 .k").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .l").html()) == ''){ 
	$(".c-2 .l").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .m").html()) == ''){ 
	$(".c-2 .m").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .n").html()) == ''){ 
	$(".c-2 .n").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();
(function() {
	if($.trim($(".c-2 .o").html()) == ''){ 
	$(".c-2 .o").html('<p style="line-height:30px; text-align:center;font-size:14px;padding:15px 0px;"><img src="style/images/55.png" width="50px" height="50px" style="vertical-align: middle;"/>选校报告未生成<br />如果还没有填写资料，马上填写，现在去<a href="/index.php?m=content&c=index&a=lists&catid=56">生成选校报告</a> ！<br />如果已经填写资料，可能是您情况特殊，系统无法匹配学校，请咨询留学老师，<a href="http://wpa.qq.com/msgrd?v=3&uin=3097401794&site=qq&menu=yes" target="_blank">立刻咨询</a>！</p>');
	}
})();

  