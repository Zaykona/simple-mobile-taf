import ItemList from "../../pages/ios/itemlist.screen";
import ListScreen from "../../pages/ios/list.screen";

describe('TODO item list test', () => {

    const listName = "Today tasks";
    const itemName = "English class";

    before(async () => {
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.setValue(listName);
        await ListScreen.createBtn.click();
        expect(ListScreen.listNameField(listName)).toBeDisplayed();
        await ListScreen.listNameField(listName).click();
    });

    it("Add item test", async () => {

        await ItemList.createItemBtn.click();
        await ItemList.itemNameInput.setValue(itemName);
        await ItemList.dueInput.click();

        //temporary for ios 16.0
        await driver.pause(5000);

        await ItemList.date("Monday, October 31").click();
        await ItemList.mainWindow.click();
        await ItemList.createBtn.click();

        await expect(await ItemList.itemTxt(itemName)).toBeDisplayed();
        await expect(await ItemList.itemTxt("Due October 31, 2022")).toBeDisplayed();

    });
});