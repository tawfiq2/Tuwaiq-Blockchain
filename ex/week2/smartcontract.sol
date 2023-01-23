pragma solidity ^0.8.17;
contract HelloWorld {

 //bool any== fa
 //string greeting = "Hello World";
 //Constructor function

modifier onlyOwner() {
        require(msg.sender == owner, "only owner can run this function ");
        _;
    }

  address  public owner=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
 uint public counter;

 function hi() public onlyOwner  {

     counter++;
     
 }
function dec() public onlyOwner  {
     counter--;

 }}
