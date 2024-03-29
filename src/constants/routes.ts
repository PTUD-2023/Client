const routes = {
  home: '/',
  login: '/login',
  confirmAccount: '/confirm/:email',
  service: '/service',
  support: '/support',
  admin: '/admin',
  dashboard: '/admin/dashboard',
  formManagement: '/admin/form-management',
  accountManagement: '/admin/account-management',
  insurancePackageManagement: '/admin/insurance-package-management',
  contractManagemet: '/admin/contract-management',
  user: '/user',
  profile: '/user/profile',
  request: '/request',
} as const

export default routes
