# Habit Tracker Frontend

A React-based habit tracking application with Auth0 authentication and full backend API integration.

## 🚀 Features

- ✅ Auth0 authentication
- ✅ Full REST API integration
- ✅ Redux Toolkit Query for state management
- ✅ Responsive NES-style UI
- ✅ Category-based habit organization
- ✅ User habit tracking with streaks
- ✅ Multi-language support

## 🛠️ Tech Stack

- **React** 18.2.0
- **Redux Toolkit** with RTK Query
- **Auth0** for authentication
- **Axios** for HTTP requests
- **Wouter** for routing
- **Day.js** for date handling
- **NES.css** for retro styling

## 📦 Installation

1. Clone the repository
2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_API_BASE_URL=https://habit-tracker-rest-api.onrender.com
```

For local development:
```env
REACT_APP_API_BASE_URL=http://localhost:4000
```

## 🎮 Running the App

### Development Mode
```bash
yarn start
# or
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build
```bash
yarn build
# or
npm run build
```

### Run Tests
```bash
yarn test
# or
npm test
```

## 🔌 Backend API

This frontend connects to the Habit Tracker REST API:
- **Production**: https://habit-tracker-rest-api.onrender.com
- **API Base Path**: `/api/habit-tracker`

### Available Endpoints

- `GET /categories` - List all categories
- `GET /category-translations` - List category translations
- `GET /habits` - List all habits
- `POST /habits` - Create a new habit
- `PUT /habits/:id` - Update a habit
- `DELETE /habits/:id` - Delete a habit
- `GET /habit-translations` - List habit translations (with pagination, search, filtering)
- `POST /habit-translations` - Create habit translation
- `GET /users` - List users
- `GET /user-habits` - List user's habits
- `POST /user-habits` - Add habit to user's list
- `PUT /user-habits/:id` - Update user habit

All endpoints require Auth0 authentication with Bearer token.

## 📚 API Usage

See [API_INTEGRATION.md](./API_INTEGRATION.md) for detailed API integration documentation and usage examples.

### Quick Example

```javascript
import { useFetchHabitsQuery, useCreateUserHabitMutation } from './redux/services/habitsService';

function MyComponent() {
  // Fetch habits
  const { data, isLoading, error } = useFetchHabitsQuery();
  
  // Create user habit
  const [createUserHabit] = useCreateUserHabitMutation();
  
  const handleAddHabit = async () => {
    await createUserHabit({
      habitId: "habit_id_here",
      userId: "user_id_here",
      selectedDays: "1,2,3,4,5",
      anytime: 1,
      morning: 1,
      afternoon: 0,
      evening: 0,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30*24*60*60*1000).toISOString(),
      streak: 0
    });
  };
  
  return <div>...</div>;
}
```

## 🔐 Authentication

The app uses Auth0 for authentication. All API requests automatically include the Auth0 Bearer token in the Authorization header.

The `useAuth0Token` hook handles:
- Token retrieval
- Token storage in localStorage
- Automatic token injection in API calls

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── block-components/ # Basic UI blocks (NES components)
│   ├── composite-components/ # Combined components
│   └── domain-components/ # Business logic components
├── hooks/               # Custom React hooks
│   ├── domain-hooks/    # Domain-specific hooks (habits, etc.)
│   └── useAuth0Token.js # Auth0 token management
├── page-containers/     # Page-level components
│   ├── AppRoot/
│   ├── Categories/
│   ├── Habits/
│   ├── History/
│   ├── Home/
│   ├── NewHabit/
│   └── Settings/
├── redux/              # Redux store and services
│   ├── store.js
│   └── services/
│       └── habitsService.js # RTK Query API
├── utils/              # Utility functions
│   ├── client-request.js
│   ├── constants.js
│   └── env-vars.js
└── examples/           # Usage examples
    └── APIUsageExamples.jsx
```

## 🎨 Styling

The app uses NES.css for a retro 8-bit gaming aesthetic. Custom styles are in component-specific CSS files and `App.css`.

## 🧪 Testing

```bash
yarn test
```

Tests use:
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event

## 🚢 Deployment

Build the production version:
```bash
yarn build
```

The optimized build will be in the `build/` folder, ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_BASE_URL` | Backend API base URL | `https://habit-tracker-rest-api.onrender.com` |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

---

## Learn More About Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
