## **Assertion: toMatchSnapshot**

![Alt coding: toMatchSnapshot assertion](pic/01.jpg)

## **TEST**

### _1st run - get pattern picture_

![Alt test: 1st run to take basic image for the test](pic/02.jpg)

### _after run - actual visual test_

![Alt test: 2nd run - error](pic/03.jpg)

## **Check images**

![Alt image - actual](pic/04.jpg)

![Alt image - expected](pic/05.jpg)

## **Change to use google home to do the visual test**

![Alt coding: change to different page to do visual testing](pic/06.jpg)

![Alt test: 1st run to take basic image for the test](pic/07.jpg)

![Alt test: 2nd run - still error???](pic/08.jpg)

### _diff image_

![Alt image - diff](pic/09.jpg)

- From the above picture, we can find that visual testing is done in pixel units to compare images.

### _checking google homepage_

![Alt go to google](pic/10.jpg)

- From the visual test of the above two web pages, we can find that the application of visual test is very limited, as long as there is a change in any pixel, we will get a test failure result.

  - Maybe we can change to use locator.screenshot instead of page.screenshot.
