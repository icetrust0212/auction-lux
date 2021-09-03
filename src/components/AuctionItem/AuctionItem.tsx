import { Button, Col, Row } from "react-bootstrap";
import { Bell, BellFill, ChatSquareDots, ChatSquareDotsFill, CheckSquare, Share } from "react-bootstrap-icons";
import { AuctionProduct, AuctionState } from "../../static/interfaces/AuctionProduct";
import OnboardingButton from "../common/OnboardingButton/OnboardingButton";
import './auctionItem.css';
import Countdown from 'react-countdown';
import { getDiff, getFormatedDate, getRegularCurrency } from "../../utils/utils";

const AuctionItem = ({ item }: PropsType) => {
    return (
        <Row className={"auction-item p-3 " }>
            <Col md={6} className={"auction-image" + (item.state === AuctionState.DONE ? ' gray' : '')} >
                <img src={item.thumbnail} alt="products" />
            </Col>
            <Col md={3} className={"auction-detail d-flex"+ (item.state === AuctionState.DONE ? ' gray' : '')}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <label className="title size-medium color-primary text-start weight-light">{item.title}</label>
                    <span className="price size-medium color-light text-start weight-thin">
                        Max Retail Value: {getRegularCurrency(item.max_retail_price)}
                    </span>
                </div>
                <div className="br-light-el responsive-none" style={{ marginLeft: '20px' }}></div>
            </Col>
            <Col md={3} className="auction-detail h-100">
                <div className="d-flex flex-column text-start h-100">
                    {
                        item.state === AuctionState.READY && (
                            <>
                                <label htmlFor="" className="color-black header size-small text-start weight-light">Auction Starts: </label>
                                <h4 className="size-large color-primary weight-light">{getFormatedDate(item.start_time)}</h4>
                                <p className="detail color-light size-extremely-small weight-thin">This auction will automatically start when {item.buy_in_limit} buy ins activated</p>
                            </>
                        ) ||
                        item.state === AuctionState.ACTIVE && (
                            <>
                                <label htmlFor="" className="color-black header size-small text-start weight-light">Time Remaining: </label>
                                <h3 className="size-large color-primary weight-light">
                                    {<Countdown date={item.end_time} />}
                                </h3>
                                <p className="description size-small color-dark capitalize weight-light">highest bidder: <br /><span className="color-primary size-middle uppercase">{item.highest_bidder}</span> with <span className="color-primary size-middle">{item.bid_count} entries</span> </p>
                            </>
                        ) ||
                        item.state === AuctionState.DONE && (
                            <>
                                <label htmlFor="" className="color-secondary header size-small text-start weight-light">Auction Ended: </label>
                                <h3 className="size-large color-dark weight-light">
                                    {getDiff(item.end_time)}
                                </h3>
                            </>
                        )
                    }
                    {
                        item.state !== AuctionState.DONE && (
                            <>
                                <div className="d-flex justify-content-between mt-auto">
                                    <div className="w-45">
                                        {
                                            item.state === AuctionState.READY ? (
                                                <OnboardingButton>Buy-in Early</OnboardingButton>
                                            ) : (
                                                <OnboardingButton>Enter To Win</OnboardingButton>
                                            )
                                        }
                                    </div>
                                    <div className="w-45">
                                        <OnboardingButton>Item Info</OnboardingButton>
                                    </div>
                                </div>
                                <div className="d-flex social-wrapper">
                                    <span className="color-dark size-small weight-light">{item.current_buy_in * 100 / item.buy_in_limit}% activated</span>
                                    <ChatSquareDotsFill color='var(--text-color-lighter)' size={20} style={{ marginRight: "12px", marginLeft: "auto" }} />
                                    <BellFill color='var(--text-color-light)' size={20} style={{ marginRight: "12px" }} />
                                    <Share color='var(--text-color-light)' size={20} style={{ marginRight: "12px" }} />
                                </div>
                            </>
                        ) ||
                        item.state === AuctionState.DONE && (
                            <div className={"media mt-2 d-flex weight-light" + (item.state === AuctionState.DONE ? ' gray' : '')}>
                                <img className="mr-3 auction-winner-avatar" src={item.winner?.avatar} alt="winner avatar" />
                                <div className="media-body auction-end-layout">
                                    <h5 className="mt-0 size-small color-black">{`Item Won By: ${item.winner?.name} with ${item.winner?.point} Entries`}</h5>
                                    <div className="tools-layout d-flex flex-column">
                                        <span className="d-flex">
                                            <CheckSquare color='var(--text-color-lighter)' size={18} style={{ marginRight: "12px" }} />
                                            <span className="color-light size-tiny me-1 desc">Vote to auction this item again</span>
                                        </span>
                                        <span className="d-flex mt-1">
                                            <Bell color='var(--text-color-light)' size={18} style={{ marginRight: "12px" }} />
                                            <span className="color-light size-tiny me-1 desc">Alert me if this item is auctined again</span>
                                        </span>
                                        <span className="d-flex mt-1">
                                            <ChatSquareDots color='var(--text-color-light)' size={18} style={{ marginRight: "12px" }} />
                                            <span className="color-light size-tiny me-1 desc">See comments</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Col>
        </Row>
    );
}

interface PropsType {
    item: AuctionProduct
}

export default AuctionItem;