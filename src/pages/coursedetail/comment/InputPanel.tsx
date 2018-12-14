import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import TermSelection from "./TermSelection";
import { withAlert, WithAlertProps } from "@/components/alert";
import CommentTextArea from "./CommentTextArea";

interface Props extends WithAlertProps {
  courseId: string;
  refreshComments(): void;
}

interface State {
  input: string;
  term: string;
}

const InputGroupComment = styled.div`
  padding: 0 0 18px 0;
`;


const SpaceBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;

`;

@withAlert
export default class InputPanel extends React.Component<Props, State> {

  state = {
    input: "",
    term: "",

  };



  onComment = async () => {
    const { courseId, refreshComments, alert } = this.props;
    const { input, term } = this.state;
    const courseService = useApiService(CourseService);

    await courseService.comment(courseId, input, term);
    alert!.success("评论成功！");
    refreshComments();
  }

  onTextareaChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onTermChange = (term: string) => {
    this.setState({ term });
  }

  render() {
    return (
      <InputGroupComment>
        <CommentTextArea onChange={this.onTextareaChange} value={this.state.input}  />
        <SpaceBetweenDiv>
          <TermSelection courseId={this.props.courseId} onTermSelected={this.onTermChange} />
          <Button color="primary" className="pull-right" onClick={this.onComment}>
            评价这门课
          </Button>
        </SpaceBetweenDiv>

      </InputGroupComment>
    )
  }
}
