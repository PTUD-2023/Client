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
import Profile from './pages/User/UserProfile'
import UserLayout from './layouts/UserLayout'
import InsuranceService from './pages/InsuranceService'
import Request from './pages/Request'

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Navigate to={routes.home} /> : <Outlet />
}

function useRouteElements() {
  const routeElements = useRoutes([
    /* Trang chủ */
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: routes.home,
          element: <Home />
        },
        {
          path: routes.service,
          element: <InsuranceService />
        }
      ]
    },
    /* đăng nhập, đăng ký, xác thực email, quên mật khẩu */
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
    /* role admin */
    {
      path: '',
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
    /* Role user: thông tin, quản lý các hợp đồng, đơn đăng ký */
    {
      path: '',
      element: <UserLayout />,
      children: [
        {
          path: routes.profile,
          element: <Profile />
        }
      ]
    },
    {
      path: '',
      element: <Request/>,
      children: [
        {
          path: routes.request,
          element: <Request />
        }
      ]
    },
    /* page not found */
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}

export default useRouteElements
