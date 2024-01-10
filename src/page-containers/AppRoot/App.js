import React from 'react';
import { Route } from 'wouter';

/* ----------------------------- Page Components ---------------------------- */
import Home from '../Home/Home';
import Categories from '../Categories/Categories';
import History from '../History/History';
import Settings from '../Settings/Settings';

/* ---------------------------- Domain Components --------------------------- */
import NavBoard from '../../components/composite-components/NavBoard/NavBoard';

/* ------------------------------- CSS Imports ------------------------------ */
import './App.css';

function App() {
  return (
    <div className="App">
      <Route
        path="/"
        component={Home}
      />
      <Route
        path="/categories"
        component={Categories}
      />
      <Route
        path="/history"
        component={History}
      />
      <Route
        path="/settings"
        component={Settings}
      />
      <NavBoard />
    </div>
  );
}

export default App;
