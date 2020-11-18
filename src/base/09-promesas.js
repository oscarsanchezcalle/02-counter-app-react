//Promesas
import { getHeroeById } from './08-import-export';

export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            //Tarea
            //Importar
            const heroe = getHeroeById(id);       
            if (heroe) {
                resolve(heroe);
            }else{
                reject('El heroe no existe');
            }                        
        }, 1500)
    
    });
}

