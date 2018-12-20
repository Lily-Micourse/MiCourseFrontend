import * as React from "react";
import styled from "styled-components";
import sixBg from "~/static/img/sixBg.png";
import breakpoints from "@/utils/breakpoints";

interface Props {
  title: string;
  items: { [s: string]: number };
  mapKeys: { [key: string]: string };
}

const ScoreCard = styled.div`
  text-align: center;
`;

const ScoreHeader = styled.div`
  display: inline-block;
  color: #7d7d7d;
  width: 100%;
  margin: 24px 0 0 0;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  border-bottom: solid 2px #eee;

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.lgMax}) {
    display: inline-block;
    color: #7d7d7d;
    width: 80%;
    margin: 24px 0 0 0;
    padding: 0 8px;
    font-weight: bold;
    font-size: 14px;
    border-bottom: solid 2px #eee;
  }

`;

const Rates = styled.div`
  display: inline-block;
`;

const RateLabels = styled.div`
  padding: 5px 8px 0 0;
  border-right: solid 2px #eee;
  color: #b5b5b5;
  text-align: right;

  float: left;

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.lgMax}) {
    padding: 0 4px 0 0;
    border-right: solid 2px #eee;

    div {
      font-size: .75rem;
      padding: 0;
      margin: 0;
    }
  }
`;

const RatePowers = styled.div`
  padding: 5px 0 0 3px;
  text-align: left;

  float: left;

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.lgMax}) {
  padding: 0 0 0 2px;
  text-align: left;

  div span {
    font-size: .625rem;
  }
  }
`;

const RatePower = styled.div`
  display: inline-block;
  height: 16px;
  margin: 0 2px 0 2px;
  background: #fbd16f;
  vertical-align: middle;
  width: ${({ width }) => width}px;

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.lgMax}) {
    display: inline-block;
    height: 12px;
    margin: 0 2px 0 2px;
    background: #fbd16f;
    vertical-align: middle;
  }
`;

const OrangeFont = styled.span`
  color: #fbd16f;
`;

const ScoreBackground = styled.img`
  width: 90%;
  position: absolute;

  max-width: 100%;
  height: auto;

  @media (max-width: ${breakpoints.smMax}) {
    display: none;
  }
`;

export default function CourseIndex({ title, items, mapKeys }: Props) {
  return (
    <ScoreCard>
      <ScoreBackground src={sixBg} />
      <ScoreHeader>{title}</ScoreHeader>
      <Rates>
        <RateLabels>
          {Object.keys(items).map((x) => <div key={x}>{mapKeys[x]}</div>)}
        </RateLabels>
        <RatePowers>
          {Object.keys(items).map((x) => {
            const value = items[x];
            return (
              <div key={x}>
                <RatePower width={value} />
                <OrangeFont>{value}人</OrangeFont>
              </div>
            );
          })}
        </RatePowers>
      </Rates>
    </ScoreCard>
  );
}
