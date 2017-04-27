// JavaScript Document
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

