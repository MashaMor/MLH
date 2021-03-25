import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import data from '../../data/testData'

describe('Name', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-060 Age field placeholder = "Hero\'s age"', function () {
        let placeholder = $(sel.age).getAttribute('placeholder');
        expect(placeholder).toEqual(exp.agePH);
    });

});