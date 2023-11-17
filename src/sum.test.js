import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe("some tests", () => {
  it("a test", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
