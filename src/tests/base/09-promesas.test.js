import { getHeroeByIdAsync }  from '../../base/09-promesas';
import  heroes  from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe async ', ( done ) => { //es un callback
        //Arrange
        const id = 1;

        //Act
        getHeroeByIdAsync(id)
        .then( heroe => {
            //Assert
            expect( heroe ).toBe( heroes[0] );
            done(); // se terminò de ejecutar el proceso asincrono, indicarle al test suite que se a finalizado en test
        });
    });

    test('getHeroeByIdAsync debe retornar un error, no se encontrò el heroe', ( done ) => { //es un callback
        //Arrange
        const id = 10;
        const expectedErrorMessage = 'El heroe no existe';

        //Act
        getHeroeByIdAsync(id)
        .catch( error => {
            //Assert
            expect( error ).toBe( expectedErrorMessage );
            done(); // se terminò de ejecutar el proceso asincrono, indicarle al test suite que se a finalizado en test
        });
    });
})
