import * as React from "react";
import { IStore, Store } from "../stores/store";
import { Subscribe } from "unstated";
import Link from "next/link";

interface IOwnProps {
  store?: IStore;
  title: string;
  linkTo: string;
}

export default class SampleComponent extends React.Component<IOwnProps> {
  render() {
    return (
      <Subscribe to={[Store]}>
        {(store: Store) => {
          return <div>
            <p>Current value: <span id="value">{store.state.value}</span></p>
            <h1>{this.props.title}</h1>
            <button onClick={() => store.increment()}>Increment</button>
            <button onClick={() => store.decrement()}>Decrement</button>
            <br />
            <Link href={this.props.linkTo}><span>To another page</span></Link>
          </div>;
        }}
      </Subscribe>
    );
  }
}
