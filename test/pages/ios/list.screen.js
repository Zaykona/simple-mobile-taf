class ListScreen {

    get createListBtn() {
        return $('//XCUIElementTypeButton[@name="Create list"]');

    }

    get listNameInput() {
        return $('//XCUIElementTypeTextField[@value="List Name"]');
    }

    get createBtn() {
        return $('//XCUIElementTypeButton[@name="Create"]');
    }

    listNameField(name) {
        return $(`~${name}`);
    }

}

export default new ListScreen();
