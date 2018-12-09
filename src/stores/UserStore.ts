import { Container } from "unstated";
import { useApiService } from "@/apis";
import { UserService } from "@/apis/UserService";
import { isClient } from "@/utils/isClient";

export interface IUserStore {
  username: string;
}

const LOGIN_LOCALSTORAGE_KEY = "MICOURSE_USER";

export class UserStore extends Container<IUserStore> {

  constructor() {
    super();
    this.state = {
      username: "",
    };
    this.restoreLoginState();
  }

  get loggedIn() {
    return !!this.state.username;
  }

  restoreLoginState() {
    if (isClient()) {
      const data = localStorage.getItem(LOGIN_LOCALSTORAGE_KEY);
      if (data) {
        const { token, ...rest } = JSON.parse(data);
        useApiService(UserService)!.setToken(token);
        this.setState(rest);
      }
    }
  }

  async login(username: string, password: string, remember: boolean = true) {
    const userService = useApiService(UserService)!;
    const result = await userService.login(username, password);
    if (result.error) {
      // something bad happened
    } else {
      userService.setToken(result.token!);
      this.setState({
        username,
      });
      if (remember && isClient()) {
        localStorage.setItem(
          LOGIN_LOCALSTORAGE_KEY,
          JSON.stringify({
            ...this.state,
            token: result.token,
          }));
      }
    }
  }

  logout() {
    this.setState({ username: "" });
    useApiService(UserService)!.setToken("");
  }

}
