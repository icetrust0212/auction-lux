import './home.css'
import { useDispatch } from 'react-redux';
import Layout from '../Layout';
import AuctionViewHome from '../../components/AuctionViewHome/AuctionViewHome';
import { Container } from 'react-bootstrap';
import { products } from '../../static/products';
import AuctionItem from '../../components/AuctionItem/AuctionItem';

const Home = (props: any) => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="wrapper">
       <AuctionViewHome item={products[0]}/>
       <div className="upcomming-auctions-layout">
          <h3 className="title color-dark m-5 size-extremely-large">Auctions</h3>
          <Container>
            {
              products.map(auction => {
                return (
                  <div className="mb-4">
                    <AuctionItem item={auction} key={auction.id} />
                  </div>
                )
              })
            }
          </Container>
       </div>
      </div>
    </Layout>
  )
}

export default Home