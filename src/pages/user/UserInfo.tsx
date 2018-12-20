import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";
import DefaultAvater from "~/static/img/default-avatar.png";
import { Button } from "reactstrap";
import Router from "next/router";
import { User } from "@/models/user/User";

interface Props {
  user: User;
}

const UserInfoStyled = styled.div`
  text-align: center;
  margin: 0 0 20px 0;
  background-color: #FFFFFF;
  border-radius: 1px 1px 1px 1px;
  box-shadow: 0 14px 10px -10px rgba(0,0,0,0.1);
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

export default function UserInfo(props: Props) {

  const settings = () => {
    Router.push("/settings");
  };

  const messages = () => {
    Router.push("/messages");
  };

  let gender = "未填写";

  if (props.user.gender) {
    if (props.user.gender === "female") {
      gender = "女";
    } else if (props.user.gender === "male") {
      gender = "男";
    }
  }

  return (
    <UserInfoStyled>
      <UserInfoPage>
        <Avatar avater={props.user.avatar ? props.user.avatar : DefaultAvater} height={80}/>
        <UserName>{props.user.nickname ? props.user.nickname : "未填写"}</UserName>
        <InfoBlock>
          <InfoLine>性别: <span>{gender}</span></InfoLine>
          {/*<InfoLine>生日: <span>未填写</span></InfoLine>*/}
          <InfoLine>院系: <span>{props.user.department ? props.user.department : "未填写"}</span></InfoLine>
          <InfoLine>专业: <span>{props.user.major ? props.user.major : "未填写"}</span></InfoLine>
          <InfoLine>邮箱: <span>{props.user.email ? props.user.email : "未填写"}</span></InfoLine>
          <InfoLine>QQ号: <span>{props.user.qq ? props.user.qq : "未填写"}</span></InfoLine>
          <InfoLine>年级: <span>{props.user.grade ? props.user.grade : "未填写"}</span></InfoLine>
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
