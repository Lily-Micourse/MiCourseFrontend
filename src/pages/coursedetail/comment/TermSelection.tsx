import React from "react";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import { Input, FormGroup, Label } from "reactstrap";

interface Props {
  courseId: string;
  onTermSelected(term: string): void;
}

interface State {
  term: string;
  loading: boolean;
  availableTerms: string[];
}

export default class TermSelection extends React.Component<Props, State> {

  state = {
    term: "",
    loading: true,
    availableTerms: [] as string[]
  };

  fetch = async () => {
    this.setState({ loading: true });
    const courseService = useApiService(CourseService);
    const terms = await courseService.getAllTerms(this.props.courseId);

    this.setState({
      loading: false,
      term: terms[0],
      availableTerms: terms,
    });
  }

  componentDidMount() {
    this.fetch();
  }

  onSelect = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    if (this.state.loading) {
      return <Input type="select" name="select" placeholder="正在加载学期" disabled={true}/>;
    }
    return (
      <Input type="select" name="select" placeholder="选择一个学期" onChange={this.onSelect} value={this.state.term}>
        {this.state.availableTerms.map((x) => <option value={x} key={x}>{x}</option>)}
      </Input>
    );
  }


}
