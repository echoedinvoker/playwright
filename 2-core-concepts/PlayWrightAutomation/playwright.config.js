const config = {
  testDir: "./tests",
  timeout: 30 * 10000,
  expect: {
    timeout: 15000,
  },
  reporter: "html",
  use: {
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    // trace: "retain-on-failure", // off, on
    trace: "off", // off, on
  },
};

export default config;
