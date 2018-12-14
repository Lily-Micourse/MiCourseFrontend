import React from "react";
import Avater from "./Avater";
import styled from "styled-components";
import DefaultAvater from "~/static/img/default-avatar.png";

const UserInfoPage = styled.div`
  text-align: center;
`;

export default function UserInfo() {

  return (
    <UserInfoPage>
      <Avater avater={DefaultAvater} height={80}/>
      <div className="profile-name f-18">1344885846_qq<span className="f-sub"/></div>
      <div className="profile-block">
        <span className="f-14">在上: <span className="f-14 f-main">0</span></span>
        <span className="f-14">上过: <span className="f-14 f-main">2</span></span>
        <span className="f-14">想上: <span className="f-14 f-main">2</span></span>
      </div>
      <div className="profile-block">
        <div className="info-line">院系: <span>未填写</span></div>
        <div className="info-line">邮箱: <span>1344885846@qq.com</span></div>
        <div className="info-line">入学年份: <span>未填写</span></div>
      </div>
    </UserInfoPage>
  );

}
