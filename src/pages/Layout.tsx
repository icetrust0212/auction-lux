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

      <Row className="ad-auction-slot d-flex justify-content-around">
        <Col md={7} className="detail d-flex flex-column justify-content-center align-items-center auction-slot-main">
          <img src="/assets/images/products/car.jpg" alt="car" className="ad-img-small" />
          <h4 className="ad-auction-title color-primary uppercase">engagement rings</h4>
          <span className="ad-description color-dark capitalize">when you know, you know</span>
          <div style={{width: "50%", marginRight: 'auto', marginLeft: 'auto'}}>
            <OnboardingButton fill={true} className="ad-auction-btn">GET STARTED</OnboardingButton>
          </div>
        </Col>
        <Col md={5} className="p-0">
          <img src="/assets/images/products/tesla.jpg" alt="" className="side-img" />
        </Col>
      </Row>
    </div>
  )
}

interface PropsType {
  children: any
}

export default Layout;