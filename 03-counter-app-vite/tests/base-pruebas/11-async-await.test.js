import { getImagen } from '../../src/base-pruebas/11-async-await';
describe('Pruebas en 11-async-await', () => { 
    test('getImagen debe de retornar un error si no tenemos API Key', async() => { 

        const resp = await getImagen();
        // console.log(url)
        // expect( typeof url ).toBe('string');
        expect ( resp ).toBe('No se encontro la imagen');
    });
    
});