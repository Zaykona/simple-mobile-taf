
describe('Add notes', ()=>{
    const AddNoteScreen = require("../../pages/android/addNote.screen");
    const noteText = 'English homework\nFramework creation\nTrainig';
    const EditNoteScreen = require(
        "../../pages/android/editNote.screen");
    it('Verify adding a note', async()=>{

        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote('List of tasks',noteText );

        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText(noteText);



    })
})
