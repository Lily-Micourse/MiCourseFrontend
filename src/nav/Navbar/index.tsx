import * as React from "react";
import { withRouter, WithRouterProps } from "next/router";
import { Col, Container, Navbar as BSNavbar, NavbarBrand, Row } from "reactstrap";
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
