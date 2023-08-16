const Page = require('./page');
import {link} from "../constants/urls"
var assert = require('assert')

class Config extends Page {

    open (a) {
       return browser.url('https://live.bitcasino.io/landings/' + a) 
    }

    async waitForLoginResponse () {
        var loginCall = await browser.mock('https://play.google.com/log?format=json&hasfast=true&authuser=0', {method: 'POST'})


        await browser.pause(5000)
        assert.strictEqual(loginCall.calls[0].statusCode, 200)
    }



}


module.exports = new Config();