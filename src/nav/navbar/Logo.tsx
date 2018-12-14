import * as React from "react";
import MediaQuery from "react-responsive";
import breakpoints from "@/utils/breakpoints";
import S from "~/static/img/Brand-S.png";
import M from "~/static/img/Brand-M.png";
import L from "~/static/img/Brand.png";
import Router from "next/router";
import styled from "styled-components";

function toHome() {
  Router.push("/");
}

function LogoImg({ brand, width, height }) {
  return <img src={brand} width={width} height={height} alt="logo" onClick={toHome} style={{ cursor: "pointer" }} />;
}

const CenterVertialDiv = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export default function Logo() {

  return (
    <CenterVertialDiv>
      <MediaQuery maxWidth={breakpoints.smMax}>
        <LogoImg brand={S} width={38} height={40} />
      </MediaQuery>
      <MediaQuery maxWidth={breakpoints.mdMax} minWidth={breakpoints.md}>
        <LogoImg brand={M} width={88.4} height={40} />
      </MediaQuery>
      <MediaQuery minWidth={breakpoints.lg}>
        <LogoImg brand={L} width={186} height={40} />
      </MediaQuery>
    </CenterVertialDiv>

  );
}
