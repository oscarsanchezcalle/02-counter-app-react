/*const getImagen1 = async () => {
    return 'https://media0.giphy.com/media/1zkb1q67mpqrptrdd1/giphy.gif?cid=f0edda8472c618afafca2e1b2620913363627ef596bd544c&rid=giphy.gif'
}

getImagen1().then( console.log );*/

const getImagen = async () => {

    try{
        const apiKey = 'rLPQPWmHy0By041vnAubu0Jv70kfVbep';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        // el await indica que esperas a que se ejecute  para seguir.
        const { data } = await respuesta.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    }catch( error ){
        // manejo del error
        console.error( error );
    }   
}

getImagen();
