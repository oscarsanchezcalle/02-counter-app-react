import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState(value); // returns an array []

    //handleAdd
    const handleAdd = (e) => {
        //console.log(e);
        //setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }

    //handleReset
    const handleReset = (e) => setCounter( (c) => 0 );

    //handleMinus
    const handleMinus = (e) => setCounter( (c) => c - 1 );
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleMinus }> -1 </button>

        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterApp;
