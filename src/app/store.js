import { configureStore } from '@reduxjs/toolkit';
import editorReducer from './editorSlice';
import projectReducer from './projectSlice';

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    project: projectReducer,
  },
});
