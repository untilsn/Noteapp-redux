import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import noteSlice from "./slice/NoteSlice";
import favoriteSlice from "./slice/FavoriteSlice";

// const reducer = combineReducers({
//   note: noteSlice,
// });

// export const store = configureStore({
//   reducer,
// });

const reducer = combineReducers({
  note: noteSlice,
  favorite: favoriteSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
