import NotFound from './views/404'
import Signup from './views/Signup'
import Login from './views/Login'
import Home from './views/Home'
import Overview from './views/Overview'
import BaseInfo from './views/BaseInfo'
import SportsRules from './views/SportsRules'
import SportsItems from './views/SportsItems'
import SportsArguments from './views/SportsArguments'
import AllocateNumber from './views/AllocateNumber'


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
      { path: 'sports_rules', component: SportsRules },
      { path: 'sports_items', component: SportsItems },
      { path: 'sports_arguments', component: SportsArguments },
      { path: 'allocate_number', component: AllocateNumber },
    ],
  }, {
    path: '*',
    meta: { requiresAuth: false },
    component: NotFound,
  },
]

export default routes
