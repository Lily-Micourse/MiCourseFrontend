import { observer } from "mobx-react";
import Link from "next/link";
import * as React from "react";
import injectStore from "../stores/injectStore";
import { IStore } from "../stores/store";
import { Clock } from "./Clock";

interface IOwnProps {
  store?: IStore;
  title: string;
  linkTo: string;
}

@injectStore
@observer
class SampleComponent extends React.Component<IOwnProps> {
  componentDidMount() {
    if (!this.props.store) {
      return;
    }
    this.props.store.start();
  }

  componentWillUnmount() {
    if (!this.props.store) {
      return;
    }
    this.props.store.stop();
  }

  render() {
    if (!this.props.store) {
      return (
        <div>
          Store not defined
        </div>
      );
    }
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock lastUpdate={this.props.store.lastUpdate} light={this.props.store.light} />
        <nav>
          <Link href={this.props.linkTo}><a>Navigate</a></Link>
        </nav>
      </div>
    );
  }
}

export { SampleComponent };
