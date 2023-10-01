const nombre = ['Alberto', 'Juan', 'Jorge'];

const cantidad = nombre.length;

console.log(cantidad);

nombre.push('Pedro');
nombre.unshift('Fede');

let final = nombre.pop();
let inicio = nombre.shift();

console.log(nombre);
console.log(inicio);
console.log(final);

// Iterar el array
for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
};