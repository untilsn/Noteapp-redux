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
      return {
        ...state,
        notes: [...state.notes, noteItem],
      };
    },
    // add note
    valueNote: (state, action) => {
      return {
        ...state,
        notes: state.notes.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    },
    // delete note
    deleteNote: (state, action) => {
      const noteId = action.payload;
      return {
        ...state,
        notes: state.notes.filter((item) => item.id !== noteId),
      };
    },
    // add favorite note
    addFavorite: (state, action) => {
      const favoriteNoteId = action.payload;
      const favoriteNoteIndex = state.notes.findIndex(
        (note) => note.id === favoriteNoteId
      );
      if (favoriteNoteIndex !== -1) {
        const favoriteNote = state.notes[favoriteNoteIndex];
        const updatedNotes = [
          favoriteNote,
          ...state.notes.slice(0, favoriteNoteIndex),
          ...state.notes.slice(favoriteNoteIndex + 1),
        ];
        return {
          ...state,
          notes: updatedNotes,
        };
      }
      return state; // Trả về state không thay đổi nếu không tìm thấy ghi chú yêu thích
    },
  },
});

export const { addNote, valueNote, deleteNote, addFavorite } =
  noteSlice.actions;

export default noteSlice.reducer;
