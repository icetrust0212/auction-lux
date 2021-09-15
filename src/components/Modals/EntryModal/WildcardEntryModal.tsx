import { Modal, Form } from 'react-bootstrap'

import { useState } from 'react'
import './EntryModal.css'

const WildcardEntryModal = (props: PropTypes) => {

  return (
    <Modal
      {...props}
      show={props.show}
      aria-labelledby='contained-modal-title-vcenter'
      dialogClassName='entry-modal'
      centered
    >
      <Modal.Body >
        <div className="entry-header">
          <span className="entry-title">BUY WILDCARD ENTRIES</span>
        </div>

        <div className="entry-content">
          <div className="wildcard-info">
            <span className="entry-text-big">Your Credits Bank: $12.00</span><br/>
            <span className="entry-text-big">Current Wildcard Entries: 10 Entries</span><br/>
          </div>

          <div className="wildcard-info">
            <span className="entry-text-big">Buy: </span>
            <input className="entry-count inc-bid" placeholder='20'></input>
            <span className="entry-text-big"> More Entries</span> <br/>
            <span className="entry-text-small">Single Wildcard Entry is $1.00</span>
          </div>

          <div className="buy-entry">
            <button className="btn-buy-entry">
              BUY 10 ENTRIES<br/>ONLY $7.99
            </button>
            <button className="btn-buy-entry">
              BUY 10 ENTRIES<br/>ONLY $7.99
            </button>
            <button className="btn-buy-entry">
              BUY 10 ENTRIES<br/>ONLY $7.99
            </button>
          </div>

          <div className="entry-button">
            <button className="submit-entry">Purchase & Enter</button>
          </div>

          <span className="entry-text-small">Bid rate for this</span>
        </div>
      </Modal.Body>
    </Modal>
  )
}

interface PropTypes {
  show?: boolean,
  onHide: (data: any) => void,
}
export default WildcardEntryModal
