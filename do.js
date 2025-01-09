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
