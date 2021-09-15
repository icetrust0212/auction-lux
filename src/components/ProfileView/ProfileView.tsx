import './ProfileVIew.css'
import { PencilSquare } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const ProfileView = (data: PropTypes) => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-4 col-md-5 col-sm-6 image-wrapper'>
          <Link to=''>
            <span className='edit-icon'>
              <PencilSquare size='24' />
            </span>
          </Link>
          <img className='profile-photo' src={data.m_image} alt='Profile' />
        </div>

        <div className='col-lg-8 col-md-7 col-sm-6 content-wrapper mt-3'>
          <div className='row about-member'>
            <div className='row'>
              <span className='big-caption'>
                Member Name:
                <span className='medium-caption'> {data.m_name}</span>
              </span>
            </div>

            <div className='row'>
              <span className='small-caption'>
                Member Since:
                <span className='small-caption'> {data.m_since}</span>
              </span>
            </div>

            <div className='row'>
              <span className='small-caption'>
                Email:
                <span className='small-caption'> {data.m_email}</span>
              </span>
            </div>

            <div className='row'>
              <span className='small-caption'>
                Style: {data.m_style} | Status: {data.m_status}
              </span>
            </div>

            <div className='row edit-icon'>
              <Link to=''>
                <span>
                  <PencilSquare size='24' />
                </span>
              </Link>
            </div>
          </div>

          <div className='row mt-4 about-you'>
            <span className='medium-caption'>
              About You: {data.m_about_you}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PropTypes {
  m_image: string
  m_name: string
  m_since: string
  m_email: string
  m_style: string
  m_status: string
  m_about_you: string
}
export default ProfileView
