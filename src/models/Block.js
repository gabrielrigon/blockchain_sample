var SHA256 = require('crypto-js/sha256')

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.hash = this.calculateHash()
    this.nounce = 0
  }

  calculateHash() {
    return SHA256(
      this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nounce
    ).toString()
  }

  mineBlock(difficulty) {
    let valid = () => this.hash.substring(0, difficulty) === Array(difficulty + 1).join('0')

    if (valid()) {
      return
    }

    this.nounce = 0

    while (!valid()) {
      this.nounce++
      this.hash = this.calculateHash()
    }
  }
}

module.exports = Block
