

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
A government tender system to present government projects to competitors using blockchain technology.

	
## Technologies
Project is created with:
* Solidity 
* truffle unbox Webpack
* javaScript and html
* node.js
* metamack
* openzipplen ERC20

Some software we needed:
* Remix - Ethereum
* Visual Studio Code


	
## Setup
To run this project:
first "test" the smart contract
write in the terminal of VS the following commands:

To initiate  truffle folders:
```
$ truffle init
```
Second: to write frontend  with webpack we need to install truffle webpack:
```
$ npx truffle unbox webpack
```
After upload the smart contract and test.js write these  commands:
```
$ truffle develop
$ migrate --reset
$ test
```
After done index.html and index.js write these  commands:
```
$ truffle compile
$ truffle migrate
$ truffle test
$ cd app
$ npm run dev
```
