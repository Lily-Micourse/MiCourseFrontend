import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import MiLogo from "~/static/img/MiLogo.png";
import MiTitle from "~/static/img/miTitle.png";
import { Col, Container, Fade, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import MediaQuery from "react-responsive";
import breakpoints from "@/utils/breakpoints";
import LoginForm from "@/pages/login/LoginForm";
import SignUpForm from "@/pages/login/SignUpForm";
import styled from "styled-components";

interface State {
  activeTab: number;
}

const Wrapper = styled.div`
  padding: 5% 0;
  background-image: url(/static/img/homeImg.png);
  background-size: cover;
  height: 325px;

`;

const NavTab = styled.div`
  color: white;
  cursor: pointer;
  //margin: 0 0 1rem -1rem;
  font-size: 16px;


  ${({ active }) => active
  ? `
      border-bottom: 2px white solid;
      padding-bottom: 4px
    `
  : ""
  }
`;

const InfoWrapper = styled.div`
  text-align: center;
`;

export default class Login extends React.Component<State> {

  state = {
    activeTab: 0,
  };
  toggle = (tab: number) => {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    return (
      <IndexLayout noTopPadding={true}>
        <Wrapper>
          <Container>
            <Row>
              <Col sm={6} md={8}>
                <MediaQuery minWidth={breakpoints.sm}>
                  <InfoWrapper>
                    <img src={MiLogo}/>
                    <img src={MiTitle}/>
                  </InfoWrapper>
                </MediaQuery>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div>
                  <Nav>
                    <NavItem>
                      <NavLink onClick={() => { this.toggle(0); }}>
                        <NavTab active={this.state.activeTab === 0}>登录米课</NavTab>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => { this.toggle(1); }}>
                        <NavTab active={this.state.activeTab === 1}>注册米课</NavTab>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <TabContent activeTab={this.state.activeTab} className="text-white">
                  <TabPane tabId={0}>
                    <Fade in={this.state.activeTab === 0}>
                      <LoginForm/>
                    </Fade>
                  </TabPane>
                  <TabPane tabId={1}>
                    <Fade in={this.state.activeTab === 1}>
                      <SignUpForm/>
                    </Fade>
                  </TabPane>
                </TabContent>

              </Col>
            </Row>
          </Container>
        </Wrapper>
      </IndexLayout>
    );
  }
}
