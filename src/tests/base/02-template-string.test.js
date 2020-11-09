import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';


describe('Pruebas dl archivo 02-template-string', () => {
    test('getSaludo debe retornar Hola Oscar', () =>{
        //Arrange
        const nombre = 'Oscar';
        const expectedMessage = 'Hola ' + nombre;

        //Act
        const saludo = getSaludo(nombre);

        //Assert
        expect( saludo ).toBe( expectedMessage );
    })

    test('getSaludo debe retornar Hola Moises, sino hay argumentos', () =>{
        //Arrange
        const expectedMessage = 'Hola Moises';

        //Act
        const saludo = getSaludo();

        //Assert
        expect( saludo ).toBe( expectedMessage );
    })

});
