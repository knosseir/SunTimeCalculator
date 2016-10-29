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

function pageload(){
	findTime();
	findSeason();
}

function findTime(){
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	document.getElementById("dataTime").innerHTML = time;
}
function findSeason(){
	var dt = new Date();
	var month = dt.getMonth();
	var season;
	switch (month){
		case 11:
		case 0:
		case 1:
			season = "Winter";
			break;
		case 2:
		case 3:
		case 4:
			season = "Spring";
			break;
		case 5:
		case 6:
		case 7:
			season = "Summer";
			break;
		case 8:
		case 9:
		case 10:
			season = "Fall";
			break;
	}
	document.getElementById("season").innerHTML = season;
}