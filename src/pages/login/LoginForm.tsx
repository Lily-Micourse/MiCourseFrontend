import * as React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Link from "next/link";
import { UserService } from "../../apis/UserService";
import { UserStore } from "../../stores/UserStore";
import { connect, ConnectedProps } from "../../stores/connect";
import Router from "next/router";

interface State {
  username: string;
  password: string;
}

interface Props extends ConnectedProps {

}

@connect(UserStore)
export default class LoginForm extends React.Component<Props, State> {
  state = {
    username: "",
    password: "",
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
    const userStore = this.props.useStore!(UserStore);
    await userStore.login(this.state.username, this.state.password);
    Router.push("/");
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input value={this.state.username} onChange={this.handleUsernameChange}/>
        </FormGroup>
        <FormGroup>
          <Input value={this.state.password} onChange={this.handlePassword}/>
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
        <Button className="login-btn mt-3" block color="primary" size="lg" onClick={this.login}>登陆</Button>
      </Form>
    );
  }
}
