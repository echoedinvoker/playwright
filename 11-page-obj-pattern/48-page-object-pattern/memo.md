## **NEED**

![Alt NEED: refactor login related codes](pic/01.jpg)

## **Prepare: create js file & class frame**

![Alt create individual js file for it](pic/02.jpg)

## **locators to constructor**

![Alt constructor for defining locators](pic/03.jpg)

- constructor cannot use asynchronous techniques.

## **others to methods**

![Alt goTo](pic/04.jpg)

![Alt validLogin](pic/05.jpg)

## **replace codes in the test file by the class**

![Alt replace codes in the test file](pic/06.jpg)

![Alt test failed](pic/07.jpg)

## **fix the error**

![Alt fix the problem: page is not global in class](pic/08.jpg)

![Alt test pass](pic/09.jpg)

## **migrate waitForLoadState**

![Alt ](pic/10.jpg)

- Because this must be done immediately after clicking the login button, it should also be incorporated into the validLogin method of the class.
