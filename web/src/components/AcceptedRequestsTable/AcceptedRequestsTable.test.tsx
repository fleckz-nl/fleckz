import { render } from "@redwoodjs/testing/web";

import AcceptedRequestsTable from "./AcceptedRequestsTable";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("AcceptedRequestsTable", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<AcceptedRequestsTable />);
    }).not.toThrow();
  });
});
