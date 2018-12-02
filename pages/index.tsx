import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { Subscribe } from "unstated";
import { UserService } from "@/apis/UserService";

interface Props {

}

export default class IndexPage extends React.Component<Props> {

  render() {
    return (
      <IndexLayout>
        <Subscribe to={[UserService]}>
          {(userService: UserService) => {
            return <button onClick={() => {
              console.log(userService.login("123", "123"));
            }}>
              Try login
            </button>;
          }}
        </Subscribe>
      </IndexLayout>
    );
  }
}
