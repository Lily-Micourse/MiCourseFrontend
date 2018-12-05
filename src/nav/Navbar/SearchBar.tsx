import * as React from "react";
import { Form, FormGroup, Input } from "reactstrap";

interface Props {

}
export default class SearchBar extends React.Component<Props> {
  render() {

    return (
      <Form>
        <FormGroup>
          <Input placeholder={"查找课程..."}/>
        </FormGroup>
      </Form>
    );
  }
}
