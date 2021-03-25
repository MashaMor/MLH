import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import data from '../../data/testData'

describe('Name', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-087 Image field placeholder = "Click or drag and drop"', function () {
        let placeholder = $(sel.image).getText();
        expect(placeholder).toEqual(exp.imagePH);
    });

});
