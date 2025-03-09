
Implement the `getHiddenCard()` function. It takes as input a credit card number, which consists of 16 digits, as a string and returns a hidden version of it. This version can be used on the site for display. For example, if the original card number was *2034399002125581*, the hidden version looks like this: *\*\*\*\*5581*.

The function replaces the first 12 characters with asterisks. The number of asterisks is controlled by the second optional parameter. The default value is 4.

```typescript
// The credit card is passed as a string
getHiddenCard('1234567812345678', 2) // "**5678"
getHiddenCard('1234567812345678', 3) // "***5678"
getHiddenCard('1234567812345678')    // "****5678"
getHiddenCard('2034399002121100', 1) // "*1100"
```
