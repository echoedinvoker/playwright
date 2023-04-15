const config = {
  testDir: "./tests",
  timeout: 30 * 10000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  use: {
    browserName: "webkit",
  },
};

export default config;
