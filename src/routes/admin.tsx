import Home from '../pages/Home/Home';
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import { RouteInterface } from '../static/interfaces/RouteInterface';
import home_routes from './home_routes';

export const adminRoutes:RouteInterface[] = [
  {
    path: '/',
    redirect: '/home',
    exact:true
  },
  {
    path: '/home',
    component: Home,
    routes: home_routes
  },
  {
    path: '/login',
    redirect: '/',
  },
  {
    path: '/register',
    redirect: '/',
  }
]
