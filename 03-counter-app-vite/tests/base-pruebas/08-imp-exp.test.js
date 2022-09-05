import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes'; 

describe('Pruebas en 08-imp-exp.js',() => {
    test('getHeroeById debe retornar un heroe por id', () => { 
        const heroById = getHeroeById(1);
        
        console.log(heroById);
        expect( heroById ).toEqual({id: 1, name: "Batman", owner: "DC"})
     });

     test('getHeroeById debe retornar undefined si no existe', () => { 
        const heroById = getHeroeById(100);
        
        console.log(heroById);
        
        expect( heroById ).toBeFalsy();
     });


    test('heroesByOwner debe retornar un arreglo con longitud de 3 de los heroes de DC', () => { 
        const heroesByOwner = getHeroesByOwner('DC');
        
        //console.log(heroesByOwner)

        expect( heroesByOwner ).toHaveLength(3);
     });

     test('heroesByOwner debe retornar los heroes de DC', () => { 
        const owner = 'DC'
        const heroesByOwner = getHeroesByOwner(owner);
        
        console.log(heroesByOwner);
        
        // expect( heroesByOwner ).toEqual(
        //     [
        //         { id: 1, name: 'Batman', owner: 'DC' },
        //         { id: 3, name: 'Superman', owner: 'DC' },
        //         { id: 4, name: 'Flash', owner: 'DC' }
        //     ]
        // );

        expect( heroesByOwner ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
     });

    test('heroesByOwner debe retornar los heroes de Marvel', () => { 
        const owner = 'Marvel'
        const heroesByOwner = getHeroesByOwner(owner);
    
        console.log(heroesByOwner);

        // expect( heroesByOwner ).toEqual(
        //     [
        //         { id: 2, name: 'Spiderman', owner: 'Marvel' },
        //         { id: 5, name: 'Wolverine', owner: 'Marvel' }
        //     ]
        // );
        
        expect( heroesByOwner ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });

    test('heroesByOwner debe retornar un arreglo con longitud de 3 de los heroes de Marvel', () => { 
        const heroesByOwner = getHeroesByOwner('Marvel');
    
        console.log(heroesByOwner);

        expect( heroesByOwner ).toHaveLength(2);
    });
});