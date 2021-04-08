/*Create a function that tells all animals the frog has a 'wide' mouthSize, unless it encounters an alligator (case insensitive)
in which it should say its mouth size is small. */

function mouthSize(animal) {
    // code here
    if (animal.toLowerCase() == 'alligator') {
        return 'small';
    } else {
        return 'wide';
    }
}


/*Create a dutyFree function of if you sold bottles with a dutyFree discount to pay for your holiday.
Takes parameters of normalPrice, discountPercent, and holidayCost */
function dutyFree(normPrice, discount, hol) {
    let saving = normPrice * (discount / 100);
    let bottles = Math.floor(hol / saving);
    return bottles;
}


/*There's a 3-for-2 sale going on with mangoes. Write a function that lists the quantity of mangoes purchased along with the price per mango that takes into account the sale. */
function mango(quantity, price) {
    //Math.floor(quantity / 3) to figure out how many sets of 3 there are, times 2 since it's 2 for cost of 3
    //also adds quantity modulus 3 for number of mangoes not part of the sale
    let mangoEquivalent = (Math.floor(quantity / 3) * 2) + quantity % 3;
    //multiplies price by mangoEquivalent cost
    let total = price * mangoEquivalent;
    return total;
}
