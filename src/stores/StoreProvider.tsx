import * as React from "react";
import { Provider } from "unstated";
import { RootStore } from "@/stores/RootStore";

interface Props {
  rootStore: RootStore;
  children: React.ReactNode;
}

export default function StoreProvider(props: Props) {
  return (
    <Provider inject={[...props.rootStore.allStores.values()]}>
      {props.children}
    </Provider>
  );
}
