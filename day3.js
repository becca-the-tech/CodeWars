/*Create an array from 1 to n of values assigned to the function preFizz */

function preFizz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}



/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/
function quarterOfYear(month) {
    if (month >= 1 && month <= 3) {
        return 1;
    } else if (month >= 4 && month <= 6) {
        return 2;
    } else if (month >= 7 && month <= 9) {
        return 3;
    } else if (month >= 10 && month <= 12) {
        return 4;
    }
}

function filterMech(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz";
    } else if (num % 3 == 0) {
        return "Fizz";
    } else if (num % 5 == 0) {
        return "Buzz";
    } else {
        return num;
    }
}

let unhealthySnacks = ["gummies", "candy", "soda", "chocolate", "latte", "chips"];
let snacks = ["peanut butter bars", "gummies", "chips", "pretzels", "latte", "coffee", "toast"];
const snackFilter = snacks => snacks.filter(snack => !unhealthySnacks.includes(snack));
console.log(snackFilter(snacks));


/*Define the filter array, then define the unfiltered array
Then use unfiltered.filter(singularItem => !filterArray.includes(singularItem));
So unfiltered is the initial array that uses the filter method on it, then it uses an anonymous callback function
with a parameter of singularItem that it creates from each individual item in the variable unfiltered.
The function checks if singularItem is found within the filterArray, and it only adds the singularItem that is
NOT found in filteredArray to what it returns

It says, does this item exist in filterArray? only add it to the new array if it does not*/


let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
let birds = ["duck", "penguin", "African", "Sand-Hilled Crane", "Toulouse", "Ahinga"];
const gooseFilter = birds => birds.filter(bird => !geese.includes(bird));
console.log(gooseFilter(birds));
