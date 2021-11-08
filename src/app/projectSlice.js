import { createSlice } from '@reduxjs/toolkit';
import { createTrackItem, generateTracks } from 'utils/projectUtils';

const initialState = {
  tracks: generateTracks(),
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { trackId, ...options } = action.payload;
      const track = state.tracks.find((track) => track.id === trackId);
      const item = createTrackItem(options);
      track.items.push(item);
    },
  },
});

export const { addItem } = projectSlice.actions;

export const selectTracks = (state) => state.project.tracks;

export default projectSlice.reducer;
