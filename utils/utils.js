const puppeteer = require('puppeteer');

    async function screenshot(page, elementPath){
        await page.screenshot({path: elementPath});
    }

    async function waitMilliseconds(page, milliseconds){
        await page.waitForTimeout(milliseconds);
    }

    async function waitObject(page, obj){
        await page.waitFor(obj);
    }

    async function type(page, obj, text){
        await page.type(obj, text, {delay:100});
    }

    async function click(page, obj){
        await page.click(obj);
    }

    async function clickXPath(page, xPath){
        var element = await page.$x(xPath);
        await element[0].click();
    }

    async function keyBoardType(page, obj){
        await page.keyboard.press(obj);
    }

    async function selectOption(page, selector, option){
        //select(idElement,Option)
        await page.select(selector, option);
    }

module.exports = {
    screenshot, waitMilliseconds,waitObject,type,click,clickXPath,keyBoardType, selectOption
};