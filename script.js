

let ourPlanetName = "Earth";
let currentUserName = "John";

let x = 23;
let y = 10;

let exponential = x**y;

/*Exponential too*/
console.log(Math.pow(y,2))
console.log(exponential);

/*modulus %*/
console.log(x%y); 



/**/
let z = 10e5;

console.log(z)


let decimal1 = 0.3;
let decimal2 = 0.2;

let addingDecimal = decimal1 + decimal2;

console.log(addingDecimal)

/* test isNaN() global js function */
let numOne = 200
let numTwo = "2"

let isOrNot = numOne / numTwo

console.log(typeof(isOrNot))
console.log(isNaN(isOrNot))
/* test isNaN() global js function */

let testInf = 10

while (testInf != 15) {
    testInf = testInf++
    console.log(testInf);
} 
