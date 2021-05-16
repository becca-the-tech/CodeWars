/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */
function removeExclamationMarks(str) {
    let newStr = [];
    for (let letter of str) {
        if (letter !== "!") {
            newStr.push(letter);
        }
    }
    return newStr.join("");
}

//console.log(removeExclamationMarks("Th!is is more difficult than I expected!!!"));

//Other solutions
function removeExclamationMarks1(s) {
    return s.replace(/!/gi, "");
}

function removeExclamationMarks2(s) {
    return s.split("!").join("");
}

//console.log(removeExclamationMarks2("!!!This is ridiculous!!"));
function removeExclatamationMarks3(s) {
    let arr = s.split("");
    return arr.filter(letter => letter !== "!").join("");
}

console.log(removeExclatamationMarks3("T!!hanks !in advancE!!"));
