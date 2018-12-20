import { HttpError, HttpMethod, HttpService } from "./HttpService";
import { User } from "@/models/user/User";
import { UserBasicSetting } from "@/models/user/UserBasicSetting";
import { UserPasswordSetting } from "@/models/user/UserPasswordSetting";

export interface LoginResponse {
  token?: string;
  error?: "incorrect" | "frozen";
}

export class UserService extends HttpService {

  async login(username: string, password: string): Promise<LoginResponse> {

    const data = await this.fetch<LoginResponse>({
      method: HttpMethod.GET,
      params: { username, password },
      path: "/user",
    });
    if (data.token) {
      this.setToken(data.token);
    }
    return data;
  }

  async signUp(username: string, password: string): Promise<"success" | "conflict"> {
    try {
      await this.fetch({
        method: HttpMethod.POST,
        body: { username, password },
        path: "/user",
      });
      return "success";
    } catch (e) {
      const e1 = e as HttpError;
      if (e1.status === 409) {
        return "conflict";
      } else {
        throw e;
      }
    }
  }

  async getInfo(): Promise<User> {
    try {
      const token = this.axios.defaults.headers.common.Authorization;
      const data = await this.fetch<User>({
        method: HttpMethod.GET,
        body: { token },
        path: "/user/info",
      });
      return data;
    } catch (e) {
      throw e;
    }
  }

  async setInfo(userInfo: UserBasicSetting) {
    try {
      const token = this.axios.defaults.headers.common.Authorization;
      await this.fetch({
        method: HttpMethod.PUT,
        headers: { Authorization: token },
        body: { userInfo },
        path: "/user/info",
      });
    } catch (e) {
      throw e;
    }
  }

  async setPassword(userPassword: UserPasswordSetting): Promise<"success" | "incorrect"> {
    try {
      const token = this.axios.defaults.headers.common.Authorization;
      await this.fetch({
        method: HttpMethod.PUT,
        headers: { Authorization: token },
        body: { userPassword },
        path: "/user/password",
      });
      return "success";
    } catch (e) {
      const e1 = e as HttpError;
      if (e1.status === 403) {
        return "incorrect";
      } else {
        throw e;
      }
    }
  }

  async setAvatar(newavatar: string) {
    try {
      const token = this.axios.defaults.headers.common.Authorization;
      await this.fetch({
        method: HttpMethod.PUT,
        headers: { Authorization: token },
        body: { avatar: newavatar },
        path: "/user/password",
      });
    } catch (e) {
      throw e;
    }
  }

  setToken(token: string) {
    if (token) {
      this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete this.axios.defaults.headers.common.Authorization;
    }
  }
}
