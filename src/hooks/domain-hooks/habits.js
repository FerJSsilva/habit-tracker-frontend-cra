/**
 * Custom hooks for habit-related operations
 * These hooks provide convenient wrappers around the RTK Query API
 */

import {
  useFetchHabitsQuery,
  useCreateHabitMutation,
  useUpdateHabitMutation,
  useDeleteHabitMutation,
  useFetchUserHabitsQuery,
  useCreateUserHabitMutation,
  useUpdateUserHabitMutation,
} from '../../redux/services/habitsService';

/**
 * Hook to fetch all habits
 */
export const useHabits = () => {
  return useFetchHabitsQuery();
};

/**
 * Hook to fetch user's habits with optional pagination
 * @param {Object} params - Query parameters { page, limit }
 */
export const useUserHabits = (params = {}) => {
  return useFetchUserHabitsQuery(params);
};

/**
 * Hook to create a new habit
 * Returns [createHabit, { isLoading, error }]
 */
export const useCreateHabit = () => {
  return useCreateHabitMutation();
};

/**
 * Hook to update an existing habit
 * Returns [updateHabit, { isLoading, error }]
 */
export const useUpdateHabit = () => {
  return useUpdateHabitMutation();
};

/**
 * Hook to delete a habit
 * Returns [deleteHabit, { isLoading, error }]
 */
export const useDeleteHabit = () => {
  return useDeleteHabitMutation();
};

/**
 * Hook to create a user habit (add habit to user's list)
 * Returns [createUserHabit, { isLoading, error }]
 * 
 * Example usage:
 * const [createUserHabit, { isLoading }] = useCreateUserHabit();
 * createUserHabit({
 *   habitId: "668b5559464e18ff44ecc92f",
 *   userId: "668b5559464e18ff44ecc92f",
 *   selectedDays: "1,2,3,4,5,6,7",
 *   anytime: 1,
 *   morning: 1,
 *   afternoon: 1,
 *   evening: 1,
 *   startDate: "2023-10-01T00:00:00Z",
 *   endDate: "2023-10-31T23:59:59Z",
 *   streak: 0
 * });
 */
export const useCreateUserHabit = () => {
  return useCreateUserHabitMutation();
};

/**
 * Hook to update a user habit
 * Returns [updateUserHabit, { isLoading, error }]
 */
export const useUpdateUserHabit = () => {
  return useUpdateUserHabitMutation();
};

