import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { UserService } from "@/apis/UserService";
import Connect, { tuple } from "@/utils/Connect";
import { UserStore } from "@/stores/UserStore";
import { connect, ConnectedProps } from "@/utils/ConnectHOC";

interface Props extends ConnectedProps {

}

@connect({
  stores: [UserStore],
})
export default class IndexPage extends React.Component<Props> {

  render() {
    const userStore = this.props.useStore(UserStore);
    const userService = this.props.useService(UserService);
    return (
      <IndexLayout>
        <p>
          {userStore ? "store ok" : "store not ok"}
          {userService ? "service ok" : "service not ok"}
        </p>;
      </IndexLayout>
    );
  }
}
