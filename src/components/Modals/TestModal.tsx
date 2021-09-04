import { Modal} from 'react-bootstrap'

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginModal.css'

import SigninForm from './SigninForm'
import SignupForm from './SignupForm'

const TestModal = (props: PropTypes) => {
  const [activeState, setActiveState] = useState('signin')
  const [signup_drop, setActiveDrop] = useState(false)

  return (
    <Modal
      {...props}
      show={props.show}
      aria-labelledby='contained-modal-title-vcenter'
      dialogClassName='modalSize'
      size='lg'
      centered
    >
      <Modal.Body>
        <div className='title-header'>
          <ul className='list-group list-group-horizontal responsive-none'>
            <li
              className={
                'list-group-item size-large' +
                (activeState === 'signin' ? ' active' : '')
              }
              onClick={(e) => {
                setActiveState('signin')
              }}
            >
              SIGN IN
            </li>

            <li
              className={
                'auction-header-item capitalize list-group-item size-large' +
                (activeState === 'signup' ? ' active' : '')
              }
              onClick={(e) => {
                setActiveState('signup')
              }}
            >
              SIGN UP
            </li>
          </ul>
        </div>
        {activeState === 'signin' && <SigninForm />}
        {activeState === 'signup' && <SignupForm signup_drop={signup_drop} setActiveDrop={setActiveDrop}/> }
      </Modal.Body>
    </Modal>
  )
}

interface PropTypes {
  show?: boolean
  onHide: (data: any) => void
}
export default TestModal
