var s=new ShnobelPrize();
//enter the date and time of lunch in the following format December 20, 2017 17:00:00
console.log(s.timeToLunch("December 20, 2017 17:00:00"));
//enter the amount of money you have and the day of the week
console.log(s.hangover("300", "Friday"));
//enter a number from 1 to 10 to test of it worthwhile to go to the casino
console.log(s.casino(6));
//the following function draws a circle and positions it. enter paramenters radius, left, top, color further to the example
s.drawCirle(30, 300, 300, "red");
//the following functions tests probabilty based on counting results of coin flips. It receives the number of coin tossess you want to observe. Returns percetage array [heads, tails]
console.log(s.probability(100));
