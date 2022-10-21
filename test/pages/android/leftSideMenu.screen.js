class LeftSideMenu {

    get likeOnFacebookLnk() {
        return $("//*[@text='Like us on Facebook']");
    }

}

export default new LeftSideMenu();