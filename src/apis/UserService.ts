import { HttpMethod, HttpService } from "./HttpService";

export interface LoginResponse {
  token?: string;
  error?: "incorrect" | "frozen";
}

export class UserService extends HttpService {

  async login(username: string, password: string): Promise<LoginResponse> {

    const res = await this.fetch<LoginResponse>({
      method: HttpMethod.GET,
      params: { username, password },
      path: "/user",
    });
    if (res.token) {
      this.setToken(res.token);
    }
    return res;
  }

  setToken(token: string) {
    this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}
