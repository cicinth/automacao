const expect = require('chai').expect;

    async function screenshot(page, elementPath){
        await page.screenshot({path: elementPath});
    }

    //wait options
    async function waitMilliseconds(page, milliseconds){
        await page.waitForTimeout(milliseconds);
    }

    async function waitObjectXPath(page, obj){
        await page.waitForXPath(obj);
    }

    async function waitObject(page, obj){
        await page.waitForSelector(obj);
    }

    async function waitObjectDisappear(page, obj){
        await page.waitForSelector(obj, {
            hidden: true, 
            timeout: 3000
        });
    }

    //Elements interaction
    async function scrollDown(page){
        try{
            waitMilliseconds(page, 2000);
            await autoScroll(page);
        }
        catch(error){
            throw new Error(`Página não encontrada: ${page}`);
        }
    }
   
    async function type(page, obj, text){
        try{
            waitObject(page, obj)
            await page.type(obj, text, {delay:10});
        }
        catch(error){
            throw new Error(`Elemento não encontrado: ${obj}`);
        }
    }

    async function click(page, obj){
        try{
            waitObject(page, obj)
            await page.click(obj);
        }
        catch(error){
            throw new Error(`Elemento não encontrado: ${obj}`);
        }
    }

    async function clickCheckBox(page, obj){
        await page.click(obj, {clickCount: 1});
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

    async function closePopUp(page){
        await page.on('dialog', async dialog => {
            await dialog.accept();
        });
    }

    //retrive from page
    async function getElementText(page, selector){
        let text
        text = await page.$eval(selector, element => element.textContent);
        return text;
    }

    async function getCountElement(page, selector){
        //this will count the elements on <p> for example
        let count
        text = await page.$$eval(selector, element => element.length);//$$eval means more than one element
        return count;
    }

    async function getDialogText(page){
        var message
        await waitMilliseconds(page,5000);
        page.on('dialog', async dialog => {
            //console.log(dialog.message());
            //page.waitForSelector(dialog);
            message = dialog.message();
            dialog.accept();
        });
        return message;
    }

    //Validation
    async function assertion(obj, expectedValidation){
        expect(obj).to.be.a("string", expectedValidation);
    }

    async function assertionContains(obj, expectedValidation){
        expect(obj).to.be.include(expectedValidation);
    }

    async function assertionCount(obj, expectedValidation){
        expect(obj).to.equal(expectedValidation);
    }

module.exports = {
    screenshot, waitMilliseconds, waitObject, waitObjectXPath, waitObjectDisappear,
    scrollDown, type, click, clickCheckBox, clickXPath, keyBoardType, selectOption, closePopUp,
    getElementText, getCountElement, getDialogText, 
    assertion, assertionContains, assertionCount
};