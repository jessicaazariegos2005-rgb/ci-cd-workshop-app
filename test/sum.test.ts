
import { describe, it, expect } from "vitest";
import { sum } from "../src/utils/sum.js";

describe("sum", () => {
  it("adds two numbers", () => 
    {
    expect(sum(2, 3)).toBe(5);
  });
 
 it("adds tree numbers", () => 
    {
    expect(sum(3, 3)).toBe(6);
  });








});
