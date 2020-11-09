//funciones
const saludar = function (nombre){
    return `Hola, soy${ nombre }`;
}
//saludar = 20;

//funciones de flecha o lambda

const saludar2 = (nombre) => {
    return `Hola, soy${ nombre }`;
}

const saludar3 = (nombre) => `Hola, soy${ nombre }`;
const saludar4 = () => `Hola mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Goku'));
console.log(saludar3('Goku'));
console.log(saludar4('Goku'));

const getUser = () => ({
        uid:'ABC123',
        userName: 'Osaka'
});
//console.log(getUser());

// Tarea
// 1. Transformar a función tipo flecha
// 2. tiene que retornar un objeto implicito
// 3. pruebas
const getUsuarioActivo = (nombre) => ({
    uid:'ABC123',
    userName: nombre
});

const usuarioActivo = getUsuarioActivo('Oscar');
console.log( usuarioActivo );