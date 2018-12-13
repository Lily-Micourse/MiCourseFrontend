import * as React from "react";
import { Section } from "@/components/ui";

interface Props {
  content: string;
}

interface State {
  expanded: boolean;
}

export default class Description extends React.Component<Props, State> {

  state = {
    expanded: false,
  };

  render() {
    return (
      <Section>
        <h4>课程简介</h4>
        <p>{this.props.content}</p>
      </Section>
    );
  }

}
