import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ModeState {
  isEditor: boolean
}

const initialState: ModeState = {
  isEditor: true
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    switchMode: state => {
        state.isEditor = !state.isEditor;
    },
  }
});

export const { switchMode } = modeSlice.actions;
export default modeSlice.reducer;