import * as React from "react";
import MediaQuery from "react-responsive";
import breakpoints from "@/utils/breakpoints";
import { NavbarToggler, Nav as BSNav } from "reactstrap";

const toggleStyle = {
  // borderColor: "white",
}

export default class Nav extends React.Component {
  render() {
    return (
      <>
        <NavbarToggler style={toggleStyle} color={"white"} className="mr-2"/>
        <MediaQuery maxWidth={breakpoints.xsMax}>
          <div>xs</div>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.sm}>
         <div>sm</div>
        </MediaQuery>
      </>
    );
  }
}
