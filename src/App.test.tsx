import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders React app start", () => {
  render(<App />);
  const linkElement = screen.getByText(/React app start/i);
  expect(linkElement).toBeInTheDocument();
});
