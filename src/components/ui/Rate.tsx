import React from "react";
import styled from "styled-components";
import { range } from "@/utils/range";
import star from "~/static/img/star.png";
import starEm from "~/static/img/starEm.png";

const StyledSpan = styled.span`
color:#f9ca5a;
`

const DefaultImage =styled.img`
  width: 12px;
  height: 13px;
  margin-right:3px;
`;

export function Rate({ rate, className}: { rate: number, className?: string }) {
  const rounded = Math.round(rate);
  console.log(className);
  return (
    <>
      {range(0, rounded).map((x) => <DefaultImage className={className} src={star} key={x}/>)}
      {range(rounded, 5).map((x) => <DefaultImage className={className} src={starEm} key={x}/>)}
      <StyledSpan>{rate}分</StyledSpan>
    </>
  );
}
