import { describe, test, expect } from "vitest";
import main from "../src/scratch";
//
describe("main", () => {
  test("less return less than 10", () => {
    expect(main()).toBe("less than 10");
  });

  test("should return equal to or greater than 10", () => {
    expect(main(11)).toBe("equal to or greater than 10");
  });
});
