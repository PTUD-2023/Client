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
import Profile from './pages/Profile'
import Request from './pages/Request'
import Terms from './pages/Terms'
import Contract from './pages/Contract'
import InsuranceRegistrationForm from './components/InsuranceRegistrationForm'
import HomeHeader from './components/HomeHeader'

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
      path: '',
      element: <Home />,
      children: [
        {
          path: routes.home,
          element: <Home />
        }
      ]
    },
    {
      path: '',
      element: <Profile />,
      children: [
        {
          path: routes.profile,
          element: <Profile />
        }
      ]
    },
    {
      path: '',
      element: <Request />,
      children: [
        {
          path: routes.request,
          element: <Request />
        }
      ]
    },
    {
      path: '',
      element: <Terms />,
      children: [
        {
          path: routes.terms,
          element: <Terms />
        }
      ]
    },
    {
      path: '',
      element: <Contract />,
      children: [
        {
          path: routes.contract,
          element: <Contract />
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
