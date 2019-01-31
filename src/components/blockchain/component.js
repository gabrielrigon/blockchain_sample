const Blockchain = require('../../models/Blockchain')
const Block = require('../../models/Block')

module.exports = class {
  onCreate() {
    this.state = {
      blockchain: new Blockchain()
    }
  }

  addBlock() {
    var index = this.state.blockchain.getLatestBlock().index + 1
    var newBlock = new Block(index, new Date(), '')

    this.state.blockchain.addBlock(newBlock)

    this.setStateDirty('blockchain')
  }
}
