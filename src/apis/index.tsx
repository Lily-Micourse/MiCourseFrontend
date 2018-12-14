import { HttpService, HttpServiceType } from "@/apis/HttpService";
import { UserService } from "@/apis/UserService";
import UserServiceMock from "@/apis/mock/UserServiceMock";
import { CourseService } from "@/apis/CourseService";
import { CourseServiceMock } from "@/apis/mock/CourseServiceMock";

export const USE_MOCK = true;

const services = [
  [UserService, USE_MOCK ? UserServiceMock : UserService],
  [CourseService, USE_MOCK ? CourseServiceMock : CourseService ],
];

const serviceConfig = new Map<HttpServiceType, HttpService>();

services.forEach((item) => {
  serviceConfig.set(item[0], new item[1]());
});

export function useApiService<T extends HttpServiceType>(serviceType: T) {
  return serviceConfig.get(serviceType)! as InstanceType<T>;
}
