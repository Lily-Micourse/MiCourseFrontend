import * as React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

interface Props {
}

export default class SearchBar extends React.Component<Props> {
  render() {
    return (
      <Form className="center-vertical">
        <FormGroup>
          <Input placeholder={"查找课程..."}/>
        </FormGroup>
      </Form>
    );
  }
}
