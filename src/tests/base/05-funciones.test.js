import { getUsuarioActivo } from "../../base/05-funciones";
import { getUser } from '../../base/05-funciones';

describe('Pruebas en archivo 05-funciones', () => {
    test('getUser debe retornar un objeto ', () => {
      //Arrange
      const expectedUser = {
        uid:'ABC123',
        userName: 'Osaka'
      }
      //Act
      const result = getUser();

      //Assert
      expect( result ).toEqual(expectedUser);
    });

    test('getUsuarioActivo debe retornar un objeto ', () => {
      //Arrange
      const nombre = 'Juan';
      const expectedUser = {
        uid:'ABC123',
        userName: nombre
      };

      //Act
      const result = getUsuarioActivo(nombre);

      //Assert
      expect( result ).toEqual(expectedUser);
    })
});