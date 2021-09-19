import { Modal} from 'react-bootstrap'

import { useState } from 'react'
import './SignModal.css'

const SignModal = (props: PropTypes) => {
  return (
    <Modal
      {...props}
      show={props.show}
      aria-labelledby='contained-modal-title-vcenter'
      dialogClassName='custom-modal'
      centered
    >
      <Modal.Body className="modal-body">
        <div className='title-header'>
            <h3 className='auction-header-item capitalize size-large active'>{props.title}</h3>
        </div>
        <div className="modal-content">
          {props.children}
        </div>
      </Modal.Body>
    </Modal>
  )
}

interface PropTypes {
  show?: boolean,
  onHide: (data: any) => void,
  children: any,
  title: string
}
export default SignModal
