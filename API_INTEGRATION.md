# Habit Tracker API Integration Guide

## Overview
This React application is now integrated with the Habit Tracker REST API running at:
- **Production**: https://habit-tracker-rest-api.onrender.com
- **Local Development**: http://localhost:4000

## Setup

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_API_BASE_URL=https://habit-tracker-rest-api.onrender.com
```

For local development:
```env
REACT_APP_API_BASE_URL=http://localhost:4000
```

### Authentication
All API endpoints are protected and require Auth0 authentication. The app automatically:
1. Gets the Auth0 token using `useAuth0Token` hook
2. Stores it in localStorage
3. Includes it in all API requests via RTK Query

## API Endpoints & Usage

### Categories

#### List Categories
```javascript
import { useFetchCategoriesQuery } from './redux/services/habitsService';

function MyComponent() {
  const { data, isLoading, error } = useFetchCategoriesQuery();
  
  return (
    <div>
      {data?.map(category => <div key={category._id}>{category.name}</div>)}
    </div>
  );
}
```

#### List Category Translations
```javascript
const { data } = useFetchCategoryTranslationsQuery();
```

### Habits

#### List All Habits
```javascript
import { useFetchHabitsQuery } from './redux/services/habitsService';

const { data, isLoading, error } = useFetchHabitsQuery();
// Returns normalized data with { ids, entities }
```

#### Create a New Habit
```javascript
import { useCreateHabitMutation } from './redux/services/habitsService';

function CreateHabitForm() {
  const [createHabit, { isLoading, error }] = useCreateHabitMutation();

  const handleSubmit = async () => {
    try {
      await createHabit({
        categoryId: "6678b09bc4b03dfda03fa6a3",
        identifier: "PLAY_CARDS_POKER"
      }).unwrap();
    } catch (err) {
      console.error('Failed to create habit:', err);
    }
  };

  return <button onClick={handleSubmit}>Create Habit</button>;
}
```

#### Update a Habit
```javascript
import { useUpdateHabitMutation } from './redux/services/habitsService';

const [updateHabit] = useUpdateHabitMutation();

updateHabit({
  id: "67d22deee767fbc82663af98",
  categoryId: "6678b09bc4b03dfda03fa6a3",
  identifier: "PLAY_CARDS_POKEMON"
});
```

#### Delete a Habit
```javascript
import { useDeleteHabitMutation } from './redux/services/habitsService';

const [deleteHabit] = useDeleteHabitMutation();

deleteHabit("67d22deee767fbc82663af98");
```

### Habit Translations

#### List Habit Translations
```javascript
import { useFetchHabitTranslationsQuery } from './redux/services/habitsService';

// Basic usage
const { data } = useFetchHabitTranslationsQuery();

// With pagination
const { data } = useFetchHabitTranslationsQuery({ page: 2, limit: 3 });

// With language filter
const { data } = useFetchHabitTranslationsQuery({ language: 'en-us' });

// With search
const { data } = useFetchHabitTranslationsQuery({ search: 'uma' });

// With population
const { data } = useFetchHabitTranslationsQuery({ populate: 'habitId' });
```

#### Create Habit Translation
```javascript
import { useCreateHabitTranslationMutation } from './redux/services/habitsService';

const [createTranslation] = useCreateHabitTranslationMutation();

createTranslation({
  habitId: "668b5559464e18ff44ecc92f",
  language: "pt-br",
  name: "Escrever um diário",
  description: "Escrever reflexões diárias para melhorar a escrita e a autoanálise."
});
```

### Users

#### List Users
```javascript
import { useFetchUsersQuery } from './redux/services/habitsService';

const { data } = useFetchUsersQuery();
```

### User Habits

#### List User Habits
```javascript
import { useFetchUserHabitsQuery } from './redux/services/habitsService';

// Basic usage
const { data } = useFetchUserHabitsQuery();

// With pagination
const { data } = useFetchUserHabitsQuery({ page: 2, limit: 3 });
```

#### Add User Habit
```javascript
import { useCreateUserHabitMutation } from './redux/services/habitsService';

const [addUserHabit] = useCreateUserHabitMutation();

addUserHabit({
  habitId: "668b5559464e18ff44ecc92f",
  userId: "668b5559464e18ff44ecc92f",
  selectedDays: "1,2,3,4,5,6,7", // Days of week user wants to do this habit
  anytime: 1,      // Boolean: can do anytime
  morning: 1,      // Boolean: can do in morning
  afternoon: 1,    // Boolean: can do in afternoon
  evening: 1,      // Boolean: can do in evening
  startDate: "2023-10-01T00:00:00Z",
  endDate: "2023-10-31T23:59:59Z",
  streak: 0
});
```

#### Update User Habit
```javascript
import { useUpdateUserHabitMutation } from './redux/services/habitsService';

const [updateUserHabit] = useUpdateUserHabitMutation();

updateUserHabit({
  id: "67e9d31e7eceae43c6198785",
  habitId: "668b5559464e18ff44ecc92f",
  userId: "668b5559464e18ff44ecc92f",
  selectedDays: "0,1,0,0,0,0,1", // Only Monday and Sunday
  anytime: 1,
  morning: 1,
  afternoon: 1,
  evening: 1,
  startDate: "2023-10-01T00:00:00Z",
  endDate: "2023-10-31T23:59:59Z",
  streak: 0
});
```

## Custom Hooks

For convenience, use the custom hooks in `/src/hooks/domain-hooks/habits.js`:

```javascript
import {
  useHabits,
  useUserHabits,
  useCreateHabit,
  useUpdateHabit,
  useDeleteHabit,
  useCreateUserHabit,
  useUpdateUserHabit
} from './hooks/domain-hooks/habits';
```

## Data Structure

### Habit Object
```javascript
{
  _id: "668b5559464e18ff44ecc92f",
  categoryId: "6678b09bc4b03dfda03fa6a3",
  identifier: "WRITE_DIARY",
  name: "Write a diary", // May come from translations
  createdAt: "2023-10-01T00:00:00Z",
  updatedAt: "2023-10-01T00:00:00Z"
}
```

### User Habit Object
```javascript
{
  _id: "67e9d31e7eceae43c6198785",
  habitId: "668b5559464e18ff44ecc92f",
  userId: "668b5559464e18ff44ecc92f",
  selectedDays: "1,2,3,4,5,6,7", // Comma-separated days (0-6)
  anytime: 1,
  morning: 1,
  afternoon: 1,
  evening: 1,
  startDate: "2023-10-01T00:00:00Z",
  endDate: "2023-10-31T23:59:59Z",
  streak: 0
}
```

## Error Handling

All hooks return an `error` object when requests fail:

```javascript
const { data, isLoading, error } = useFetchHabitsQuery();

if (error) {
  console.error('API Error:', error);
  // Handle error in UI
}
```

## Caching & Invalidation

RTK Query automatically:
- Caches responses
- Deduplicates requests
- Invalidates cache when mutations occur
- Re-fetches data when needed

Tags used for cache invalidation:
- `Categories`
- `Habits`
- `HabitTranslations`
- `UserHabits`
- `Users`

## Testing

To test API integration:
1. Ensure you're logged in via Auth0
2. Open browser DevTools > Network tab
3. Observe API calls being made
4. Check Authorization header includes Bearer token

## Troubleshooting

### No data loading
1. Check if Auth0 token is being set (localStorage > auth0_token)
2. Verify API base URL in `.env`
3. Check browser console for errors
4. Verify network requests in DevTools

### 401 Unauthorized
- Token may be expired, try logging out and back in
- Verify Auth0 configuration

### CORS errors
- Backend needs to allow your frontend origin
- Check CORS configuration on backend
