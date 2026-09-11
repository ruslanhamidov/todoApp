class IdGenerator {
  alphabet = "abcdefghijklmnopqrstuvwxyz";

  constructor() {
    this.id = this.createId()
  }

  createId() {
    return this.createHeader() + this.mixHashes()
  }

  createHeader() {
    let header = ''
    const now = new Date().toLocaleString()
    const hex = Array.from(now)
      .map(c => c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("");
    for (let i = 0; i < 8; i++) { header += hex[Math.floor(Math.random() * hex.length)]}
    return header
  }

  generateAscii() {
    const asciiChars = this.generateLetters().map(letter => letter.charCodeAt(0))
    let hash = []
    for (const letter of asciiChars) {
      const number = (Math.trunc(letter / this.getRandomIntInclusive(1, 4)))
      hash.push(number.toString(16))
    }
    return hash
  }

  generateLetters() {
    let randomLetters = []
    for (let i = 0; i < 5; i++) {
      randomLetters.push(this.alphabet[Math.floor(Math.random() * this.alphabet.length)]);
    }
    return randomLetters
  }

  mixHashes() {
    const letters = this.generateLetters()
    const hex = this.generateAscii()
    const mixedHashes = letters.concat(hex).join('')
    return mixedHashes.split('').sort(() => Math.random() - 0.5).join('');
  }

  getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

}

export default IdGenerator;
