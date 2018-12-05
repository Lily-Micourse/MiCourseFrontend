import * as React from "react";
import { withRouter, WithRouterProps } from "next/router";
import { Nav, Col, Container, Navbar as BSNavbar, NavbarBrand, Row, NavbarToggler, Collapse, NavItem, NavLink} from "reactstrap";
import Logo from "./Logo";
import SearchBar from "@/nav/Navbar/SearchBar";
// import Nav from "@/nav/Navbar/Nav";

const barStyle = {
  backgroundColor: "#88c5e1",
}

interface Props extends WithRouterProps {

}

interface State {
  collapsed: boolean;
}

export default class Navbar extends React.Component<Props, State> {

  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <BSNavbar color="light" light={true} expand="md">
        <Logo/>
        <SearchBar/>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={!this.state.collapsed} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            <NavItem>
              <NavLink to="/rss.xml">
                RSS
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </BSNavbar>

    );

  }

}
