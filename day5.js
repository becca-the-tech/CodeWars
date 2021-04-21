//create a function that repeats the string (s) number (n) of times
function repeatStr(n, s) {
    let output = '';
    for (let i = 0; i < n; i++) {
        output += s;
    }
    return output;
}

/* another option */
function strRepeat(n, s) {
    return s.repeat(n);
}

/* another option */
let repeat = (n, s) => s.repeat(n);
console.log(repeat(5, "*"));


/* Make a function that will return a greeting statement that uses an input;
your program should return, "Hello, <name> how are you doing today?" */
function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}


/*Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them. */
// function initialize(word1, word2) {
//     word1 = word1.split();
//     word1 = word1[0].toUpperCase();

//     word2 = word2.split();
//     word2 = word2[0].toUpperCase();
//     word1.join(". ", word2);
//     return word1;
// }
