import * as React from "react";
import StyledDropdownMenu from "@/nav/navbarmenu/StyledDropdownMenu";
import { Link } from "@/nav/navbarmenu/links";

interface Props {
  loggedIn: boolean;
  withinLoginLinks: Link[];
  withoutLoginLinks: Link[];
}

export default (props: Props) => {
  if (props.loggedIn) {
    return <StyledDropdownMenu links={props.withinLoginLinks}/>;
  } else {
    return <StyledDropdownMenu links={props.withoutLoginLinks}/>;
  }
};
