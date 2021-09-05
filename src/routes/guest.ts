import { RouteInterface } from '../static/interfaces/RouteInterface';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/LoginPage/LoginPage';
import home_routes from './home_routes';

export const guestRoutes:RouteInterface[] = [
  {
    path: '/register',
    redirect: '/home',
    exact : true
  },
  {
    path: '/login',
    component: LoginPage,
    exact: true
  },
  {
    path: '/',
    redirect: '/home',
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    routes: home_routes
  }
]

