import sel from "../data/selectors";

function inputValues4 (name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyList)[story].click();
}

function inputGenderAgeStory (gender, age, story){
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyList)[story].click();
}

function radioButtonSwitch (gender1, gender2){
    $$(sel.radioButtons)[gender1].click();
    $$(sel.radioButtons)[gender2].click();
}

function inputNameAgeStory (name, age, story){
    $(sel.name).setValue(name);
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyList)[story].click();
}

function inputNameGenderStory (name, gender, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.story).click();
    $$(sel.storyList)[story].click();
}

function inputNameGenderAge (name, gender, age){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
}

function storyTitle (story) {
    $(sel.story).click();
    browser.waitUntil(() => $$(sel.storyList)[story].isDisplayed(), {timeout: 1000});
}

function storySwitch (story1, story2) {
    $(sel.story).click();
    browser.waitUntil(() => $$(sel.storyList)[story1].isDisplayed(), {timeout: 1000});
    $$(sel.storyList)[story1].click();
    $(sel.storyType).click();
    browser.waitUntil(() => $$(sel.storyList)[story2].isDisplayed(), {timeout: 1000});
    $$(sel.storyList)[story2].click();
}

module.exports = {inputValues4, inputGenderAgeStory, radioButtonSwitch, inputNameAgeStory, inputNameGenderStory, inputNameGenderAge, storyTitle, storySwitch};
