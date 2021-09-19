import { useState } from 'react'
import './ProfileDetail.css'
import { Facebook, Twitter, Instagram, Github, Youtube, Telegram ,Linkedin } from 'react-bootstrap-icons'
import YourProfile from '../YourProfile/YourProfile';
import { Link } from 'react-router-dom';

const profile_titles = [
  {
    type:  'profile',
    title: 'Your Profile',
    short: 'Profile'
  },
  {
    type:  'payment',
    title: 'Payment Info',
    short: 'Payment',
  },
  {
    type:  'social',
    title: 'Social Channels',
    short: 'Social'
  }
];

const ProfileDetail = () => {
  const [currentState, setCurrentState] = useState('profile')

  return(
  <div className='profile-wrapper'>
    <div className="profile-view-header mt-5">
    <ul className="list-group list-group-horizontal responsive-none">
      {profile_titles.map((item, index) => {
        return (
          <li className={
            "profile-header-item capitalize list-group-item size-extremely-large weight-thin "
             + (item.type === currentState ? ' active' : '')}
             onClick={(e) => {
              setCurrentState(item.type)
             }}
             key={index}>
               {item.title}
          </li>
        )
      })
      }
    </ul>
    <ul className="list-group list-group-horizontal responsive-visible weight-thin">
      {profile_titles.map((item, index) => {
        return (
          <li className={
            "profile-header-item capitalize list-group-item size-extremely-large"
             + (item.type === currentState ? ' active' : '')}
             onClick={(e) => {
               setCurrentState(item.type)
             }}
             key={index}>
               {item.short}
          </li>
        )
      })
      }
    </ul>
  </div>

  <div className="profile-view-content">
    {currentState === 'profile' &&
      <YourProfile/>
    }
  </div>

  <div className="profile-footer">
    <div className="btn-wrapper">
      <button className="add-info">ADD MORE INFO TO GET FREE ENTRIES</button>
    </div>

    <div className="text-wrapper">
      <label className="footer-text">I am sure there will be some kind of text here even if it is just for the sake of SEO</label>
      <label className="footer-text">This might be cautionary text or somekind of text that talks about what the site is, either way</label>
      <label className="footer-text">It will be burried way at the bottomgh so hardy anyone will have ever read it, and why should they havereally</label>
    </div>

    <div className="footer-icons">
      <Link to=''> <span className='social-icons'><Facebook/>   </span></Link>
      <Link to=''> <span className='social-icons'><Twitter/>    </span></Link>
      <Link to=''> <span className='social-icons'><Instagram/>  </span></Link>
      <Link to=''> <span className='social-icons'><Github/>     </span></Link>
      <Link to=''> <span className='social-icons'><Youtube/>    </span></Link>
      <Link to=''> <span className='social-icons'><Telegram/>   </span></Link>
      <Link to=''> <span className='social-icons'><Linkedin/>   </span></Link>
    </div>
  </div>
</div>
  )
}

export default ProfileDetail