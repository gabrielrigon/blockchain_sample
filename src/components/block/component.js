module.exports = class {
  onCreate(input) {
    this.state = {
      block: input.block,
      difficulty: input.difficulty
    }
  }

  handleDataInputKeyUp(event, el) {
    this.state.block.data = el.value
    this.state.block.hash = this.state.block.calculateHash()
    
    this.forceUpdate()
  }

  onMineBlockClicked() {
    this.state.block.mineBlock(this.state.difficulty)
    this.forceUpdate()
  }
}
