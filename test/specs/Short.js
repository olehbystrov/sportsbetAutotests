import '@testing-library/jest-dom'
const BitCasino = require('../config/pageObjects')
const Config = require('../config/config')
import {Elina, Christina} from "../constants/urls"


describe('My Login application', () => {

    const testCases = [
        { link: Elina.MediaBuyEPLCashbaTR },
        { link: Elina.MediaBuyEPLCashbaJP },
        { link: Elina.MediaBuyEPLCashbaEN },
        { link: Elina.AffEPL10cashbackTR },
        { link: Elina.AffEPL10cashbackSP },
        { link: Elina.AffEPL10cashbackGE },
        { link: Elina.AffEPL10cashbackJP },
        { link: Elina.AffEPL10cashbackEN },
        { link: Elina.BCDepositBonus },
        { link: Elina.DepositBonusJP},
        { link: Elina.DepositBonusEN },
        { link: Elina.AffJPacqcodeJP },
        { link: Elina.AffJPacqcodeEN },
        { link: Elina.TestFontBoxesEN },
        { link: Elina.PJPAcqCode4JP },
        { link: Elina.PJPAcqCode4EN },
        { link: Elina.PaulJPAcqCode3JP },
        { link: Elina.PaulJPAcqCode3EN },
        { link: Elina.PaulJPAcqNoCode3JP },
        { link: Elina.PaulJPAcqNoCode3EN },
        { link: Elina.TestAfrikaGenEN },
        { link: Elina.BoostMoonprincessEN },
        { link: Elina.BaccaratCashbackJP },
        { link: Elina.MoonPrincessJP },
        { link: Elina.KanuRevolution },
        { link: Elina.TaboolaCashBackSP },
        { link: Elina.TaboolaCashBackGE },
        { link: Elina.TaboolaCashBackFR },
        { link: Elina.TaboolaCashBackVT },
        { link: Elina.TaboolaCashBackCH },
        { link: Elina.TaboolaCashBackKR },
        { link: Elina.TaboolaCashBackJP },
        { link: Elina.TaboolaCashBackEN },
        { link: Elina.cashBackAsiaCH },
        { link: Elina.cashBackAsiaEN },
        { link: Elina.cashBackAsiaVT },
        { link: Elina.cashBackAsiaKR },
        { link: Elina.cashBackAsiaJP },
        { link: Elina.Cashback20NewEN },
        { link: Elina.OlympusFSVT },
        { link: Elina.OlympusFSCH },
        { link: Elina.OlympusFSGE },
        { link: Elina.OlympusFSJP },
        { link: Elina.OlympusFSEN },
        { link: Elina.BaccaratFreeChipsVT },
        { link: Elina.BaccaratFreeChipsCH },
        { link: Elina.BaccaratFreeChipsJP },
        { link: Elina.BaccaratFreeChipsEN },
        { link: Elina.NewArsenalRouletteKR },
        { link: Elina.NewArsenalRouletteVT },
        { link: Elina.NewArsenalRouletteJP },
        { link: Elina.NewArsenalRouletteGE },
        { link: Elina.NewArsenalRouletteEN },
        { link: Elina.ArsenalCHCH },
        { link: Elina.ArsenalCHEN },
        { link: Elina.OlympusTest2 },
        { link: Elina.BaccaratSB25FreeEN },
        { link: Elina.FSOlympus2EN },
        { link: Elina.FIFALong },
        { link: Elina.FIFASBTest },
        { link: Elina.NPBBaseballJP },
        { link: Elina.NPBBaseballEN },
        { link: Elina.HorseRacingJP },
        { link: Elina.HorseRacingEN },
        { link: Elina.Football43FR },
        { link: Elina.Football43EN },
        { link: Elina.SpinsSportsbetFR },
        { link: Elina.SpinsSportsbetVT },
        { link: Elina.SpinsSportsbetJP },
        { link: Elina.SpinsSportsbetEN },
        { link: Elina.FreeSecond43SP },
        { link: Elina.FreeSecond43PT },
        { link: Elina.FreeSecond43VT },
        { link: Elina.FreeSecond43CH },
        { link: Elina.FreeSecond43GE },
        { link: Elina.FreeSecond43FR },
        { link: Elina.FreeSecond43JP },
        { link: Elina.FreeSecond43EN },
        { link: Elina.TeenPattiIndianClassic },
        { link: Elina.PriceBoostEveryDay },
        { link: Elina.Promotions_100MultiBetBoosts },
        { link: Elina.CryptoRelatedBasketball },
        { link: Elina.LongBaruto },
        { link: Elina.KingKakaNew },
        { link: Elina.CassperNew },
        { link: Elina.TeknoNew },
        { link: Elina.Olympus },
        { link: Elina.GenericAfrica },
        { link: Elina.WelcomeToBitcasino },
        { link: Elina.Cricket },
        { link: Elina.J2League },
        { link: Elina.J1League },
        { link: Elina.TeknoMilesWest },
        { link: Elina.KingKakaSportsbet },
        { link: Elina.CassperAfrica },
        { link: Elina.FreeNew43FR },
        { link: Elina.FreeNew43EN },
        { link: Elina.FIFACelebGE },
        { link: Elina.FIFACelebCH },
        { link: Elina.FIFACelebEN },
        { link: Elina.YachtGR },
        { link: Elina.YachtCH },
        { link: Elina.YachtEN },
        { link: Elina.Lambo },
        { link: Elina.FIFALux },
        { link: Elina.RTLowOffer },
        { link: Elina.TeknoMiles },
        { link: Elina.KingKaka },
        { link: Elina.Africa200spins },
        { link: Elina.Africa },
        { link: Elina.FS250SP },
        { link: Elina.FS250GE },
        { link: Elina.FS250CH },
        { link: Elina.FS250FR },
        { link: Elina.FS250VT },
        { link: Elina.FS250KR },
        { link: Elina.FS250JP },
        { link: Elina.FS250EN },
        { link: Elina.Cassper },
        { link: Elina.NFT },
        { link: Elina.SpeedBacarrat },
        { link: Elina.ThreeICE },
        { link: Elina.Esports },
        { link: Elina.PinkBaruto },
        { link: Elina.MoonPrincess },
        { link: Christina.BingoGeraldineJP },
        { link: Christina.BingoGeraldineEN },
        { link: Christina.Cashback10 },
        { link: Christina.Cashback23TH },
        { link: Christina.Cashback23PT },
        { link: Christina.Cashback23GE },
        { link: Christina.Cashback23CH },
        { link: Christina.Cashback23KR },
        { link: Christina.Cashback23VT },
        { link: Christina.Cashback23JP },
        { link: Christina.Cashback23SP },
        { link: Christina.Cashback23EN },
        { link: Christina.CashbackSp },
        { link: Christina.CashbackStaticSP },
        { link: Christina.CashbackStaticEN },
        { link: Christina.Yash1 },
        { link: Christina.ChampionsLeague2023 },
        { link: Christina.FreeBet43TR },
        { link: Christina.FreeBet43TH },
        { link: Christina.FreeBet43SP },
        { link: Christina.FreeBet43RU },
        { link: Christina.FreeBet43PT },
        { link: Christina.FreeBet43GR },
        { link: Christina.FreeBet43GE },
        { link: Christina.FreeBet43FR },
        { link: Christina.FreeBet43CH },
        { link: Christina.FreeBet43JP },
        { link: Christina.FreeBet43KR },
        { link: Christina.FreeBet43VT },
        { link: Christina.FreeBet43EN },
        { link: Christina.CashbackUpdatedGE },
        { link: Christina.CashbackUpdatedCH },
        { link: Christina.CashbackUpdatedSP },
        { link: Christina.CashbackUpdatedPT },
        { link: Christina.CashbackUpdatedVT },
        { link: Christina.CashbackUpdatedKR },
        { link: Christina.CashbackUpdatedJP },
        { link: Christina.CashbackUpdatedEN },
        { link: Christina.GeraldineTR },
        { link: Christina.GeraldineSP },
        { link: Christina.GeraldineGE },
        { link: Christina.GeraldineCH },
        { link: Christina.GeraldineJP },
        { link: Christina.GeraldineVT },
        { link: Christina.GeraldineEN },
        { link: Christina.GeraldinePT },
        { link: Christina.GeraldineKR },
        { link: Christina.YashLPHit6 },
        { link: Christina.YashOddsBoostIPL },
        { link: Christina.TESTTESTMATT },
        { link: Christina.FREEBET50PT },
        { link: Christina.FREEBET50KR },
        { link: Christina.CashbackNew20TR },
        { link: Christina.CashbackNew20TH },
        { link: Christina.CashbackNew20SP },
        { link: Christina.CashbackNew20RU },
        { link: Christina.CashbackNew20PT },
        { link: Christina.CashbackNew20GR },
        { link: Christina.CashbackNew20EN },
        { link: Christina.CashbackNew20GE },
        { link: Christina.CashbackNew20FR },
        { link: Christina.CashbackNew20CH },
        { link: Christina.CashbackNew20JP },
        { link: Christina.CashbackNew20KR },
        { link: Christina.CashbackNew20VT },
        { link: Christina.Enjoy20CashbackSP },
        { link: Christina.Enjoy20CashbackFR },
        { link: Christina.Enjoy20CashbackJP },
        { link: Christina.AdultPageTR },
        { link: Christina.AdultPageTH },
        { link: Christina.AdultPageSP },
        { link: Christina.AdultPagePT },
        { link: Christina.AdultPageGE },
        { link: Christina.AdultPageCH },
        { link: Christina.AdultPageJP },
        { link: Christina.AdultPageKR },
        { link: Christina.AdultPageVT },
        { link: Christina.AdultPageEN },
        { link: Christina.CashbackTemplateFromlfs },
        { link: Christina.TestingTempEsprortGE },
        { link: Christina.TestingTempEsprortRU },
        { link: Christina.TestingTempEsprortJP },
        { link: Christina.TestingTempEsprortTR },
        { link: Christina.TestingTempEsprortTH },
        { link: Christina.TestingTempEsprortSP },
        { link: Christina.TestingTempEsprortPT },
        { link: Christina.TestingTempEsprortCH },
        { link: Christina.TestingTempEsprortKR },
        { link: Christina.TestingTempEsprortVT },
        { link: Christina.TestingTempEsprortEN },
        { link: Christina.EsportsCryptoEN },
        { link: Christina.EsportsCryptoGE },
        { link: Christina.AdultLpSPSP },
        { link: Christina.AdultLpSPPT },
        { link: Christina.AdultLpSPVT },
        { link: Christina.AdultLpSPCH },
        { link: Christina.AdultLpSPGE },
        { link: Christina.AdultLpSPFR },
        { link: Christina.AdultLpSPJP },
        { link: Christina.AdultLpSPEN },
        { link: Christina.TESTMEETING },
        { link: Christina.FSAdult350 },
        { link: Christina.Enjoy20CashbackPT },
        { link: Christina.Enjoy20CashbackGE },
        { link: Christina.EsportsCryptoSP },
        { link: Christina.EsportsCryptoPT },
        { link: Christina.EsportsCryptoJP },
        { link: Christina.EsportsCryptoFR },
        { link: Christina.EsportsCryptoCH },
        { link: Christina.EsportsTemplates },
        { link: Christina.BaccaratFreeChipsVT },
        { link: Christina.BaccaratFreeChipsCH },
        { link: Christina.BaccaratFreeChipsJP },
        { link: Christina.BaccaratFreeChipsEN },
        { link: Christina.BaccaratUpdateVT },
        { link: Christina.BaccaratUpdateCH },
        { link: Christina.BaccaratUpdateJP },
        { link: Christina.BaccaratUpdateEN },
        { link: Christina.Enjoy20CashbackEN },
        { link: Christina.Enjoy20CashbackVT },
        { link: Christina.Enjoy20CashbackKR },
        { link: Christina.Enjoy20CashbackCH },
        { link: Christina.AFFTaskYASHSB },
        { link: Christina.AFFTaskYASHBC },
        { link: Christina.IMAGEEXPORTTEST },
        { link: Christina.FreeSpinsGE },
        { link: Christina.FreeSpinsFR },
        { link: Christina.FreeSpinsCH },
        { link: Christina.FreeSpinsPT },
        { link: Christina.FreeSpinsKR },
        { link: Christina.FreeSpinsVT },
        { link: Christina.FreeSpinsSP },
        { link: Christina.FreeSpinsJP },
        { link: Christina.FreeSpinsEN },
        { link: Christina.fsOriginal350SP },
        { link: Christina.fsOriginal350GE },
        { link: Christina.fsOriginal350CH },
        { link: Christina.fsOriginal350FR },
        { link: Christina.fsOriginal350VT },
        { link: Christina.fsOriginal350KR },
        { link: Christina.fsOriginal350JP },
        { link: Christina.fsOriginal350EN },
        { link: Christina.ChristinaTestJP },
        { link: Christina.ChristinaTestEN },
        { link: Christina.FIFASB },
        { link: Christina.NPBBaseballJP },
        { link: Christina.NPBBaseballEN },
        { link: Christina.HorseRacingJP },
        { link: Christina.HorseRacingEN },
        { link: Christina.Football43FR },
        { link: Christina.Football43EN },
        { link: Christina.SpinsSportsbet250FR },
        { link: Christina.SpinsSportsbet250VT },
        { link: Christina.SpinsSportsbet250JP },
        { link: Christina.SpinsSportsbet250EN },
        { link: Christina.FreeSecond43SP },
        { link: Christina.FreeSecond43PT },
        { link: Christina.FreeSecond43VT },
        { link: Christina.FreeSecond43CH },
        { link: Christina.FreeSecond43GE },
        { link: Christina.FreeSecond43FR },
        { link: Christina.FreeSecond43JP },
        { link: Christina.FreeSecond43EN },
        { link: Christina.LongBaruto },
        { link: Christina.KingKakanew },
        { link: Christina.CassperNew },
        { link: Christina.TeknoNew },
        { link: Christina.Olympus },
        { link: Christina.GenericAfrica },
        { link: Christina.WelcomeToBitcasino },
        { link: Christina.Cricket },
        { link: Christina.J2League },
        { link: Christina.J1League },
        { link: Christina.TeknoMilesWest },
        { link: Christina.KingKakaSportsbet },
        { link: Christina.CassperAfrica },
        { link: Christina.FreeNew43FR },
        { link: Christina.FreeNew43EN },
        { link: Christina.FIFACelebGE },
        { link: Christina.FIFACelebCH },
        { link: Christina.FIFACelebEN },
        { link: Christina.YachtGR },
        { link: Christina.YachtCH },
        { link: Christina.YachtEN },
        { link: Christina.FIFALux },
        { link: Christina.Lambo },
        { link: Christina.RTLowOffer },
        { link: Christina.TeknoMiles },
        { link: Christina.TeknoMiles },
        { link: Christina.KingKaka },
        { link: Christina.Africa200Spins },
        { link: Christina.Africa },
        { link: Christina.FS250SP },
        { link: Christina.FS250GE },
        { link: Christina.FS250CH },
        { link: Christina.FS250FR },
        { link: Christina.FS250VT },
        { link: Christina.FS250KR },
        { link: Christina.FS250JP },
        { link: Christina.FS250EN },
        { link: Christina.Cassper },
        { link: Christina.NFT },
        { link: Christina.SpeedBacarrat },
        { link: Christina.ThreeICE },
        { link: Christina.Esports },
        { link: Christina.PinkBaruto },
        { link: Christina.MoonPrincess },


    ];

    testCases.forEach((testCase) => {
        it(`Test with link: ${testCase.link}`, async () => {
            await Config.open(testCase.link);
            await browser.pause(3000);
            await expect(BitCasino.createAccountButton).toBeDisplayed();
        });
    });


})
