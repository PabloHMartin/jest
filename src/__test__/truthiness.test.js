const {isEven, divide} = require('../truthiness');

describe('test thruthiness', () => {
    test('should return if number is even', () => {
        expect(isEven(2)).toBeTruthy();
        expect(isEven(0)).toBeTruthy();
        expect(isEven(3)).toBeFalsy();
        expect(isEven(-1)).toBeFalsy();
        expect(isEven(-2)).toBeTruthy();
    });

    // test('should be divisible', () => {
    //     expect(divide(1,0)).toBeFalsy();
    //     expect(divide(1,2)).toBeTruthy();
    //     expect(divide(2,2)).toEqual(1);

    // });
    test('should assert when divide by 0', () => {
        expect( () => divide(1,0)).toThrow();
        expect(divide(2,2)).toEqual(1);
    });
});