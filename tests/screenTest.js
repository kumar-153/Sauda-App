import React from "react";
import { render, cleanup } from "react-native-testing-library";
import Screen from "../app/screens/Screen";
import SafeScreen from "../app/screens/SafeScreen";

afterEach(cleanup);

describe("<App />", () => {
  it("Screen should match snapshot", () => {
    const rendered = render(<Screen />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
  it("Safe Screen should match snapshot", () => {
    const rendered = render(<SafeScreen />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
