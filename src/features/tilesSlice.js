import { createSlice } from '@reduxjs/toolkit';
import { TILES } from '../../app/data';

export const tilesSlice = createSlice({
  name: 'tiles',
  initialState: {
    tiles: TILES,
  },
  reducers: {}
});

export const selectTiles = (state) => state.tiles.tiles;
export default tilesSlice.reducer;
