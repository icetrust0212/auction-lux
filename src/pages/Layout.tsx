import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OnboardingButton from '../components/common/OnboardingButton/OnboardingButton';
import PageHeader from '../components/PageHeader/PageHeader';
import { getLogInModalShowState, getSignUpModalShowState } from '../store/reducers';
import { modalActions } from '../store/actions';
import SignModal from '../components/Modals/SignModal';

import './layout.css';

const Layout = (props: PropsType) => {
  const dispatch = useDispatch();
  const showLoginModal = useSelector(state => getLogInModalShowState(state));
  const showSignupModal = useSelector(state => getSignUpModalShowState(state));
  return (
    <Container className="custom-container">
      <div className="page-layout">
        <PageHeader />
        <div className="content-wrapper">{props.children}</div>
      </div>
    </Container>
  )
}

interface PropsType {
  children: any
}

export default Layout;