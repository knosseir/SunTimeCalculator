// The following functions can be used to get the current date.  
// You can use this in other parts of the website!
// Code is adapted from https://msdn.microsoft.com/en-us/library/ee532932(v=vs.94).aspx

/**
 * Gets the current date.
 * @return {Date} a Date object
 */
function getDate()
{
	return new Date();
}


/**
 * Gets the current minute.
 * @return {Number} number representing the current minute.
 */
function minute()
{
	return (new Date()).getMinutes();
}

/**
 * Gets the current hour.
 * @return {Number} number representing the current hour.
 */
function hour()
{
	return (new Date()).getHours();
}

/**
 * Gets the current month.
 * @return {Number} number representing the current month.
 */
function month()
{
	return (new Date()).getMonth() +1;
}

/**
 * Gets the current day.
 * @return {Number} number representing the current day.
 */
function day()
{
	return (new Date()).getDay();
}


/**
 * Gets the current year.
 * @return {Number} number representing the current year.
 */
function year()
{
	return (new Date()).getFullYear();
}

function convertTime()
{
	var x;
	x = hour() + (0.01 * minute())
	return x;
}

function time_calculator() //x is user's input for time
{
	var timefactor; 
	var converted = convertTime();
	if (converted >= 0 && converted<=5)
		timefactor = 0;
	else if (converted > 5 && converted <=7)
		timefactor = 0.9;
	else if (converted > 7 && converted <=8)
		timefactor = 0.7;
	else if (converted > 8 && converted <=10)
		timefactor = 0.5;
	else if (converted > 10 && converted <=12)
		timefactor = 0.3;
	else if (converted > 12 && converted <=16) //12-4
		timefactor = 0.2;
	else if (converted > 16 && converted <=17) //4-5
		timefactor = 0.4;
	else if (converted > 17 && converted <=18) //5-6
		timefactor = 0.5;
	else if (converted > 18 && converted <=19) //6-7
		timefactor = 0.7;
	else if (converted > 19 && converted <=20) //7-8
		timefactor = 0.9;
	else if (converted > 20 && converted <=24) //8-12
		timefactor = 0; 

	return timefactor;
}

var skinTone = document.getElementById("selection");
var s = skinTone.options[skinTone.selectedIndex].value;

function tone_calculator() //perameter temporary until I can pull it from index
{	
	var tonefactor;
	//var z = window.skinTone;
	var r = document.getElementById("selection");
	var z = r.options[r.selectedIndex].value;
	if(z == "Skin1")
		{
			tonefactor = 1;
		}
	else if(z == "Skin2")
		{
			tonefactor = 2;
		}
	else if(z == "Skin3")
		{
			tonefactor = 3;
		}
	else if(z == "Skin4")
		{
			tonefactor = 4;
		}
	else if(z == "Skin5")
		{
			tonefactor = 5;
		}
	else if(z == "Skin6")
		{
			tonefactor = 6;
		}
	return tonefactor;
}

function convertDate()
{
	var y;
	if(month() == 12 || month() == 1 ||month() == 2)
		y = 2;
	else if(month() == 3 ||month() == 4 ||month() == 5)
		y = 4;
	else if(month() == 6 ||month() == 7 ||month() == 8)
		y = 1;
	else if(month() == 9 ||month() == 10 ||month() == 11)
		y = 3;

	return y;
}

function season_calculator() //y = user's input for season
{	var seasonfactor;

	if(convertDate() == 1) //summer
		seasonfactor = 1;
	else if(convertDate() == 2) //winter
		seasonfactor = 2;
	else if(convertDate() == 3) //fall
		seasonfactor = 1.3;
	else if(convertDate() == 4) //spring
		seasonfactor = 1.2;

	return seasonfactor;
}

function longitude_calculator() //perameter temporary until I can pull it from the index
{
	var longitudefactor;
	

	longitudefactor = (90 - window.myLat) / 60; //not based on research but works for the demo lol

	return longitudefactor;
}

function master_calculator()
{	
	var time;
	var hours;
	var minutes;
	var maxtimeinsun;
	
	maxtimeinsun = 1.1 * time_calculator() * season_calculator() * tone_calculator() * longitude_calculator();
	
	maxtimeinsun = maxtimeinsun.toPrecision(2); 

	if(maxtimeinsun == 0)
		document.getElementById('sunburn').innerHTML = "No Chance";
	else if(!maxtimeinsun > 0)
		document.getElementById('sunburn').innerHTML = "?";
	else 
		document.getElementById('sunburn').innerHTML = maxtimeinsun + " hrs"; 

	/* if(maxtimeinsun == 0)
		console.log("No");
	else if(time >= 19)
		console.log("No");
	else if(time <= 5)
		console.log("No");
	else
		console.log(maxtimeinsun); */
}