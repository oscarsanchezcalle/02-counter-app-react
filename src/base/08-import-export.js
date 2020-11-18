 import  heroes   from '../data/heroes';

 //console.log(owners);
//console.log(heroes);

// find solo regresa un objeto
const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);   

// console.log( getHeroeById(2) );

// regresa varios objetos
const getHeroesByOwner = ( owner ) => ( heroes.filter( (heroe) => heroe.owner === owner ));

// console.log(getHeroesByOwner('Marvel'));

export {
    getHeroeById,
    getHeroesByOwner
};
