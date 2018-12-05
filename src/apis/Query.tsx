import * as React from "react";

interface Props<T> {
  children: (data: T | undefined,
             loading: boolean,
             error: any,
             refetch: () => void,
  ) => React.ReactNode;
  call: () => Promise<T>;
}

interface State<T> {
  loading: boolean;
  error: any;
  data?: T;
}

export default class Query<T> extends React.PureComponent<Props<T>, State<T>> {

  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  fetch = () => {
    this.setState({
      loading: true,
    });

    this.props.call().then((data) => {
      this.setState({
        loading: false,
        error: null,
        data,
      });
    }).catch((e) => {
      this.setState({
        loading: false,
        error: e,
        data: undefined,
      });
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { data, loading, error } = this.state;
    return this.props.children(data, loading, error, this.fetch);
  }
}
