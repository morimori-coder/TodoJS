import { describe, it, expect } from "vitest";
import { setupCounter } from "./counter";

/**
 * setupCounter 関数のテスト
 * jsdomを使い、仮のボタン要素を作成し、クリックイベントをシミュレーションしてカウンターが正しく動作するかを確認します。
 */
describe("setupCounter", () => {
  it("should increment the counter on click", () => {
    // 仮のボタン要素を作成
    const button = document.createElement("button");

    // カウンターをセットアップ
    setupCounter(button);

    // 初期状態をチェック
    expect(button.innerHTML).toBe("count is 0");

    // クリックをシミュレーション
    button.click();
    expect(button.innerHTML).toBe("count is 1");

    button.click();
    expect(button.innerHTML).toBe("count is 2");
  });
});
