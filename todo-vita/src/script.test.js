import { describe, it, expect } from "vitest";
import {checkTodoLength} from "./script";

describe("setupCounter", () => {
  it("should increment the counter on click", () => {
    // 0文字の判定
    expect(checkTodoLength("")).toBe(false);
    // 1文字の判定
    expect(checkTodoLength("a")).toBe(true);
    // 100文字の判定
    expect(checkTodoLength("a".repeat(100))).toBe(true);
    // 101文字の判定
    expect(checkTodoLength("a".repeat(101))).toBe(false);

  });
});
