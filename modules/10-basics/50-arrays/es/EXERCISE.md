
Los anagramas son palabras formadas por las mismas letras. Por ejemplo:

```text
perro — repro
amor — roma — ramo
tapa — pata — apta
```

Implementa la función `filterAnagrams()`, que encuentra todos los anagramas de una palabra. La función recibe la palabra original y una lista para verificar, que es un array. La función devuelve un array con todos los anagramas. Si en la lista no hay anagramas, devuelve un array vacío:

```typescript
filterAnagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
// ['aabb', 'bbaa']

filterAnagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);
// ['carer', 'racer']

filterAnagrams("laser", ["lazing", "lazy", "lacer"]);
// []
```
