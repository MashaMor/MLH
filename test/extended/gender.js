import sel from '../../data/selectors.js';
import {name, gender, age, story} from '../../data/testData.js';
import {inputNameAgeStory, radioButtonSwitch} from '../../helpers/methods.js'

describe('Gender', function () {

    before('Open App', function () {
        browser.url('');
    });

    afterEach('Refresh App', function () {
        browser.refresh();
    });

    describe('Positive cases', function () {

        it('TC-047 Button HE is enabled', function () {
            let button = $$(sel.radioButtons)[gender.he].isEnabled();
            expect(button).toEqual(true);
        });

        it('TC-048 Button SHE is enabled', function () {
            let button = $$(sel.radioButtons)[gender.she].isEnabled();
            expect(button).toEqual(true);
        });

        it('TC-049 Button IT is enabled', function () {
            let button = $$(sel.radioButtons)[gender.it].isEnabled();
            expect(button).toEqual(true);
        });

        it('TC-050 User  can use only one button at the time: he', function () {
            $$(sel.radioButtons)[gender.he].click();
            let he = $$(sel.radioButtons)[gender.he].isSelected();
            let she = $$(sel.radioButtons)[gender.she].isSelected();
            let it = $$(sel.radioButtons)[gender.it].isSelected();
            expect(she && it).toEqual(false) && expect(he).toEqual(true);
        });

        it('TC-051 User  can use only one button at the time: she', function () {
            $$(sel.radioButtons)[gender.she].click();
            let he = $$(sel.radioButtons)[gender.he].isSelected();
            let she = $$(sel.radioButtons)[gender.she].isSelected();
            let it = $$(sel.radioButtons)[gender.it].isSelected();
            expect(he && it).toEqual(false) && expect(she).toEqual(true);
        });

        it('TC-052 User  can use only one button at the time: it', function () {
            $$(sel.radioButtons)[gender.it].click();
            let he = $$(sel.radioButtons)[gender.he].isSelected();
            let she = $$(sel.radioButtons)[gender.she].isSelected();
            let it = $$(sel.radioButtons)[gender.it].isSelected();
            expect(she && he).toEqual(false) && expect(it).toEqual(true);
        });

        it('TC-053 User can switch the option: he -> she', function () {
            radioButtonSwitch(gender.he, gender.she);
            let he = $$(sel.radioButtons)[gender.he].isSelected();
            let she = $$(sel.radioButtons)[gender.she].isSelected();
            expect(he).toEqual(false) && expect(she).toEqual(true);
        });

        it('TC-054 User can switch the option: he -> it', function () {
            radioButtonSwitch(gender.he, gender.it);
            let he = $$(sel.radioButtons)[gender.he].isSelected();
            let it = $$(sel.radioButtons)[gender.it].isSelected();
            expect(he).toEqual(false) && expect(it).toEqual(true);
        });

        it('TC-055 User can switch the option: she -> he', function () {
            radioButtonSwitch(gender.she, gender.he);
            let she = $$(sel.radioButtons)[gender.she].isSelected();
            let he = $$(sel.radioButtons)[gender.he].isSelected();
            expect(she).toEqual(false) && expect(he).toEqual(true);
        });

        it('TC-056 User can switch the option: she -> it', function () {
            radioButtonSwitch(gender.she, gender.it);
            let she = $$(sel.radioButtons)[gender.she].isSelected();
            let it = $$(sel.radioButtons)[gender.it].isSelected();
            expect(she).toEqual(false) && expect(it).toEqual(true);
        });

        it('TC-057 User can switch the option: it -> she', function () {
            radioButtonSwitch(gender.it, gender.she);
            let it = $$(sel.radioButtons)[gender.it].isSelected();
            let she = $$(sel.radioButtons)[gender.she].isSelected();
            expect(it).toEqual(false) && expect(she).toEqual(true);
        });

        it('TC-058 User can switch the option: it -> he', function () {
            radioButtonSwitch(gender.it, gender.he);
            let it = $$(sel.radioButtons)[gender.he].isSelected();
            let he = $$(sel.radioButtons)[gender.it].isSelected();
            expect(it).toEqual(false) && expect(he).toEqual(true);
        });

    });

    describe('Negative cases', function () {

        it('TC-059 User cannot create story without gender', function () {
            inputNameAgeStory(name.default, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

    });

});
