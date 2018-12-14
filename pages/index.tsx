import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { UserStore } from "@/stores/UserStore";
import { connect, ConnectedProps } from "@/stores/connect";

interface Props extends ConnectedProps {
}

@connect(UserStore)
export default class IndexPage extends React.Component<Props> {

  render() {
    const userStore = this.props.useStore!(UserStore);
    return (
      <IndexLayout>
        <p>
          {userStore ? "store ok" : "store not ok"}
        </p>;
      </IndexLayout>
    );
  }
}
