import { createEntityAdapter } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, API_PATH } from '../../utils/env-vars';

/* -------------------- Adapter to handle normalized data ------------------- */
/* ------- Read: https://redux-toolkit.js.org/api/createEntityAdapter ------- */
const habitsAdapter = createEntityAdapter({
  selectId: (habit) => habit._id || habit.id,
});

/* --------------------------- Initial state value -------------------------- */
const initialState = habitsAdapter.getInitialState();

/* ------------- Dynamic base query with Auth0 token injection -------------- */
const baseQueryWithAuth = async (args, api, extraOptions) => {
  // Get auth token from window (Auth0 sets this)
  const getAccessToken = () =>
    // This assumes Auth0 token is available in the app context
    // You may need to adjust based on your Auth0 setup
    localStorage.getItem('auth0_token') || '';

  const baseQuery = fetchBaseQuery({
    baseUrl: `${API_BASE_URL}${API_PATH}`,
    prepareHeaders(headers) {
      const token = getAccessToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  });

  return baseQuery(args, api, extraOptions);
};

/* ---------------------------- API configuration --------------------------- */
/* ------- Read: https://redux-toolkit.js.org/rtk-query/usage/queries ------- */
export const habitsAPI = createApi({
  reducerPath: 'habitsAPI',
  baseQuery: baseQueryWithAuth,
  tagTypes: [
    'Categories',
    'Habits',
    'HabitTranslations',
    'UserHabits',
    'Users',
  ],
  endpoints: (builder) => ({
    /* ------------------------------- Categories ------------------------------- */
    fetchCategories: builder.query({
      query: () => 'categories',
      providesTags: ['Categories'],
    }),

    fetchCategoryTranslations: builder.query({
      query: () => 'category-translations',
      providesTags: ['Categories'],
    }),

    /* --------------------------------- Habits --------------------------------- */
    fetchHabits: builder.query({
      query: () => 'habits',
      providesTags: ['Habits'],
      transformResponse(response) {
        // Normalizing response data
        return habitsAdapter.setAll(initialState, response);
      },
    }),

    createHabit: builder.mutation({
      query: (habitData) => ({
        url: 'habits',
        method: 'POST',
        body: habitData,
      }),
      invalidatesTags: ['Habits'],
    }),

    updateHabit: builder.mutation({
      query: ({ id, ...habitData }) => ({
        url: `habits/${id}`,
        method: 'PUT',
        body: habitData,
      }),
      invalidatesTags: ['Habits'],
    }),

    deleteHabit: builder.mutation({
      query: (id) => ({
        url: `habits/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Habits'],
    }),

    /* -------------------------- Habit Translations ---------------------------- */
    fetchHabitTranslations: builder.query({
      query(params = {}) {
        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append('page', params.page);
        if (params.limit) queryParams.append('limit', params.limit);
        if (params.language) queryParams.append('language', params.language);
        if (params.search) queryParams.append('search', params.search);
        if (params.populate) queryParams.append('populate', params.populate);

        const queryString = queryParams.toString();
        return `habit-translations${queryString ? `?${queryString}` : ''}`;
      },
      providesTags: ['HabitTranslations'],
    }),

    createHabitTranslation: builder.mutation({
      query: (translationData) => ({
        url: 'habit-translations',
        method: 'POST',
        body: translationData,
      }),
      invalidatesTags: ['HabitTranslations'],
    }),

    /* --------------------------------- Users ---------------------------------- */
    fetchUsers: builder.query({
      query: () => 'users',
      providesTags: ['Users'],
    }),

    /* ------------------------------- User Habits ------------------------------ */
    fetchUserHabits: builder.query({
      query(params = {}) {
        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append('page', params.page);
        if (params.limit) queryParams.append('limit', params.limit);

        const queryString = queryParams.toString();
        return `user-habits${queryString ? `?${queryString}` : ''}`;
      },
      providesTags: ['UserHabits'],
    }),

    createUserHabit: builder.mutation({
      query: (userHabitData) => ({
        url: 'user-habits',
        method: 'POST',
        body: userHabitData,
      }),
      invalidatesTags: ['UserHabits'],
    }),

    updateUserHabit: builder.mutation({
      query: ({ id, ...userHabitData }) => ({
        url: `user-habits/${id}`,
        method: 'PUT',
        body: userHabitData,
      }),
      invalidatesTags: ['UserHabits'],
    }),
  }),
});

/* ----------------------------- Export Hooks ------------------------------- */
export const {
  // Categories
  useFetchCategoriesQuery,
  useFetchCategoryTranslationsQuery,
  // Habits
  useFetchHabitsQuery,
  useCreateHabitMutation,
  useUpdateHabitMutation,
  useDeleteHabitMutation,
  // Habit Translations
  useFetchHabitTranslationsQuery,
  useCreateHabitTranslationMutation,
  // Users
  useFetchUsersQuery,
  // User Habits
  useFetchUserHabitsQuery,
  useCreateUserHabitMutation,
  useUpdateUserHabitMutation,
} = habitsAPI;
