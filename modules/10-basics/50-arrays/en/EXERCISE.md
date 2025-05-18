
Anagrams are words that are made up of the same letters. For example:

    dusty — study
    elbow — below
    peach — cheap

Implement the `filterAnagrams()` function that finds all anagrams of a word. The function accepts a source word and a list to check - an array. And the function returns an array of all anagrams. If there is no anagram in the list, an empty array is returned:

```typescript
filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []
```
