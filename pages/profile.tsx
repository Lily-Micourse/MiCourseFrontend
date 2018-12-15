import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import UserInfo from "@/pages/user/UserInfo";
import CommonPage from "@/pages/user/CommonPage";

export default class Profile extends React.Component {
  render() {
    return (
      <IndexLayout>
        <CommonPage>
          <UserInfo/>
          <div>消息界面</div>
        </CommonPage>
      </IndexLayout>
    );
  }
}
