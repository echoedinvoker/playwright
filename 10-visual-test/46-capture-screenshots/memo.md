## **NEED: sometimes we need screenshots for evident**

![Alt NEED: codes of checking visibility](pic/01.jpg)

![Alt NEED: if we need pic for evident](pic/02.jpg)

## **page.screenshot**

![Alt coding: screenshot](pic/03.jpg)

![Alt result pic of whole page](pic/04.jpg)

- You can find that page.screenshop only captures the current viewport range

- To solve this problem, we can scroll to the desired position before screenshot or use the following partially screenshot.

## **locator.screenshot**

> locator also has method screenshot, which can be used to make partial screenshots.

![Alt inspector block](pic/05.jpg)

![Alt coding: partially  screenshot](pic/06.jpg)

- In addition to the screenshot, the above uses a more advanced CSS-selector, using the phsuedo-class ':has()' and ':has-text()' provided by Playwright.

![Alt result pic of block](pic/07.jpg)
