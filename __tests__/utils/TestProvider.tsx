import * as React from "react";
import { initializeStore } from "../../src/stores/store";
import { Provider } from "unstated";

export default ({ children }) => {
  const testStore = initializeStore(false, { value: 10 });

  return (
    <Provider inject={[testStore]}>
      {children}
    </Provider>
  );
};
