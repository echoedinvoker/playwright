## **UI of no order**

![Alt UI of no order](pic/01.jpg)

## **API respose data of no order**

![Alt Response data of no order](pic/02.jpg)

- Other tools usually require to create a new account or delete all orders from the old account to do the above test.

  - Playwright can intercept API request/response and insert mock data, eliminating the above troubles at all.

    - And the inserted mock data will not affect the original account data and other tests, it only exited for that specific test.
