import AddNoteScreen from "../../pages/android/addNote.screen.js";
import LeftSideMenu from "../../pages/android/leftSideMenu.screen.js";
import EditNoteScreen from "../../pages/android/editNote.screen.js";
import WebView from "../..//utils/WebView.js";

describe("Left side menu tests", () => {

    before(async () => {
        await EditNoteScreen.skipTutorial();
        await AddNoteScreen.openLeftSideMenu();
    });

    it("Check facebook link redirection", async () => {

        await LeftSideMenu.likeOnFacebookLnk.click();

        await WebView.waitForWebViewContextLoaded();
        await WebView.switchToContext('WEBVIEW_chrome');

        //TODO move selector to page object
        expect(await $(".img.CoverPhoto")).toBeDisplayed();

    });

});