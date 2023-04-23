export class DashboardPage {
  constructor(page) {
    this.products = page.locator(".card-body")
    this.cart = page.locator("[routerlink*='cart']")   
    this.firstLi = page.locator("div li").first()
  }

  async addProductToCart(productName) {
    const count = await this.products.count()
    for (let i=0; i<count; i++) {
      if (await this.products.nth(i).locator("b").textContent() === productName) {
        await this.products.nth(i).locator("text= Add To Cart").click()
        break
      }
    }
  }

  async goToOrders() {
    await this.cart.click();
    await this.firstLi.waitFor()
  }
}


