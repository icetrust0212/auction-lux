import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OnboardingButton from '../components/common/OnboardingButton/OnboardingButton';
import PageHeader from '../components/PageHeader/PageHeader';
import './layout.css';

const Layout = (props: PropsType) => {
  return (
    <div className="page-layout">
      <PageHeader />
      <div className="content-wrapper">{props.children}</div>
    </div>
  )
}

interface PropsType {
  children: any
}

export default Layout;