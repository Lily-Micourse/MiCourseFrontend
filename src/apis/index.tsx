import * as React from "react";
import { HttpService } from "@/apis/HttpService";
import defaultServiceMap from "./defaultServiceMap";
import serviceMap from "@/apis/defaultServiceMap";

export interface HttpServiceType<T extends HttpService = HttpService> {
  new(...args: any[]): T;
}

export type ServiceMap = Map<HttpServiceType<HttpService>, HttpService>;

export const ApiContext = React.createContext(defaultServiceMap as ServiceMap);

interface Props {
  services?: ServiceMap;
  children: React.ReactNode;
}

export function ApiProvider({ services, children }: Props) {
  return (
    <ApiContext.Provider value={services || defaultServiceMap}>
      {children}
  </ApiContext.Provider>
  );
}

export function getApiService<ST extends HttpServiceType<T>, T extends HttpService>(service: ST): T | undefined {
  return serviceMap.get(service) as T;
}
