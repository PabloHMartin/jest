const  {sum, createPerson } =  require('../common.js');

describe('common test', () => {
    test('it should sum 2 variables', () => {
        // arrange + act
        const rta = sum(3,2);
        // assert
        expect(rta).toBe(5);

        // in one line
        expect(sum(5,5)).toBe(10);
        expect(sum(-1,1)).toBe(0);
        expect(sum(0,100)).toBe(100);
    });
    test('should be greater than', () => {
        expect(sum(5,2)).toBeGreaterThan(3);
        expect(sum(5,2)).toBeGreaterThanOrEqual(7);
        expect(sum(5,2)).toBeGreaterThanOrEqual(6);
        expect(sum(5,2)).toBeLessThan(15);
        expect(sum(5,2)).toBeLessThanOrEqual(54);
    });

    test('it should create a Person', () => {
        const person = createPerson('John', 23);
        expect(person).toStrictEqual({name: 'John', age: 23});
        expect(person.name).toBe('John');
        expect(person.age).toBe(23);

    });
});