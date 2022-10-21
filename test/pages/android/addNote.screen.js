class AddNoteScreen {

    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get adddNoteText() {
        return $('//*[@text="Add note"]');
    }

    get textOption() {
        return $('//*[@text="Text"]');
    }

    get noteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteBody() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    get leftSideMenuBtn() {
        return $("//*[contains(@resource-id, 'icon_nav')]");
    }

    async openLeftSideMenu() {
        await this.leftSideMenuBtn.click();
    }

    async saveNote() {
        await driver.back();
        await driver.back();
    }
}

export default new AddNoteScreen();