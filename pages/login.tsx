import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import BackGroundImg from "~/assets/img/homeImg.png";
import MiLogo from "~/static/img/MiLogo.png";
import MiTitle from "~/static/img/miTitle.png";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Label,
  Input,
  Button, Fade
} from "reactstrap";
import MediaQuery from "react-responsive";
import breakpoints from "@/utils/breakpoints";
import css from "styled-jsx/css";
import Link from "next/link";
import LoginForm from "@/components/login/LoginForm";
import SignUpForm from "@/components/login/SignUpForm";

interface State {
  activeTab: number;
}

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
    const activeLink = {
      borderBottom: "2px white solid",
      paddingBottom: "4px",
    };
    return (
      <IndexLayout>
        <div className="wrapper">
          <Container>
            <Row>
              <Col sm={6} md={8}>
                <MediaQuery minWidth={breakpoints.sm}>
                  <div className="wrapper-info">
                    <img src={MiLogo}/>
                    <img src={MiTitle}/>
                  </div>
                </MediaQuery>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div>
                  <Nav>
                    <NavItem>
                      <NavLink onClick={() => { this.toggle(0); }}>
                        <div className="nav-tab" style={this.state.activeTab === 0 ? activeLink : {}}>登录米课</div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => { this.toggle(1); }}>
                        <div className="nav-tab" style={this.state.activeTab === 1 ? activeLink : {}}>注册米课</div>
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
        </div>
        {/*language=CSS*/}
        <style jsx>{`
          .wrapper {
            padding: 5% 0;
            background-image: url(/static/img/homeImg.png);
            background-size: cover;
          }

          .nav-tab {
            color: white;
            cursor: pointer;
            margin: 0 0 1rem -1rem;
            font-size: 16px;
          }

          .wrapper-info {
            text-align: center;
          }
        `}
        </style>
        {/*language=CSS*/}
        <style jsx global>{`

        `}
        </style>
      </IndexLayout>
    );
  }
}
