import '@testing-library/jest-dom'
const BitCasino = require('../config/pageObjects')
const Config = require('../config/config')
import {Elina, Christina} from "../constants/urls"


describe('My Login application', () => {

    const testCases = [
        { link: Elina.ErikaLPJP },
        { link: Elina.ErikaLPEN },
        { link: Elina.WelcomeJP2JP },
        { link: Elina.WelcomeJP2EN },
        { link: Elina.StaticLongMartinJP },
        { link: Elina.StaticLongMartinEN },
        { link: Elina.StaticLongTestJP },
        { link: Elina.StaticLongTestEN },
        { link: Elina.Martin },
    ];

    testCases.forEach((testCase) => {
        it(`Test with link: ${testCase.link}`, async () => {
            await Config.open(testCase.link);
            //await Config.waitForLoginResponse()
            await BitCasino.buttonMainCopy.click();
            await browser.pause(3000);
            await expect(BitCasino.signUpForm).toBeDisplayed();
        });
    });


})
