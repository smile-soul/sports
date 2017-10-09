import NotFound from './views/404'
import Signup from './views/Signup'
import Login from './views/Login'
import Home from './views/Home'
import Overview from './views/Overview'
import BaseInfo from './views/BaseInfo'


const routes = [
  {
    path: '/signup',
    component: Signup,
    meta: { requiresAuth: false },
  }, {
    path: '/login',
    component: Login,
    meta: { requiresAuth: false },
  }, {
    path: '/',
    component: Home,
    children: [
      { path: '', component: Overview, alias: 'overview' },
      { path: 'base_info', component: BaseInfo },
    ],
  }, {
    path: '*',
    meta: { requiresAuth: false },
    component: NotFound,
  },
]

export default routes
