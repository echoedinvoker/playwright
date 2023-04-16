## **ACTION: allTextContents**

![Alt allTextContents](pic/01.jpg)

![Alt test result: array](pic/02.jpg)

## **Auto-wait of Actions**

> Playwright automatically waits for elements to occur when triggering Actions, and different Actions have different criteria, and some Actions do not have a wait mechanism.

![Alt only left allTextContents](pic/03.jpg)

![Alt test result: empty array](pic/04.jpg)

![Alt docs of auto-wait](pic/05.jpg)

- allTextContents is not in the above list, so it does not trigger the auto-wait mechanism.
