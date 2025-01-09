/**
 * Crea un programa que solicite al usuario ingresas el precios de un producto y su categoria. Dependiendo de la categoria, se aplicará un descuento diferente:
 * 
 * Si la categoria es "A", se aplica un 10% de descuento
 * Si la categoria es "B", se aplica un 20% de descuento
 * Si la categoria es "C", se aplica un 30% de descuento
 * 
 * Retro estra:
 * Valida que el precio ingresado sea un numero positivo. Si no lo es, muestra un mensaje indicando que el precio no es valido.
 * Haz que el programa permita al usuario intentar de nuevo si ingresa una categoria no valida
 */

const precio = 500;
const categoria = "A";
let descuento = 0;

console.log(`Precio inicial: ${precio} €`);
console.log(`Categoria: ${categoria}`);

if (categoria == "A") {
    descuento = precio * 0.10;
    console.log("///Entro en la categoria A///");
    console.log(`Descuento calculado: ${descuento}`);
} else if (categoria == "B") {
    descuento = precio * 0.20;
    console.log("///Entro en la categoria B///");
    console.log(`Descuento calculado: ${descuento}`);
} else if (categoria == "C") {
    descuento = precio * 0.30;
    console.log("///Entro en la categoria C///");
    console.log(`Descuento calculado: ${descuento}`);
} else{
    console.log("Categoria erronea")
}

//Precio final puede funcionar tal cual lo tenemos o poniendolo asi:
//let precioFinal = 0; (let seria para decir que se puede modificar, con const no)
if(descuento > 0){
    const precioFinal = precio - descuento; 
    console.log(`El precio final es: ${precioFinal} €`)
}