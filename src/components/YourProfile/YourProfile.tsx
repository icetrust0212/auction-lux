import { PencilSquare, Gear, Basket, PiggyBank, BarChartFill, ChatDotsFill, Heart, CreditCard2Back, PlusLg, ArrowBarUp, CurrencyDollar } from 'react-bootstrap-icons'

const YourProfile = (/*data:propTypes*/) => {
  return(
  <>
    <div className='row'>
      <span className='front-icon'>
        <Basket size='24' />
      </span>
      <label className='label-content'>
        Cars, Beauty, Events, Music, Pets, Sports, Style and Fashion, Techonolgy and Computingm Travel
      </label>
      <span className='back-icons'>
        <Gear size='24' /> <PencilSquare size='24' />
      </span>
    </div>
    <div className='row'>
      <span className='front-icon'>
        <PiggyBank size='24' />
      </span>
      <label className='label-content'>
        $132.00 banked and available | $20.00 pending
      </label>
      <span className='back-icons'>
        <Gear size='24' /> <PencilSquare size='24' />
      </span>
    </div>
    <div className='row'>
      <span className='front-icon'>
        <BarChartFill size='24' />
      </span>
      <label className='label-content'>
        2 Auctions won, Total Win Value: $9,653. 10
      </label>
      <span className='back-icons'>
        <Gear size='24' /> <PencilSquare size='24' />
      </span>
    </div>
    <div className='row'>
      <span className='front-icon'>
        <ChatDotsFill size='24' />
      </span>
      <label className='label-content'>
        12 Messages | 2 Unread messages | 8 Discarded messages | 2 saved messages
      </label>
      <span className='back-icons'>
        <Gear size='24' /> <PencilSquare size='24' />
      </span>
    </div>
    <div className='row'>
      <span className='front-icon'>
        <Heart size='24' />
      </span>
      <label className='label-content'>
        21 Shared events | 8 Auctions | 13 Wildcard
      </label>
      <span className='back-icons'>
        <Gear size='24' /> <PencilSquare size='24' />
      </span>
    </div>
    <div className='row'>
      <span className='front-icon'>
        <CreditCard2Back size='24' />
      </span>
      <label className='label-content'>
        Average monthly spend: $100.00
      </label>
      <span className='back-icons'>
        <Gear size='24' /> <PencilSquare size='24' />
      </span>
    </div>
    <div className='row'>
      <span className='front-icon'>
        <PlusLg size='24' />
      </span>
      <label className='label-content'>
        31 follow your bids | Active Social channels:
      </label>
      <span className='back-icons'>
        <Gear size='24' /> <PencilSquare size='24' />
      </span>
    </div>
    <div className='row'>
      <span className='front-icon'>
        <ArrowBarUp size='24' />
      </span>
      <label className='label-content'>
        Your activity over the last 30 days has increased by 31%
      </label>
      <span className='back-icons'>
        <Gear size='24' /> <PencilSquare size='24' />
      </span>
    </div>
    <div className='row'>
      <span className='front-icon'>
        <CurrencyDollar size='24' />
      </span>
      <label className='label-content'>
        Your total charitable giving amount: $26.00
      </label>
      <span className='back-icons'>
        <Gear size='24' /> <PencilSquare size='24' />
      </span>
    </div>
  </>
  )
}
/*
interface propTypes {
  items: any,
  banked: any,
  pending: any,
  auctionsWon: any,
  winValue: any,
  unreadMsg: number,
  disMsg: number,
  savedMsg: number,
  auctions: number,
  wildcard: number,
  avgSpend: any,
  followBids: number,
  activeSocial: any,
  actIncreasing: number,
  totalAmount: any,
}*/
export default YourProfile
