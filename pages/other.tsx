import * as React from "react";
import { SampleComponent } from "../src/components/SampleComponent";

export default class OtherPage extends React.Component {
  render() {
    return (
      <SampleComponent title={"Other Page"} linkTo="/" />
    );
  }
}
