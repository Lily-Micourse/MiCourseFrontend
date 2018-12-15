import { Subscribe } from "unstated";
import React from "react";
import { HttpServiceType } from "@/apis/HttpService";
import { useApiService } from "@/apis";
import { StoreType } from "@/stores/Store";
import { Omit } from "next/router";

export interface ConnectedProps {
  useStore: <CT extends StoreType<any>>(containerType: CT) => InstanceType<CT>;
}

export function connect(...stores: Array<StoreType<any>>) {
  return <P extends {}>(WrappedComponent: React.ComponentType<P & ConnectedProps>) => ((props) => {
    return (
      <Subscribe to={stores}>
        {(...injectedStores) => {
          const useStore = (containerType: StoreType<any>) => injectedStores.find((x) => x instanceof containerType) as any;

          return (
            // @ts-ignore
            <WrappedComponent
              useStore={useStore}
              {...props}
            />
          );
        }

        }
      </Subscribe>
    );
  }) as React.ComponentType<Omit<P, keyof ConnectedProps>>;
}
