/* The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly. Fix it

Given code:
var replaceDots = function(str) {
    return str.replace(/./, '-');
};
*/

var replaceDots = function(str) {
    for (let char of str) {
        if (char === '.') {
            str = str.replace(".", '-');
        }
    }
    return str;
};


//using Regex, \. is to escape the period and check for that
//the g flag after the check section is to search for all occurrences
let replaceDots2 = function(str) {
    return str.replace(/\./g, '-');
};

console.log(replaceDots2("one.two.three"));


let replaceDots3 = function(str) {
    return str.replace(/[.]/g, "-");
};

console.log(replaceDots3("one.two.three"));



/*In this simple assignment you are given a number and have to make it negative.
But maybe the number is already negative? */
function makeNegative(num) {
    return num > 0 ? -num : num;
}

function makeNegative2(num) {
    return num < 0 ? num : -num;
}

function makeNegative3(num) {
    return -Math.abs(num);
}


/*You're writing code to control your town's traffic lights. You need a function to
handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and
returns a string representing the state the light should change to. */

function updateLight(current) {
    let next = '';
    if (current == 'green') {
        next = 'yellow';
    } else if (current == 'yellow') {
        next = 'red';
    } else if (current == 'red') {
        next = 'green';
    } else {
        return 'Error: Inaccurate colors passed as argument';
    }

    return next;
}


function updateLight2(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

//uses current as a computed property name passed into an object since it can only be those three choices
const updateLight3 = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green'
})[current];
