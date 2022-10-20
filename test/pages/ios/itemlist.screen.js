class ItemlistScreen {

    get createItemBtn() {
        return $('//XCUIElementTypeButton[@name="Create item"]');
    }

    get itemNameInput() {
        return $('//*[@value="Title"]');
    }

    get dueInput() {
        return $('//*[@value="Due"]');
    }

    date(date) {
        return $(`//*[@label="${date}"]`);

    }

    get mainWindow() {
        return $('//XCUIElementTypeWindow[@index=2]');
    }

    get createBtn() {
        return $('//XCUIElementTypeButton[@name="Create"]');
    }


    itemTxt(text){
        return $(`~${text}`);
    }

}

module.exports = new ItemlistScreen();