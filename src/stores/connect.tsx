import { Subscribe } from "unstated";
import * as React from "react";
import { HttpServiceType } from "@/apis/HttpService";
import { useApiService } from "@/apis";
import { StoreType } from "@/stores/Store";

export interface ConnectedProps {
  useStore?: <CT extends StoreType<any>>(containerType: CT) => InstanceType<CT>;
}

export function connect<CT extends Array<StoreType<any>> = []>(...stores: Array<StoreType<any>>) {
  return (WrappedComponent) => ((props) => {
    return (
      <Subscribe to={stores}>
        {(...injectedStores) => {
          const useStore = (containerType: StoreType<any>) => injectedStores.find((x) => x instanceof containerType);

          return (
            <WrappedComponent
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
