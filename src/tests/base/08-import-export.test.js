import { getHeroeById, getHeroesByOwner } from './../../base/08-import-export';
import heroes  from './../../data/heroes';

describe('Pruebas archivo 08-import-export', () => {

    test('getHeroeById debe retornar un heroe por Id ', () => {
      //Arrange
      const id = 1;    
      const expectedHeroe = heroes.find( (heroe) => heroe.id === id)
    
      //Act
      const result = getHeroeById(id);

      //Assert
      expect( result ).toEqual(expectedHeroe);
      
    });

    test('getHeroeById debe retornar undefined cuando no encuentra el heroe ', () => {
        //Arrange
        const id = 100;
        const expectedHeroes = heroes.find( h => h.id === id );
      
        //Act
        const result = getHeroeById(id);
  
        //Assert
        expect( result ).toBe( undefined ); //como es primitivo se usa toBe
        
      });

      test('getHeroesByOwner debe retornar los heroes de DC ', () => {
        //Arrange
        const owner = 'DC';
        const expectedHeroes = heroes.filter( h => h.owner === owner );
      
        //Act
        const result = getHeroesByOwner(owner);
  
        //Assert
        expect( result ).toEqual( expectedHeroes ); 
      });

      test('getHeroesByOwner debe retornar la cantidad de los heroes de Marvel ', () => {
        //Arrange
        const owner = 'Marvel';
        const expectedHeroes = heroes.filter( h => h.owner === owner ).length;
      
        //Act
        const result = getHeroesByOwner(owner).length;
  
        //Assert
        expect( result ).toBe( expectedHeroes ); 
      });
});