export default class UserService extends HttpService {
    async login(username: string, password: string): Promise<{token: string}> {
        return this.fetch<{token: string}>({
            method: HttpMethods.GET,
            path: "/login",
            body: { a: "b" },
            
        });
    }
}
