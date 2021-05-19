//Takes in an array of numbers
//add positive numbers to the total to be returned
function positiveSum(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

//reminder to self, if using shorthand notation with arrow functions, either include {  } curly brackets with a return statement
//or leave both out to have it all on one line
function positiveSumReduce(arr) {
    return arr.reduce((acc, current) => acc + (current > 0 ? current : 0), 0);
}

function positiveSumReduce2(arr) {
    return arr.reduce((a, b) => { return a + (b > 0 ? b : 0); }, 0);
}

//console.log(positiveSumReduce2([1, 2, 3, -8, 4, -18, -3]));

function positiveSumFilter(arr) {
    let sum = 0;
    let newArr = arr.filter(num => num > 0);
    console.log(newArr);
    for (let num of newArr) {
        sum += num;
    }
    return sum;
}

//console.log(positiveSumFilter([1, 2, 3, -4, -8, -7]));



//Calculate floor number for countries that don't count groundLevel as a floor and that are superstitious so don't have a 13th floor
function getRealFloor(n) {
    if (n >= 13)
        return n - 2;
    else if (n == 0) {
        return 0;
    } else if (n < 0) {
        return n;
    }
    else {
        return n - 1;
    }
}

function getRealFloor2(n) {
    if (n >= 13) {
        return n - 2;
    } else if (n <= 0) {
        return n;
    } else {
        return n - 1;
    }
}

/*Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples:

flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]
*/
const flip = (d, a) => {
    if (d === "L") {
        //sorts descending
        return a.sort((b, c) => c - b);
    } else if (d === 'R') {
        //sorts ascending
        return a.sort((b, c) => b - c);
    }
};

// console.log(flip("L", [3, 1, 2, 4])); // => [4,3,2,1]
// console.log(flip('L', [1, 4, 5, 3, 5])); // =>  [5, 5, 4, 3, 1]
// console.log(flip('R', [3, 2, 1, 2]));    //  =>  [1, 2, 2, 3]
