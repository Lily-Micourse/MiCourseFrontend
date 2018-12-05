import * as React from "react";
import { HttpService } from "@/apis/HttpService";
import defaultServiceMap from "./defaultServiceMap";

export type ServiceMap = Map<typeof HttpService, HttpService>;

export const ApiContext = React.createContext(defaultServiceMap as ServiceMap);

interface Props {
  services?: Map<typeof HttpService, HttpService>;
  children: React.ReactNode;
}

export function ApiProvider({ services, children }: Props) {
  return (
    <ApiContext.Provider value={services || defaultServiceMap}>
      {children}
  </ApiContext.Provider>
  );
}
