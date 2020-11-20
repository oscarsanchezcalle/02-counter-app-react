import React from 'react';

import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

//let wrapper; //undefined

//to get visualstudio autocomplete.
let wrapper = shallow( <CounterApp value = {10} />);

//Ejecuta antes de cada prueba
beforeEach( () => {
    //inicializar el componente antes de las pruebas
    wrapper = shallow( <CounterApp value = {10} />);
});

describe('Pruebas en el <CounterApp />', () => {
    
    test('debe mostrar el <CounterApp /> correctamente', () => {
        
        expect ( wrapper ).toMatchSnapshot();
    }); 

    test('debe mostrar el valor por defecto de 100 ', () => {
        const wrapper = shallow( <CounterApp value = {100} />);
        const counterText = wrapper.find('h2').text().trim();
        expect ( counterText ).toBe('100');
    });
    
    test('debe incrementar con el botón +1', () => {
        
        wrapper.find('button').at(0).simulate('click'); //ejecuta la acciòn del click

        const counterText = wrapper.find('h2').text().trim();

        expect ( counterText ).toBe('11');

    });

    test('debe disminuir con el botón -1', () => {
        
        const btn = wrapper.find('button').at(2).simulate('click'); //ejecuta la acciòn del click

        console.log(btn.text());

        const counterText = wrapper.find('h2').text().trim();

        console.log(counterText);

        expect ( counterText ).toBe('9');

    });

    test('Debe resetear el countador ', () => {

        const wrapper = shallow( <CounterApp value = {100} />);

        wrapper.find('button').at(0).simulate('click'); //ejecuta la acciòn del click

        wrapper.find('button').at(1).simulate('click'); //ejecuta la acciòn del click

        const counterText = wrapper.find('h2').text().trim();

        expect ( counterText ).toBe('0');

    });    
});
