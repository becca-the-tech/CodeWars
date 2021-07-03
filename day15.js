/*Create a function that takes 2 nonnegative integers in form of a string as an input, and
outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1) */

function sumStr(a, b) {
    if (isNaN(Number(a))) {
        a = 0;
    } else if (isNaN(Number(b))) {
        b = 0;
    } else {
        return String(Number(a) + Number(b));
    }
}

//console.log(sumStr("", ""));


function sumStr2(a, b) {
    return String(Number(a) + Number(b));
}

//console.log(sumStr2("", ""));

function sumStr3(a, b) {
    return String(+a + +b);
}

//console.log(sumStr3("", ""));


/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese */

function calcBmi(weight, height) {
    const bmi = weight / (height * height);

    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25) {
        return "Normal";
    } else if (bmi <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


//console.log(calcBmi(80, 1.80)); // should return "Normal"

/* Complete the function that takes a non-negative integer n as input, and
returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
n = 3 ==> [1,2,4,8]

*/

function powersOfTwo(n) {
    let arr = [];

    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i);
    }
    return arr;
}

// console.log(powersOfTwo(0));
// console.log(powersOfTwo(1));
// console.log(powersOfTwo(3));

function powersOfTwo2(n) {
    let arr = [];

    for (let i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i));
    }
    return arr;
}

// console.log(powersOfTwo2(0));
// console.log(powersOfTwo2(1));
// console.log(powersOfTwo2(3));



/*Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest' */

function personalGreeting(name, owner) {
    if (name === owner) {
        return "Hello boss";
    } else {
        return "Hello guest";
    }
}

function personalGreeting2(name, owner) {
    return name === owner ? "Hello boss" : "Hello guest";
}
