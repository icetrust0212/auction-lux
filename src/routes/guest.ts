import { RouteInterface } from '../static/interfaces/RouteInterface';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/LoginPage/LoginPage';
export const guestRoutes:RouteInterface[] = [
  {
    path: '/register',
    redirect: '/login',
    exact : true
  },
  {
    path: '/login',
    component: LoginPage,
    exact: true
  },
  {
    path: '/',
    redirect: '/login',
    exact: true,
  },
  {
    path: '/home',
    redirect: '/login',
  }
]

