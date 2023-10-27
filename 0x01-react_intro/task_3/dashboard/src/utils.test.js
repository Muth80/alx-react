import { getFullYear, getFooterCopy, getLatestNotification } from "./util";

describe('utils.js', () => {
    test('Test getFullYear function', () => {
        const year = new Date().getFullYear();
        expect(getFullYear()).toEqual(year);
    });

    test('Test getFooterCopy function with true value', () => {
        expect(getFooterCopy(true)).toEqual('Holberton School');
    });

    test('Test getFooterCopy function with false value', () => {
        expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });

    test('Test getLatestNotification function', () => {
        expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
