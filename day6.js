// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.
// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
// X will be a valid integer number.
// X will be either a number or a string. Both are valid.

function isHotterThanSun(input) {
    let str = 'Help yourself to a honeycomb Yorkie for the glovebox.';
    if (input ** 2 > 1000) {
        str = "It's hotter than the sun!!";
    }

    return str;
}

console.log(isHotterThanSun("100"));

function apple(x) {
    if (Math.pow(x, 2) > 1000) {
        return "It's hotter than the sun!!";
    } else {
        return "Help yourself to a honeycomb Yorkie for the glovebox.";
    }
}


//cut off a string after 100 characters
function truncate(str) {
    str = str.substring(0, 100);
    console.log(str.length);
    return str + "...";
}

let arr = ["there once was a dev who learned to much but not enough. Need to create function Name() {return HTML} for React functional components. Need to learn class components as well. This should be over 100 characters, right?", "Another thing I learned is that you can pass in multiple levels of props, but you need to make sure you get the naming correct if you change it between the props.", "And I learned the arr.map function takes in a different function as its parameter and returns a new array based on applying the parameter function to each item in the arr."];


console.log(arr.map(truncate));
