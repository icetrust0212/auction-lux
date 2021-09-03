import Home from '../pages/Home/Home';
import LoginPage from '../pages/LoginPage/LoginPage';
import { RouteInterface } from '../static/interfaces/RouteInterface';
import home_routes from './home_routes';

export const authRoutes:RouteInterface[] = [
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
  }
]
