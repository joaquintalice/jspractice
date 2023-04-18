function add7(number) {
    return number + 7;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function capitalize(string) {

    let convertString = string.toLowerCase();
    let allTheString = convertString.slice(1);
    let capitalLetter = convertString.slice(0, 1);
    let capitalString = capitalLetter.toUpperCase();


    return (`${capitalString}${allTheString}`)

}

function lastLetter(string) {
    return string.slice(-1);
}