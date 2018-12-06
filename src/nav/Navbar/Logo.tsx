import * as React from "react";
import MediaQuery from "react-responsive";
import breakpoints from "@/utils/breakpoints";
import S from "~/assets/img/Brand-S.png";
import M from "~/assets/img/Brand-M.png";
import L from "~/assets/img/Brand.png";
import Router from "next/router";

function LogoImg({ brand, width, height }) {
  return <img src={brand} width={width} height={height} alt="logo" onClick={() => Router.push("/")} style={{ cursor: "pointer" }}/>;
}

export default function Logo() {

  return (
    <>
      <div className="center-vertical">
        <MediaQuery maxWidth={breakpoints.smMax}>
          <LogoImg brand={S} width={38} height={40}/>
        </MediaQuery>
        <MediaQuery maxWidth={breakpoints.mdMax} minWidth={breakpoints.md}>
          <LogoImg brand={M} width={88.4} height={40}/>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.lg}>
          <LogoImg brand={L} width={186} height={40}/>
        </MediaQuery>
      </div>
      { /*language=CSS*/ }
      <style jsx>{`
            .center-vertical{
              position: relative;
              top: 50%;
              transform: translateY(-50%);
            }
        `}
      </style>

    </>

  );
}
