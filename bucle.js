//Bucle contar del 1 al 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}
//Bucle contar del 10 al 1
for(let i = 10; i >= 1; i--){
    console.log(i);
}
//Sumar todos los sumeros del 1 al 10
let suma = 0;

for(let i = 1; i <= 10, i++){
    console.log(`Valor i en cada interacción: ${i}`);
    suma += i;
    console.log(`Valor suma en cada interacción: ${suma}`);
}

//Sumar los numeros dentro de un rango
const inicio = 10;
const fin = 40;
let sumaRango = 0;

for(let i = inicio; i <= fin; i++){
    sumaRango += i;
    console.log(sumaRango)
}

//Acceder a una posicion en un Array/Lista
const animales = ["perro", "gato", "gorrion", "cebra"];

console.log(animales[2])


//Definir el dia de la semana
const diaSemana = 5;

switch(diaSemana){
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;

    default:
        console.log("Numero invalido")
        break;
}