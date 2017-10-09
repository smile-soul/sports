import NotFound from './views/404'
import Signup from './views/Signup'
import Login from './views/Login'
import Home from './views/Home'

const routes = [
  {
    path: '/login',
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: '/signup',
    component: Signup,
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    meta: { requiresAuth: false },
    component: NotFound,
  },
]

export default routes

