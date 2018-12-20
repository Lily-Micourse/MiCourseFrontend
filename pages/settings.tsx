import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import CommonPage from "@/pages/user/CommonPage";
import styled from "styled-components";
import Section from "@/components/ui/Section";
import { Nav, NavItem, NavLink } from "reactstrap";
import SettingBasic from "@/pages/user/settings/SettingBasic";
import SettingAvater from "@/pages/user/settings/SettingAvater";
import SettingPassword from "@/pages/user/settings/SettingPassword";
import { UserService } from "@/apis/UserService";
import { useApiService } from "@/apis";
import { User } from "@/models/user/User";

interface State {
  SelectBasic: boolean;
  SelectAvater: boolean;
  SelectPassword: boolean;
}

interface Props {
  userInfo: User;
}

const TransitionBlock = styled.div`
  display: ${({ visibility }) => (visibility ? "block" : "none")};
  
  label {
    font-weight: bold !important;
  }
`;

const SideBar = styled.div`

  ul li {
    padding: 12px 16px;
    border-left: 3px solid #7d7d7d;
    font-size: 1rem;
    cursor: pointer;
    list-style-type: none;
  }
  
  li:hover {
    color: #3a9fcd;
    border-left: 15px solid #88C5E1;
    transition: 0.25s ease-out;
  }
  
  .nav-link {
    padding: 0;
  }
  
  a {
    color: rgb(102, 102, 102);
  }
  
`;

const SelectLink = styled.div`

  li {
    border-left: 3px solid ${({ selected }) => (selected ? "#88C5E1" : "3px solid #7d7d7d")} !important;
  }
  a {
    color: ${({ selected }) => (selected ? "rgb(136, 197, 225)" : "rgb(102, 102, 102)")};
  }
  
`;

export default class Setting extends React.Component<Props, State> {

  static async getInitialProps() {
    const userService = useApiService(UserService);
    return {
      userInfo: await userService.getInfo(),
    };
  }

  state = {
    SelectBasic: true,
    SelectAvater: false,
    SelectPassword: false,
  };

  onSelectBasic = () => {
    this.setState({
      SelectBasic: true,
      SelectAvater: false,
      SelectPassword: false,
    });
  }

  onSelectAvater = () => {
    this.setState({
      SelectBasic: false,
      SelectAvater: true,
      SelectPassword: false,
    });
  }

  onSelectPassword = () => {
    this.setState({
      SelectBasic: false,
      SelectAvater: false,
      SelectPassword: true,
    });
  }

  render() {
    return (
      <IndexLayout>
        <CommonPage>
          <Section>
            <SideBar>
              <Nav vertical>
                <NavItem>
                  <NavLink href="/profile">返回个人主页</NavLink>
                </NavItem>
                <SelectLink selected={this.state.SelectBasic} onClick={this.onSelectBasic}>
                  <NavItem>
                    <NavLink href="#">基本资料</NavLink>
                  </NavItem>
                </SelectLink>
                <SelectLink selected={this.state.SelectAvater} onClick={this.onSelectAvater}>
                  <NavItem>
                    <NavLink href="#">修改头像</NavLink>
                  </NavItem>
                </SelectLink>
                <SelectLink selected={this.state.SelectPassword} onClick={this.onSelectPassword}>
                  <NavItem>
                    <NavLink href="#">修改密码</NavLink>
                  </NavItem>
                </SelectLink>
              </Nav>
            </SideBar>
          </Section>
          <TransitionBlock visibility={this.state.SelectBasic}>
            <SettingBasic userInfo={this.props.userInfo}/>
          </TransitionBlock>
          <TransitionBlock visibility={this.state.SelectAvater}>
            <SettingAvater/>
          </TransitionBlock>
          <TransitionBlock visibility={this.state.SelectPassword}>
            <SettingPassword/>
          </TransitionBlock>
        </CommonPage>
      </IndexLayout>
    );
  }

}
