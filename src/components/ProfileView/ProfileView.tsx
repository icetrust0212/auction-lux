import './ProfileVIew.css'
import { PencilSquare } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getProfile, getProfileLoadingState } from '../../store/reducers'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/actions'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import {format} from 'date-fns';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ProfileView = () => {
  const profile = useSelector(state => getProfile(state));
  const loadingProfile = useSelector(state => getProfileLoadingState(state));
  const dispatch = useDispatch();
  let [color, setColor] = useState("#FF0000");
  useEffect(() => {
    dispatch(userActions.getProfile());
  }, []);
  console.log('LoadingProfile: ', loadingProfile);
  console.log('profile: ', profile);
  return (
    <>
      <ClipLoader color={color} loading={loadingProfile} css={override} size={150} />
      {profile &&
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-lg-4 col-md-5 col-sm-6 image-wrapper'>
              <Link to=''>
                <span className='edit-icon'>
                  <PencilSquare size='24' />
                </span>
              </Link>
              <img className='profile-photo' src={""} alt='Profile' />
            </div>

            <div className='col-lg-8 col-md-7 col-sm-6 content-wrapper mt-3'>
              <div className='row about-member'>
                <div className='row'>
                  <span className='big-caption'>
                    Member Name:
                    <span className='medium-caption'> {profile.username}</span>
                  </span>
                </div>

                <div className='row'>
                  <span className='small-caption'>
                    Member Since:
                    <span className='small-caption'> {format(new Date(profile.createdAt), "MMMM dd, yyyy")}</span>
                  </span>
                </div>

                <div className='row'>
                  <span className='small-caption'>
                    Email:
                    <span className='small-caption'> {profile.email}</span>
                  </span>
                </div>

                <div className='row'>
                  <span className='small-caption'>
                    Style: {profile.m_style} | Status: {profile.m_status}
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
                  About You: {profile.m_about_you}
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ProfileView
