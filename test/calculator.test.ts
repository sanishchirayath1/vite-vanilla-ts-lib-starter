import { describe, expect, it } from "vitest";
import calculator from "../src/calculator";

describe("calculator", () => {
  it("exists", () => {
    expect(calculator).toBeDefined();
  });

  it("adds", () => {
    expect(calculator.calculate("1 + 1")).toBe(2);
  });

  it("adds '1 + 2'", () => {
    expect(calculator.calculate("1 + 2")).toBe(3);
  });

  it("adds '12 + 23'", () => {
    expect(calculator.calculate("12 + 23")).toBe(35);
  });

  it("should not crash if string is incomplete", () => {
    expect(calculator.calculate("12+")).toBe("Invalid input");
  });

  it("should only have 2 numbers", () => {
    expect(calculator.calculate("12+1+1")).toBe("Invalid input");
  });

  it("should not accept strings without operator", () => {
    expect(calculator.calculate("12 1")).toBe("Invalid input");
  });

  it("should not accept strings with multiple operators", () => {
    expect(calculator.calculate("12 + 1 + 1")).toBe("Invalid input");
  });

  it("should not accept strings with multiple operators", () => {
    expect(calculator.calculate("12 + 1 + ")).toBe("Invalid input");
  });

  it("subtracts", () => {
    expect(calculator.calculate("1 - 1")).toBe(0);
  });

  it("multiplies", () => {
    expect(calculator.calculate("1 * 1")).toBe(1);
  });

  it("divides", () => {
    expect(calculator.calculate("1 / 1")).toBe(1);
  });

  it("should not divide by 0", () => {
    expect(calculator.calculate("1 / 0")).toBe(Infinity);
  });

  it("should reject letters", () => {
    expect(calculator.calculate("a / b")).toBe("Invalid input");
  });

  it("should reject letters", () => {
    expect(calculator.calculate("awqe/bqweqw")).toBe("Invalid input");
  });

  it("should reject letters", () => {
    expect(calculator.calculate("awqe/123")).toBe("Invalid input");
  });
  it("should reject letters", () => {
    expect(calculator.calculate("123/qweq")).toBe("Invalid input");
  });
});
