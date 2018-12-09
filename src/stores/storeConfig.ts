import { IUserStore, UserStore } from "@/stores/UserStore";
import { StoreType } from "@/stores/Store";

export interface IRootStore {
  userStore: IUserStore;
}

const stores = [
  UserStore,
] as StoreType<any>[];

export default stores;
