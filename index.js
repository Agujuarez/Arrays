let frutas = ["Manzana", "Banana"]

console.log(frutas.length)
console.log(frutas[1].toUpperCase())
// 2

let precios = [1, 8, 20, 30, 7, 5, 12]
console.log(precios.length)
console.log(precios[3])

console.log(Number.isInteger(precios[1]))

precios.push(9)
console.log(precios.length)

frutas.push("Pera")
console.log(frutas.length)

frutas.pop() // Borra siempre el ultimo
console.log(frutas.length)

precios.splice(3, 1)
console.log(precios.length)

console.log(frutas)
console.log(precios)

let perros = [true, true, false, true, false] 
console.log(perros.length)

let fechas = [new Date(2011,10,30), new Date(2012,11,25)]

console.log(perros)
console.log(fechas)

let Verdulerias = [["manzana", "banana", "pera"], ["cebolla", "manzana", "pera", "banana"]]
console.log(Verdulerias.length)
console.log(Verdulerias[1].length)

console.log(Verdulerias[1][0])
Verdulerias[1].push("durazno")
console.log(Verdulerias)
Verdulerias[0].splice(0, 1)
console.log(Verdulerias)
Verdulerias.push(frutas)
console.log(Verdulerias)

let verduleriasJson = JSON.stringify(Verdulerias) // 
console.log(verduleriasJson)
let verdulerias2 = JSON.parse(verduleriasJson)
console.log(verdulerias2)

let numeros = [[[1, 2, 5],[4, 3, 2], [5, 4,1]],[[1, 2, 3], [4, 4, 2]]]
console.log(numeros)

let enteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
console.log(enteros)
let enteros2 = enteros.map(x => x*10)
console.log(enteros2)

let enteros3 = enteros2.map(x => x+5)
console.log(enteros3)

let enteros4 = enteros2.filter(x => x > 100)
console.log(enteros4)

let comentarios = ["rojo", "azul", "verde"]
let comentarios2 = comentarios.filter(x => x!= "azul")
console.log(comentarios2)