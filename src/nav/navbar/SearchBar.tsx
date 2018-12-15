import * as React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import Router from "next/router";

interface Props {
}

interface State {
  keyword: string;
}

export default class SearchBar extends React.Component<Props, State> {

  state = { keyword: "" };

  handleKeywordChange = (e) => {
    this.setState({ keyword: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Router.push({
      pathname: "/course",
      query: { queryType: "string", query: this.state.keyword },
    })
    ;
  }

  render() {
    return (
      <Form className="center-vertical" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Input placeholder={"查找课程..."} value={this.state.keyword} onChange={this.handleKeywordChange}/>
        </FormGroup>
      </Form>
    );
  }
}
