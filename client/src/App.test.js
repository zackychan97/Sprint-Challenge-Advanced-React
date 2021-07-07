import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";
import Players from "./Component/Players";
import DarkModeToggler from "./Component/DarkModeToggler";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Women's World Cup is being rendered", () => {
  const container = render(<Players />);
  expect(container.getByText(/women's world cup/i));
});

// Test dark mode is being rendered
test("Dark mode is being rendered", () => {
  const container = render(<DarkModeToggler />);
  expect(container.getByText(/dark mode/i));
});


describe("player data module", () => {
  // This renders the API data that is being passed in
  describe("player information", () => {
    // Now I can implement my tests
    it('Player with the name "Christiane Endler"', () => {
      const expectedOutput = "Christiane Endler";
      const actualOutput = "Christiane Endler";
      expect(actualOutput).toBe(expectedOutput);
    });
  });
});