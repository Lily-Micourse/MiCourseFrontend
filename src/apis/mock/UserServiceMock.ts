import { LoginResponse, UserService } from "@/apis/UserService";
import { User } from "@/models/user/User";
import { UserBasicSetting } from "@/models/user/UserBasicSetting";
import { UserPasswordSetting } from "@/models/user/UserPasswordSetting";

export default class UserServiceMock extends UserService {
  async login(username: string, password: string): Promise<LoginResponse> {
    if (username === "1") {
      return { token: "0001" };
    } else {
      return { error: "incorrect" };
    }
  }

  async getInfo(): Promise<User> {
    return {
      email: "1343948938",
      nickname: "1343948938",
      department: "软件学院",
      grade: "16",
      major: "软件学院",
      gender: "male",
      qq: "1343948938",
    };
  }

  async setInfo(userInfo: UserBasicSetting) {
    console.log(userInfo);
  }

  async setPassword(userPassword: UserPasswordSetting): Promise<"success" | "incorrect"> {
    if (userPassword.oldPassword === "123") {
      return "success";
    } else {
      return "incorrect";
    }
  }

  async setAvatar(newavatar: string) {
    console.log(newavatar);
  }
}
