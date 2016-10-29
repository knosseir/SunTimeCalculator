var sunfactor2

function season_calculator(y) //y = user's input for season
{
	if(y == 1) //summer
		sunfactor2 = 0.2;
	else if(y == 2) //winter
		sunfactor2 = 0.85;
	else if(y == 3) //fall
		sunfactor2 = 0.6;
	else if(y == 4) //spring
		sunfactor2 = 0.4;
}