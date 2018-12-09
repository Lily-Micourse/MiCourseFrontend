import { ContainerType, Subscribe } from "unstated";
import * as React from "react";
import { HttpServiceType } from "@/apis/HttpService";
import { useApiService } from "@/apis";

export interface ConnectedProps {
  useStore?: <CT extends ContainerType<any>>(containerType: CT) => InstanceType<CT>;
  useService?: <ST extends HttpServiceType>(serviceType: ST) => InstanceType<ST>;
}

export function connect<CT extends Array<ContainerType<any>> = []>(...stores: Array<ContainerType<any>>) {
  return (WrappedComponent) => ((props) => {
    return (
      <Subscribe to={stores}>
        {(...injectedStores) => {
          const useStore = (containerType: ContainerType<any>) => injectedStores.find((x) => x instanceof containerType);

          return (
            <WrappedComponent
              useService={useApiService}
              useStore={useStore}
              {...props}
            />
          );
        }

        }
      </Subscribe>
    );
  }) as any;
}
