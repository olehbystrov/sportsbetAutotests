import '@testing-library/jest-dom'
const BitCasino = require('../config/pageObjects')
const Config = require('../config/config')
import {Elina, Christina} from "../constants/urls"


describe('My Login application', () => {

    const testCases = [
        { link: Elina.WWCTestJP },
        { link: Elina.WWCTestEN },
    ];

    testCases.forEach((testCase) => {
        it(`Test with link: ${testCase.link}`, async () => {
            await Config.open(testCase.link);
            await BitCasino.buttonMainSportsbet.click();
            await browser.pause(3000);
            await expect(BitCasino.signUpForm).toBeDisplayed();
        });
    });


})