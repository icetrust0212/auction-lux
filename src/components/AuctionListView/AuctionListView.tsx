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
  },
  {
    type:  AuctionState.ACTIVE,
    title: 'active auctions',
  },
  {
    type:  AuctionState.READY,
    title: 'upcoming auctions',
  }
];

const AuctionListView = (props: PropsType) => {
  const [currentAuctionState, setCurrentAuctionState] = useState(AuctionState.ACTIVE);
  return (
    <>
      <div className="auction-view-header mt-5">
        <ul className="list-group list-group-horizontal">
          {auction_titles.map(item => {
            return (
              <li className={"auction-header-item capitalize list-group-item size-extremely-large" + (item.type === currentAuctionState ? ' active' : '')}>{item.title}</li>
            )
          })
          }
        </ul>
      </div>
      <div className="auction-view-content mt-5">
        <AuctionList items={products} />
      </div>
    </>
  )
}

interface PropsType {

}

export default AuctionListView;