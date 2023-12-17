const routes = {
  home: '/',
  login: '/login',
  confirmAccount: '/confirm/:email',
  admin: '/admin',
  dashboard: '/admin/dashboard'
} as const

export default routes
