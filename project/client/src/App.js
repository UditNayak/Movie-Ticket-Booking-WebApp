import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Partner from './pages/Partner';
import BookShow from './pages/BookShow';
import SingleMovie from './pages/SingleMovie';
import Forget from './pages/Forget';
import Reset from './pages/Reset';
import Unauthorized from './pages/Unauthorized'; // Ensure this is correctly imported
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  const { loading } = useSelector((state) => state.loader);

  return (
    <div className="App">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute allowedRoles={['admin', 'partner', 'user']}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={['admin', 'partner', 'user']}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partner"
            element={
              <ProtectedRoute allowedRoles={['partner']}>
                <Partner />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute allowedRoles={['admin', 'partner', 'user']}>
                <SingleMovie />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book-show/:id"
            element={
              <ProtectedRoute allowedRoles={['admin', 'partner', 'user']}>
                <BookShow />
              </ProtectedRoute>
            }
          />
          <Route
            path="/unauthorized"
            element={<Unauthorized />} // Unauthorized access route
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
