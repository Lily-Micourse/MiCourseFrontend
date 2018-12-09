import * as React from "react";
import {
  Nav,
  NavItem,
  NavLink, DropdownMenu, DropdownItem, Dropdown
} from "reactstrap";
import Link from "next/link";
import { withRouter, WithRouterProps } from "next/router";

interface Props extends WithRouterProps {
  links: Array<{ href?: string, title: string, onClick?: () => void }>;
}

export default withRouter(function StyledDropdownMenu(props: Props) {
  return (
    <>
      <DropdownMenu id="dropdown-menu">
        {props.links.map((link) => {
          const style = props.router.pathname === link.href
          ? { borderLeft: "8px solid #54abd4", color: "#54abd4" }
          : {};

          if (link.href) {
            return (
              <Link href={link.href} key={link.href ? link.href : ""}>
                <DropdownItem style={style}>{link.title}</DropdownItem>
              </Link>
            );
          } else {
            return (
              <DropdownItem onClick={link.onClick} style={style} key={link.href ? link.href : ""}>
                {link.title}
              </DropdownItem>
            );
          }
        })}
      </DropdownMenu>
      {/*language=CSS*/}
      <style jsx>{`
        #dropdown-menu {
          right: 0;
          left: auto !important;
          top: 100% !important;
          transform: translate3d(16px, 0px, 0px) !important;
          padding: 8px 14px;
          border-radius: 1px;
        }

        .dropdown-item {
          margin: 4px 0;
          color: #333;
          padding: 12px 16px;
          border-left: 3px solid #7d7d7d;
          background-color: transparent;
          outline: none !important;
          cursor: pointer;
        }

        .dropdown-item:active {
          color: #333;
          background-color: transparent;
        }

      `}
      </style>
    </>
  );
});
