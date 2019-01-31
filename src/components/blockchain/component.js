const Blockchain = require('../../models/Blockchain')
const Block = require('../../models/Block')

module.exports = class {
  onCreate() {
    this.state = {
      blockchain: new Blockchain(),
      valid: true
    }
  }

  addBlock() {
    var index = this.state.blockchain.getLatestBlock().index + 1
    var newBlock = new Block(index, new Date(), 'test')

    this.state.valid = this.state.blockchain.isChainValid()
    this.state.blockchain.addBlock(newBlock)

    this.setStateDirty('blockchain')
  }
}
