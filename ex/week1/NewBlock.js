import sha256 from 'crypto-js/sha256'

class Block {

    
    hash
    data
    previousHash
    nonce
    height
    timestamp
    constructor(hash, data, previousHash, nonce, height,timestamp) {
        // change it to the hash function
        this.hash = this.Hash("SHA-256"); 
        this.data = this.Hash(data);
        this.previousHash = previousHash
        this.nonce = nonce
        this.height = height
        this.timestamp = new Date()

    }

    Hash() {
        // sha256 
        //public static void main(String[] args) {
   console.log("SHA-256", "");
   return sha256()
}
        // takes the data and gets its hash.
    }


let block = new Block('hash', 'data', 'previousHash', 1, 1)


