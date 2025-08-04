export class LetterNode {
  letter: string
  isWord: boolean
  children: LetterNode[]

  constructor(letter: string, isWord: boolean) {
    this.letter = letter
    this.isWord = isWord
    this.children = []
  }

  indexOfLetter(letter: string): number {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].letter === letter) {
        return i
      }
    }

    return -1
  }

  insert(word: string) {
    if (word.length === 0) {
      return
    }

    const letter = word.charAt(0)
    const index = this.indexOfLetter(letter)

    // letter not found
    if (index === -1) {
      const letterNode = new LetterNode(letter, word.length === 1)
      this.children.push(letterNode)

      if (word.length !== 1) {
        letterNode.insert(word.slice(1))
      }
    // letter found
    } else {
      const curr = this.children[index]

      if (word.length === 1) {
        curr.isWord = true
      } else {
        curr.insert(word.slice(1))
      }
    }
  }
}
