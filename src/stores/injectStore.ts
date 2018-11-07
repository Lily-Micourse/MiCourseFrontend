import { inject } from "mobx-react";

export default function injectStore(WrappedComponent) {
  return inject("store")(WrappedComponent);
}
