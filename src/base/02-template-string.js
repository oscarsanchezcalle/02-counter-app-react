//Template string/Literal

const nombre = "Óscar";
const apellido = "Sánchez"
//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${ nombre }
${apellido}
${ 1 + 1 }
`;

export function getSaludo( nombre = 'Moises'){
    return 'Hola ' + nombre;
}

