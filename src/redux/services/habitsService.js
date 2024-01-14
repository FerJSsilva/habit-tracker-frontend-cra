import { createEntityAdapter } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* -------------------- Adapter to handle normalized data ------------------- */
/* ------- Read: https://redux-toolkit.js.org/api/createEntityAdapter ------- */
const habitsAdapter = createEntityAdapter({
  selectId: (habit) => habit.id,
});

/* --------------------------- Initial state value -------------------------- */
const initialState = habitsAdapter.getInitialState();

/* ---------------------------- API configuration --------------------------- */
/* ------- Read: https://redux-toolkit.js.org/rtk-query/usage/queries ------- */
export const habitsAPI = createApi({
  reducerPath: 'habitsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://habit-tracker-mock-backend.onrender.com',
  }),
  endpoints: (builder) => ({
    fetchHabits: builder.query({
      query: () => `habits`,
      transformResponse(response) {
        // Normalizing response data
        return habitsAdapter.setAll(initialState, response);
      },
    }),
  }),
});

export const { useFetchHabitsQuery } = habitsAPI;
