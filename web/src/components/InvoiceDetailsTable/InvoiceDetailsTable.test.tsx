import { render } from "@redwoodjs/testing/web";

import InvoiceDetailsTable from "./InvoiceDetailsTable";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("InvoiceDetailsTable", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<InvoiceDetailsTable />);
    }).not.toThrow();
  });
});
