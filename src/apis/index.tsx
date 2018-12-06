import * as React from "react";
import { HttpService } from "@/apis/HttpService";
import serviceConfig, { ServiceConfig } from "@/apis/serviceConfig";

export interface HttpServiceType<T extends HttpService = HttpService> {
  new(...args: any[]): T;
}

export const ApiContext = React.createContext(serviceConfig as ServiceConfig);

export function useApiService<ST extends HttpServiceType>(service: ST): InstanceType<ST> | undefined {
  return serviceConfig.get(service) as InstanceType<ST>;
}
