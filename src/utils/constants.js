/* ----------------------------- API Endpoints ------------------------------ */
export const API_ENDPOINTS = {
  // Categories
  CATEGORIES: '/categories',
  CATEGORY_TRANSLATIONS: '/category-translations',

  // Habits
  HABITS: '/habits',
  HABIT_TRANSLATIONS: '/habit-translations',

  // Users
  USERS: '/users',

  // User Habits
  USER_HABITS: '/user-habits',
};

/* ---------------------------- Category Names ------------------------------ */
export const CATEGORIES = {
  PHYSICAL: 'physical',
  INTELLECTUAL: 'intellectual',
  EMOTIONAL: 'emotional',
  SOCIAL: 'social',
  SPIRITUAL: 'spiritual',
};

/* ----------------------------- Time Periods ------------------------------- */
export const TIME_PERIODS = {
  ANYTIME: 'anytime',
  MORNING: 'morning',
  AFTERNOON: 'afternoon',
  EVENING: 'evening',
};

/* ------------------------------- Languages -------------------------------- */
export const LANGUAGES = {
  PT_BR: 'pt-br',
  EN_US: 'en-us',
};

/* ---------------------------- Days of the Week ---------------------------- */
export const DAYS_OF_WEEK = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
};

/* ----------------------------- Habit Status ------------------------------- */
export const HABIT_STATUS = {
  STANDARD: 'standard',
  COMPLETED: 'completed',
  FAILED: 'failed',
};
