import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {GetAuthInfoSlice} from './slices/AuthState';

const logger = createLogger({
  // ...options
});

export const store = configureStore({
  reducer: {
    authenticationState: GetAuthInfoSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {authenticationState: AuthState}
export type AppDispatch = typeof store.dispatch;
