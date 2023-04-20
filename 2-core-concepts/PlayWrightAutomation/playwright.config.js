const config = {
  testDir: "./tests",
  timeout: 30 * 10000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  use: {
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    // trace: "retain-on-failure", // off, on
    trace: "on", // off, on
  },
};

export default config;
