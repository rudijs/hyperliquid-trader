import { describe, test, expect } from "vitest";
import { main } from "../../src/lib/wheel";

describe("Wheel", () => {
  test("should return the correct result", () => {
    const gear = { name: "Gear", speed: 10 };
    expect(main(gear)).toBe("Speed is: 10");
  });
});
