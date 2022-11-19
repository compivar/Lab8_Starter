// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//Function 1: isPhoneNumber
//1 True
test('Checks that (858) 534-2230 is valid', () => {
    expect(functions.isPhoneNumber('(858) 534-2230')).toBe(true);
});
//2 True
test('Checks that (000) 000-0000 is valid', () => {
    expect(functions.isPhoneNumber('(000) 000-0000')).toBe(true);
});
//3 False
test('Checks that (858) 5342230 is not valid', () => {
    expect(functions.isPhoneNumber('(858) 5342230')).toBe(false);
});
//4 False
test('Checks that (858) 534-223 is not valid', () => {
    expect(functions.isPhoneNumber('(858) 534-223')).toBe(false);
});

//Function 2: isEmail
//1 True
test('Checks that j1doe@ucsd.edu is valid', () => {
    expect(functions.isEmail('j1doe@ucsd.edu')).toBe(true);
});
//2 True
test('Checks that BILL_GATES@microsoft.com is valid', () => {
    expect(functions.isEmail('BILL_GATES@microsoft.com')).toBe(true);
});
//3 False
test('Checks that hsmith@@google.com is not valid', () => {
    expect(functions.isEmail('hsmith@@google.com')).toBe(false);
});
//4 False
test('Checks that kjohnson@h2o.com is not valid', () => {
    expect(functions.isEmail('kjohnson@h2o.com')).toBe(false);
});

//Function 3: isStrongPassword
//1 True
test('Checks that G55A2fC is strong', () => {
    expect(functions.isStrongPassword('G55A2fC')).toBe(true);
});
//2 True
test('Checks that J____ is strong', () => {
    expect(functions.isStrongPassword('J____')).toBe(true);
});
//3 False
test('Checks that 1password is not strong', () => {
    expect(functions.isStrongPassword('1password')).toBe(false);
});
//4 False
test('Checks that Tm7$81 is not strong', () => {
    expect(functions.isStrongPassword('Tm7$81')).toBe(false);
});

//Function 4: isDate
//1 True
test('Checks that 11/25/2022 is a date', () => {
    expect(functions.isDate('11/25/2022')).toBe(true);
});
//2 True
test('Checks that 1/1/2023 is a date', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});
//3 False
test('Checks that 12/31/22 is not a date', () => {
    expect(functions.isDate('12/31/22')).toBe(false);
});
//4 False
test('Checks that 123/4/2022 is not a date', () => {
    expect(functions.isDate('123/4/2022')).toBe(false);
});

//Function 5: isHexColor
//1 True
test('Checks that #f0c is a valid hex code', () => {
    expect(functions.isHexColor('#f0c')).toBe(true);
});
//2 True
test('Checks that #37c871 is a valid hex code', () => {
    expect(functions.isHexColor('#37c871')).toBe(true);
});
//3 False
test('Checks that #f0z is not a valid hex code', () => {
    expect(functions.isHexColor('#f0z')).toBe(false);
});
//4 False
test('Checks that #7844211 is not a valid hex code', () => {
    expect(functions.isHexColor('#7844211')).toBe(false);
});