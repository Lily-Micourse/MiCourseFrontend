import * as React from "react";
import { Dropdown, DropdownToggle, Nav, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import NextLink from "next/link";
import { withRouter, WithRouterProps } from "next/router";
import StyledDropdownMenu from "@/nav/navbarmenu/StyledDropdownMenu";
import { Link, extendedLinksAfterLogin } from "@/nav/navbarmenu/links";
import styled from "styled-components";

interface LinkProps extends WithRouterProps, Link {

}

const StyledNavLink = styled(NavLink)`
  color: white;
  margin: 0 0 0 8px;

  font-size: 1rem;

  :hover {
    border-bottom: white 2px solid;
    cursor: pointer;
  }


`;

const StyledToggle = styled(DropdownToggle)`

  font-size: 1rem;

  :hover {
    border-bottom: white 2px solid;
    cursor: pointer;
  }
`;

const NavItemWithLink = withRouter((props: LinkProps) => {
  const style = props.router.pathname === props.href ? { borderBottom: "white 2px solid" } : {};

  return (
    <NavItem>
      <NextLink href={props.href}>
        <StyledNavLink style={style}>
          {props.title}
        </StyledNavLink>
      </NextLink>
    </NavItem>
  );
});

interface State {
  open: boolean;
}

interface Props extends WithRouterProps {
  loggedIn: boolean;
  withoutLoginLinks: Link[];
  basicLinks: Link[];
  extendedLinks: Link[];
}

const NavbarExpandedMenu = (props: Props) => {
  const style = extendedLinksAfterLogin.some((x) => x.href === props.router.pathname)
    ? { borderBottom: "white 2px solid" }
    : {};
  return (
    <Nav navbar={true} className="center-vertical pull-right">
      {
        props.loggedIn
          ? (
            <>
              {props.basicLinks.map((link) => (
                <NavItemWithLink title={link.title} href={link.href} key={link.href ? link.href : ""} />
              ))
              }
              <UncontrolledDropdown>
                <StyledToggle tag="a" nav={true} caret={true} style={style}>
                  个人中心
                </StyledToggle>
                <StyledDropdownMenu links={props.extendedLinks} />
              </UncontrolledDropdown>
            </>

          )
          : (
            props.withoutLoginLinks.map((link) => (
              <NavItemWithLink title={link.title} href={link.href} key={link.href ? link.href : ""} />
              ))
          )
      }
    </Nav>
  );
};

export default withRouter(NavbarExpandedMenu);
