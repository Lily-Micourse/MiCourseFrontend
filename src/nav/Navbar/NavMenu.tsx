import * as React from "react";
import {
  Nav,
  NavItem,
  NavLink, DropdownMenu, DropdownItem } from "reactstrap";
import Link from "next/link";

interface Props {
  path: string;
  type: "dropMenu" | "navbarMenu";
}

interface State {

}

interface NavBarMenuItemProps {
  href: string;
  routePath: string;
  title: string;
}

function NavItemWithLink(props: { href: string; routePath: string; title: string; }) {
  return (
    <NavItem >
      <Link href={props.href}>
        <NavLink active={props.routePath === props.href} >
          {props.title}
        </NavLink>
      </Link>
    </NavItem>
  );
}

function DropItemWithLink(props: { href: string; routePath: string, title: string }) {
  return (
    <Link href={props.href}>
      <DropdownItem active={props.routePath === props.href}>{props.title}</DropdownItem>
    </Link>
  );
}

function NavbarMenu(props: { path: string}) {
  return (
    <>
      <Nav navbar={true} className="center-vertical">
        <NavItemWithLink href="/" routePath={props.path} title="首页"/>
        <NavItemWithLink href="/course" routePath={props.path} title="课程"/>
        <NavItemWithLink href="/notice" routePath={props.path} title="公告"/>
        <NavItemWithLink href="/login" routePath={props.path} title="登陆"/>
      </Nav>
      {/*language=CSS*/}
      <style jsx>{`
        .navbar-nav > li > a {
          color: white;
          margin: 0 0 0 8px;
          cursor: pointer;
        }

        .navbar-nav > li > a:hover {
          border-bottom: white 2px solid;
        }

        .active {
          border-bottom: white 2px solid;
        }

        ul {
          float: right;
        }

      `}
      </style>
    </>);
}

function NavDropdownMenu(props: {path: string}) {
  return (
    <>
      <DropdownMenu id="dropDownMenu">
        <DropItemWithLink href="/" routePath={props.path} title="首页"/>
        <DropItemWithLink href="/course" routePath={props.path} title="课程"/>
        <DropItemWithLink href="/notice" routePath={props.path} title="公告"/>
        <DropItemWithLink href="/login" routePath={props.path} title="登陆"/>
      </DropdownMenu>
      { /*language=CSS*/ }
      <style jsx>{`
          #dropDownMenu{
            right: 0;
            left: auto !important;
            top: 100% !important;
            transform: translate3d(16px, 0px, 0px) !important;
            padding: 8px 14px;
            border-radius: 1px;
          }
          .dropdown-item {
            margin: 4px 0;
            color: #333!important;
            padding: 12px 16px;
            border-left: 3px solid #7d7d7d;
            background-color:transparent !important;
            outline: none !important;
           cursor: pointer;
        }
          .active{
            border-left: 8px solid #54abd4;
            background-color:transparent !important;
            color: #54abd4 !important;
          }
      `}
      </style>
    </>
  );
}

export default class NavMenu extends React.Component<Props> {
  render() {
    if (this.props.type === "dropMenu") {
      return (<NavDropdownMenu path={this.props.path}/>);
    } else {
      return (<NavbarMenu path={this.props.path}/>);
    }
  }
}
