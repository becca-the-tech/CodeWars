/* Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way.
He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.
"anyone else" --> 0
"Zach" --> 18
*/

function lightsabers(name = "Zach") {
    return name === "Zach" ? 18 : 0;
}

// console.log(lightsabers("Zach"));
// console.log(lightsabers(""));
// console.log(lightsabers("Zacheus"));

/*
Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places. */

function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) / Math.pow(b.y - a.y, 2));
}


function distanceBetweenPoints2(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}


/*You were camping with your friends far away from home,
but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away!
You know that on average, your car runs on about 25 miles per gallon.
There are 2 gallons left. Considering these factors, write a function that tells you
if it is possible to get to the pump or not.
Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not.
The input values are always positive. */

function wontRunOutOfGas(distanceToPump, mpg, fuelLeft) {
    let howFarCanDrive = mpg * fuelLeft;
    return distanceToPump <= howFarCanDrive;
}


/* Create a method take that accepts a list/array and a number n, and
returns a list/array array of the first n elements from the list/array. */
function take(arr, n) {
    return arr.slice(0, n);
}


/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son
    (or in how many years he will be twice as old).
*/

function twiceAsOld(fathersAge, sonAge) {
    return Math.abs(fathersAge - (sonAge * 2));
}

console.log(twiceAsOld(36, 7));
