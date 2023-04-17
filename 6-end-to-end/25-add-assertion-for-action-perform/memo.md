## **NEED**

![Alt NEED: instead of eye check, we need report](pic/01.jpg)

![Alt NEED: into cart](pic/02.jpg)

![Alt NEED: check product in the cart](pic/03.jpg)

## **Inspecting page**

![Alt inspecting: cart button](pic/04.jpg)

![Alt inspecting: product title in the cart](pic/05.jpg)

## **Coding: 1st try**

![Alt coding: 1st try](pic/06.jpg)

## **Test & Analyze the result**

![Alt test result: trace error](pic/07.jpg)

### _Risk 1: Previous page has same text_

![Alt risk 1: previous page has same text](pic/08.jpg)

![Alt coding: use Playwright psuedo class - :has-text](pic/09.jpg)

### _Risk 2: Products in the cart appears delayed_

![Alt risk 2: products in the cart will delayed appear](pic/10.jpg)

![Alt make sure previous page don't have same element](pic/11.jpg)

![Alt coding: waitFor](pic/12.jpg)

![Alt test](pic/13.jpg)

## **If there are already multiple products in the cart**

![Alt but if there are multiple products in the cart](pic/14.jpg)

![Alt error: waitFor not work on the locator with multiple elements](pic/15.jpg)

![Alt add first](pic/16.jpg)

![Alt test](pic/17.jpg)
