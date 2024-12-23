import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import debouncer from '../debouncer';

interface ContentSlice {
  content: string
}

const initialState: ContentSlice = {
  content: ''
}

if (typeof localStorage !== 'undefined') {
    initialState.content = localStorage.getItem('source') ?? '';
}



export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    update: (state, action) => {
        state.content = action.payload;
        // localStorage.setItem('source', action.payload);
    },
  }
});

export const { update } = contentSlice.actions;
export default contentSlice.reducer;