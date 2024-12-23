// import switchMode from './modeSlice'
import contentReducer from './contentSlice';

import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
    
export const store = configureStore({
    reducer: {
        // mode: switchMode,
        content: contentReducer
    },
});
    
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;