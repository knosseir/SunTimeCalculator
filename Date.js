// The following functions can be used to get the current date.  
// You can use this in other parts of the website!
// Code is adapted from https://msdn.microsoft.com/en-us/library/ee532932(v=vs.94).aspx

function getDate()
{
	return new Date();
}

function minute()
{
	return (new Date()).getMinutes();
}

function hour()
{
	return (new Date()).getHours();
}

function month()
{
	return (new Date()).getMonth() +1;
}

function day()
{
	return (new Date()).getDay();
}

function year()
{
	return (new Date()).getFullYear();
}
