describe('Pruebas en el archivo demo test.js', () => {

    test('Las cadenas deben ser iguales ', () => {
        //Arrange
        const mensaje = 'Hola mundo';
     
        //Act
        const mensaje2 = 'Hola mundo'
        
        //Assert
        expect( mensaje ).toBe( mensaje2 );
     });
});


