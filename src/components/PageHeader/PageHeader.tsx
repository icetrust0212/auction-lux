import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import { NavPanel } from "../../static/NavPanel";
import OnboardingButton from "../common/OnboardingButton/OnboardingButton";
import "./pageHeader.css";
const PageHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="bg-white navbar-auction weight-light">
      <Row className="ad-auction-slot d-flex justify-content-around">
        <Col md={7} className="detail d-flex flex-column justify-content-center align-items-center auction-slot-main">
          <img src="/assets/images/products/car.jpg" alt="car" className="ad-img-small" />
          <h4 className="ad-auction-title color-primary uppercase">engagement rings</h4>
          <span className="ad-description color-dark capitalize">when you know, you know</span>
          <div style={{ width: "50%", marginRight: 'auto', marginLeft: 'auto' }}>
            <OnboardingButton fill={true} className="ad-auction-btn">GET STARTED</OnboardingButton>
          </div>
        </Col>
        <Col md={5} className="p-0 ad-img-wrapper">
          <img src="/assets/images/products/tesla.jpg" alt="" className="side-img" />
        </Col>
      </Row>

      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/assets/images/logo-golden.png"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-center">
          <Nav className="me-auto">
            {
              NavPanel.map(navItem => {
                if (!navItem.subMenu || navItem.subMenu.length === 0) {
                  return <Link to={navItem.href} key={navItem.id} className="header-navItem color-dark">{navItem.title}</Link>
                } else {
                  return (
                    <NavDropdown title={navItem.title} className="color-dark" id="collasible-nav-dropdown" key={navItem.id}>
                      {navItem.subMenu.map(subItem => {
                        return <Link to={subItem.href} key={subItem.id} className="color-dark">{subItem.title}</Link>
                      })}
                    </NavDropdown>)
                }
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageHeader;