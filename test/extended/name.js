import sel from '../../data/selectors.js';
import exp from '../../data/expected.json';
import data from '../../data/testData.js'

describe('Name', function () {

    before('Open App', function () {
        browser.url('');
    });

    afterEach('Refresh App', function () {
        browser.refresh();
    });

    it('TC-028 Name Field placeholder = "Hero\'s name"', function () {
        let placeholder = $(sel.name).getAttribute('placeholder');
        expect(placeholder).toEqual(exp.namePH);
    });

    it('TC-029 Name field accepts one symbol', function () {
        $(sel.name).setValue(data.symbol1);
        let nameValue = $(sel.name).getAttribute('value');
        expect(nameValue).toEqual(data.symbol1);
    });

    it('TC-030 Name field accepts 70 symbols', function () {
        $(sel.name).setValue(data.symbols70);
        let nameValue = $(sel.name).getAttribute('value');
        expect(nameValue).toEqual(data.symbols70);
    });

    it('TC-031 Name field accepts letters', function () {
        $(sel.name).setValue(data.letters);
        let nameValue = $(sel.name).getAttribute('value');
        expect(nameValue).toEqual(data.letters);
    });

    it('TC-032 Name field accepts upper case letters', function () {
        $(sel.name).setValue(data.upperCase);
        let nameValue = $(sel.name).getAttribute('value');
        expect(nameValue).toEqual(data.upperCase);
    });

    it('TC-033 Name field accepts lower case letters', function () {
        $(sel.name).setValue(data.lowerCase);
        let nameValue = $(sel.name).getAttribute('value');
        expect(nameValue).toEqual(data.lowerCase);
    });

    it('TC-034 Name field accepts digits', function () {
        $(sel.name).setValue(data.digits);
        let nameValue = $(sel.name).getAttribute('value');
        expect(nameValue).toEqual(data.digits);
    });

    it('TC-035 Name field accepts special symbols', function () {
        $(sel.name).setValue(data.symbolsSpecial);
        let nameValue = $(sel.name).getAttribute('value');
        expect(nameValue).toEqual(data.symbolsSpecial);
    });

    it('TC-036 Name field accepts letters with space', function () {
        $(sel.name).setValue(data.lettersSpace);
        let nameValue = $(sel.name).getAttribute('value');
        expect(nameValue).toEqual(data.lettersSpace);
    });

    it('TC-037 Name field accepts Russian letters', function () {
        $(sel.name).setValue(data.lettersRus);
        let nameValue = $(sel.name).getAttribute('value');
        expect(nameValue).toEqual(data.lettersRus);
    });

    it('TC-042 Name field does not accept 71 symbols or more', function () {
        $(sel.name).setValue(data.symbols71);
        let error = $(sel.error);
        expect(error).toBePresent();
    });

});
