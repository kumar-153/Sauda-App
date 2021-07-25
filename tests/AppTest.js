import React from "react";
import { render, cleanup } from "react-native-testing-library";
import App from "../App";

afterEach(cleanup);

describe("<App />", () => {
  it("App should match snapshot", () => {
    const rendered = render(<App />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
