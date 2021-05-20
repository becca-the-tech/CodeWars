/*It's pretty straightforward. Your goal is to create a function that
removes the first and last characters of a string. You're given one parameter, the original string.
You don't have to worry with strings with less than two characters. */

function removeFirstAndLast(str) {
    let arr = str.split("");
    arr.shift();
    arr.pop();
    return arr.join("");
}

function removeFirstAndLast2(str) {
    return str.slice(1, -1);
}

function removeFirstAndLast3(str) {
    return str.substring(1, str.length - 1);
}

//console.log(removeFirstAndLast3("World"));


/*Complete the solution so that it reverses all of the words within the string passed in.

Ex: "The greatest victory is that which requires no battle"
--> "battle no requires which that is victory greatest The"
*/

function reverseWords(str) {
    let arr = str.split(" ");
    arr.reverse();
    return arr.join(" ");
}

function reverseWords2(str) {
    return str.trim().split(" ").reverse().join(" ");
}

function reverseWords3(str) {
    let newStr = [];
    let words = str.split(" ");
    for (let i = words.length - 1; i > 0; i--) {
        newStr.push(words[i]);
    }
    return newStr.join(" ");
}

//console.log(reverseWords3("The greatest victory is that which requires no battle"));


/*Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings
as an argument and returns a filtered array containing the same elements but with the 'geese' removed. */

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird));
}

function gooseFilter2(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => geese.indexOf(bird) < 0);
}

//console.log(gooseFilter2(['Penguin', 'African', "Ostrich", "Hawk", "Pilgrim", "Chicken"]));


function evensOnly(numArr) {
    return numArr.filter(num => num > 0);
}

//console.log(evensOnly([1, 8, -7, 0, -2, -4, 0, 10]));


/*You will be given an array a and a value x.
 All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not. */
function checkForValue(arr, value) {
    return arr.includes(value);
}

//console.log(checkForValue([1, 2, "a", "b", "c", 3, 4, 5], 3));
