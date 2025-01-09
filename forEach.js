const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numeros) => {
    console.log(numeros)
});

const animales = ["perro", "gato", "gorrion", "cebra"];

animales.forEach((animales) => {
    console.log(animales)
});

const parImpar = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let pares = 0;
let impares = 0;

parImpar.forEach((i) => {
    if (i % 2 == 0) {
        console.log(`El número ${i} es par`)
        pares ++; //Suma los numeros pares
    } else {
        console.log(`El número ${i} es impar`)
        impares ++; //Suma los numeros impares
    }
})

console.log(`Total pares: ${pares}`);
console.log(`Total impares: ${impares}`);

//Cuantos tienen la letra a
animales.forEach(animal => { //animal aqui actua como i en otros casos
    if (animal.toLowerCase().includes("a")) {
        console.log("El animal", animal, "contiene la letra 'A'");
    } else {
        console.log("El animal", animal, "no contiene la letra 'A'"); 
    }
});
