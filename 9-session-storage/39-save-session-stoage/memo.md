## **Issue: 30% Web apps not only use token to authenticate**

![Alt issue: 30% cases not only use token](pic/01.jpg)

## **The previous way is very suitable for 70% of cases, but may not be suitable for 30% of cases**

![Alt original way not suitable for these cases](pic/02.jpg)

## **Get all states of browser at once**

![Alt get all states of browser at once](pic/03.jpg)

## **Create a global context with injected states**

![Alt create a global context with injected states](pic/04.jpg)

- Then we use this global context to skip the login step of the general test at the beginning of each general test.
