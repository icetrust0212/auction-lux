import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap"
import { NavPanel } from "../../static/NavPanel";
import OnboardingButton from "../common/OnboardingButton/OnboardingButton";
import "./pageHeader.css";
const PageHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="bg-white navbar-auction">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/assets/images/logo-golden.png"
            width="120"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-center">
          <Nav className="me-auto">
            {
              NavPanel.map(navItem => {
                if (!navItem.subMenu || navItem.subMenu.length === 0) {
                  return <Nav.Link href={navItem.href} key={navItem.id} className="header-navItem">{navItem.title}</Nav.Link>
                } else {
                  return (
                    <NavDropdown title={navItem.title} id="collasible-nav-dropdown">
                      {navItem.subMenu.map(subItem => {
                        return <NavDropdown.Item href={subItem.href} key={subItem.id}>{subItem.title}</NavDropdown.Item>
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