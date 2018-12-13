import * as React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

interface Props {
  info: {
    id: string;
    name: string;
    rate: number;
    type: string;
    credit: number;
    department: string;
    cover: string;
  };
}

const BigIconDiv = styled.div`
  height: 322px;
  padding-top: 52px;
  text-align: center;
  background-color: #f5f5f5;
  margin: 0;
`;

const InfoMain = styled.div`
  margin: 36px 28px 0 0;
  color: #999;
`;

const InfoLineDiv = styled.div`
  color: #999;
  
  margin: 0 0 4px 0;

span {
color: #666;
}
`;

function InfoLine(props: { prompt: string, content: string }) {
  return (
    <InfoLineDiv>
      {props.prompt}：
      <span>{props.content}</span>
    </InfoLineDiv>
  );
}

export default function Overview({ info }: Props) {
  return (
      <Row>
        <Col xs={12} sm={8}>
          <BigIconDiv>
            <h3>{info.name}</h3>
            <div>{info.rate}</div>
          </BigIconDiv>
        </Col>
        <Col xs={12} sm={4}>
          <InfoMain>
            <InfoLine prompt={"编号"} content={info.id}/>
            <InfoLine prompt={"类型"} content={info.type}/>
            <InfoLine prompt={"学分"} content={info.credit + ""}/>
            <hr/>
            <InfoLine prompt={"院系"} content={info.department}/>
            <InfoLine prompt={"教师"} content={"placeholder"}/>
            <hr/>
            <InfoLine prompt={"时间"} content={"placeholder"}/>
            <InfoLine prompt={"地点"} content={"placeholder"}/>
          </InfoMain>
        </Col>
      </Row>
  );
}
