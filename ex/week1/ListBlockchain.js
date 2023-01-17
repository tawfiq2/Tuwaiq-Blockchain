import Block from "./block.js"

class Blockchain
{
    list=[]
    constructor(){
        for(let i=0;i<10;i++)
        this.list.push(new Block("date","pervioshash"))
        console.lo(this.list)
        return sha256()
    }
}
new Blockchain();
