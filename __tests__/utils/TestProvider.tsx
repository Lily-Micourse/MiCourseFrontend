import * as React from "react";
import { Provider } from "mobx-react";
import { initializeStore } from "../../src/stores/store";

export default ({ children }) => {
  const testStore = initializeStore(false);

  return (
    <Provider store={testStore}>
      {children}
    </Provider>
  );
};
