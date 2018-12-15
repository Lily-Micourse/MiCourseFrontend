import * as React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Link from "next/link";
import { UserService } from "../../apis/UserService";
import { UserStore } from "../../stores/UserStore";
import { connect, ConnectedProps } from "../../stores/connect";
import Router from "next/router";
import { withAlert, WithAlertProps } from "@/components/alert";

interface State {
  username: string;
  password: string;
  loggingIn: boolean;
}

interface Props extends ConnectedProps, WithAlertProps {

}

@withAlert
class LoginForm extends React.Component<Props, State> {
  state = {
    username: "",
    password: "",
    loggingIn: false,
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

  login = async () => {

    const { username, password } = this.state;
    const { alert, useStore } = this.props;
    if (!username || !password) {
      alert!.error("请输入用户名和密码！");
      return;
    }

    this.setState({ loggingIn: true });
    const userStore = useStore(UserStore);
    try {
      await userStore.login(username, password);
      alert!.success("登录成功");
      Router.push("/");
    } catch (e) {
      alert!.error("出现了错误");
    }
    this.setState({ loggingIn: false });
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
        <FormGroup check>
          <Label check>
            <Input type="checkbox"/>记住我
          </Label>
          <div className="pull-right">
            <Link href="/">
              <a className="text-white">忘记密码</a>
            </Link>
          </div>
        </FormGroup>
        <Button
          className="login-btn mt-3"
          block={true}
          color="primary"
          size="lg"
          disabled={this.state.loggingIn}
          onClick={this.login}
        >
          { this.state.loggingIn
            ? "登录中"
            : "登录"
          }
        </Button>
      </Form>
    );
  }
}

export default connect(UserStore)(LoginForm);
