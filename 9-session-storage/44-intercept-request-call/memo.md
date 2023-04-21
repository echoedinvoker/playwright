## **NEED/Prepare: view a non-existed order**

![Alt NEED: view order](pic/01.jpg)

![Alt NEED: request URL](pic/02.jpg)

![Alt coding: record that url](pic/03.jpg)

![Alt prepare: remove that order](pic/04.jpg)

## **Click view button of first order**

![Alt inspecting: view](pic/05.jpg)

![Alt coding: click first order  view](pic/06.jpg)

![Alt run test](pic/07.jpg)

![Alt inspector: before view](pic/08.jpg)

![Alt inspector: after view](pic/09.jpg)

## **Listen view request with 1st order id**

### _inspecting 1st order ids_

![Alt inspecting: order ids](pic/10.jpg)

### _route listener with dynamic order id_

![Alt coding: listen view request and mock request url](pic/11.jpg)

## **TEST**

![Alt run test](pic/12.jpg)

![Alt get alert of non-existed order](pic/13.jpg)

- Even if the average user can't find the view button to send such a request, hecker will still get confidential information this way.

  - This is the reason why we do this kind of test, Playwright because the integration of API test and UI test, in this area can be more simple and effective.
