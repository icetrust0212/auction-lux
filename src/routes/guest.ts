import { RouteInterface } from '../static/interfaces/RouteInterface';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/LoginPage/LoginPage';
import home_routes from './home_routes';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

export const guestRoutes:RouteInterface[] = [
  {
    path: '/register',
    component: SignUpPage,
    exact : true
  },
  {
    path: '/login',
    component: SignInPage,
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

