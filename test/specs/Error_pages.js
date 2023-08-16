import '@testing-library/jest-dom'
const BitCasino = require('../config/pageObjects')
const Config = require('../config/config')
import {Elina, Christina} from "../constants/urls"


describe('My Login application', () => {

    const testCases = [
        { link: Elina.ErrorPageEN },
        { link: Elina.Error404 },
        { link: Elina.MaintenancePage },
        { link: Christina.ErrorPageEN },
        { link: Christina.Error404 },
        { link: Christina.MaintenancePage },
    ];

    testCases.forEach((testCase) => {
        it(`Test with link: ${testCase.link}`, async () => {
            await Config.open(testCase.link);
            await browser.pause(3000);
            await expect(BitCasino.sorryTitle).toHaveText('Sorry!')
        });
    });


})