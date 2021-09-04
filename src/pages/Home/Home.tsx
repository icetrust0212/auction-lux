import './home.css'
import { useDispatch } from 'react-redux';
import Layout from '../Layout';
import AuctionViewHome from '../../components/AuctionViewHome/AuctionViewHome';
import { Container } from 'react-bootstrap';
import { products } from '../../static/products';
import { Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import { RouteInterface } from '../../static/interfaces/RouteInterface';
import { useState } from 'react';
import  LoginModal  from '../../components/Modals/TestModal'

const Home = (props: PropTypes) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const { url, path } = useRouteMatch();
  const handleshow = () => {
    setShow(true);
  }

  return (
    <Layout>
      <div className="wrapper">
        <button className = 'btn btn-danger' onClick={handleshow}>ShowModal</button>
        <LoginModal show = {show} onHide={()=>{setShow(false)}}/>
        <AuctionViewHome item={products[0]} />
        <div className="auctions-layout">
          <div className="w-100">
            {
              <Switch
                location={location}
              >
                {props.routes ? props.routes.map((route: RouteInterface, index: number) => {
                  console.log('router: ', route.path)
                  return (
                    <Route
                      key={index}
                      path={path + route.path}
                      component={() => <route.component {...props} routes={route.routes || []} />}
                      exact={route.exact}
                    />
                  )
                }) : ''}
              </Switch>
            }
          </div>
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