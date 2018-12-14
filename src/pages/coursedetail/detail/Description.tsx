import * as React from "react";
import { Section } from "@/components/ui";

interface Props {
  content: string;
}

interface State {
  expanded: boolean;
}

const charLimit = 100;

export default class Description extends React.Component<Props, State> {

  state = {
    expanded: false,
  };

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    return (
      <Section>
        <h4>课程简介</h4>
        <p>{
          this.state.expanded
          ? this.props.content
          : this.props.content.slice(0, charLimit)
        }</p>
        <a onClick={this.toggle}>
          {this.state.expanded
            ? "收回"
            : "展开"
          }
        </a>
      </Section>
    );
  }

}
