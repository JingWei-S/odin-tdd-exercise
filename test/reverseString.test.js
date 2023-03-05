const reverseString = require('../js/reverseString');

test('a usual test', () => {
    expect(reverseString('abcde')).toBe('edcba');
});

test('empty string', () => {
    expect(reverseString('')).toBe('');
});