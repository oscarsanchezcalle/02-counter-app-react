export const getImagen = async() => {

    try{
        const apiKey = 'rLPQPWmHy0By041vnAubu0Jv70kfVbep';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        // el await indica que esperas a que se ejecute  para seguir.
        const { data } = await respuesta.json();
        const { url } = data.images.original;

        return url;

    }catch( error ){
        // manejo del error
        //console.error( error );
        return 'No existe';
    }   
}