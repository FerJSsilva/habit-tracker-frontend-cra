/**
 * Example component demonstrating API integration usage
 * This file shows various patterns for using the Habit Tracker API
 */

import React, { useState } from 'react';
import {
  useFetchHabitsQuery,
  useFetchCategoriesQuery,
  useCreateUserHabitMutation,
  useFetchUserHabitsQuery,
} from '../redux/services/habitsService';

/**
 * Example 1: Display all habits
 */
export const HabitsList = () => {
  const { data, isLoading, error } = useFetchHabitsQuery();

  if (isLoading) return <div>Loading habits...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { ids, entities } = data;

  return (
    <div>
      <h2>All Habits</h2>
      <ul>
        {ids.map((id) => (
          <li key={id}>{entities[id].identifier}</li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Example 2: Display categories
 */
export const CategoriesList = () => {
  const { data: categories, isLoading, error } = useFetchCategoriesQuery();

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories?.map((category) => (
          <li key={category._id}>{category.name || category.identifier}</li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Example 3: Add a habit to user's list
 */
export const AddUserHabitForm = ({ habitId, userId }) => {
  const [createUserHabit, { isLoading, error, isSuccess }] =
    useCreateUserHabitMutation();

  const [formData, setFormData] = useState({
    selectedDays: '1,2,3,4,5', // Monday to Friday
    anytime: 1,
    morning: 1,
    afternoon: 0,
    evening: 0,
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    streak: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserHabit({
        habitId,
        userId,
        ...formData,
      }).unwrap();
      alert('Habit added successfully!');
    } catch (err) {
      console.error('Failed to add habit:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Habit to Your List</h2>

      <label>
        Days of Week (comma-separated 0-6):
        <input
          type="text"
          value={formData.selectedDays}
          onChange={(e) =>
            setFormData({ ...formData, selectedDays: e.target.value })
          }
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={formData.anytime === 1}
          onChange={(e) =>
            setFormData({ ...formData, anytime: e.target.checked ? 1 : 0 })
          }
        />
        Anytime
      </label>

      <label>
        <input
          type="checkbox"
          checked={formData.morning === 1}
          onChange={(e) =>
            setFormData({ ...formData, morning: e.target.checked ? 1 : 0 })
          }
        />
        Morning
      </label>

      <label>
        <input
          type="checkbox"
          checked={formData.afternoon === 1}
          onChange={(e) =>
            setFormData({ ...formData, afternoon: e.target.checked ? 1 : 0 })
          }
        />
        Afternoon
      </label>

      <label>
        <input
          type="checkbox"
          checked={formData.evening === 1}
          onChange={(e) =>
            setFormData({ ...formData, evening: e.target.checked ? 1 : 0 })
          }
        />
        Evening
      </label>

      <button
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : 'Add Habit'}
      </button>

      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
      {isSuccess && <div style={{ color: 'green' }}>Habit added!</div>}
    </form>
  );
};

/**
 * Example 4: Display user's habits with pagination
 */
export const MyHabits = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, error } = useFetchUserHabitsQuery({ page, limit });

  if (isLoading) return <div>Loading your habits...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>My Habits</h2>
      <ul>
        {data?.map((userHabit) => (
          <li key={userHabit._id}>
            Habit ID: {userHabit.habitId} - Streak: {userHabit.streak}
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span> Page {page} </span>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
};

/**
 * Example 5: Combined view with categories and habits
 */
export const HabitsExplorer = () => {
  const { data: categories } = useFetchCategoriesQuery();
  const { data: habits } = useFetchHabitsQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!categories || !habits) return <div>Loading...</div>;

  const { ids, entities } = habits;
  const filteredHabits = selectedCategory
    ? ids.filter((id) => entities[id].categoryId === selectedCategory._id)
    : ids;

  return (
    <div>
      <h2>Explore Habits</h2>

      <div>
        <h3>Categories</h3>
        <button onClick={() => setSelectedCategory(null)}>All</button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => setSelectedCategory(category)}
            style={{
              fontWeight:
                selectedCategory?._id === category._id ? 'bold' : 'normal',
            }}
          >
            {category.name || category.identifier}
          </button>
        ))}
      </div>

      <div>
        <h3>
          Habits
          {selectedCategory && ` in ${selectedCategory.name}`}
        </h3>
        <ul>
          {filteredHabits.map((id) => (
            <li key={id}>{entities[id].identifier}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
