import AddNoteScreen from "./addNote.screen";

class EditNoteScreen {

    async skipTutorial() {
        await AddNoteScreen.skipBtn.click();
    }

    async addAndSaveNote(title, note) {
        await AddNoteScreen.adddNoteText.click();
        await AddNoteScreen.textOption.click();

        //add note title
        await AddNoteScreen.noteTitle.setValue(title);

        //add note body
        await AddNoteScreen.noteBody.setValue(note);

        await AddNoteScreen.saveNote();

    }

}

export default new EditNoteScreen();