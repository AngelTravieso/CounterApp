import { getImagen } from "../../base/11-async-await";


describe('Pruebas con async-await y Fetch', () => {
    
    test('should debe de retornar el url de la imagen', async () => {
       
        const url = await getImagen();
      
        expect( typeof url ).toBe( 'string' );

    });
    

});
