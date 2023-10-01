const arrayDeObjetos = [
    {
        nombre: 'Fede',
        edad: 30,
        pais: 'Argentina'
    },
    {
        nombre: 'Laura',
        edad: 28,
        pais: 'España'
    },
    {
        nombre: 'Juan',
        edad: 40,
        pais: 'Mexico'
    },
];

const objetoConArray = {
    nombre: 'Objeto con Array',
    array: ['html', 'css', 'js', 'react', 'node'],
};

for (let i = 0; i < arrayDeObjetos.length; i++) {
    console.log('==========================')
    console.log('Nombre: ' + arrayDeObjetos[i].nombre);
    console.log('Edad: ' + arrayDeObjetos[i].edad);
    console.log('Pais: ' + arrayDeObjetos[i].pais);
}

objetoConArray.array.forEach(element => {
    console.log('==========================')
    console.log(element);
});