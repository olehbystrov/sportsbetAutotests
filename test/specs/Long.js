import '@testing-library/jest-dom'
const BitCasino = require('../config/pageObjects')
const Config = require('../config/config')
import {Elina, Christina} from "../constants/urls"


describe('My Login application', () => {

    const testCases = [
        { link: Elina.TestRegForm },
        { link: Elina.FAQLong },
        { link: Elina.UpdatedWelcomeJP },
        { link: Elina.UpdatedWelcomeEN },
        { link: Elina.MishaF1JP },
        { link: Elina.MishaF1EN },
        { link: Elina.F1jptry3JP },
        { link: Elina.F1jptry3EN },
        { link: Elina.F1changeserrorJP },
        { link: Elina.F1changeserrorEN },
        { link: Elina.F1CopyJP },
        { link: Elina.F1CopyEN },
        { link: Elina.LongNoRotation },
        { link: Elina.WelcomePageJP },
        { link: Elina.WelcomePageEN },
        { link: Christina.TomomiFinalEN },
        { link: Christina.TomomiFinalJP },
        { link: Christina.Naomix1EN },
        { link: Christina.Naomix1JP },
        { link: Christina.NaomiRequestPart },
    ];

    testCases.forEach((testCase) => {
        it(`Test with link: ${testCase.link}`, async () => {
            await Config.open(testCase.link);
            //await Config.waitForLoginResponse()
            await BitCasino.buttonMain.click();
            await browser.pause(3000);
            await expect(BitCasino.signUpForm).toBeDisplayed();
        });
    });


})
