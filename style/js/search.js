$(function(){ 

	$(".searchSelected").click(function(){ 
		$(".searchTab").show();
		$(this).addClass("searchOpen");
	}); 

	$(".searchTab li").hover(function(){
		$(this).addClass("selected");
	},function(){
		$(this).removeClass("selected");
	});
	 
	$(".searchTab li").click(function(){
		$(".searchSelected").html($(this).html());
		$(".type option").val($(this).attr('val2')); 
		$(".catid option").val($(this).attr('val')); 
		$(".searchTab").hide();
	});
    
	$(".searchTab li").click(function(){
		$(".searchSelected").html($(this).html());
		$(".type option").val($(this).attr('val2')); 
		$(".catid option").val($(this).attr('val')); 
		$(".searchTab").hide();
	});		
});


$(function(){ 

	$(".searchSelected1").click(function(){ 
		$(".searchTab1").show();
		$(this).addClass("searchOpen");
	}); 

	$(".searchTab1 li").hover(function(){
		$(this).addClass("selected");
	},function(){
		$(this).removeClass("selected");
	});
	 
	$(".searchTab1 li").click(function(){
		$(".searchSelected1").html($(this).html());
		$(".type option").val($(this).attr('val2')); 
		$(".catid option").val($(this).attr('val')); 
		$(".searchTab1").hide();
	});
    
	$(".searchTab1 li").click(function(){
		$(".searchSelected1").html($(this).html());
		$(".type option").val($(this).attr('val2')); 
		$(".catid option").val($(this).attr('val')); 
		$(".searchTab1").hide();
	});		
});
