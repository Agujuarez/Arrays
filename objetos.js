const persona = {
    nombre: 'Fede',
    edad: 30,
    profesion: 'Desarrollador Web',
    lenguajes: ['JavaScript', 'HTML', 'CSS'],
}

persona.edad = 34;
persona.altura = 1.80;
delete persona.lenguajes;

let edad = persona.edad;
//console.log(edad);
//console.log(persona);

// Iterar un Objeto
for (let key in persona) {
    console.log(key, persona[key]);
};
