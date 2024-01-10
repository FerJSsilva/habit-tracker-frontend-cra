import React from 'react';
import { Route } from 'wouter';

/* ----------------------------- Page Components ---------------------------- */
import Home from '../Home/Home';
import Categories from '../Categories/Categories';
import History from '../History/History';
import Settings from '../Settings/Settings';

import NavBoard from '../../components/composite-components/NavBoard/NavBoard';

/* ------------------------------- CSS Imports ------------------------------ */
import './App.css';

function App() {
  return (
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
    </div>
  );
}

export default App;
