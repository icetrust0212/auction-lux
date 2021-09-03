import { useState } from "react";
import { Link, Route } from "react-router-dom";
import AuctionList from "../AuctionList/AuctionList";
import { products } from '../../static/products';
import './auctionListView.css';
import { AuctionState } from "../../static/interfaces/AuctionProduct";

const auction_titles = [
  {
    type:  AuctionState.DONE,
    title: 'past auctions',
    short: 'past'
  },
  {
    type:  AuctionState.ACTIVE,
    title: 'active auctions',
    short: 'active',
  },
  {
    type:  AuctionState.READY,
    title: 'upcoming auctions',
    short: 'upcoming'
  }
];

const AuctionListView = (props: PropsType) => {
  const [currentAuctionState, setCurrentAuctionState] = useState(AuctionState.ACTIVE);
  return (
    <>
      <div className="auction-view-header">
        <ul className="list-group list-group-horizontal responsive-none">
          {auction_titles.map((item, index) => {
            return (
              <li className={
                "auction-header-item capitalize list-group-item size-extremely-large weight-thin "
                 + (item.type === currentAuctionState ? ' active' : '')}
                 onClick={(e) => {
                   setCurrentAuctionState(item.type)
                 }}
                 key={index}>
                   {item.title}
              </li>
            )
          })
          }
        </ul>
        <ul className="list-group list-group-horizontal responsive-visible weight-thin">
          {auction_titles.map((item, index) => {
            return (
              <li className={
                "auction-header-item capitalize list-group-item size-extremely-large"
                 + (item.type === currentAuctionState ? ' active' : '')}
                 onClick={(e) => {
                   setCurrentAuctionState(item.type)
                 }}
                 key={index}>
                   {item.short}
              </li>
            )
          })
          }
        </ul>
      </div>
      <div className="auction-view-content">
        <AuctionList items={products} />
      </div>
    </>
  )
}

interface PropsType {

}

export default AuctionListView;