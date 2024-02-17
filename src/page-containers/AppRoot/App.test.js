import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

jest.mock('../Home/Home', () => {
  const Home = () => <div>Home Component</div>;
  Home.displayName = 'Home';
  return Home;
});

jest.mock('../History/History', () => {
  const History = () => <div>History Component</div>;
  History.displayName = 'History';
  return History;
});

jest.mock('../Settings/Settings', () => {
  const Settings = () => <div>Settings Component</div>;
  Settings.displayName = 'Settings';
  return Settings;
});

jest.mock('../Error/Error', () => {
  const Error = () => <div>Error Component</div>;
  Error.displayName = 'ErrorPage';
  return Error;
});

jest.mock('../../components/composite-components/NavBoard/NavBoard', () => {
  const NavBoard = () => <div>NavBoard Component</div>;
  NavBoard.displayName = 'NavBoard';
  return NavBoard;
});

describe('App Component', () => {
  test('The `App` function should render the `Home` and `NavBoard` components when the path is "/"', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByText('Home Component')).toBeInTheDocument();
    expect(screen.getByText('NavBoard Component')).toBeInTheDocument();
  });

  test('The `App` function should render the `History` and `NavBoard` components when the path is "/history"', () => {
    window.history.pushState({}, '', '/history');
    render(<App />);
    expect(screen.getByText('History Component')).toBeInTheDocument();
    expect(screen.getByText('NavBoard Component')).toBeInTheDocument();
  });

  test('The `App` function should render the `Settings` and `NavBoard` components when the path is "/settings"', () => {
    window.history.pushState({}, '', '/settings');
    render(<App />);
    expect(screen.getByText('Settings Component')).toBeInTheDocument();
    expect(screen.getByText('NavBoard Component')).toBeInTheDocument();
  });

  test('The `App` function should render the `Home` and `NavBoard` components when the path is "/"', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByText('Home Component')).toBeInTheDocument();
    expect(screen.getByText('NavBoard Component')).toBeInTheDocument();
  });
});
