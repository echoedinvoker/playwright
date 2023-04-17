## **Walkthrough the Login**

### _API call_

![Alt before login](pic/01.jpg)

![Alt after login, check network - headers](pic/02.jpg)

![Alt payload](pic/03.jpg)

![Alt response](pic/04.jpg)

### _Save Token in the Browser_

![Alt storage - token](pic/05.jpg)

## **Features of Token in our browser**

![Alt new tab](pic/06.jpg)

![Alt new incognito tab](pic/07.jpg)

![Alt manually input token](pic/08.jpg)

## **What does it mean for us to test?**

- Playwright can automate the process of calling the API and saving tokens to the browser.

  - This way you can skip the login step directly.

    - Login may take five seconds, however, call API is immediate, which saves a lot of time.

    - Some web pages may have unstable login pages, which may affect the results of subsequent tests.
