import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
  },
  reducers: {
    // add cardnote
    addNote: (state, action) => {
      const noteItem = action.payload;
      state.notes.push(noteItem);
    },
    // add note
    valueNote: (state, action) => {
      const updatedNote = action.payload;
      const index = state.notes.findIndex((note) => note.id === updatedNote.id);
      if (index !== -1) {
        state.notes[index] = updatedNote;
      }
    },
    // delete note
    deleteNote: (state, action) => {
      const noteId = action.payload;
      state.notes = state.notes.filter((note) => note.id !== noteId);
    },
    // toggle favorite
    toggleFavorite: (state, action) => {
      const noteId = action.payload;
      const noteToUpdate = state.notes.find((note) => note.id === noteId);
      if (noteToUpdate) {
        noteToUpdate.pin = !noteToUpdate.pin;
      }
    },
  },
});

export const { addNote, valueNote, deleteNote, toggleFavorite } =
  noteSlice.actions;

export default noteSlice.reducer;
