import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
    test('getImagen debe retornar el url de la imagen ', async() => {
        //Arrange
        
        //Act
        const url = await getImagen();
        //console.log(url);

        //Assert
        expect ( url.includes('https://') ).toBe( true );
    });
});
