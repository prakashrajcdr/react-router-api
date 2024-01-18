import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import User from './components/User';
import { useEffect, useState } from 'react';
import ApiSample from './components/ApiSample';
import ReduxSample from './components/ReduxSample';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  return (
    <Provider store={store}>
      <ReduxSample />
      <ApiSample />
    </Provider>
  );
}

export default App;
