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
