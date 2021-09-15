import { Modal, Form } from 'react-bootstrap'

import { useState } from 'react'
import './EntryModal.css'

const EntryModal = (props: PropTypes) => {

  const [isMaxBid, setMaxState] = useState(false)
  const [isLimitBid, setLimitState] = useState(false)

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
          <span className="entry-title">ADD MORE ENTRIES</span>
        </div>

        <div className="entry-content">
          <div className="entry-info">
            <span className="entry-text-big">Your Credits Bank: $12.00</span><br/>
            <span className="entry-text-big">Current Active Bid: 10 Entries</span><br/>

            <span className="entry-text-big">Increase my bid to: </span>
            <input className="entry-count inc-bid" placeholder='20'></input>
            <span className="entry-text-big"> Entries</span>
          </div>

          <div className="entry-set">
            <Form>
              <Form.Check type='checkbox' id={`check-api-checkbox1`}>
                <Form.Check.Input type='checkbox' onChange={(e:any) => setMaxState(e.target.checked)}/>
                <span className="entry-text-big">Set max auto-bid to: </span>
                <input className="entry-count" placeholder='100' disabled={ !isMaxBid }></input>
                <span className="entry-text-big"> Entries</span>
              </Form.Check>

              <Form.Check type='checkbox' id={`check-api-checkbox2`} checked={false}>
                <Form.Check.Input type='checkbox' onChange={(e:any) => setLimitState(e.target.checked)}/>

                <span className="entry-text-big">Limit auto-bid to bank only</span>
              </Form.Check>
            </Form>
          </div>

          <div className="entry-button">
            <button className="submit-entry">Submit Entries</button>
          </div>

          <span className="entry-text-small">
            Bid rate for this
          </span>
        </div>
      </Modal.Body>
    </Modal>
  )
}

interface PropTypes {
  show?: boolean,
  onHide: (data: any) => void,
}
export default EntryModal
