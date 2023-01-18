import { Block } from './block.js'
import sha256 from 'crypto-js/sha256.js'
const hash = require("crypto-js/sha256");

class Blockchain {
    list = []
    constructor() {
        // check if there is a block in the list 
        // if not create a block 
        if (this.list.length == 0) {
            this.list.push(new Block("Genesis Block", "N/A", 0, 0))
        }

        // if there is a block 
        // do nothing 
    }

    addBlock(data) {
        const previousHash = this.getPerviousBlockHash()
        // create an instance of a block 
        this.list.push(new Block(data, previousHash, 0, this.getCurrentBlockHeight()))
        console.log(this.list)

    }

    getCurrentBlockHeight() {
        return this.list.length
    }
    getPerviousBlockHash() {
        return this.list[this.list.length - 1].hash
    }

    print() {
        console.log(this.list)
    }

    // task 1 validate the blockchain

    isChainValid(){
        for (let i = 1; i < this.length; i++){
          const currentBlock = [i];
          const previousBlock = [i - 1];}
      
          // Recalculate the hash of the block and see if it matches up.
              // This allows us to detect changes to a single block
          if (currentBlock.hash !== currentBlock.calculateHash()) {
            return false;
          }
      
          // Check if this block actually points to the previous block (hash)
          if (currentBlock.previousHash !== previousBlock.hash) {
                  return false;
              }
              return true;
        }

    isBlockValid(){
        for(let i = 1; i < this.length; i++){
          let prev = [i-1], current = [i];
          if(current.hash !== prev.prevHash || current.hash !== current.calcHash())
           return false;
        }return true;
    }
    // task 2 validate the block

    // task 3 add the mining functionality
    mine(difficulty) {
        // Basically, it loops until our hash starts with 
        // the string 0...000 with length of <difficulty>.
        while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
            // We increases our nonce so that we can get a whole different hash.
            this.nonce++;
            // Update our new hash with the new nonce value.
            this.hash = this.getHash();
        }
    }
    
}


const blockchain = new Blockchain();
blockchain.addBlock("second block", "0")
