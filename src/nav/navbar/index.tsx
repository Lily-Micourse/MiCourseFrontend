import * as React from "react";
import { withRouter, WithRouterProps } from "next/router";
import { Col, Container, Dropdown, DropdownToggle, Navbar as BSNavbar, Row } from "reactstrap";
import Logo from "./Logo";
import SearchBar from "@/nav/navbar/SearchBar";
import MediaQuery from "react-responsive";
import breakpoints from "@/utils/breakpoints";
import { IoIosMenu } from "react-icons/io";
import { IconContext } from "react-icons";
import NavbarMenu from "@/nav/navbarmenu";
import styled from "styled-components";

interface Props extends WithRouterProps {

}

interface State {
  open: boolean;
}

const StyledNavbar = styled(BSNavbar)`
  background-color: #88c5e1;
  border-bottom: 5px solid #54abd4;
  padding: 12px 0;
  color: white;

  .row {
    width: 100%;
    margin: 0;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: white;
  }

  .navbar-dark .navbar-toggler {
    color: white;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: 0px;
      padding-left:  2px;
    }
  }

  @media (max-width: 992px) {
    .container {
      max-width: none;
    }
  }

  .hamburger {
    border: white 1px solid;
    cursor: pointer;
  }

  .middle {
    float: none;
    display: inline-block;
    vertical-align: middle;
  }
`;

class Navbar extends React.Component<Props, State> {

  state = {
    open: false,
  };

  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <StyledNavbar expand="md" fixed="top">
        <Container>
          <Row>
            <Col xs={2} sm={2} md={3}>
              <Logo />
            </Col>
            <Col xs={8} sm={8} md={5} className="middle">
              <SearchBar />
            </Col>
            <Col xs={2} sm={2} md={4}>
              <MediaQuery minWidth={breakpoints.md}>
                <NavbarMenu type="expanded" />
              </MediaQuery>
              <MediaQuery maxWidth={breakpoints.smMax}>
                <Dropdown isOpen={this.state.open} toggle={this.toggle} direction="down" className="pull-right center-vertical">
                  <DropdownToggle
                    tag="span"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={this.state.open}
                  >
                    <IconContext.Provider value={{ size: "40" }}>
                      <IoIosMenu className="hamburger" />
                    </IconContext.Provider>
                  </DropdownToggle>
                  <NavbarMenu type="dropdown" />
                </Dropdown>
              </MediaQuery>

            </Col>
          </Row>
        </Container>
      </StyledNavbar>
    );
  }
}

export default withRouter(Navbar);
