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



let info = [
    {situacion: "Entrega informe", cuadrante:1},    //Urgente e Importante
    {situacion: "Ir al medico", cuadrante:1},       //Urgente e Importante
    {situacion: "Recargar boletera", cuadrante:1}, // Urgente e Importante

    {situacion: "Comprar papel higienico", cuadrante:2},   // Urgente y no importante
    {situacion: "Pasear al perro", cuadrante:2},   // Urgente y no importante
    {situacion: "Lavar la ropa", cuadrante:2},   // Urgente y no importante

    {situacion: "Limpiar la casa", cuadrante:3},   // Importante y no urgente
    {situacion: "Hacer mandados", cuadrante:3},   // Importante y no urgente
    {situacion: "Pagar la cuenta de OSE", cuadrante:3},   // Importante y no urgente

    {situacion: "Jugar videojuegos", cuadrante:4},   // No importante y no urgente
    {situacion: "Mirar netflix", cuadrante:4},   // No importante y no urgente
    {situacion: "Cortar el pasto", cuadrante:4},   // No importante y no urgente
];


function segundoEDA(situaciones) {

    let sit = situaciones.toUpperCase(); // Lo que el usuario digita, se pasa a mayúscula

    for(let i = 0 ; i < info.length ; i++ ) { // Se itera por el largo de info, o sea, 12 veces, partiendo desde 0
        if(sit === info[i].situacion.toUpperCase() ) { //Si lo que digita el usuario es igual a la situacion del respectivo elemento de info, retorna verdadero
            return info[i].cuadrante; // Si es verdadero, se ejecuta el cuadrante del respectivo elemento de info
        }
    }
    
    return 0; // Si no es nada de lo que digita el usuario, retorna 0
}




