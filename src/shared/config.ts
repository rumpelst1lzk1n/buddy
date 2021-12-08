// TODO: fix the types for these, use separate tsconfigs for different envs
const isElectron =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  !!global.window?.ipcRenderer ||
  !!(
    typeof process !== "undefined" &&
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    process.release?.name === "node"
  );

const E2E = process.env.E2E === "true";
const PRODUCTION = process.env.NODE_ENV === "production";

export default {
  isElectron,
  proxyUrl: isElectron ? "" : process.env.PROXY_URL,
  isProduction: PRODUCTION,
  isE2e: E2E,
  github: {
    apiKey: process.env.GITHUB_API_KEY,
    organization: "EdgeTX",
    repos: {
      firmware: "edgetx",
      sdcard: "edgetx-sdcard",
      sounds: "edgetx-sdcard-sounds",
      themes: "edgetx-themes",
    },
  },
};