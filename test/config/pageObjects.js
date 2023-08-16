const Page = require('./page');
import {link} from "../constants/urls"

class BitCasino extends Page {

    get buttonMain() {
        return $('//button[@btg-label="sign-up-button"]')
    }

    get signUpForm() {
        return $('#signUpForm')
    }

    get buttonMainCopy() {
        return $('//section[@id="section1"]//button[@class="btn form-button btg-cta-button button_create_account_first signUpBtnInner"]')
    }

    get createAccountButton() {
        return $('.cta')
    }

    get buttonMainLoyalty() {
        return $('//a[@class="btn modal-trigger"]')
    }

    get buttonMainBetWith() {
        return $('//button[@class="button form-button"]')
    }

    get buttonMainFifa() {
        return $('//section[@class="folder"]//a[@class="btn modal-trigger"]')
    }

    get sorryTitle() {
        return $('//h1')
    }

    get buttonMainSportsbet() {
        return $('//div[@class="button primary-btn"]')
    }



}


module.exports = new BitCasino();