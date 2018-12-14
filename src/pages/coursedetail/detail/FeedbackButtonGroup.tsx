import * as React from "react";
import FeedbackModal from "./FeedbackModal";

interface Props {
  courseId: string;
}

interface State {
  modalOpen: boolean;
}

export default class FeedbackButtonGroup extends React.Component<Props, State> {

  state = {
    modalOpen: true,
  }

  render() {
    return <>
    <FeedbackModal isOpen={this.state.modalOpen} courseId={this.props.courseId}/>
    </>;
  }
}
