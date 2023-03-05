const capitalize = require('../js/capitalize');

test('test', () => {
    expect(capitalize('test')).toBe('Test');
});

test('no char', () => {
    expect(capitalize(null)).toBeNull();
});

test('1 letter only', () => {
    expect(capitalize('a')).toBe('A');
});