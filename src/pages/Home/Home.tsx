import './home.css'
import { useDispatch } from 'react-redux';
import Layout from '../Layout';
import AuctionViewHome from '../../components/AuctionViewHome/AuctionViewHome';
import { Container } from 'react-bootstrap';
import { products } from '../../static/products';
import { Route, Switch, useLocation } from 'react-router-dom';
import { RouteInterface } from '../../static/interfaces/RouteInterface';
import { useState } from 'react';
import { useEffect } from 'react';
// @ts-ignore
import fileGetContents from 'file-get-contents';

const Home = (props: PropTypes) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [img, setImg] = useState('');
  useEffect(() => {
    let url = 'https://scontent-lcy1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/239634326_1003199223800993_5313826467216956790_n.jpg?_nc_ht=scontent-lcy1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=qOwPLyyEf34AX-rYBIK&edm=APU89FABAAAA&ccb=7-4&oh=e837950328811aec19156ff12142b458&oe=6127481F&_nc_sid=86f79a';
    fileGetContents(url).then((json: any) => {
      const image = JSON.parse(json);
      setImg(image)
      console.log(`Name of first pokemon is ${image}`);

    }).catch((err: any) => {
      console.log(`Unable to get content from PokeAPI. Reason: ${err.message}`);
    });
  }, [])
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
                {props.routes ? props.routes.map((route: RouteInterface, index: number) => {
                  console.log('router: ', route.path)
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      component={() => <route.component {...props} routes={route.routes || []} />}
                      exact={route.exact}
                    />
                  )
                }) : ''}
              </Switch>
            }
          </Container>
        </div>
      </div>
            <img src={img} alt="img" />
    </Layout>
  )
}

interface PropTypes {
  children?: any,
  routes?: RouteInterface[],
}

export default Home