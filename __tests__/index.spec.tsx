import { mount } from "enzyme";
import * as React from "react";
import IndexPage from "../pages/index";

import TestProvider from "./utils/TestProvider";

describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", () => {
      const wrap = mount(
        <TestProvider>
          <IndexPage />
        </TestProvider>,
      );
      const actual = wrap.find("#value").text();

      expect(actual).toBe("10");
    });
  });
});
