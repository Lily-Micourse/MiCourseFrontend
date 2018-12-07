import { ServiceConfig } from "@/apis/serviceConfig";
import * as React from "react";
import { ApiContext } from "@/apis/index";

interface Props {
  services: ServiceConfig;
  children: React.ReactNode;
}

export default function ApiProvider({ services, children }: Props) {
  return (
    <ApiContext.Provider value={services}>
      {children}
    </ApiContext.Provider>
  );
}
