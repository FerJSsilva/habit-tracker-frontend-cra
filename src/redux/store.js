import { configureStore } from '@reduxjs/toolkit';
import { habitsAPI } from './services/habitsService';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [habitsAPI.reducerPath]: habitsAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(habitsAPI.middleware),
});
