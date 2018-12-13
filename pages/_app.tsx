import App, { Container } from "next/app";
import * as React from "react";
import { RootStore } from "@/stores/RootStore";

import UNSTATED from "unstated-debug";

import storeConfig, { IRootStore } from "@/stores/storeConfig";
import StoreProvider from "@/stores/StoreProvider";

UNSTATED.logStateChanges = true;

interface IOwnProps {
  isServer: boolean;
  initialState: IRootStore;
}

export default class MyApp extends App<IOwnProps> {

  public static async getInitialProps({ Component, router, ctx }) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = (typeof window === "undefined");
    const store = new RootStore(storeConfig, isServer);
    //
    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    //
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      initialState: store.storeState,
      isServer,
      pageProps,
    };
  }

  private store: RootStore;

  constructor(props) {
    super(props);
    this.store = new RootStore(storeConfig, props.isServer, props.initialState);

  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
          <StoreProvider rootStore={this.store}>
            <Component {...pageProps} />
          </StoreProvider>
      </Container>
    );
  }
}
