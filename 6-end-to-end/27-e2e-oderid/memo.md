## **NEED**

![Alt NEED: check account ](pic/01.jpg)

![Alt NEED: check thanks page & get order id](pic/02.jpg)

![Alt NEED: check order list ](pic/03.jpg)

![Alt NEED: check order summary](pic/04.jpg)

## **Inspecting**

### _Place order page_

![Alt inspecting: account](pic/05.jpg)

![Alt inspecting: place order button](pic/06.jpg)

### _Thank you page_

![Alt inspecting: thank you](pic/07.jpg)

![Alt inspecting: order id in thank you page](pic/08.jpg)

![Alt inspecting: orders link](pic/09.jpg)

### _Oder history page_

![Alt inspecting: orders](pic/10.jpg)

![Alt inspecting: order id of one row](pic/11.jpg)

![Alt inspecting: view button of one row](pic/12.jpg)

### _Summary of single order page_

![Alt inspecting: order id in order summary](pic/13.jpg)

## **Assertion: check account in the order page**
![Alt coding: assertion to account](pic/14.jpg)

![Alt test failed](pic/15.jpg)

![Alt coding: toHaveValue](pic/16.jpg)

![Alt test pass](pic/17.jpg)

## **Assertion: Thank you**
![Alt coding: assertion to thankyou](pic/18.jpg)

![Alt test pass](pic/19.jpg)

## **Assertion: Check if order id from the thankyou page recorded in the history**

### _Point: create custom-wait for .count()_
![Alt analyze orders page - service based](pic/20.jpg)

![Alt coding: waiForLoadState](pic/21.jpg)

![Alt test 0 count](pic/22.jpg)

![Alt coding: waitFor](pic/23.jpg)

![Alt test 7 count](pic/24.jpg)

### _replaceAll & loop_

![Alt coding replaceAll & loop print oder id](pic/25.jpg)

![Alt test print oder ids](pic/26.jpg)

![Alt turn console test to assertion](pic/27.jpg)

![Alt test pass](pic/28.jpg)

## **Assertion: Check if order id from thankyou page appear in the summary page**

![Alt coding: keep going to summary page](pic/29.jpg)

![Alt test oder id of summary page](pic/30.jpg)

![Alt coding: turn test to asesrtion](pic/31.jpg)

![Alt test pass](pic/32.jpg)
