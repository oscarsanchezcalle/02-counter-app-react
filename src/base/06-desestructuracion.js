// Destructuración
// Asignación Desestructurante

const persona = {
    nombre:'Tony',
    edad: 45,
    clave: 'Ironman'
    //rango: 'soldado'
};

const { clave, nombre, edad } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const useContext = ({nombre, edad,clave, rango = 'Capitan'}) => {    
   
    //console.log(edad, nombre, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latLng: {
            lat: 14.2353,
            lng: -12.2565
        }
    }

}

const { nombreClave, anios, latLng/*:{lat, lng}*/ }  = useContext( persona );
const { lat, lng } = latLng;

console.log(nombreClave, anios);
console.log(lat, lng);