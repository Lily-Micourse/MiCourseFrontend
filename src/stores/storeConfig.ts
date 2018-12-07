import { Container, ContainerType } from "~/node_modules/unstated";
import { RootStore } from "@/stores/RootStore";
import { IUserStore, UserStore } from "@/stores/UserStore";

export interface IRootStore {
  userStore: IUserStore;
}

export type StoreConfig = ContainerType<any>;

const storeConfig = [
  UserStore,
] as StoreConfig[];

export default storeConfig;
