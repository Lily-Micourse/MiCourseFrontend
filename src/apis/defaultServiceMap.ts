import { UserService } from "@/apis/UserService";
import UserServiceMock from "@/apis/mock/UserServiceMock";
import { HttpService } from "@/apis/HttpService";

const USE_MOCK = false;

const services = [
  [ UserService, USE_MOCK ? UserServiceMock : UserService],
];

const serviceMap = new Map<typeof HttpService, HttpService>();

services.forEach((item) => {
  serviceMap.set(item[0], new item[1]());
});

export default serviceMap;
