/* Timmy & Sarah think they are in love, but around where they live, they will only
 know once they pick a flower each. If one of the flowers has an even number of petals and the
other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and
return true if they are in love and false if they aren't.
*/

function isInLove(flower1, flower2) {
    isEvenFlower1 = (flower1 % 2 == 0);
    isEvenFlower2 = (flower2 % 2 == 0);

    if ((isEvenFlower1 || isEvenFlower2) && !(isEvenFlower1 && isEvenFlower2)) {
        return true;
    } else {
        return false;
    }
}

// console.log(isInLove(3, 5)); //false
// console.log(isInLove(2, 5)); //true
// console.log(isInLove(2, 2)); //false
// console.log(isInLove(3, 2)); //true


function isInLove2(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}


/* You get given the time in hours and you need to return the number of litres Nathan will drink,
rounded to the smallest value. */

function drinkWater(time) {
    return Math.floor(time * 0.5);
}

// console.log(drinkWater(3));
// console.log(drinkWater(6.7));
// console.log(drinkWater(11.8));


/*Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */
function yesTrueNoFalse(bool) {
    return bool ? "Yes" : "No";
}


/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
*/
function areaOrPerimeter(length, width) {
    if (length === width) {
        return length * width;
    } else {
        return (length + width) * 2;
    }
}

console.log(areaOrPerimeter(10, 10)); // --> 100
console.log(areaOrPerimeter(4, 3)); // --> 14
