import { Container } from "unstated";
import { useApiService } from "@/apis";
import { UserService } from "@/apis/UserService";
import { isBrowser } from "@/utils/isBrowser";
import Store from "@/stores/Store";

export interface IUserStore {
  username: string;
}

const LOGIN_LOCALSTORAGE_KEY = "MICOURSE_USER";

export class UserStore extends Store<IUserStore> {

  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  get loggedIn() {
    return !!this.state.username;
  }

  restoreLoginState() {
    if (isBrowser()) {
      const data = localStorage.getItem(LOGIN_LOCALSTORAGE_KEY);
      if (data) {
        const { token, ...rest } = JSON.parse(data);
        useApiService(UserService)!.setToken(token);
        this.setState(rest);
      }
    }
  }

  afterHydration() {
    this.restoreLoginState();
  }

  async login(username: string, password: string, remember: boolean = true) {
    const userService = useApiService(UserService)!;
    const result = await userService.login(username, password);
    if (result.error) {
      // something bad happened
    } else {
      userService.setToken(result.token!);
      await this.setState({
        username,
      });
      if (remember && isBrowser()) {
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
    if (isBrowser()) {
      localStorage.removeItem(LOGIN_LOCALSTORAGE_KEY);
    }
  }

  async signUp(username: string, password: string) {
    return useApiService(UserService)!.signUp(username, password);
  }

}
