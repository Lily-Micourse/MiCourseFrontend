import * as React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useApiService } from "@/apis";
import { UserService } from "@/apis/UserService";
import { withAlert, WithAlertProps } from "@/components/alert";

interface Props extends WithAlertProps {

}

interface State {
  username: string;
  password: string;
  signingUp: boolean;
}

@withAlert
export default class SignUpForm extends React.Component<Props, State> {

  state = {
    username: "",
    password: "",
    signingUp: false,
  };

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  submit = async (e) => {
    e.preventDefault();
    const { alert } = this.props;
    const { username, password } = this.state;

    if (!username || !password) {
      alert!.error("请输入用户名和密码！");
    }

    const userService = useApiService(UserService);

    try {
      const result = await userService.signUp(username, password);
      if (result === "success") {
        alert!.success("注册成功!");
      } else {
        alert!.error("用户名已存在。");
      }
    } catch (e) {
      alert!.error("出现了一些问题。");
    }
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            value={this.state.username}
            onChange={this.handleUsernameChange}
            placeholder={"用户名"}
          />
        </FormGroup>
        <FormGroup>
          <Input
            value={this.state.password}
            onChange={this.handlePassword}
            placeholder={"密码"}
          />
        </FormGroup>
        <Button
          className="login-btn mt-3"
          block={true}
          color="primary"
          size="lg"
          disabled={this.state.signingUp}
          onClick={this.submit}
        >
          { this.state.signingUp
            ? "注册中"
            : "注册"
          }
        </Button>
      </Form>
    );
  }
}
