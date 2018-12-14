import React from "react";
import { Section } from "@/components/ui";
import { Modal, FormGroup, Label, ButtonGroup, Button } from "reactstrap";
import CommentTextArea from "../comment/CommentTextArea";

interface Props {
  courseId: string;
  isOpen: boolean;
}

interface State {
  rate: number;
  pressure: "low" | "moderate" | "high";
  grade: "A" | "B" | "C" | "D" | "E" | "unknown";
  comment: string;
}

export default class FeedbackModal extends React.Component<Props, State> {

  state = {
    rate: 5,
    pressure: "low",
    grade: "A",
    comment: "",
  } as State;

  onCommentChange = (comment) => {
    this.setState({ comment });
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <Section>
          <h4>我上过这门课/反馈</h4>
          <FormGroup>
            <Label for="rate">评分</Label>
            <ButtonGroup>
              <Button>5</Button>
            </ButtonGroup>
          </FormGroup>
          <FormGroup>
            <Label>压力指数</Label>
          </FormGroup>
          <FormGroup>
            <Label>总评成绩</Label>
          </FormGroup>
          <FormGroup>
            <Label>考核方式（可多选）</Label>
          </FormGroup>
          <FormGroup>
            <Label>评论（可选）</Label>
            <CommentTextArea value={this.state.comment} onChange={this.onCommentChange}/>
          </FormGroup>
        </Section>
      </Modal>
    )
  }

}
