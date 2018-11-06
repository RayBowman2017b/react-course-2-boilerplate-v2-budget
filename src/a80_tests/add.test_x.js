
/*

sec012_L112_add.test.js

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\sec012_L112_add.test.js

 jest SecurityError: localStorage is not available for opaque origins

 */


const bad_add = (a, b) => { return a + b + 1; }
const add = (a, b) => { return a + b; }

const defaultName = 'Anonymous';
const generateGreeting = (name = defaultName) => `Hello ${name}!`;

describe ('first test cases', () => {

    test ('should add two numbers', () => {
        const result = add(3, 4);
        // if (result !== 7)  {
        //     throw new Error (`You added 3 and 4. The result was ${result}. Expect 7`)
        // }
        expect(result).toBe(7);
    });

    test ('should add two numbers --- badly', () => {
        const result = bad_add(3, 4);
        expect(result).toBe(7);
    });

    test ('should generate greeting from name', () => {
        let L_name = 'Mike';
        expect(generateGreeting(L_name)).toBe(`Hello ${L_name}!`);
        L_name = 'Joe';
        expect(generateGreeting(L_name)).toBe(`Hello ${L_name}!`);
        L_name = 'Pete';
        expect(generateGreeting(L_name)).toBe(`Hello ${L_name}!`);
    });
    test ('should generate greeting for no name', () => {
        let L_name = defaultName;
        expect(generateGreeting(L_name)).toBe(`Hello ${L_name}!`);
    });

});
