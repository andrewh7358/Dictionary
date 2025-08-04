/**
 * Dictionary implementation
 * 
 * function addWords(input)
 * function isInDict(word)
 * 
 * addWords(['apple', 'banana', 'orange'])
 * isInDict('apple') // true
 * isInDict('app') // false
 * isInDict('appliance') // false
 * 
 * Wildcard Search
 * addWords(['cat', 'bat', 'bar'])
 * isInDict('*at') // true
 * isInDict('c*t') // true
 * isInDict('cr*') // false
 */
import { LetterNode } from './LetterNode'

export class Dictionary {
  dictionary: LetterNode

  constructor() {
    this.dictionary = new LetterNode('root', false)
  }

  addWords(input: string[]): void {
    for (const word of input) {
      this.dictionary.insert(word)
    }
  }

  isInDict(word: string): boolean {
    if (word.length === 0) {
      return true
    }

    let curr = [this.dictionary]

    for (const letter of word) {
      // wildcard search, match all
      if (letter === '*') {
        let next: LetterNode[] = []

        for (const node of curr) {
          next = next.concat(node.children)
        }

        curr = next
      } else {
        let next: LetterNode[] = []

        for (const node of curr) {
          const index = node.indexOfLetter(letter)

          if (index !== -1) {
            next.push(node.children[index])
          }

          curr = next
        }
      }
    }

    for (const node of curr) {
      if (node.isWord) {
        return node.isWord
      }
    }

    return false
  }
}
