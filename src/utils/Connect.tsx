import * as React from "react";
import { Container, ContainerType, Subscribe } from "unstated";
import { HttpService } from "@/apis/HttpService";
import { ApiContext, HttpServiceType } from "@/apis";

/*
使用示例参考__tests__/connect.spec.tsx
*/

export interface ConnectProps<CT extends Array<ContainerType<any>>,
  ST extends HttpServiceType[],
  > {
  containers?: CT;
  services?: ST;
  children: (
    // @ts-ignore
    containers: { [CK in keyof CT]: InstanceType<CT[CK]> },
    // @ts-ignore
    services: { [SK in keyof ST]: InstanceType<ST[SK]> },
  ) => React.ReactNode;
}

export default function Connect<CT extends Array<ContainerType<any>> = [],
  ST extends HttpServiceType[] = []>
({ containers = [] as any, services = [] as any, children }: ConnectProps<CT, ST>) {
  // @ts-ignore
  return (
    <ApiContext.Consumer>
      {(serviceMap) =>
        <Subscribe to={containers}>
          {(...injectedContainers) =>
            children(
              injectedContainers as any,
              services.map((x) => serviceMap.get(x)) as any,
            )}
        </Subscribe>
      }
    </ApiContext.Consumer>
  );
}

export function tuple<T extends any[]>(...data: T) {
  return data;
}
