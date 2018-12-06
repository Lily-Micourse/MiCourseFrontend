import * as React from "react";
import MediaQuery from "react-responsive";
import breakpoints from "@/utils/breakpoints";
import S from "~/assets/img/Brand-S.png";
import M from "~/assets/img/Brand-M.png";
import L from "~/assets/img/Brand.png";
import Router from "next/router";

function LogoImg({ brand }) {
  return <img src={brand} alt="logo" onClick={() => Router.push("/")} style={{ cursor: "pointer" }}/>;
}

export default function Logo() {

  return (
    <>
      <div className="center-vertical">
        <MediaQuery maxWidth={breakpoints.smMax}>
          <LogoImg brand={S}/>
          {/*language=CSS*/}
          <style jsx global>{`
            img {
              width: 38px;
              height: 40px;
            }
          `}
          </style>
        </MediaQuery>
        <MediaQuery maxWidth={breakpoints.mdMax} minWidth={breakpoints.md}>
          <LogoImg brand={M}/>
          {/*language=CSS*/}
          <style jsx global>{`
            img {
              width: 88.4px;
              height: 40px;
            }
          `}
          </style>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.lg}>
          <LogoImg brand={L}/>
          {/*language=CSS*/}
          <style jsx global>{`
            img {
              width: 186px;
              height: 40px;
            }
          `}
          </style>
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
