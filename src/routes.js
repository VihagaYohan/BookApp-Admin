import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Books from './pages/Books/Books';
import User from './pages/Users/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';

import DashboardApp from './pages/DashboardApp';
import DeliveryPending from './pages/DeliveryPending/DeliveryPending';
import Orders from './pages/Orders/Orders';
import ViewBook from './pages/Books/ViewBook';
import CreateBook from './pages/Books/CreateBook';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'books', element: <Books /> },
        { path: 'create-book', element: <CreateBook /> },
        { path: 'view-book/:id', element: <ViewBook /> },
        { path: 'orders', element: <Orders /> },
        { path: 'pending-request', element: <DeliveryPending /> },
        { path: 'blog', element: <Books /> },
        {},
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
