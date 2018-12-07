import { Container, ContainerType } from "unstated";
import { IUserStore, UserStore } from "@/stores/UserStore";
import { IRootStore, StoreConfig } from "@/stores/storeConfig";

export class RootStore {

  allStores: Map<string, Container<any>> = new Map();
  
  get storeState(): IRootStore {
    const obj = { } as any;
    this.allStores.forEach((value, key) => {
      obj[key] = value.state;
    });
    return obj;
  }

  set storeState(state: IRootStore) {

    Object.keys(state).forEach((x) => {
      const container = this.allStores.get(x);
      if (container) {
        container.setState(state[x]);
      }
    });
  }

  constructor(storeConfig: StoreConfig[], isServer: boolean, state?: IRootStore) {
    storeConfig.forEach((x) => {
      this.allStores.set(x.name, new x());
    });

    if (state) {
      this.storeState = state;
    }

  }

}
