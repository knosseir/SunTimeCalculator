$(document).ready(function(){

$("#x").click(function(){
	vanish(function(){}, '');
});

$("#exp").click(function() {
	$("body").css({overflow: 'hidden'});
	$("#white").css({display: 'block'});
	$("#white").animate({ left: "0vw" }, 500);
});

});//closes doc

function vanish(callback, param){
	$("#white").animate({ left: "100vw" }, 500, function(){//callback bc needs delay
		$("#white").css({display: 'hidden'});
		$("body").css({overflow: 'auto'});
		callback(param);
	});
}

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function time(){
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	document.getElementById("dataTime").innerHTML = time;
	console.log('a');
}