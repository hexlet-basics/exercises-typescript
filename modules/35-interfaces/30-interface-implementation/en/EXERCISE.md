
Using the provided `IPhonebook` interface and the `Entry` type, implement the `Phonebook` class, which represents a telephone directory with the following properties:

- `entries` is a database, an object whose entries represent names as keys and phone numbers as values. The property must be immutable and read-only
- `get` - method that returns a phone by name
- `set` - method that writes the name and phone to the directory

Examples:
```typescript
const myNote = new Phonebook();
myNote.set('help', 911);
myNote.get('help'); // 911
```
