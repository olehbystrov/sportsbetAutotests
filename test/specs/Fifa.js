import '@testing-library/jest-dom'
const BitCasino = require('../config/pageObjects')
const Config = require('../config/config')
import {Elina, Christina} from "../constants/urls"


describe('My Login application', () => {

    const testCases = [
        { link: Elina.FIFAFIFAVT },
        { link: Elina.FIFAFIFAKR },
        { link: Elina.FIFAFIFAJP },
        { link: Elina.FIFAFIFAEN },
        { link: Christina.FIFAFIFAVT },
        { link: Christina.FIFAFIFAKR },
        { link: Christina.FIFAFIFAJP },
        { link: Christina.FIFAFIFAEN },
    ];

    testCases.forEach((testCase) => {
        it(`Test with link: ${testCase.link}`, async () => {
            await Config.open(testCase.link);
            await browser.pause(3000);
            await expect(BitCasino.buttonMainFifa).toBeDisplayed();
        });
    });


})