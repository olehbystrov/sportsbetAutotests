import '@testing-library/jest-dom'
const BitCasino = require('../config/pageObjects')
const Config = require('../config/config')
import {Elina, Christina} from "../constants/urls"


describe('My Login application', () => {

    const testCases = [
        { link: Elina.LoyaltyJPJP },
        { link: Elina.LoyaltyENEN },
        { link: Elina.LoyaltyJP },
        { link: Elina.LoyaltyEN },
        { link: Christina.LoyaltyJPJP },
        { link: Christina.LoyaltyENEN },
        { link: Christina.LoyaltyJP },
        { link: Christina.LoyaltyEN },
    ];

    testCases.forEach((testCase) => {
        it(`Test with link: ${testCase.link}`, async () => {
            await Config.open(testCase.link);
            //await Config.waitForLoginResponse()
            await BitCasino.buttonMainLoyalty.click();
            await browser.pause(3000);
            await expect(BitCasino.signUpForm).toBeDisplayed();
        });
    });


})
