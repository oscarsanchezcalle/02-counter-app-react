const { retornaArreglo } = require("../../base/07-deses-arreglos");

describe('Pruebas archivo 05-deses-arreglos', () => {
    test('retornaArreglo debe retornar un string y un numero ', () => {
      //Act
      const [letras, numeros ] = retornaArreglo();

      //Assert
      expect( letras ).toBe('ABC');
      expect( typeof letras ).toBe('string');
      expect( numeros ).toBe(123);
      expect( typeof numeros ).toBe('number');
      
    });
});