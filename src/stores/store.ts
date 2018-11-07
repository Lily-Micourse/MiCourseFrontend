import { Container } from "unstated";

export interface IStore {
  value: number;
}

export class Store extends Container<IStore> {
  constructor(value: number = 10) {
    super();
    this.state = { value };
  }

  applySnapshot(snapshot: Partial<IStore>) {
    this.setState({
      value: snapshot.value,
    });
  }

  getSnapshot() {
    return this.state;
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  decrement() {
    this.setState({ value: this.state.value - 1 });
  }

}

export const initializeStore = (isServer, snapshot?: Partial<IStore>) => {
  if (isServer) {
    return new Store(15);
  } else if (snapshot) {
    const store = new Store();
    store.applySnapshot(snapshot);
    return store;
  } else {
    return new Store();
  }
};
