import './home.css'
import { useDispatch } from 'react-redux';
import Layout from '../Layout';
import AuctionViewHome from '../../components/AuctionViewHome/AuctionViewHome';
import { Container } from 'react-bootstrap';
import { products } from '../../static/products';
import { Route, Switch, useLocation } from 'react-router-dom';
import { RouteInterface } from '../../static/interfaces/RouteInterface';

const Home = (props: PropTypes) => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <Layout>
      <div className="wrapper">
        <AuctionViewHome item={products[0]} />
        <div className="auctions-layout">
          <Container>
            {
              <Switch
                location={location}
              >
                {props.routes? props.routes.map((route: RouteInterface, index: number) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      component={() => <route.component {...props} routes={route.routes || []} />}
                      exact={route.exact}
                    />
                  )
                }): ''}
              </Switch>
            }
          </Container>
        </div>
      </div>
    </Layout>
  )
}

interface PropTypes {
  children?: any,
  routes?: RouteInterface[],
}

export default Home