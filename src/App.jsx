import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ErrorBoundary from './pages/ErrorBoundary'

import './App.css'

function AppRoutes() {
  const routes = useRoutes([
    { path: '/login', element: <LoginPage /> },
    { path: '/admin', element: <AdminPage /> },
    { path: '/', element: <HomePage /> }
  ])

  return routes
}

function App() {
  return (
    <ErrorBoundary>
      <Router basename="/beto-service">
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  )
}

export default App

