## **NEED: manipulate contents of iframe**

![Alt NEED: click link in the iframe](pic/01.jpg)

![Alt NEED: get info in the iframe](pic/02.jpg)

## **Inspecting**

![Alt inspect: iframe](pic/03.jpg)

![Alt inspect: link of iframe](pic/04.jpg)

![Alt inspect: text of iframe](pic/05.jpg)

## **Coding: frameLocator & :visible**

![Alt coding: frameLocator & :visible](pic/06.jpg)

- :visible is a feature provided by Playwright, added after the CSS-selector, which filters the elements selected by the previous CSS-selector, leaving only visible one on the page.

## **Fix: scrolling problem**

![Alt test error](pic/07.jpg)

- The error occurs because when we use the framePage action, the auto-scrolling happens on the page in the iframe instead of the mainframe, so the mainframe never scrolls to the position of the iframe.

![Alt coding: do random action to iframe el to scroll to it](pic/08.jpg)

- Simply use page (not framePage) to do any action on the iframe element, which will trigger auto-scrolling to the iframe position.

![Alt test got text](pic/09.jpg)
