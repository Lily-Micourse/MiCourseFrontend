import { Container } from "unstated";

export interface IUserStore {
  username: string;
}

export class UserStore extends Container<IUserStore> {
  login(username: string, remember: boolean, token: string) {
    this.setState({
      username,
    });
    //
    // if (remember) {
    //   if ()
    // }
  }

  logout() {

  }
}
