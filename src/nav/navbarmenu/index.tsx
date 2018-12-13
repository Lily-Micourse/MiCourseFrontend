import * as React from "react";
import NavbarExpandedMenu from "@/nav/navbarmenu/NavbarExpandedMenu";
import { connect, ConnectedProps } from "@/stores/connect";
import { UserStore } from "@/stores/UserStore";
import { basicLinks, extendedLinksAfterLogin, withoutLoginLinks } from "@/nav/navbarmenu/links";
import Router from "next/router";
import StyledDropdownMenu from "./StyledDropdownMenu";

interface Props extends ConnectedProps {
  type: "expanded" | "dropdown";
}

export default connect(UserStore)((props: Props) => {

  const userStore = props.useStore!(UserStore);

  function logout() {
    userStore.logout();
    Router.push("/");
  }

  const logoutLink = {
    title: "登出",
    onClick: logout,
  };

  if (props.type === "expanded") {
    return (
    <NavbarExpandedMenu
      basicLinks={basicLinks}
      extendedLinks={[...extendedLinksAfterLogin, logoutLink]}
      withoutLoginLinks={withoutLoginLinks}
      loggedIn={userStore.loggedIn}
    />
    );
  } else {
    if (userStore.loggedIn) {
      return (
        <StyledDropdownMenu links={[...basicLinks, ...extendedLinksAfterLogin, logoutLink]}/>
      );
    } else {
      return (
        <StyledDropdownMenu links={withoutLoginLinks}/>
      );
    }
  }
});
