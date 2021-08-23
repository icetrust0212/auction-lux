import { Button, Col, Row } from "react-bootstrap";
import { BellFill, ChatSquareDotsFill, Share } from "react-bootstrap-icons";
import { AuctionProduct, AuctionState } from "../../static/interfaces/AuctionProduct";
import OnboardingButton from "../common/OnboardingButton/OnboardingButton";
import './auctionItem.css';
import Countdown from 'react-countdown';
import { getFormatedDate, getRegularCurrency } from "../../utils/utils";

const AuctionItem = ({item}: PropsType) => {
    return (
        <Row className="auction-item p-3">
            <Col md={6} className="auction-image">
                <img src={item.thumbnail} alt="products" />
            </Col>
            <Col md={3} className="auction-detail d-flex">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <label className="title size-medium color-primary text-start">{item.title}</label>
                    <span className="price size-medium color-light mt-3 text-start">
                        Max Retail Value: {getRegularCurrency(item.max_retail_price)}
                    </span>
                </div>
                <div className="br-light-el" style={{marginLeft: '20px'}}></div>
            </Col>
            <Col md={3} className="auction-detail">
                <div className="d-felx-column text-start">
                    {
                        item.state === AuctionState.READY ? (
                            <>
                                <label htmlFor="" className="color-black header size-small text-start">Auction Starts: </label>
                                <h4 className="size-large color-primary">{getFormatedDate(item.start_time)}</h4>
                                <p className="detail color-light size-extremely-small">This auction will automatically start when {item.buy_in_limit} buy ins activated</p>
                            </>
                        ) : (
                            <>
                                <label htmlFor="" className="color-black header size-small text-start">Time Remaining: </label>
                                <h3 className="size-large color-primary">
                                  {<Countdown date={item.end_time} />}
                                </h3>
                                <p className="description size-small color-dark capitalize">highest bidder: <br/><span className="color-primary size-middle uppercase">{item.highest_bidder}</span> with <span className="color-primary size-middle">{item.bid_count} entries</span> </p>
                            </>
                        )
                    }
                   
                    <div className="d-flex justify-content-between mt-auto">
                        <div className="w-45">
                            {
                                item.state === AuctionState.READY ? (
                                    <OnboardingButton>Buy-in Early</OnboardingButton>
                                ): (
                                    <OnboardingButton>Enter To Win</OnboardingButton>
                                )
                            }
                        </div>
                        <div className="w-45">
                            <OnboardingButton>Item Info</OnboardingButton>
                        </div>
                    </div>
                    <div className="d-flex social-wrapper">
                        <span className="color-dark size-small">{item.current_buy_in * 100 / item.buy_in_limit}% activated</span>
                        <ChatSquareDotsFill color='var(--text-color-lighter)' size={20} style={{marginRight: "12px", marginLeft: "auto"}}/>
                        <BellFill color='var(--text-color-light)' size={20} style={{marginRight: "12px"}}/>
                        <Share color='var(--text-color-light)'size={20} style={{marginRight: "12px"}}/>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

interface PropsType {
    item: AuctionProduct
}

export default AuctionItem;