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

	if (convertTime() >= 0 && convertTime()<=5)
		timefactor = 0;
	else if (convertTime() > 5 && convertTime() <=7)
		timefactor = 0.9;
	else if (convertTime() > 7 && convertTime() <=8)
		timefactor = 0.7;
	else if (convertTime() > 8 && convertTime() <=10)
		timefactor = 0.5;
	else if (convertTime() > 10 && convertTime() <=12)
		timefactor = 0.3;
	else if (convertTime() > 12 && convertTime() <=16) //12-4
		timefactor = 0.2;
	else if (convertTime() > 16 && convertTime() <=17) //4-5
		timefactor = 0.4;
	else if (convertTime() > 17 && convertTime() <=18) //5-6
		timefactor = 0.5;
	else if (convertTime() > 18 && convertTime() <=19) //6-7
		timefactor = 0.7;
	else if (convertTime() > 19 && convertTime() <=20) //7-8
		timefactor = 0.9;
	else if (convertTime() > 20 && convertTime() <=24) //8-12
		timefactor = 0;

	return timefactor;
}

function tone_calculator(z)
{	var tonefactor;

	if(z == 1)
		tonefactor = 3;
	else if(z == 2)
		tonefactor = 4;
	else if(z == 3)
		tonefactor = 5;
	else if(z == 4)
		tonefactor = 6;
	else if(z == 5)
		tonefactor = 7;
	else if(z == 6)
		tonefactor = 13;

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

function master_calculator()
{	var maxtimeinsun;
	maxtimeinsun = 3 * time_calculator() * season_calculator() * tone_calculator(3);
	console.log("You can spend ", maxtimeinsun, "hours in the sun.");
}