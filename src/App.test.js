import React from "react";
import { render } from "@testing-library/react";
import Table from "./App";

test("renders title text", () => {
  const { getByText } = render(<Table />);
  const linkElement = getByText(/RBA Technology Associates/i);
  expect(linkElement).toBeInTheDocument();
});
