const puppeteer = require('puppeteer');

async function getBrowser(){
    var browser = await puppeteer.launch({
        headless:false, //This is used to open the browser, if this line doesn't exist the browser won't be open
        slowMo: 10
    });
    return browser;
}

async function getPage(browser){
    var page = await browser.newPage();
    await page.setViewport({
        width: 1220, 
        height: 880
    })
    
    return page;
}

async function openUrl(page, url){
    page.goto(url,{ "waitUntil": "networkidle2"});
}

async function closePage(browser){
    browser.close();
}

module.exports = {
    getBrowser,getPage,openUrl,closePage
};