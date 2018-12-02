import { UserService } from "@/apis/UserService";
import { Container } from "unstated";

const USE_MOCK = false;

export const allServices = [
  new UserService(USE_MOCK),
];

export default allServices;
