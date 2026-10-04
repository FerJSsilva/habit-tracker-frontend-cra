# Quick Start Guide - Backend Integration

## ✅ What's Been Done

Your React frontend is now fully integrated with the Habit Tracker REST API! Here's what was set up:

### 1. Environment Configuration
- ✅ `.env` file created with API base URL
- ✅ `env-vars.js` utility for environment variable management

### 2. API Client Setup
- ✅ Axios client with Auth0 token injection (`client-request.js`)
- ✅ Generic request handler with error handling

### 3. Redux RTK Query Services
- ✅ Complete API service with all endpoints (`habitsService.js`)
- ✅ Automatic caching and cache invalidation
- ✅ Normalized data handling for habits
- ✅ All CRUD operations for habits and user habits

### 4. Custom Hooks
- ✅ `useAuth0Token` - Manages Auth0 authentication tokens
- ✅ Domain hooks in `habits.js` for easy API access

### 5. Constants
- ✅ API endpoint paths
- ✅ Category names
- ✅ Time periods
- ✅ Languages
- ✅ Days of week
- ✅ Habit status values

### 6. Updated Components
- ✅ `App.js` - Includes Auth0 token initialization
- ✅ `Habits.jsx` - Updated to work with real API data

### 7. Documentation
- ✅ `API_INTEGRATION.md` - Comprehensive API documentation
- ✅ `APIUsageExamples.jsx` - Code examples for common patterns
- ✅ Updated README.md

## 🎯 Next Steps

### 1. Configure Auth0 (If Not Already Done)

You need to ensure your Auth0 application is configured to work with the backend API:

1. Go to your Auth0 dashboard
2. Configure your Auth0 application with the API audience
3. Make sure your React app's Auth0 setup includes API scopes

### 2. Update Other Components

Several components still use mock data. Update them to use the real API:

#### Update `Home.jsx`
Replace mock habits with real user habits:
```javascript
import { useFetchUserHabitsQuery } from '../../redux/services/habitsService';

const { data: userHabits, isLoading } = useFetchUserHabitsQuery();
```

#### Update `Categories.jsx`
Fetch real categories:
```javascript
import { useFetchCategoriesQuery } from '../../redux/services/habitsService';

const { data: categories } = useFetchCategoriesQuery();
```

#### Update `NewHabit.jsx`
Implement habit creation:
```javascript
import { useCreateUserHabitMutation } from '../../redux/services/habitsService';

const [createUserHabit, { isLoading }] = useCreateUserHabitMutation();
```

### 3. Test the Integration

1. **Start the app:**
   ```bash
   yarn start
   ```

2. **Login with Auth0**

3. **Open DevTools:**
   - Network tab: Watch API calls
   - Console: Check for errors
   - Application > Local Storage: Verify `auth0_token` is set

4. **Test each page:**
   - Home: Should show user habits
   - Categories: Should show categories from API
   - Habits: Should show habits filtered by category
   - Create new habit: Should post to API

### 4. Handle Edge Cases

Add loading states and error handling:
```javascript
if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
if (!data) return <NoDataMessage />;
```

### 5. Add User ID Handling

The API requires a `userId` for user-specific operations. You'll need to:

1. Get the user ID from Auth0:
```javascript
const { user } = useAuth0();
const userId = user?.sub; // Auth0 user ID
```

2. Either:
   - Store it in Redux state
   - Pass it through context
   - Retrieve from API `/users` endpoint

### 6. Implement Habit Tracking

Add functionality to:
- Mark habits as completed
- Update streaks
- Track daily progress
- Show history

## 🐛 Common Issues & Solutions

### Issue: API calls return 401 Unauthorized
**Solution:** 
- Check if Auth0 token is being set (`localStorage.getItem('auth0_token')`)
- Verify Auth0 configuration includes API audience
- Try logging out and back in

### Issue: CORS errors
**Solution:**
- Backend must allow your frontend origin
- Check backend CORS configuration
- For local dev, backend should allow `http://localhost:3000`

### Issue: No data showing
**Solution:**
- Check Network tab for actual API responses
- Verify API base URL in `.env`
- Check if backend is running
- Look for console errors

### Issue: Data structure doesn't match
**Solution:**
- MongoDB uses `_id` not `id`
- Check if data transformation in `habitsService.js` handles your data correctly
- Update `selectId` in entity adapter if needed

## 📝 Code Patterns to Use

### Fetching Data
```javascript
const { data, isLoading, error } = useFetchHabitsQuery();
```

### Creating Data
```javascript
const [createItem, { isLoading, error }] = useCreateItemMutation();

const handleCreate = async (data) => {
  try {
    await createItem(data).unwrap();
    // Success!
  } catch (err) {
    // Handle error
  }
};
```

### Updating Data
```javascript
const [updateItem] = useUpdateItemMutation();

updateItem({ id: itemId, ...newData });
```

### Deleting Data
```javascript
const [deleteItem] = useDeleteItemMutation();

deleteItem(itemId);
```

## 🎓 Learning Resources

- [RTK Query Docs](https://redux-toolkit.js.org/rtk-query/overview)
- [Auth0 React SDK](https://auth0.com/docs/quickstart/spa/react)
- [React Hooks](https://react.dev/reference/react)

## 💡 Pro Tips

1. **Use React DevTools** to inspect Redux state
2. **Use Network tab** to debug API calls
3. **Check API_INTEGRATION.md** for detailed endpoint info
4. **Look at APIUsageExamples.jsx** for code patterns
5. **RTK Query automatically refetches** after mutations - use tags wisely
6. **Cache is your friend** - don't over-fetch

## ✨ You're Ready!

The foundation is solid. Now you can:
1. Update components to use real data
2. Implement remaining features
3. Add error boundaries
4. Improve loading states
5. Add optimistic updates
6. Build awesome habit tracking features!

Happy coding! 🚀
