import React, { useEffect } from 'react';
import { Route } from 'wouter';
import { useAuth0 } from '@auth0/auth0-react';

/* ----------------------------- Page Components ---------------------------- */
import Home from '../Home/Home';
import Categories from '../Categories/Categories';
import Habits from '../Habits/Habits';
import History from '../History/History';
import Settings from '../Settings/Settings';
import NewHabit from '../NewHabit/NewHabit';

import NavBoard from '../../components/composite-components/NavBoard/NavBoard';

/* ------------------------------- CSS Imports ------------------------------ */
import './App.css';

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  return (
    isAuthenticated && (
      <div className="App">
        <Route path="/">
          {() => (
            <div>
              <Home />
              <NavBoard checked="habits" />
            </div>
          )}
        </Route>
        <Route path="/history">
          {() => (
            <div>
              <History />
              <NavBoard checked="history" />
            </div>
          )}
        </Route>
        <Route path="/settings">
          {() => (
            <div>
              <Settings />
              <NavBoard checked="settings" />
            </div>
          )}
        </Route>
        <Route
          path="/categories"
          component={Categories}
        />
        <Route
          path="/habits/:category"
          component={Habits}
        />
        <Route
          path="/new"
          component={NewHabit}
        />
      </div>
    )
  );
}

export default App;
