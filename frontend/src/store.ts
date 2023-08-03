import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer, persistStore } from 'redux-persist';

import authReducer from './features/auth/authSlice';

const reducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/FLUSH', 'persist/PAUSE', 'persist/PURGE',
        'persist/REGISTER'],
    },
  })
  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const persistor = persistStore(store);