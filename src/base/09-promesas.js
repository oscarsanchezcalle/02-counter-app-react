//Promesas
import  getHeroeById, {getHeroesByOwner}  from '../src/bases/08-import-export';

/*
const promesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
        //Tarea
        //Importar
        const heroe = getHeroeById(2);       
        resolve(heroe);
        //reject('no hay datos');
    }, 2000);

});

promesa.then( (heroe) => {
    console.log(heroe);
}).catch( err => console.warn( err ) );
*/
const getHeroeByIdAsync = ( id ) => {
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
        }, 1000);
    
    });
}

getHeroeByIdAsync(5)
    //.then(heroe => console.log(heroe))
    //.catch( err => console.warn(err) );
    .then(console.log)
    .catch( console.warn );


