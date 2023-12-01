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
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}

export default useRouteElements
