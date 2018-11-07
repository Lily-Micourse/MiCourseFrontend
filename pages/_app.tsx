import { Provider } from "unstated";
import App, { Container } from "next/app";
import React from "react";
import { initializeStore, IStore, Store } from "../src/stores/store";

interface IOwnProps {
  isServer: boolean;
  initialState: IStore;
}

class MyApp extends App<IOwnProps> {

  public static async getInitialProps({ Component, router, ctx }) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = (typeof window === "undefined");
    const store = initializeStore(isServer);
    console.log(store);
    //
    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    //
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      initialState: store.getSnapshot(),
      isServer,
      pageProps,
    };
  }

  private store: Store;

  constructor(props) {
    super(props);
    this.store = initializeStore(props.isServer, props.initialState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider inject={[this.store]}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
