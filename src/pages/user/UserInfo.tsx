import React from "react";
import Avater from "./Avater";
import styled from "styled-components";
import DefaultAvater from "~/static/img/default-avatar.png";
import { Button } from "reactstrap";
import Router from "next/router";

const UserInfoStyled = styled.div`
  text-align: center;
`;

const UserInfoPage = styled.div`
  background-color: #f5f5f5;
  padding: 40px 20px 10px;
`;

const UserName = styled.div`
  color: #3a9fcd;
  padding: 0 0 10px;
  font-size: 1.125rem;
  padding: 10px 0 10px 0;
`;

const InfoLine = styled.div`
  margin: 0 0 4px 0;
  span {
    color: #54abd4;
    font-size: .875rem;
  }
`;

const InfoBlock = styled.div`
  margin: 10px 0 20px;
`;

const UserFooter = styled.div`
  text-align: center;
  padding: 10px 0 20px 0;
`;

export default function UserInfo() {

  const settings = () => {
    Router.push("/settings");
  };

  const messages = () => {
    Router.push("/messages");
  };

  return (
    <UserInfoStyled>
      <UserInfoPage>
        <Avater avater={DefaultAvater} height={80}/>
        <UserName>1344885846_qq</UserName>
        <InfoBlock>
          <InfoLine>性别: <span>未填写</span></InfoLine>
          <InfoLine>生日: <span>未填写</span></InfoLine>
          <InfoLine>院系: <span>未填写</span></InfoLine>
          <InfoLine>邮箱: <span>1344885846@qq.com</span></InfoLine>
          <InfoLine>QQ号: <span>未填写</span></InfoLine>
          <InfoLine>入学年份: <span>未填写</span></InfoLine>
        </InfoBlock>
      </UserInfoPage>
      <UserFooter>
        <Button
          style={{ margin: "8px" }}
          block={false}
          color="primary"
          size="sm"
          onClick={messages}
        >消息盒子
        </Button>
        <Button
          style={{ margin: "8px" }}
          block={false}
          color="primary"
          size="sm"
          onClick={settings}
        >设置
        </Button>
      </UserFooter>
    </UserInfoStyled>
  );

}
