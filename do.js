let contador = 0;

while(contador <= 10){
    contador++;
    console.log("El contador está en", contador)
};

//////////

let numero = 0;
let sumaPares = 0;
const numMax = 20;

while(numero < numMax){//Mientras numero sea menor a numMax, sumamos los numeros pares
    if (numero % 2 == 0) { // Comprueba si el número es par
        sumaPares += numero; // Suma el número par a la variable sumaPares
    }
    numero++; // Incrementa numero en cada iteración
}
// Imprime el resultado final después del bucle
console.log("La suma de los números pares es:", sumaPares);

///////// Ejemplo do...while
let contadordowhile = 1;

do{
    console.log("El contador está en ", contadordowhile);
    contadordowhile++;
} while (contadordowhile <= 10);

//Ejemplo: Sumar números ingresados por el usuario
console.log("Comienza el programa: Suma de números.");

//Variables iniciales
let total = 0;
let input;

//Bucle do-while para asegurarse de que al menos una entrada sea procesada
do {
    input = parseFloat(prompt("Introduce un número (un número negativo para terminar):"));
    if(!isNaN(input) && input >= 0) {
        total += input; //Suma el número al total
        console.log("Número introducido: ", input, ".Total acumulado: ", total);
    } else if (isNaN(input)) {
        console.log("no has introducido un número válido. Inténtalo de nuevo");
    } 
} while (input => 0);

//Imprimir el total al finalizar
console.log("Has terminado el programa. La suma total es: ", total);