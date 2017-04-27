

//内页显示更多
function showMoreContent(obj, shortWrapId, moreWrapId){	
	jQuery("#" + shortWrapId).hide();
	jQuery("#" + moreWrapId).fadeIn();
	jQuery("." + shortWrapId).hide();
	jQuery("." + moreWrapId).fadeIn();
}

function showMoreMajor(obj, shortWrapId, moreWrapId){	
	if(moreWrapId == "moreMajor"){
		jQuery(".majorMore").removeClass("majorHide");
	}else{
		jQuery(".majorMore").addClass("majorHide");		
	}
	jQuery("." + shortWrapId).hide();
	jQuery("." + moreWrapId).fadeIn();
}


