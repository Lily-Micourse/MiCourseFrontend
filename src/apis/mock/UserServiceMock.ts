import { LoginResponse, UserService } from "@/apis/UserService";

export default class UserServiceMock extends UserService {
  async login(username: string, password: string): Promise<LoginResponse> {
    if (username === "1") {
      return { token: "0001" };
    } else {
      return { error: "incorrect" };
    }
  }
}
