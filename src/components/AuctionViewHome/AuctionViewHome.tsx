import { Col, Container, Row } from "react-bootstrap";
import { BellFill, ChatDots, ChatSquareDotsFill, Share, ShareFill } from "react-bootstrap-icons";
import { AuctionProduct } from "../../static/interfaces/AuctionProduct";
import { calcRemainingTime } from "../../utils/utils";
import Carosuel from "../Carosuel/Carosuel";
import OnboardingButton from "../common/OnboardingButton/OnboardingButton";
import './auctionViewHome.css';
import Countdown from 'react-countdown';
//@ts-ignore
import {Magnifier,GlassMagnifier,MOUSE_ACTIVATION,TOUCH_ACTIVATION} from "react-image-magnifiers";

const AuctionViewHome = ({ item }: PropsType) => {

  return (
    <div className="auction-view-home-container">
      <Row className="top-row">
        <Col md={8} className="main-product-view br-light-1">
          <GlassMagnifier
            className="magnifier-container"
            imageSrc={item.thumbnail}
            imageAlt="Example"
            magnifierSize={'30%'}
            largeImageSrc={item.thumbnail_big ? item.thumbnail_big : item.thumbnail} // Optional
          />
        </Col>
        <Col md={4} className="main-product-detail d-flex-column justify-content-between align-items-between">
          <p>
            <label className="description color-dark size-middle capitalize">{'Time Remaining:'}</label>
            <h3 className="size-extremely-large color-primary">
              {<Countdown date={item.end_time} />}
            </h3>
          </p>
          <p className="description size-medium color-dark capitalize">highest bidder: <br /><span className="color-primary size-middle uppercase">{item.highest_bidder}</span> with <span className="color-primary size-middle">{item.bid_count} entries</span> </p>
          <p className="color-dark size-medium text-bold capitalize">
            <strong>whildcard:</strong> <span className="d-line-block pe-2 wildcard br-dark-1 color-primary size-middle">${item.wild_card}</span>
            {' '}<strong>Lux<sup>2</sup></strong>{' '}<span className="color-primary size-middle">${item.lux}</span>
            <span className="d-block  size-extremely-small color-light">Every entry drasitically increases your changes of winning . Number of entries is unlimited</span>
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
      <Row className="bottom-row">
        <Col md={4} className="d-block">
          <h3 className="title size-large color-primary">{item.title}</h3>
          <h4 className="price size-small color-light">Max Retail Value: ${item.max_retail_price}</h4>
        </Col>

        <Col md={8}>
          <Carosuel>
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
      <Row className="social-row mt-3">
        <div className="d-flex social-wrapper">
          <ChatSquareDotsFill color='var(--text-color-lighter)' size={24} style={{ marginRight: "12px" }} />
          <BellFill color='var(--text-color-light)' size={24} style={{ marginRight: "12px" }} />
          <Share color='var(--text-color-light)' size={24} style={{ marginRight: "12px" }} />
        </div>
      </Row>
    </div>
  )
}

interface PropsType {
  item: AuctionProduct
}

export default AuctionViewHome;