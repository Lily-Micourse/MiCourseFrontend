import { UserService } from "@/apis/UserService";
import UserServiceMock from "@/apis/mock/UserServiceMock";
import { HttpService } from "@/apis/HttpService";
import { HttpServiceType } from "@/apis/index";

const USE_MOCK = false;

const services = [
  [ UserService, USE_MOCK ? UserServiceMock : UserService],
];

const serviceMap = new Map<HttpServiceType<HttpService>, HttpService>();

services.forEach((item) => {
  serviceMap.set(item[0], new item[1]());
});

export default serviceMap;
