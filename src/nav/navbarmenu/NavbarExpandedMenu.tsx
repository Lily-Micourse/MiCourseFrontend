import * as React from "react";
import { Dropdown, DropdownToggle, Nav, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import NextLink from "next/link";
import { withRouter, WithRouterProps } from "next/router";
import StyledDropdownMenu from "@/nav/navbarmenu/StyledDropdownMenu";
import { Link, extendedLinksAfterLogin } from "@/nav/navbarmenu/links";

interface LinkProps extends WithRouterProps, Link {
}

const NavItemWithLink = withRouter((props: LinkProps) => {
  const style = props.router.pathname === props.href ? { borderBottom: "white 2px solid" } : {};

  return (
    <NavItem>
      <NextLink href={props.href}>
        <NavLink style={style}>
          {props.title}
        </NavLink>
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
    ? { borderBottom: "white 2px solid" } : {};
  return (
    <>
      <Nav navbar={true} className="center-vertical pull-right">
        {
          props.loggedIn
            ? (
              <>
                {(props.basicLinks.map((link) => (
                  <NavItemWithLink title={link.title} href={link.href} key={link.href ? link.href : ""}/>)))}
                <UncontrolledDropdown>
                  <DropdownToggle tag="a" nav caret style={style}>
                    个人中心
                  </DropdownToggle>
                  <StyledDropdownMenu links={props.extendedLinks}/>
                </UncontrolledDropdown>
              </>

            )
            : (
              props.withoutLoginLinks.map((link) => (
                <NavItemWithLink title={link.title} href={link.href} key={link.href ? link.href : ""}/>))
            )
        }
      </Nav>
      {/*language=CSS*/}
      <style jsx>{`
        .navbar-nav > li > a {
          color: white;
          margin: 0 0 0 8px;
          cursor: pointer;
          font-size: 1rem;
        }

        .navbar-nav > li > a:hover {
          border-bottom: white 2px solid;
        }

        .navbar-nav > div > a {
          color: white;
          margin: 0 0 0 8px;
          cursor: pointer;
          font-size: 1rem;
        }

        .navbar-nav > div > a:hover {
          border-bottom: white 2px solid;
        }



      `}
      </style>
    </>);
}

export default withRouter(NavbarExpandedMenu);
