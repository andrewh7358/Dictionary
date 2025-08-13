# Dictionary

Dictionary implementation with wildcard searching in TypeScript using a trie.

`addWords`: Add new words to the dictionary. This is not case sensitive.

`isInDict`: Check if a word is in the dictionary. This supports wildcard searching, using `*` as the wildcard character.

Example:
```
addWords(['apple', 'banana'])
isInDict('apple') // true
isInDict('ap***') // true
isInDict('appl') // false
```

## How to test

In the folder directory, run `tsc test.ts && node test.js` to run the tests.
