import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeDrawerItem: {},
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    startDrawerItemDrag(state, action) {
      state.activeDrawerItem = action.payload;
    },
    endDrawerItemDrag(state) {
      state.activeDrawerItem = {};
    },
  },
});

export const { startDrawerItemDrag, endDrawerItemDrag } = editorSlice.actions;

export const selectActiveDrawerItem = (state) => state.editor.activeDrawerItem;

export default editorSlice.reducer;
