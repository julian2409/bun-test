import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "bun:test";

import App from "./App";

import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
afterEach(() => {
  cleanup();
});

describe("some tests", () => {
  it("render test", () => {
    render(<App />);
  });

  it("test counter button click", () => {
    render(<App />);
    const theButton = screen.getByText("count is 0");
    expect(theButton.innerText).toEqual("count is 0");
    fireEvent.click(theButton);
    expect(theButton.innerText).toEqual("count is 1");
  });
});
