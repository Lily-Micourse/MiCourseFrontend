import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { UserService } from "@/apis/UserService";
import { useApiService } from "@/apis";

export default class CoursePage extends React.Component {

  static async getInitialProps() {
    const service = useApiService(UserService);
    return {};
  }

  render() {
    return (
      <IndexLayout>
        课程页面
      </IndexLayout>
    );
  }
}
