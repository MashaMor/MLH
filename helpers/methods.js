import sel from "../data/selectors";
import {gender} from "../data/testData";

function inputValues4 (name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function inputGenderAgeStory (gender, age, story){
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function radioButtonSwitch (gender1, gender2){
    $$(sel.radioButtons)[gender1].click();
    $$(sel.radioButtons)[gender2].click();
}

function inputNameAgeStory (name, age, story){
    $(sel.name).setValue(name);
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function inputNameGenderStory (name, gender, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

module.exports = {inputValues4, inputGenderAgeStory, radioButtonSwitch, inputNameAgeStory, inputNameGenderStory};
