import React from 'react';
import PropTypes from 'prop-types'


//Functional Component
const PrimeraApp = ({ saludo, subtitulo }) => { //{ saludo = 'hola Mundo' } destructuring & default value

    /*const saludoObj = {
        nombre: 'Oscar',
        edad: 32
    };*/
    
    // const saludo = "Hola Mundo";

    console.log( saludo );

    return (
        <>
            {/*<pre> { JSON.stringify(saludoObj, null, 3)}</pre>*/}
            {/*<h1> { saludo } </h1>*/}
            <h1>{ saludo }</h1>
             <p> { subtitulo } </p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo:'soy un subtitulo'
}
export default PrimeraApp;