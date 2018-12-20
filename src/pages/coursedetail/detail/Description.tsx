import * as React from "react";
import { Section } from "@/components/ui";
import { Collapse } from "reactstrap";

interface Props {
  content: string;
}

interface State {
  expanded: boolean;
}

const charLimit = 100;

export default class Description extends React.Component<Props, State> {

  description1: string = "";
  description2: string = "";

  state = {
    expanded: false,
  };

  constructor(props) {
    super(props);

    this.description1 = this.props.content.slice(0, charLimit);
    this.description2 = this.props.content.slice(charLimit + 1);
  }

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    return (
      <Section>
        <h4>课程简介</h4>
        <p>{this.props.content}</p>
        {/* <div>{this.description1}</div>
        <Collapse isOpen={this.state.expanded}>
          <div>
            {this.description2}
          </div>
        </Collapse>
        <a onClick={this.toggle}>
          {this.state.expanded
            ? "收回"
            : "展开"
          }
        </a> */}
      </Section>
    );
  }

}
