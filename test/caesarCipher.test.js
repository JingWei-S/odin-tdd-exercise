const caesarCipher = require('../js/caesarCipher');

describe('test basic', () => {
    test('hello world', () => {
        expect(caesarCipher('Hello, world!', 3)).toBe('khoor, zruog!');
    });
});

describe('numbers', () => {
    test('12345', () => {
        expect(caesarCipher('12345', 5)).toBe('12345');
    });
});

describe('shift over 26 alphabets', () => {
    test('Caesar Cipher', () => {
        expect(caesarCipher("Caesar Cipher", 23)).toBe("zxbpxo zfmebo");
    });
})
