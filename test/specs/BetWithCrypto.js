import '@testing-library/jest-dom'
const BitCasino = require('../config/pageObjects')
const Config = require('../config/config')
import {Elina, Christina} from "../constants/urls"


describe('My Login application', () => {

    const testCases = [
        { link: Elina.BetWithCryptoGE },
        { link: Elina.BetWithCryptoPT },
        { link: Elina.BetWithCryptoFR },
        { link: Elina.BetWithCryptoCH },
        { link: Elina.BetWithCryptoKR },
        { link: Elina.BetWithCryptoJP },
        { link: Elina.BetWithCryptoEN },
        { link: Christina.BetWithCryptoGE },
        { link: Christina.BetWithCryptoPT },
        { link: Christina.BetWithCryptoFR },
        { link: Christina.BetWithCryptoCH },
        { link: Christina.BetWithCryptoKR },
        { link: Christina.BetWithCryptoJP },
        { link: Christina.BetWithCryptoEN },
    ];

    testCases.forEach((testCase) => {
        it(`Test with link: ${testCase.link}`, async () => {
            await Config.open(testCase.link);
            await browser.pause(3000);
            await expect(BitCasino.buttonMainBetWith).toBeDisplayed();
        });
    });


})