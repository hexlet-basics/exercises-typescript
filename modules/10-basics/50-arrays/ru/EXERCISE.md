
Анаграммы — это слова, которые состоят из одинаковых букв. Например:

    спаниель — апельсин
    карат — карта — катар
    топор — ропот — отпор

Реализуйте функцию `filterAnagrams()`, которая находит все анаграммы слова. Функция принимает исходное слово и список для проверки — массив. А возвращает функция массив всех анаграмм. Если в списке нет анаграммы, то возвращается пустой массив:

```typescript
filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []
```
