import * as React from "react";
import SampleComponent from "../src/components/SampleComponent";

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <p>Hello Next.js</p>
        <SampleComponent title={"Index Page"} linkTo="/other" />
      </div>
    );
  }
}
