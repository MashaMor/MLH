import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import data from '../../data/testData'

describe('Name', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-087 Story type placeholder = "Type of the story"', function () {
        let placeholder = $(sel.storyPH).getText();
        expect(placeholder).toEqual(exp.storyPH);
    });

});
