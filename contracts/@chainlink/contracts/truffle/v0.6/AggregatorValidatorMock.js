'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const AggregatorValidatorMock = contract({
 "contractName": "AggregatorValidatorMock",
 "abi": [
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": false,
     "internalType": "uint256",
     "name": "_previousRoundId",
     "type": "uint256"
    },
    {
     "indexed": true,
     "internalType": "int256",
     "name": "_previousAnswer",
     "type": "int256"
    },
    {
     "indexed": false,
     "internalType": "uint256",
     "name": "_currentRoundId",
     "type": "uint256"
    },
    {
     "indexed": true,
     "internalType": "int256",
     "name": "_currentAnswer",
     "type": "int256"
    }
   ],
   "name": "Validated",
   "type": "event"
  },
  {
   "inputs": [],
   "name": "currentAnswer",
   "outputs": [
    {
     "internalType": "int256",
     "name": "",
     "type": "int256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "currentRoundId",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "previousAnswer",
   "outputs": [
    {
     "internalType": "int256",
     "name": "",
     "type": "int256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "previousRoundId",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "uint256",
     "name": "_previousRoundId",
     "type": "uint256"
    },
    {
     "internalType": "int256",
     "name": "_previousAnswer",
     "type": "int256"
    },
    {
     "internalType": "uint256",
     "name": "_currentRoundId",
     "type": "uint256"
    },
    {
     "internalType": "int256",
     "name": "_currentAnswer",
     "type": "int256"
    }
   ],
   "name": "validate",
   "outputs": [
    {
     "internalType": "bool",
     "name": "",
     "type": "bool"
    }
   ],
   "stateMutability": "nonpayable",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b5061017d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80639cbe5efd116100505780639cbe5efd1461008e5780639e8fcbe914610096578063beed9b511461009e57610067565b8063308dd1911461006c5780637e1b4cb014610086575b600080fd5b6100746100e1565b60408051918252519081900360200190f35b6100746100e7565b6100746100ed565b6100746100f3565b6100cd600480360360808110156100b457600080fd5b50803590602081013590604081013590606001356100f9565b604080519115158252519081900360200190f35b60015481565b60035481565b60025481565b60005481565b600081847f67153bf264f6b67e597cb9f55ec356e629048d2d8cfebb8da80fe1a3f7849aed8786604051808381526020018281526020019250505060405180910390a350600194935050505056fea264697066735822122022cbca02554e9f3f52a89250698195b2a9e8f94bb82f693b17debd9309bfe8b664736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x17D DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x67 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x9CBE5EFD GT PUSH2 0x50 JUMPI DUP1 PUSH4 0x9CBE5EFD EQ PUSH2 0x8E JUMPI DUP1 PUSH4 0x9E8FCBE9 EQ PUSH2 0x96 JUMPI DUP1 PUSH4 0xBEED9B51 EQ PUSH2 0x9E JUMPI PUSH2 0x67 JUMP JUMPDEST DUP1 PUSH4 0x308DD191 EQ PUSH2 0x6C JUMPI DUP1 PUSH4 0x7E1B4CB0 EQ PUSH2 0x86 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x74 PUSH2 0xE1 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x74 PUSH2 0xE7 JUMP JUMPDEST PUSH2 0x74 PUSH2 0xED JUMP JUMPDEST PUSH2 0x74 PUSH2 0xF3 JUMP JUMPDEST PUSH2 0xCD PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0xB4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x40 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x60 ADD CALLDATALOAD PUSH2 0xF9 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 DUP5 PUSH32 0x67153BF264F6B67E597CB9F55EC356E629048D2D8CFEBB8DA80FE1A3F7849AED DUP8 DUP7 PUSH1 0x40 MLOAD DUP1 DUP4 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 SWAP5 SWAP4 POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x22 0xCB 0xCA MUL SSTORE 0x4E SWAP16 EXTCODEHASH MSTORE 0xA8 SWAP3 POP PUSH10 0x8195B2A9E8F94BB82F69 EXTCODESIZE OR 0xDE 0xBD SWAP4 MULMOD 0xBF 0xE8 0xB6 PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "82:680:40:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;82:680:40;;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b50600436106100675760003560e01c80639cbe5efd116100505780639cbe5efd1461008e5780639e8fcbe914610096578063beed9b511461009e57610067565b8063308dd1911461006c5780637e1b4cb014610086575b600080fd5b6100746100e1565b60408051918252519081900360200190f35b6100746100e7565b6100746100ed565b6100746100f3565b6100cd600480360360808110156100b457600080fd5b50803590602081013590604081013590606001356100f9565b604080519115158252519081900360200190f35b60015481565b60035481565b60025481565b60005481565b600081847f67153bf264f6b67e597cb9f55ec356e629048d2d8cfebb8da80fe1a3f7849aed8786604051808381526020018281526020019250505060405180910390a350600194935050505056fea264697066735822122022cbca02554e9f3f52a89250698195b2a9e8f94bb82f693b17debd9309bfe8b664736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x67 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x9CBE5EFD GT PUSH2 0x50 JUMPI DUP1 PUSH4 0x9CBE5EFD EQ PUSH2 0x8E JUMPI DUP1 PUSH4 0x9E8FCBE9 EQ PUSH2 0x96 JUMPI DUP1 PUSH4 0xBEED9B51 EQ PUSH2 0x9E JUMPI PUSH2 0x67 JUMP JUMPDEST DUP1 PUSH4 0x308DD191 EQ PUSH2 0x6C JUMPI DUP1 PUSH4 0x7E1B4CB0 EQ PUSH2 0x86 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x74 PUSH2 0xE1 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x74 PUSH2 0xE7 JUMP JUMPDEST PUSH2 0x74 PUSH2 0xED JUMP JUMPDEST PUSH2 0x74 PUSH2 0xF3 JUMP JUMPDEST PUSH2 0xCD PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0xB4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x40 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x60 ADD CALLDATALOAD PUSH2 0xF9 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 DUP5 PUSH32 0x67153BF264F6B67E597CB9F55EC356E629048D2D8CFEBB8DA80FE1A3F7849AED DUP8 DUP7 PUSH1 0x40 MLOAD DUP1 DUP4 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP PUSH1 0x1 SWAP5 SWAP4 POP POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x22 0xCB 0xCA MUL SSTORE 0x4E SWAP16 EXTCODEHASH MSTORE 0xA8 SWAP3 POP PUSH10 0x8195B2A9E8F94BB82F69 EXTCODESIZE OR 0xDE 0xBD SWAP4 MULMOD 0xBF 0xE8 0xB6 PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "82:680:40:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;82:680:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;185:28:40;;;:::i;:::-;;;;;;;;;;;;;;;;250:27;;;:::i;217:29::-;;;:::i;151:30::-;;;:::i;436:323::-;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;-1:-1;436:323:40;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;185:28;;;;:::o;250:27::-;;;;:::o;217:29::-;;;;:::o;151:30::-;;;;:::o;436:323::-;611:4;717:14;671:15;630:107;647:16;694:15;630:107;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;750:4:40;436:323;;;;;;:::o"
  },
  "methodIdentifiers": {
   "currentAnswer()": "7e1b4cb0",
   "currentRoundId()": "9cbe5efd",
   "previousAnswer()": "308dd191",
   "previousRoundId()": "9e8fcbe9",
   "validate(uint256,int256,uint256,int256)": "beed9b51"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_previousRoundId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"int256\",\"name\":\"_previousAnswer\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_currentRoundId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"int256\",\"name\":\"_currentAnswer\",\"type\":\"int256\"}],\"name\":\"Validated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"currentAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentRoundId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"previousAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"previousRoundId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_previousRoundId\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_previousAnswer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_currentRoundId\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"_currentAnswer\",\"type\":\"int256\"}],\"name\":\"validate\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/tests/AggregatorValidatorMock.sol\":\"AggregatorValidatorMock\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorValidatorInterface.sol\":{\"keccak256\":\"0x7b46614646c22ddf244bdc3cec8c2f8c2bbd519a6b08da07d4bcedf4f1d4a371\",\"urls\":[\"bzz-raw://87e293cb40066294af4734a2c9cf73a04831bc71f9d4ac121ceb8fd08eff6b4e\",\"dweb:/ipfs/QmeQt7bwCMJXF39VTGq8QSZSNyCEx4N2mSGRqSY3dfRQhQ\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/tests/AggregatorValidatorMock.sol\":{\"keccak256\":\"0x570f3f6322c629d7e2afd07888c72db1464bac346bf55f8132a7b6f3b8eeb0e1\",\"urls\":[\"bzz-raw://4071a0db882d7a69ea9d4dcb5c6f5f30819bac5a101adbd2328619c8d1bb7791\",\"dweb:/ipfs/QmYKZAyVrhSLn8sBEU1AxDvUEE2z6pmru24BdGoW8eEC5d\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('AggregatorValidatorMock.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.AggregatorValidatorMock = AggregatorValidatorMock
