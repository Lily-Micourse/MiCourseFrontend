import { IRootStore } from "@/stores/storeConfig";
import Store, { StoreType } from "@/stores/Store";
import { isBrowser } from "@/utils/isBrowser";

export class RootStore {
  
  get storeState(): IRootStore {
    const obj = { } as any;
    this.allStores.forEach((value, key) => {
      obj[key] = value.state;
    });
    return obj;
  }

  allStores: Map<string, Store<any>> = new Map();

  constructor(storeConfig: StoreType<any>[], isServer: boolean, state?: IRootStore) {
    storeConfig.forEach((x) => {
      this.allStores.set(x.name, new x());
    });

    if (state) {
      this.setStoreState(state);
    }

  }

  setStoreState(state: IRootStore) {

    return Promise.all(Object.keys(state).map((x) => {
      const container = this.allStores.get(x);
      if (container) {
        container.setState(state[x]).then(() => {
          if (isBrowser()) {
            container.afterHydration();
          }
        });
      }
    }));
  }

}
