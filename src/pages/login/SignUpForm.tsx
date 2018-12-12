import * as React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

interface State {
  username: string;
  password: string;
}

export default class SignUpForm extends React.Component<{}, State> {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input/>
        </FormGroup>
        <FormGroup>
          <Input/>
        </FormGroup>
        <Button className="mt-4" block color="primary" size="lg">注册</Button>
      </Form>
    );
  }
}
