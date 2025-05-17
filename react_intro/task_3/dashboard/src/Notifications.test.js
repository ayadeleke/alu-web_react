// Notifications.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Notifications } from './Notifications';

describe('Notifications component', () => {
    test('renders without crashing', () => {
        render(<Notifications />);
    });

    test('renders three list items', () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
    });

    test('renders the text "Here is the list of notifications"', () => {
        render(<Notifications />);
        expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    });
});
