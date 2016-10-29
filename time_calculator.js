var x = userinputtimeofday
var sunfactor1

function time_calculator(x, sunfactor)
{
	if (x >= 0 && x<=5)
		sunfactor = 0;
	else if (x > 5 && x <=7)
		sunfactor = 0.1;
	else if (x > 7 && x <=8)
		sunfactor = 0.3;
	else if (x > 8 && x <=10)
		sunfactor = 0.5;
	else if (x > 10 && x <=12)
		sunfactor = 0.7;
	else if (x > 12 && x <=16) //12-4
		sunfactor = 1;
	else if (x > 16 && x <=17) //4-5
		sunfactor = 0.7;
	else if (x > 17 && x <=18) //5-6
		sunfactor = 0.5;
	else if (x > 18 && x <=19) //6-7
		sunfactor = 0.3;
	else if (x > 19 && x <=20) //7-8
		sunfactor = 0.1;
	else if (x > 20 && x <=24) //8-12
		sunfactor = 0;
}