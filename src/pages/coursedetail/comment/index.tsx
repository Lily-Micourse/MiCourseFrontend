import React from "react";
import { Section } from "@/components/ui";
import InputPanel from "./InputPanel";
import { Comment } from "@/models/course/CourseComment";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import CommentItem from "./CommentItem";
import styled from "styled-components";
import { WithAlertProps, withAlert } from "@/components/alert";

interface Props {
  terms: string[];
  courseId: string;
}

interface State {
  loading: boolean;
  comments: Comment[];
}

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {

    }
`;


export default class CourseCommentPanel extends React.Component<Props, State> {

  state = {
    loading: true,
    comments: [] as Comment[],
  };

  fetch = async () => {

    this.setState({ loading: true });

    const courseService = useApiService(CourseService);

    const comments = await courseService.getCourseComments(this.props.courseId);

    this.setState({
      loading: false,
      comments,
    });

  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { loading, comments } = this.state;
    return (
      <Section>
        <h4>课程评论</h4>
        <InputPanel
          terms={this.props.terms}
          courseId={this.props.courseId}
          refreshComments={this.fetch}
        />
        {loading
          ? "加载评论中……"
          : (
            <Ul>
              {comments.map((x) => <CommentItem key={x.id} comment={x} />)}
            </Ul>
          )
        }
      </Section>
    );
  }
}
