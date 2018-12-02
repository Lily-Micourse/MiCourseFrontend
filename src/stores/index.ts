import { Container } from "unstated";

export interface IRootStore {

}

export class RootStore extends Container<IRootStore> {

  state = { };

  getSnapshot() {
    return this.state;
  }

}

export function initializeStore(isServer: boolean, initialState?: IRootStore): RootStore {
  return new RootStore();
}
