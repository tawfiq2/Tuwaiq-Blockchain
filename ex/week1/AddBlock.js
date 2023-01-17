class BlockChain {
    constructor() {
       this.chain = [Block.genesis()];
    }
    addBlock(data) {
       let index = this.chain.length;
       let block = new Block(index, data);
       this.chain.push(block);
  
    }
  
    getCurrentBlock() {
      return this.chain[this.chain.length - 1];
    }
  }
