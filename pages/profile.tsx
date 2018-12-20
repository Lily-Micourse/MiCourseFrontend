import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import UserInfo from "@/pages/user/UserInfo";
import CommonPage from "@/pages/user/CommonPage";
import { User } from "@/models/user/User";
import { useApiService } from "@/apis";
import { UserService } from "@/apis/UserService";
import { Section } from "@/components/ui/index";

interface Props {
  userInfo: User;
}

export default class Profile extends React.Component<Props> {

  static async getInitialProps() {
    const userService = useApiService(UserService);
    return {
      userInfo: await userService.getInfo(),
    };
  }

  render() {
    return (
      <IndexLayout>
        <CommonPage>
          <UserInfo user={this.props.userInfo}/>
          <Section>
            消息界面
          </Section>
        </CommonPage>
      </IndexLayout>
    );
  }
}
