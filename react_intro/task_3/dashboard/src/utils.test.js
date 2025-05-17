import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test Utils', () => {
    it('Tests that getFullYear is current', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    it('Validates the result of getFooterCopy with true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School.');
    });

    it('Validates the result of getFooterCopy with false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    it('checks return of getLatestNotification', () => {
        expect(getLatestNotification()).toEqual({ __html: '<strong>Urgent requirement</strong> - complete by EOD' });
    });
});