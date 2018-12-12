import * as React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Router from "next/router";
import { CourseListQueryType } from "@/pages/courselist/CourseList";
import { string } from "~/node_modules/@types/prop-types";

interface Props {
}

interface State {
  keyword: string;
}

export default class SearchBar extends React.Component<Props, State> {

  state = { keyword: "" }

  handleKeywordChange = (e) => {
    this.setState({ keyword: e.target.value });
  }

  handleSubmit = () => {

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
