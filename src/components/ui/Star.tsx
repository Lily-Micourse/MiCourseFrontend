import React from "react";
import styled from "styled-components";
import { range } from "@/utils/range";
import star from "~/static/img/star.png";
import starEm from "~/static/img/starEm.png";

const StyledSpan = styled.span`
color:#f9ca5a;
`

export function Star({ rate, className }: { rate: number, className?: string }) {
  const rounded = Math.round(rate);
  return (
    <>
      {range(0, rounded).map((x) => <img className={className} src={star} key={x}/>)}
      {range(rounded, 5).map((x) => <img className={className} src={starEm} key={x}/>)}
      <StyledSpan>{rate}分</StyledSpan>
    </>
  );
}
