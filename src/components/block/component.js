module.exports = class {
  onCreate(input) {
    this.state = {
      block: input.block,
      difficulty: input.difficulty
    }
  }

  handleDataInputKeyUp(event, el) {
    this.state.block.data = el.value
    this.calculateHashAndUpdate()
  }

  handlePreviousHashInputKeyUp(event, el) {
    this.state.block.previousHash = el.value
    this.calculateHashAndUpdate()
  }

  onMineBlockClicked() {
    this.state.block.mineBlock(this.state.difficulty)
    this.forceUpdate()
    this.notifyChange()
  }

  calculateHashAndUpdate() {
    this.state.block.hash = this.state.block.calculateHash()
    this.forceUpdate()
    this.notifyChange()
  }

  notifyChange() {
    this.emit('blockUpdated')
  }
}
