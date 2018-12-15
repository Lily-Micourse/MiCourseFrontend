import { Provider as AlertProvider, AlertCustomOptions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import * as React from "react";

const options = {
  position: "top center",
  timeout: 3000,
  offset: "100px",
} as AlertCustomOptions;

export default ({ children }) => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      {children}
    </AlertProvider>
  );
};
