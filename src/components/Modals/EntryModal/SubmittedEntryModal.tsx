import { Modal, Form } from 'react-bootstrap'

import { useState } from 'react'
import './EntryModal.css'

const SubmittedEntryModal = (props: PropTypes) => {

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
          <span className="entry-title-large">YOUR ENTRIES ARE SUBMITTED!</span>
        </div>

        <div className="option-btn-wrapper">
          <button className="option-btn">ENTER OTHER ACTIVE AUCTIONS</button>
          <button className="option-btn">SEE UPCOMING AUCTIONS</button>
          <button className="option-btn">GET FREE WILDCARD ENTRIES</button>
        </div>

        <div className="footer-close">
          <button className="close-modal" onClick={props.onHide}>Close</button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

interface PropTypes {
  show?: boolean,
  onHide: (data: any) => void,
}
export default SubmittedEntryModal
