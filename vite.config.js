import { defineConfig } from "vitest/config";

/**
 * vitest/config は、Vitest の設定を行うための関数を提供します。
 */
export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
