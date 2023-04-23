export class APIUtils {
  constructor(apiContext, loginPayload) {
    this.apiContext = apiContext
    this.loginPayload = loginPayload
  }
  async getToken() {
    const loginResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: this.loginPayload,
      }
    );
    const loginResponseObject = await loginResponse.json();
    return loginResponseObject.token;
  }

  async createOrder(orders) {
    const response = {}
    response.token = await this.getToken()
    const orderRequest = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: {
          orders: orders,
        },
        headers: {
          Authorization: response.token,
          "Content-Type": "application/json",
        },
      }
    );
    const orderRequestObject = await orderRequest.json();
    response.orderId = orderRequestObject.orders[0];
    return response
  }
}

