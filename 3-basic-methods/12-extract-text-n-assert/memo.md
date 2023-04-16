## **NEED**

![Alt need:extrad incorrect msg and do assertion](pic/01.jpg)

## **Find valid CSS-selector to Incorrect Msg element**

> Pay special attention we only get this element when it is displayed, not when hidden.

![Alt find valid css-selector for incorrect msg element](pic/02.jpg)

![Alt locator incorrect msg element, but only when it show](pic/03.jpg)

- In other tools such as selenium, it is necessary to add wait codes here and things will become complex, but Playwright does not need to.

- We cannot get hidden incorrect msg element, this is tricky...

## **method 'locator' don't return promise**

![Alt element = locator, and it do not return promise](pic/04.jpg)

![Alt run test](pic/05.jpg)

## **Two timeouts**

![Alt mess the assertion](pic/06.jpg)

![Alt run test](pic/07.jpg)

![Alt two timeout](pic/08.jpg)
