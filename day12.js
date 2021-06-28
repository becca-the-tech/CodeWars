/*Create a function close_compare that accepts 3 parameters: a, b, and an optional margin.
The function should return whether a is lower than, close to, or higher than b.
a is "close to" b if margin is higher than or equal to the distance between a and b.

When a is lower than b, return -1.
When a is higher than b, return 1.
When a is close to b, return 0.

If margin is not given, treat it as zero.

Example: if a = 3, b = 5 and the margin = 3, since a and b are no more than 3 apart,
close_compare should return 0. Otherwise, if instead margin = 0, a is lower than b and
close_compare should return -1.

Assume: margin >= 0
*/

function close_compare(a, b, margin = 0) {
    //get absolute value of distance
    let distance = Math.abs(a - b);

    //check is distance is less than or equal to margin because if so the two points are close to each other
    //if margin is 0 by default the points are at same location
    if (margin >= distance) {
        return 0;
        //if a is less than b, return -1 since a is lower than b
    } else if (a < b) {
        return -1;
        //if a is greater than b, return 1 since a is higher than b
    } else if (a > b) {
        return 1;
    }
}

// console.log(close_compare(3, 5, 3)); --> returns 0
//console.log(close_compare(3,5)); --> returns -1
//console.log(close_compare(5,3)); --> returns 1
// console.log(close_compare(5, 5)); --> returns 0


/*I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

function humanYearsCatYearsDogYears(humanYears) {
    //return ageList with [humanYears, catYears, dogYears]
    let ageList = [humanYears];

    let catYears = 0;
    let dogYears = 0;
    for (let i = 1; i <= humanYears; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 15;
        } else if (i === 2) {
            catYears += 9;
            dogYears += 9;
        } else {
            catYears += 4;
            dogYears += 5;
        }
    }

    ageList.push(catYears);
    ageList.push(dogYears);
    return ageList;
}

// console.log(humanYearsCatYearsDogYears(1)); --> returns [1, 15, 15]
// console.log(humanYearsCatYearsDogYears(2)); --> returns [2, 24, 24]
// console.log(humanYearsCatYearsDogYears(10)); --> returns [10, 56, 64]
