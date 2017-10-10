import NotFound from './views/404'
import Signup from './views/Signup'
import Login from './views/Login'
import Home from './views/Home'
import Overview from './views/Overview'
import BaseInfo from './views/BaseInfo'
import Rules from './views/Rules'
import SportsItem from './views/SportsItem'
import Arguments from './views/Arguments'
import Allocation from './views/Allocation'


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
      { path: 'rules', component: Rules },
      { path: 'sports_item', component: SportsItem },
      { path: 'arguments', component: Arguments },
      { path: 'allocation', component: Allocation },
    ],
  }, {
    path: '*',
    meta: { requiresAuth: false },
    component: NotFound,
  },
]

export default routes
