import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { Subscribe } from "unstated";
import { UserService } from "@/apis/UserService";
import connect from "@/utils/Connect";

interface Props {

}

export default class IndexPage extends React.Component<Props> {

  render() {
    return (
      <IndexLayout>
              Try login
      </IndexLayout>
    );
  }
}
