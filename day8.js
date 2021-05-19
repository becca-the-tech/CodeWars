/*Your goal is to return multiplication table for number that is always an integer from 1 to 10. */
//Note: newlines should be added between rows, but there should be no trailing newline at the end.
function multiplicationTable(number) {
    let output = ``;
    for (let i = 1; i <= 10; i++) {
        output += `${i} * ${number} = ${i * number}`;
        if (i < 10) {
            output += '\n';
        }
    }
    return output;
}

// console.log(multiplicationTable(3));

function multTable(number) {
    let table = ``;
    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number} ${i < 10 ? '\n' : ''}`;
    }
    return table;
}

console.log(multTable(3));
