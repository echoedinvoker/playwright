import { test as base } from "@playwright/test"

exports.test = base.extend(
  {
    data: {
      username: "echoedinvoker@gmail.com",
      password: "1234@Matt",
      productName: "adidas original"
    }
  }
)

