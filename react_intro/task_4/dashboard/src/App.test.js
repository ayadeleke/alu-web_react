import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    it('renders the App component', () => {
        render(<App />);
        expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
    });

    it('renders the App-header section', () => {
        render(<App />);
        expect(screen.getByTestId('app-header')).toBeInTheDocument();
    });

    it('renders the App-body section', () => {
        render(<App />);
        expect(screen.getByTestId('app-body')).toBeInTheDocument();
    });

    it('renders the App-footer section', () => {
        render(<App />);
        expect(screen.getByTestId('app-footer')).toBeInTheDocument();
    });
});
