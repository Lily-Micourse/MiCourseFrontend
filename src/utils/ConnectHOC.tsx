import { ContainerType, Subscribe } from "unstated";
import { ApiContext, HttpServiceType } from "@/apis";
import * as React from "react";

export interface ConnectedProps {
  useStore: <CT extends ContainerType<any>>(containerType: CT) => InstanceType<CT>;
  useService: <ST extends HttpServiceType>(serviceType: ST) => InstanceType<ST>;
}

export function connect<CT extends Array<ContainerType<any>> = []>({ stores = [] as any }: { stores?: CT; }) {
  return (WrappedComponent) => (() => {
    return (
      <ApiContext.Consumer>
        {(serviceMap) =>
          <Subscribe to={stores}>
            {(...injectedStores) => {
              const useService = (serviceType: HttpServiceType) => serviceMap.get(serviceType);
              const useStore = (containerType: ContainerType<any>) => injectedStores.find((x) => x instanceof containerType);

              return (
                <WrappedComponent
                  useService={useService}
                  useStore={useStore}
                />
              );
            }

            }
          </Subscribe>
        }
      </ApiContext.Consumer>
    );
  }) as any;
}
