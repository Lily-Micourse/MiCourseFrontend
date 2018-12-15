import * as React from "react";
import { Provider } from "unstated";
import { RootStore } from "@/stores/RootStore";
import Store from "./Store";

interface Props {
  stores: Store<any>[];
  children: React.ReactNode;
}

export default function StoreProvider(props: Props) {
  return (
    <Provider inject={props.stores}>
      {props.children}
    </Provider>
  );
}
