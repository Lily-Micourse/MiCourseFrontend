import * as React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { Section } from "@/components/ui";
import breakpoints from "@/utils/breakpoints";
import star from "~/static/img/star.png";
import starEm from "~/static/img/starEm.png";
import literature from "~/static/icons/literature.png";
import { range } from "@/utils/range";
import FeedbackButtonGroup from "./FeedbackButtonGroup";
import Hexagon from "@/components/ui/Hexagon";

interface Props {
  info: {
    id: string;
    name: string;
    rate: number;
    type: string;
    credit: number;
    department: string;
    cover: string;
    terms: string[];
  };
  children: React.ReactNode;
}

const InfoAvatar = styled.div`
  height: 322px;
  padding-top: 52px;
  text-align: center;
  background-color: #f5f5f5;
  margin: 0;

  @media (max-width: ${breakpoints.smMax}) {
    padding: 36px 48px;
  }

  h3 {
      font-weight: bold;
    margin-top: 15px;
    padding: 0 14px;
  }

  .score {
    margin: 12px 0 20px 0;
  }

  .score img {
    display: inline-block;
    width: 4%;
    margin: 2px;
}

  .score span{
    vertical-align: middle;

  }

`;

const InfoMain = styled.div`
  margin: 36px 28px 0 0;
  color: #999;
  padding: 0;

  @media (max-width: ${breakpoints.smMax}) {
    margin: 36px 28px 36px 24px;
  }
`;

const InfoLineDiv = styled.div`
  color: #999;

  margin: 0 0 4px 0;

span {
color: #666;
}
`;

const InfoIcon = styled.div`
  display: inline-block;
`;

const StyledSection = styled(Section)`
  padding: 0;
`;

function InfoLine(props: { prompt: string, content: string }) {
  return (
    <InfoLineDiv>
      {props.prompt}：
      <span>{props.content}</span>
    </InfoLineDiv>
  );
}

function Star({ rate }: { rate: number }) {
  let rounded = Math.floor(rate);
  if (rate - rounded >= 0.5) {
    rounded++;
  }
  return (
    <div className={"score"}>
      {range(0, rounded).map((x) => <img src={star} key={x} />)}
      {range(rounded, 5).map((x) => <img src={starEm} key={x} />)}
      <span>{rate}</span>
    </div>
  );

}

export default function Overview({ info, children }: Props) {
  return (
    <StyledSection>
      <Row>
        <Col md={8}>
          <InfoAvatar>
            <InfoIcon>
              <Hexagon width={64} height={80} url={literature} />
            </InfoIcon>
            <h3>{info.name}</h3>
            <Star rate={info.rate} />
            {children}
          </InfoAvatar>
        </Col>
        <Col md={4}>
          <InfoMain>
            <InfoLine prompt={"编号"} content={info.id} />
            <InfoLine prompt={"类型"} content={info.type} />
            <InfoLine prompt={"学分"} content={info.credit + ""} />
            <hr />
            <InfoLine prompt={"院系"} content={info.department} />
            <InfoLine prompt={"教师"} content={"placeholder"} />
            <hr />
            <InfoLine prompt={"时间"} content={"placeholder"} />
            <InfoLine prompt={"地点"} content={"placeholder"} />
          </InfoMain>
        </Col>
      </Row>
    </StyledSection>
  );
}
