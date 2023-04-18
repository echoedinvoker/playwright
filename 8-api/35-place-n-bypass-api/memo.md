## **NEED**

![Alt NEED: exactly test we want only check orders history](pic/01.jpg)

![Alt NEED: change UI test to API call](pic/02.jpg)

## **Inspect order process on the browser**

![Alt inspect network: before place order](pic/03.jpg)

![Alt inspect network: after place order - endpoint & method](pic/04.jpg)

![Alt inspect network: how backend identify us when we order](pic/05.jpg)

- When we send an order API request, the token in the local storage is automatically filled in the request header with the attribute 'Authorization'.

  - The backend uses it to determine who is ordering the product.

![Alt inspect network: payload](pic/06.jpg)

![Alt inspect network: response data](pic/07.jpg)

- Besides using the API to order products directly, we will also get the order id directly from the API response, so there is no need to check the thank you page anymore.
