import { Dictionary } from './Dictionary'

const dictionary = new Dictionary()

const input1 = ['Apple', 'banana', 'orange']
dictionary.addWords(input1)
console.log('Initial test')
console.log(dictionary.isInDict('apple')) // true
console.log(dictionary.isInDict('app')) // false
console.log(dictionary.isInDict('appliance')) // false

// test capitals
console.log('Test capitals')
console.log(dictionary.isInDict('AppLe')) // true
console.log(dictionary.isInDict('aPp')) // false
console.log(dictionary.isInDict('applianCE')) // false

// wildcard search
const input2 = ['cat', 'bat', 'bar']
dictionary.addWords(input2)
console.log('Wildcard search')
console.log(dictionary.isInDict('*at')) // true
console.log(dictionary.isInDict('b*t')) // true
console.log(dictionary.isInDict('cr*')) // false

console.log(dictionary.isInDict('**t')) // true
console.log(dictionary.isInDict('**z')) // false
console.log(dictionary.isInDict('*a*')) // true

// does not destory existing words
console.log('Does not destory existing words')
console.log(dictionary.isInDict('apple')) // true
console.log(dictionary.isInDict('banana')) // true
