const config = {
  testDir: "./tests",
  timeout: 30 * 10000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  use: {
    browserName: "chromium",
  },
};

export default config;
