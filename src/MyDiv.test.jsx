import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect, jest } from "bun:test";

import MyDiv from "./MyDiv";

describe("div tests", () => {
  it("the div test", () => {
    render(<MyDiv />);
    const div = document.querySelector("#div");
    expect(div.innerText).toEqual("Hello World!");
  });

  it("testing alert firing", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(<MyDiv />);
    fireEvent.click(document.getElementById("testbutton"));
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
