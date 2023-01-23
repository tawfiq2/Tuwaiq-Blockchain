

pragma solidity ^0.8.17;
contract HelloWorld {

 //bool any== fa
 //string greeting = "Hello World";
 //Constructor function
address  public owner=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    mapping(string =>uint)public balance;


modifier onlyOwner() {
        require(msg.sender == owner, "only owner can run this function ");
        _;
    }

//----
function setBalance (address _addrees)public payable{
    balance[_addrees]=msg.value;
}
//----


//--
  //address  public owner=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
 uint public counter;

 function hi() public onlyOwner  {

     counter++;
     }
     
 function AddBalance(address _addrees,uint amount) public  {
        //balance[address _addrees]=amount;
     
       }
function balance(address _owner) public view returns (uint256) { 
    
      // return balances[_owner];
      }

function dec() public onlyOwner  {
     counter--;

 }
 
}




