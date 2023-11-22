// store.js
import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '@slices/character';

const reducer = {
  character: characterReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
