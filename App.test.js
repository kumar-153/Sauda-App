import React from "react";
import { render, cleanup, fireEvent } from "react-native-testing-library";
import Screen from "./app/screens/Screen";

afterEach(cleanup);

describe("<App />", () => {
  it("should match snapshot", () => {
    const rendered = render(<Screen />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
