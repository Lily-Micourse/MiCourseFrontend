import * as React from "react";
import {
  Nav,
  NavItem,
  NavLink, DropdownMenu, DropdownItem,
} from "reactstrap";
import Link from "next/link";
import { withRouter, WithRouterProps } from "next/router";
import styled from "styled-components";

interface Props extends WithRouterProps {
  links: Array<{ href?: string, title: string, onClick?: () => void }>;
}

const StyledDropdown = styled(DropdownMenu)`
  right: 0;
  /* left: auto !important;
  transform: translate3d(16px, 0px, 0px) !important;
  */
  top: 100% !important;
  padding: 8px 14px;
  border-radius: 1px;

`;

const StyledDropdownItem = styled(DropdownItem)`
  margin: 4px 0;
  color: #333;
  padding: 12px 16px;
  border-left: 3px solid #7d7d7d;
  background-color: transparent;
  outline: none !important;
  cursor: pointer;

  :active {
    color: #333;
    background-color: transparent;
  }
`;

export default withRouter(function StyledDropdownMenu(props: Props) {
  return (
    <StyledDropdown>
      {props.links.map((link) => {
        const style = props.router.pathname === link.href
          ? { borderLeft: "8px solid #54abd4", color: "#54abd4" }
          : {};

        if (link.href) {
          return (
            <Link href={link.href} key={link.href ? link.href : ""}>
              <StyledDropdownItem style={style}>{link.title}</StyledDropdownItem>
            </Link>
          );
        } else {
          return (
            <StyledDropdownItem onClick={link.onClick} style={style} key={link.href ? link.href : ""}>
              {link.title}
            </StyledDropdownItem>
          );
        }
      })}
    </StyledDropdown>
  );
});
