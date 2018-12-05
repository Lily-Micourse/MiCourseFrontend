import * as React from "react";
import { withRouter, WithRouterProps } from "next/router";
import { Col, Container, Navbar as BSNavbar, NavbarBrand, Row, NavbarToggler } from "reactstrap";
import Logo from "./Logo";
import SearchBar from "@/nav/Navbar/SearchBar";
import Nav from "@/nav/Navbar/Nav";

const barStyle = {
  backgroundColor: "#88c5e1",
}

interface Props extends WithRouterProps {

}

export default withRouter((props: Props) => {
  return (
    <BSNavbar style={barStyle}>
      <Container>
        <Row>
          <Col xs={2} md={3} >
            <NavbarBrand>
              <Logo/>
            </NavbarBrand>
          </Col>
          <Col xs={8} sm={5}>
            <SearchBar/>
          </Col>
          <Col xs={2} sm={5} md={4}>
            <Nav/>
          </Col>
        </Row>
      </Container>
    </BSNavbar>
  );
});
