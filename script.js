function add7(number) {
    return number + 7;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function lastLetter(string) {
    return string.slice(-1);
}




function fbGame() {

    let userNumber = Number(prompt("Start play! \n Write a number."));

    for (i = 1; i <= userNumber; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Fizz Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}