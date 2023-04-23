import { DashboardPage } from "./DashboardPage";
import { LoginPage } from "./LoginPage";

export class POManager {
  constructor(page) {
    this.loginPage = new LoginPage(page)
    this.dashboardPage = new DashboardPage(page)
  }

  getLoginPage() {
    return this.loginPage
  }

  getDashboardPage() {
    return this.dashboardPage
  }
}
