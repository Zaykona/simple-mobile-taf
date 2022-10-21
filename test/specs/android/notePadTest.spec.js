import AddNoteScreen from "../../pages/android/addNote.screen.js";
import EditNoteScreen from "../../pages/android/editNote.screen.js";

describe('Add notes', () => {
    const noteText = 'English homework\nFramework creation\nTrainig';

    it('Verify adding a note', async () => {

        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote('List of tasks', noteText);

        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText(noteText);

    });
});
