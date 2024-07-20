import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    test: {
      // an example of file based convention,
      // you don't have to follow it
      include: [
        "tests/unit/**/*.{test,spec}.ts",
        "tests/**/*.unit.{test,spec}.ts",
      ],
      name: "unit",
      environment: "node",
    },
  },
  {
    test: {
      // an example of file based convention,
      // you don't have to follow it
      include: [
        "{apps,packages}/**/tests/browser/**/*.{test,spec}.{ts,tsx}",
        "{apps,packages}/**/tests/**/*.browser.{test,spec}.{ts,tsx}",
      ],
      name: "browser",
      browser: {
        enabled: true,
        provider: "playwright",
        name: "chromium",
        // https://playwright.dev
        providerOptions: {},
      },
      includeTaskLocation: true,
    },
  },
]);
