import { Modal, Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginModal.css'
import { PersonFill } from 'react-bootstrap-icons'
import { sign } from 'crypto'


const TestModal = (props: PropTypes) => {
  const [activeState, setActiveState] = useState('signin')
  const [signup_drop, setActiveDrop] = useState(false)

  return (
    <Modal
      {...props}
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
        {activeState === 'signin' && (
          <div className='signin-content'>
            <div className='row'>
              <div className='col-md-4 title-label'>
                <label>Username:</label>
              </div>

              <div className='col-md-4'>
                <input id='username' name='username' type='text' />
              </div>
            </div>

            <div className='row mt-4'>
              <div className='col-md-4 title-label'>
                <label>password:</label>
              </div>

              <div className='col-md-4'>
                <input id='password' name='password' type='password' />
              </div>

              <div className='col-md-4 button-enter'>
                <button>ENTER</button>
              </div>
            </div>

            <div className='row button-wrapper'>
              <button>Earn Free Entires</button>
            </div>
          </div>
        )}

        {activeState === 'signup' && (
          <div className='container signup-content'>
            <div className='userinfo-1'>
              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Full Name</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='fullname'
                    name='fullname'
                    placeholder='Your actual name'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Email</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='You@whatemail.com'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Phone</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='phone'
                    name='phone'
                    placeholder='Where to text/call when you win'
                  />
                </div>
              </div>
            </div>

            <div className='userinfo-2'>
              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Card Number</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='card_number'
                    name='card_number'
                    placeholder='The credit card number'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Expiration Date</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='exp_date'
                    name='exp_date'
                    placeholder='MM/YY'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Security Code</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='sec_code'
                    name='sec_code'
                    placeholder='CVV (Hint: look on the back)'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Billing Zip Code</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='zip_code'
                    name='zip_code'
                    placeholder='The zip code'
                  />
                </div>
              </div>
            </div>

            <div className='userinfo-3'>
              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Create Username</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='new_username'
                    name='new_username'
                    placeholder='What name shall they fear?'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Add Profile Image</label>
                </div>

                <div className='col-md-7'>
                  <PersonFill fontSize={36} />
                </div>
              </div>

            </div>

            {signup_drop===true &&
            <div className="dropdown-urls">
              <div className="caption">
                <label className="part1">
                  Link Auctions to Your Social Media
                </label>

                <label className="part2">
                  Get up to $100 in Free Entries
                </label>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Your Facebook URL</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='facebook'
                    name='facebook'
                    placeholder='Worth $10 in Free Entries'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Your Instagram URL</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='instagram'
                    name='instagram'
                    placeholder='Worth $10 in Free Entries'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Your Linkedin URL</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='linkedin'
                    name='linkedin'
                    placeholder='Worth $10 in Free Entries'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Your Twitter URL</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='twitter'
                    name='twitter'
                    placeholder='Worth $10 in Free Entries'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Your WeChat URL</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='wechat'
                    name='wechat'
                    placeholder='Worth $10 in Free Entries'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Your WhatsApp URL</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='whatsapp'
                    name='whatsapp'
                    placeholder='Worth $10 in Free Entries'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Your YouTube URL</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='youtube'
                    name='youtube'
                    placeholder='Worth $10 in Free Entries'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Your Pinterest URL</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='pinterest'
                    name='pinterest'
                    placeholder='Worth $10 in Free Entries'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-5 title-label2'>
                  <label>Your SnapChat URL</label>
                </div>

                <div className='col-md-7'>
                  <input
                    type='text'
                    id='snapchat'
                    name='snapchat'
                    placeholder='Worth $10 in Free Entries'
                  />
                </div>
              </div>

            </div>

             }

            <div className='footer'>
              <div className="row layer">
                <div className="col-md-5 btn-wrapper">
                  <button className='btn-entire'
                  onClick={()=>(
                    signup_drop===true? setActiveDrop(false) : setActiveDrop(true)
                  )}>
                    {signup_drop===true?  'Get Greedy' : 'Get Free Entries'}</button>
                </div>
                <div className="col-md-1 short-label">
                  or
                </div>
                <div className="col-md-5">
                  <button className='btn-winning'>START WINNING</button>
                </div>
              </div>
              <div className="row footer-caption">
                <a>see Term & Rules</a>
              </div>
            </div>


          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}

interface PropTypes {
  show?: boolean
}
export default TestModal
