# Backend Integration Testing Checklist

Use this checklist to verify that the backend integration is working correctly.

## Pre-flight Checks

- [ ] Dependencies installed (`yarn install` completed)
- [ ] `.env` file exists with `REACT_APP_API_BASE_URL`
- [ ] Backend API is running and accessible
- [ ] Auth0 credentials configured

## Startup Tests

### 1. Application Starts
```bash
yarn start
```
- [ ] App starts without errors
- [ ] No console errors on initial load
- [ ] Auth0 login screen appears (if not logged in)

### 2. Authentication
- [ ] Can log in with Auth0
- [ ] Redirected to app after login
- [ ] Token stored in localStorage (DevTools > Application > Local Storage > `auth0_token`)
- [ ] No authentication errors in console

## API Integration Tests

### 3. Network Requests
Open DevTools > Network tab, then:

- [ ] API requests are being made to correct base URL
- [ ] Requests include `Authorization: Bearer <token>` header
- [ ] Requests return 200 OK (not 401 or 403)
- [ ] Response data matches expected format

### 4. Habits Page
Navigate to `/habits/physical`:

- [ ] Loading state appears initially
- [ ] Habits load from API
- [ ] Habits display correctly
- [ ] No console errors
- [ ] Category filtering works
- [ ] Empty state shows when no habits match

### 5. Categories
Navigate to `/categories`:

- [ ] Categories display (currently hardcoded, but should work)
- [ ] Clicking a category navigates to habits page
- [ ] No errors

### 6. Redux DevTools
Install Redux DevTools extension, then check:

- [ ] `habitsAPI` reducer exists in state
- [ ] API queries are tracked
- [ ] Cache is populated after API calls
- [ ] Mutations trigger cache invalidation

## Hook Testing

### 7. Test Hooks in Components

Create a test component or use browser console:

```javascript
// In a component:
import { useFetchHabitsQuery } from './redux/services/habitsService';

const { data, isLoading, error } = useFetchHabitsQuery();
console.log('Habits:', data);
```

- [ ] `useFetchHabitsQuery()` returns data
- [ ] `useFetchCategoriesQuery()` returns categories
- [ ] `useFetchUserHabitsQuery()` returns user habits
- [ ] Loading states work correctly
- [ ] Error states handle failures gracefully

### 8. Test Mutations

```javascript
const [createHabit, { isLoading }] = useCreateHabitMutation();

// Try creating a habit
createHabit({
  categoryId: "6678b09bc4b03dfda03fa6a3",
  identifier: "TEST_HABIT"
});
```

- [ ] Mutation triggers API call
- [ ] Success triggers cache invalidation
- [ ] List refetches automatically
- [ ] Error handling works

## Error Handling Tests

### 9. Network Errors
Simulate network issues:

- [ ] Turn off internet - app shows error state
- [ ] Turn on internet - app recovers
- [ ] Invalid token - shows auth error
- [ ] 404 errors handled gracefully
- [ ] 500 errors handled gracefully

### 10. Edge Cases
- [ ] No data returns empty state
- [ ] Loading during slow network shows spinner
- [ ] Multiple rapid requests are deduplicated
- [ ] Cached data shows immediately on revisit

## Performance Tests

### 11. Caching
- [ ] Second visit to same page uses cache (no new request)
- [ ] Data persists during navigation
- [ ] Cache invalidates after mutations
- [ ] RTK Query cache shows in Redux DevTools

### 12. Loading Performance
- [ ] Initial load is reasonably fast
- [ ] Subsequent navigation is instant (cached)
- [ ] No memory leaks (check DevTools Memory tab)
- [ ] No excessive re-renders

## Browser Compatibility

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)

## Console Checks

Should see in console (for debugging):
- [ ] "isLoading: true" then "isLoading: false"
- [ ] "data: {...}" with actual data
- [ ] No error objects
- [ ] No 401/403 errors

## API Endpoint Coverage

Verify each endpoint works:

### Categories
- [ ] GET /categories
- [ ] GET /category-translations

### Habits
- [ ] GET /habits
- [ ] POST /habits (create new)
- [ ] PUT /habits/:id (update)
- [ ] DELETE /habits/:id (delete)

### Habit Translations
- [ ] GET /habit-translations
- [ ] GET /habit-translations?page=2&limit=10
- [ ] GET /habit-translations?language=en-us
- [ ] GET /habit-translations?search=test
- [ ] POST /habit-translations

### Users
- [ ] GET /users

### User Habits
- [ ] GET /user-habits
- [ ] GET /user-habits?page=1&limit=10
- [ ] POST /user-habits
- [ ] PUT /user-habits/:id

## Documentation Verification

- [ ] README.md is clear and helpful
- [ ] API_INTEGRATION.md covers all endpoints
- [ ] QUICK_START.md provides good next steps
- [ ] Code examples work when copy-pasted
- [ ] CHANGES.md accurately reflects changes

## Common Issues Resolved

If you encounter issues, check:

### 401 Unauthorized
✓ Token in localStorage?
✓ Auth0 configured correctly?
✓ Try logout/login

### CORS Errors
✓ Backend allows frontend origin?
✓ Credentials included in requests?

### No Data Loading
✓ API base URL correct?
✓ Backend running?
✓ Network requests successful?

### Type Errors
✓ MongoDB uses `_id` not `id`
✓ Data structure matches expected format?

## Final Checklist

- [ ] All API calls working
- [ ] Authentication working
- [ ] Error handling implemented
- [ ] Loading states showing
- [ ] Cache working correctly
- [ ] No console errors
- [ ] Documentation complete
- [ ] Ready for next development phase

## Notes

Record any issues or observations:

```
Date: ___________
Tester: _________

Issues found:
1. 
2. 
3. 

Notes:


```

---

**Status:** ☐ Not Started | ☐ In Progress | ☐ Complete
**Date:** _______________
**Signed:** _____________
