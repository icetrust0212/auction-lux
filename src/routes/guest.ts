import { RouteInterface } from '../static/interfaces/RouteInterface';
import Home from '../pages/Home/Home';
import AuctionListView from '../components/AuctionListView/AuctionListView';
import home_routes from './home_routes';
const routes:RouteInterface[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    routes: home_routes
  }
]

export default routes
