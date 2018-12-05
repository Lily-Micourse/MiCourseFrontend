import { mount } from "enzyme";
import * as React from "react";
import { Container, Provider } from "unstated";
import { HttpService } from "@/apis/HttpService";
import Connect, { tuple } from "@/utils/Connect";
import { ApiProvider } from "@/apis";

// tslint:disable
describe("Test injections", () => {

  class OneContainer extends Container<{}> {
  }

  class AnotherContainer extends Container<{}> {
  }

  class OneHttpService extends HttpService {
  }

  const containers = tuple(OneContainer, AnotherContainer);

  const services = tuple(OneHttpService);

  it("should render 3", () => {
    class SearchBar extends React.Component {
      render() {
        return (
          <ApiProvider services={new Map([[OneHttpService, new OneHttpService()]])}>
            <Provider inject={[new OneContainer(), new AnotherContainer()]}>
              <Connect containers={containers} services={services}>
                {(containers, services) => <>
                  {containers.filter(x => !!x).length + services.filter(x => !!x).length}
                </>}
              </Connect>
            </Provider>
          </ApiProvider>
        );
      }
    }

    const element = mount(<SearchBar/>);
    const actual = element.find("p").text();

    expect(actual).toBe("3");
  });
});
