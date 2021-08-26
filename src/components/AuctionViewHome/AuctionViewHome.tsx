import { Col, Container, Row } from "react-bootstrap";
import { BellFill, ChatDots, ChatSquareDotsFill, Share, ShareFill } from "react-bootstrap-icons";
import { AuctionProduct } from "../../static/interfaces/AuctionProduct";
import { calcRemainingTime, getRegularCurrency } from "../../utils/utils";
import Carosuel from "../Carosuel/Carosuel";
import OnboardingButton from "../common/OnboardingButton/OnboardingButton";
import './auctionViewHome.css';
import Countdown from 'react-countdown';
//@ts-ignore
import { Magnifier, GlassMagnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from "react-image-magnifiers";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

const AuctionViewHome = ({ item }: PropsType) => {
  const { url, path, params } = useRouteMatch();
  const location = useLocation();
  const activeColor = 'var(--secondary-color)';
  const inActiveColor = 'var(--text-color-lighter)';
  return (
    <div className="auction-view-home-container">
      <Row className="top-row">
        <Col md={8} className="main-product-view">
          <GlassMagnifier
            className="magnifier-container"
            imageSrc={item.thumbnail}
            imageAlt="Example"
            magnifierSize={'30%'}
            largeImageSrc={item.thumbnail_big ? item.thumbnail_big : item.thumbnail} // Optional
          />
        </Col>
        <Row className="bottom-row responsive-visible">
          <Col md={4} >
            <h3 className="title size-large color-primary">{item.title}</h3>
            <h4 className="price size-medium color-light">Max Retail Value: {getRegularCurrency(item.max_retail_price)}</h4>
          </Col>

          <Col md={8}>
            <Carosuel autoPlay={true} itemClass="carousel-item-class">
              {
                item.images.map((img, index) => (
                  <div className="carosuel-item" key={index}>
                    <img src={img.src} key={img.id} />
                  </div>
                ))
              }
            </Carosuel>
          </Col>
        </Row>
        <Col md={4} className="main-product-detail d-flex-column justify-content-between align-items-between">
          <p>
            <label className="description color-dark size-middle capitalize">{'Time Remaining:'}</label>
            <h3 className="size-extremely-large color-primary">
              {<Countdown date={item.end_time} />}
            </h3>
          </p>
          <p className="description size-medium color-dark capitalize">highest bidder: <br /><span className="color-primary size-middle uppercase">{item.highest_bidder}</span> with <span className="color-primary size-middle">{item.bid_count} entries</span> </p>
          <p className="color-dark size-medium text-bold capitalize">
            <strong>whildcard:</strong> <span className="d-line-block pe-2 wildcard br-dark-1 color-primary size-middle">{getRegularCurrency(item.wild_card)}</span>
            {' '}<strong>Lux<sup>2</sup></strong>{' '}<span className="color-primary size-middle">{getRegularCurrency(item.lux)}</span>
            <span className="size-extremely-small color-light responsive-none">Every entry drasitically increases your changes of winning . Number of entries is unlimited</span>
          </p>

          <p className="mt-4 d-flex justify-content-between">
            <div className="w-40">
              <OnboardingButton>Enter to Win</OnboardingButton>
            </div>
            <div className="w-40">
              <OnboardingButton>Item Info</OnboardingButton>
            </div>
          </p>

        </Col>
      </Row>
      <Row className="bottom-row responsive-none">
        <Col md={4} >
          <h3 className="title size-large color-primary">{item.title}</h3>
          <h4 className="price size-medium color-light">Max Retail Value: {getRegularCurrency(item.max_retail_price)}</h4>
        </Col>

        <Col md={8}>
          <Carosuel autoPlay={true} itemClass="carousel-item-class">
            {
              item.images.map(img => (
                <div className="carosuel-item">
                  <img src={img.src} key={img.id} />
                </div>
              ))
            }
          </Carosuel>
        </Col>
      </Row>
      <Row className="social-row">
        <div className="d-flex social-wrapper">
          <Link to={`${url}/comments`}><ChatSquareDotsFill color={location.pathname === `${url}/comments` ? activeColor : inActiveColor} size={24} style={{ marginRight: "12px" }} /></Link>
          <Link to={`${url}/bidders`}><BellFill color={location.pathname === `${url}/bidders` ? activeColor : inActiveColor} size={24} style={{ marginRight: "12px" }} /></Link>
          <Link to={`${url}/share`}><Share color={location.pathname === `${url}/share` ? activeColor : inActiveColor} size={24} style={{ marginRight: "12px" }} /></Link>
        </div>
      </Row>
    </div>
  )
}

interface PropsType {
  item: AuctionProduct
}

export default AuctionViewHome;