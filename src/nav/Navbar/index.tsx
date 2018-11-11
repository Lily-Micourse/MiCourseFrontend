import * as React from "react";
import { WithRouterProps, withRouter } from "next/router";
import { Navbar as BSNavbar, Container, Row, NavbarBrand, Col, Input } from "reactstrap";
import MediaQuery from "react-responsive";
import breakpoints from "../utils/breakpoints";
import Logo from "./Logo";

interface Props extends WithRouterProps {

}

export default withRouter((props: Props) => {
  return (
    <BSNavbar>
      <Container>
        <Row>
          <Col md={3} xs={2}>
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </Col>
          <Col xs={8} sm={5}>

          </Col>

        </Row>

      </Container>
    </BSNavbar>
  )
});
