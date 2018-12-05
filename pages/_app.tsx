import { Provider as UnstatedProvider } from "unstated";
import App, { Container } from "next/app";
import * as React from "react";
import { initializeStore, IRootStore, RootStore } from "@/stores";

import UNSTATED from "unstated-debug";
import { ApiProvider } from "@/apis";

UNSTATED.logStateChanges = true;

interface IOwnProps {
  isServer: boolean;
  initialState: IRootStore;
}

export default class MyApp extends App<IOwnProps> {

  public static async getInitialProps({Component, router, ctx}) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = (typeof window === "undefined");
    const store = initializeStore(isServer);
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

  private store: RootStore;

  constructor(props) {
    super(props);
    this.store = initializeStore(props.isServer, props.initialState);

  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ApiProvider>
          <UnstatedProvider inject={[this.store]}>
            <Component {...pageProps} />
          </UnstatedProvider>
        </ApiProvider>
      </Container>
    );
  }
}
