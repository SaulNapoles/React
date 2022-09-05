import { render, screen } from "@testing-library/react";
import { CounterApp } from '../src/counterApp';

describe('Pruebas en <CounterApp/>', () => { 
    const counter = 100;
    
    test('debe de hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp value={counter} />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={ counter }/>)
        expect( screen.getByText(100) ).toBeTruthy();
        expect( screen.getByRole('heading', {level: 2} ).innerHTML).toContain('100')
    });
});