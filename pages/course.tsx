import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { useApiService } from "@/apis";
import { UserService } from "@/apis/UserService";

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
