import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OnboardingButton from '../components/common/OnboardingButton/OnboardingButton';
import PageHeader from '../components/PageHeader/PageHeader';
import { getLogInModalShowState } from '../store/reducers';
import {modalActions} from '../store/actions';
import  SignModal  from '../components/Modals/SignModal';

import './layout.css';

const Layout = (props: PropsType) => {
  const dispatch = useDispatch();
  const showLoginModal = useSelector(state => getLogInModalShowState(state));
  return (
    <div className="page-layout">
      <PageHeader />
      <div className="content-wrapper">{props.children}</div>
      <SignModal show = {showLoginModal} onHide={()=>{dispatch(modalActions.hideLoginModal())}}/>
    </div>
  )
}

interface PropsType {
  children: any
}

export default Layout;