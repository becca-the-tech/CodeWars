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
function initialize(word1, word2) {
    word1 = word1.split('');
    word1 = word1[0].toUpperCase();
    console.log(word1);

    word2 = word2.split('');
    word2 = word2[0].toUpperCase();

    let output = word1 + "." + word2;
    return output;
}

//console.log(initialize("Alex", "Vilar"));
function abbreviate(name) {
    name = name.split(" ");
    return name[0][0].toUpperCase() + "." + name[1][0].toUpperCase();
}

let initials = name => {
    name = name.split(" ");
    let fLetter = name[0][0];
    let lLetter = name[1][0];

    return fLetter + "." + lLetter;
};
