import { RouteInterface } from '../static/interfaces/RouteInterface';
import Home from '../pages/Home/Home';
import home_routes from './home_routes';
import Test from '../components/Test';
const routes:RouteInterface[] = [
  {
    path: '/',
    redirect: '/home',
    exact:true
  },
  {
    path: '/home',
    component: Home,
    routes: home_routes
  }

]

export default routes
