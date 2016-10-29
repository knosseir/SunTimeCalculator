var sunfactor1

function time_calculator(x) //x is user's input for time
{
	if (x >= 0 && x<=5)
		sunfactor1 = 1;
	else if (x > 5 && x <=7)
		sunfactor1 = 0.9;
	else if (x > 7 && x <=8)
		sunfactor1 = 0.7;
	else if (x > 8 && x <=10)
		sunfactor1 = 0.5;
	else if (x > 10 && x <=12)
		sunfactor1 = 0.3;
	else if (x > 12 && x <=16) //12-4
		sunfactor1 = 0.2;
	else if (x > 16 && x <=17) //4-5
		sunfactor1 = 0.3;
	else if (x > 17 && x <=18) //5-6
		sunfactor1 = 0.5;
	else if (x > 18 && x <=19) //6-7
		sunfactor1 = 0.7;
	else if (x > 19 && x <=20) //7-8
		sunfactor1 = 0.9;
	else if (x > 20 && x <=24) //8-12
		sunfactor1 = 1;
}