## **NEED: refactor API call to another file**

![Alt NEED: refactor API call codes to another file](pic/01.jpg)

- We can write the API call in the test file, but separating it into a dedicated file will be more systematic and readable.

![Alt create folder/file and basic class structure](pic/02.jpg)

## **Migrate login**

![Alt migrate login codes](pic/03.jpg)

![Alt loginPayload should be specified in test](pic/04.jpg)

- apiContext and loginPayload are important elements of this class, so use constructor to bound them to 'this' keyword, which has the advantage that they can be used throughout the class.

## **Migrate order**

> Basically the same as login, except that the payload does not need to be bound to 'this' keyword. 

![Alt migrate create order codes](pic/05.jpg)

![Alt order payload should be specified in test](pic/06.jpg)

## **TEST**

![Alt test](pic/07.jpg)
