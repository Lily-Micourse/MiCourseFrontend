import * as React from "react";
import MediaQuery from "react-responsive";
import breakpoints from "@/utils/breakpoints";
import S from "~/assets/img/Brand-S.png";
import M from "~/assets/img/Brand-M.png";
import L from "~/assets/img/Brand.png";

function LogoImg({ brand }) {
  return <img src={brand} alt="logo" />;
}

export default function Logo() {
  return (
    <div>
      <MediaQuery maxWidth={breakpoints.xsMax}>
        <LogoImg brand={S} />;
      </MediaQuery>
      <MediaQuery maxWidth={breakpoints.mdMax}>
        <LogoImg brand={M} />;
      </MediaQuery>
      <MediaQuery minWidth={breakpoints.lg}>
        <LogoImg brand={L} />
      </MediaQuery>
    </div>
  );
}
