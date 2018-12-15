import React from "react";
import styled from "styled-components";

const FirstDiv = styled.div`
  overflow: hidden;
  visibility:hidden;
  float: left;
  transform: rotate(120deg);
`;

const SecondDiv = styled.div`
  overflow: hidden;
  visibility:hidden;
  transform: rotate(-60deg);

`;

const ThirdDiv = styled.div`
  overflow: hidden;
  visibility: visible;
  transform: rotate(-60deg);
`;

export default function Hexagon({ url, className, width, height }: { url: string, className?: string, width: number, height: number }) {
  return (
    <FirstDiv className={className}>
      <SecondDiv>
        <ThirdDiv>
          <img src={url} width={width} height={height} alt="cover" />
        </ThirdDiv>
      </SecondDiv>
    </FirstDiv>
  );
}
