import { /* Suspense, lazy,  */ useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import routes from './constants/routes'
import { AppContext } from './contexts/app.context'
/* Layout */
import MainLayout from './layouts/MainLayout'
/* Pages */
import Auth from './pages/Auth'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ConfirmAccount from './pages/ConfirmAccount'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
import FormManagement from './pages/Admin/FormManagement'

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Navigate to={routes.home} /> : <Outlet />
}

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: routes.home,
          element: <Home />
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: routes.login,
          element: <Auth />
        },
        {
          path: routes.confirmAccount,
          element: <ConfirmAccount />
        }
      ]
    },
    {
      path: routes.admin,
      element: <AdminLayout />,
      children: [
        {
          path: routes.dashboard,
          element: <Dashboard />
        },
        {
          path: routes.formManagement,
          element: <FormManagement />
        }
      ]
    },

    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}

export default useRouteElements
