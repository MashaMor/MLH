import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData';
import {inputNameGenderAge, storyTitle, storySwitch} from '../../helpers/methods';

describe('Name', function () {

    before('Open App', function () {
        browser.url('');
    });

    afterEach('Refresh App', function () {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-087 Story type placeholder = "Type of the story"', function () {
            let placeholder = $(sel.storyPH).getText();
            expect(placeholder).toEqual(exp.storyPH);
        });

    });

    describe('Positive cases', function () {

        it('TC-089 The first type of the story is "Overcoming the Monster"', function () {
            storyTitle(story.overcomingTheMonster);
            let st = $$(sel.storyList)[story.overcomingTheMonster].getText();
            expect(st).toEqual(exp.story1);
        });

        it('TC-090 The second type of the Story Types is "Rebirth"', function () {
            storyTitle(story.rebirth);
            let st = $$(sel.storyList)[story.rebirth].getText();
            expect(st).toEqual(exp.story2);
        });

        it('TC-091 The third type of the Story Types is "Quest"', function () {
            storyTitle(story.quest);
            let st = $$(sel.storyList)[story.quest].getText();
            expect(st).toEqual(exp.story3);
        });

        it('TC-092 The fourth type of the Story Types is "Journey and Return"', function () {
            storyTitle(story.journeyAndReturn);
            let st = $$(sel.storyList)[story.journeyAndReturn].getText();
            expect(st).toEqual(exp.story4);
        });

        it('TC-093 The fifth type of the Story Types is "Rags and Riches"', function () {
            storyTitle(story.ragsAndRiches);
            let st = $$(sel.storyList)[story.ragsAndRiches].getText();
            expect(st).toEqual(exp.story5);
        });

        it('TC-094 The sixth type of the Story Types is "Tragedy"', function () {
            storyTitle(story.tragedy);
            let st = $$(sel.storyList)[story.tragedy].getText();
            expect(st).toEqual(exp.story6);
        });

        it('TC-095 The seventh type of the Story Types is "Comedy"', function () {
            storyTitle(story.comedy);
            let st = $$(sel.storyList)[story.comedy].getText();
            expect(st).toEqual(exp.story7);
        });

        it('TC-096 & TC-099 The chosen value fills the placeholder in', function () {
            storyTitle(story.comedy);
            $$(sel.storyList)[story.comedy].click();
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story7);
        });

        it('TC-101 User can change the Story Type: Overcoming the Monster -> Rebirth', function () {
            storySwitch(story.overcomingTheMonster, story.rebirth);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story2);
        });

        it('TC-102 User can change the Story Type: Overcoming the Monster -> Quest', function () {
            storySwitch(story.overcomingTheMonster, story.quest);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story3);
        });

        it('TC-103 User can change the Story Type: Overcoming the Monster -> Journey nad Return', function () {
            storySwitch(story.overcomingTheMonster, story.journeyAndReturn);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story4);
        });

        it('TC-104 User can change the Story Type: Overcoming the Monster -> Rags and Riches', function () {
            storySwitch(story.overcomingTheMonster, story.ragsAndRiches);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story5);
        });

        it('TC-105 User can change the Story Type: Overcoming the Monster -> Tragedy', function () {
            storySwitch(story.overcomingTheMonster, story.tragedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story6);
        });

        it('TC-106 User can change the Story Type: Overcoming the Monster -> Comedy', function () {
            storySwitch(story.overcomingTheMonster, story.comedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story7);
        });

        it('TC-107 Rebirth -> Overcoming the Monster', function () {
            storySwitch(story.rebirth, story.overcomingTheMonster);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story1);
        });

        it('TC-108 Rebirth -> Quest', function () {
            storySwitch(story.rebirth, story.quest);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story3);
        });

        it('TC-109 Rebirth -> Journey and Return', function () {
            storySwitch(story.rebirth, story.journeyAndReturn);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story4);
        });

        it('TC-110 Rebirth -> Rags and Riches', function () {
            storySwitch(story.rebirth, story.ragsAndRiches);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story5);
        });

        it('TC-111 Rebirth -> Tragedy', function () {
            storySwitch(story.rebirth, story.tragedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story6);
        });

        it('TC-112 Rebirth -> Comedy', function () {
            storySwitch(story.rebirth, story.comedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story7);
        });

        it('TC-113 Quest -> Overcoming the Monster', function () {
            storySwitch(story.quest, story.overcomingTheMonster);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story1);
        });

        it('TC-114 Quest -> Rebirth', function () {
            storySwitch(story.quest, story.rebirth);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story2);
        });

        it('TC-115 Quest -> Journey and Return', function () {
            storySwitch(story.quest, story.journeyAndReturn);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story4);
        });

        it('TC-116 Quest -> Rags and Riches', function () {
            storySwitch(story.quest, story.ragsAndRiches);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story5);
        });

        it('TC-117 Quest -> Tragedy', function () {
            storySwitch(story.quest, story.tragedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story6);
        });

        it('TC-118 Quest -> Comedy', function () {
            storySwitch(story.quest, story.comedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story7);
        });

        it('TC-119 Journey and Return -> Overcoming the Monster', function () {
            storySwitch(story.journeyAndReturn, story.overcomingTheMonster);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story1);
        });

        it('TC-120 Journey and Return -> Rebirth', function () {
            storySwitch(story.journeyAndReturn, story.rebirth);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story2);
        });

        it('TC-121 Journey and Return -> Quest', function () {
            storySwitch(story.journeyAndReturn, story.quest);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story3);
        });

        it('TC-122 Journey and Return -> Rags and Riches', function () {
            storySwitch(story.journeyAndReturn, story.ragsAndRiches);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story5);
        });

        it('TC-123 Journey and Return -> Tragedy', function () {
            storySwitch(story.journeyAndReturn, story.tragedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story6);
        });

        it('TC-124 Journey and Return -> Comedy', function () {
            storySwitch(story.journeyAndReturn, story.comedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story7);
        });

        it('TC-125 Rags and Riches -> Overcoming the Monster', function () {
            storySwitch(story.ragsAndRiches, story.overcomingTheMonster);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story1);
        });

        it('TC-126 Rags and Riches -> Rebirth', function () {
            storySwitch(story.ragsAndRiches, story.rebirth);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story2);
        });

        it('TC-127 Rags and Riches -> Quest', function () {
            storySwitch(story.ragsAndRiches, story.quest);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story3);
        });

        it('TC-128 Rags and Riches -> Journey and Return', function () {
            storySwitch(story.ragsAndRiches, story.journeyAndReturn);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story4);
        });

        it('TC-129 Rags and Riches -> Tragedy', function () {
            storySwitch(story.ragsAndRiches, story.tragedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story6);
        });

        it('TC-130 Rags and Riches -> Comedy', function () {
            storySwitch(story.ragsAndRiches, story.comedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story7);
        });

        it('TC-131 Tragedy -> Overcoming the Monster', function () {
            storySwitch(story.tragedy, story.overcomingTheMonster);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story1);
        });

        it('TC-132 Tragedy -> Rebirth', function () {
            storySwitch(story.tragedy, story.rebirth);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story2);
        });

        it('TC-133 Tragedy -> Quest', function () {
            storySwitch(story.tragedy, story.quest);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story3);
        });

        it('TC-134 Tragedy -> Journey and Return', function () {
            storySwitch(story.tragedy, story.journeyAndReturn);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story4);
        });

        it('TC-135 Tragedy -> Rags and Riches', function () {
            storySwitch(story.tragedy, story.ragsAndRiches);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story5);
        });

        it('TC-136 Tragedy -> Comedy', function () {
            storySwitch(story.tragedy, story.comedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story7);
        });

        it('TC-137 Comedy -> Overcoming the Monster', function () {
            storySwitch(story.tragedy, story.overcomingTheMonster);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story1);
        });

        it('TC-138 Comedy -> Rebirth', function () {
            storySwitch(story.tragedy, story.rebirth);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story2);
        });

        it('TC-139 Comedy -> Quest', function () {
            storySwitch(story.tragedy, story.quest);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story3);
        });

        it('TC-140 Comedy -> Journey and Return', function () {
            storySwitch(story.tragedy, story.journeyAndReturn);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story4);
        });

        it('TC-141 Comedy -> Rags and Riches', function () {
            storySwitch(story.tragedy, story.ragsAndRiches);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story5);
        });

        it('TC-142 Comedy -> Tragedy', function () {
            storySwitch(story.tragedy, story.tragedy);
            let st = $(sel.storySelected).getText();
            expect(st).toEqual(exp.story6);
        });

    });

    describe('Negative cases', function () {

        it('TC-143 User cannot create the story without story type', function () {
            inputNameGenderAge(name.default, gender.she, age.default);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

    });

});
