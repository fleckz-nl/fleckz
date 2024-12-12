import { render } from "@redwoodjs/testing/web";

import SelectBusiness from "./SelectBusiness";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("SelectBusiness", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<SelectBusiness />);
    }).not.toThrow();
  });
});
