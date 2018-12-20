import * as React from "react";
import { Section } from "@/components/ui/index";
import { Button, Form, FormGroup, FormFeedback, Label, Input } from "reactstrap";
import { UserPasswordSetting } from "@/models/user/UserPasswordSetting";
import { useApiService } from "@/apis";
import { UserService } from "@/apis/UserService";
import { withAlert, WithAlertProps } from "@/components/alert";

interface State {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
  loading: boolean;
}

interface Props extends WithAlertProps {

}

@withAlert
export default class SettingPassword extends React.Component<Props, State> {

  state = {
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
    loading: false,
  }

  update = async (e) => {
    const { alert } = this.props;
    if (!(this.state.newPassword === this.state.newPasswordConfirm)) {
      alert!.error("两次密码不一致");
    } else {
      this.setState({
        loading: true,
      });
      const userService = useApiService(UserService);
      try {
        const result = await userService.setPassword({
          oldPassword: this.state.oldPassword,
          newPassword: this.state.newPassword,
        });
        this.setState({
          loading: false,
        });
        if (result === "success") {
          alert!.success("更新成功");
        } else if (result === "incorrect") {
          alert!.success("密码不正确");
        }
      } catch (e) {
        alert!.error("出现了错误");
      }
    }
  }

  changeOldPassword = (e) => {
    this.setState({
      oldPassword: e.target.value,
    });
  }

  changeNewPassword = (e) => {
    this.setState({
      newPassword: e.target.value,
    });
  }

  changeNewPasswordConfirm = (e) => {
    this.setState({
      newPasswordConfirm: e.target.value,
    });
  }

  render() {
    return (
      <Section>
        <h4>
          修改密码
        </h4>
        <Form>
          <FormGroup>
            <Label for="exampleText">旧密码</Label>
            <Input type="password" name="password" onChange={this.changeOldPassword} value={this.state.oldPassword}/>
            <FormFeedback invalid>密码错误</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">新密码</Label>
            <Input type="password" name="password" onChange={this.changeNewPassword} value={this.state.newPassword}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">确认新密码</Label>
            <Input type="password" name="password" onChange={this.changeNewPasswordConfirm} value={this.state.newPasswordConfirm}/>
            <FormFeedback invalid>两次密码不一致哦</FormFeedback>
          </FormGroup>
        </Form>
        <Button
          block={false}
          color="primary"
          size="sm"
          onClick={this.update}
        >
          { this.state.loading
            ? "更新中"
            : "更新"
          }
        </Button>
      </Section>
    );
  }

}
