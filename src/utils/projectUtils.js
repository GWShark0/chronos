import { times } from 'lodash';

const NUM_TRACKS = 4;

const trackId = (
  (counter) => () =>
    `track_${++counter}`
)(0);

const itemId = (
  (counter) => () =>
    `item_${++counter}`
)(0);

export const createTrack = () => ({ id: trackId(), items: [] });

export const createTrackItem = (options) => ({
  id: itemId(),
  offset: 0,
  width: 300,
  ...options,
});

export const generateTracks = () => times(NUM_TRACKS, () => createTrack());
