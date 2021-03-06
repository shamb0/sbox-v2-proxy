'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const EmptyAggregator = contract({
 "contractName": "EmptyAggregator",
 "abi": [
  {
   "constant": false,
   "inputs": [
    {
     "name": "_requestId",
     "type": "bytes32"
    },
    {
     "name": "_saId",
     "type": "bytes32"
    },
    {
     "name": "_oracle",
     "type": "address"
    },
    {
     "name": "_fulfillment",
     "type": "bytes32"
    }
   ],
   "name": "fulfill",
   "outputs": [
    {
     "name": "success",
     "type": "bool"
    },
    {
     "name": "complete",
     "type": "bool"
    },
    {
     "name": "response",
     "type": "bytes"
    },
    {
     "name": "paymentAmounts",
     "type": "int256[]"
    }
   ],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_saId",
     "type": "bytes32"
    },
    {
     "name": "_serviceAgreementData",
     "type": "bytes"
    }
   ],
   "name": "initiateJob",
   "outputs": [
    {
     "name": "success",
     "type": "bool"
    },
    {
     "name": "_",
     "type": "bytes"
    }
   ],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": false,
     "name": "said",
     "type": "bytes32"
    }
   ],
   "name": "InitiatedJob",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": false,
     "name": "requestId",
     "type": "bytes32"
    },
    {
     "indexed": false,
     "name": "oracle",
     "type": "address"
    },
    {
     "indexed": false,
     "name": "success",
     "type": "bool"
    },
    {
     "indexed": false,
     "name": "complete",
     "type": "bool"
    },
    {
     "indexed": false,
     "name": "fulfillment",
     "type": "bytes"
    }
   ],
   "name": "Fulfilled",
   "type": "event"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b50610425806100206000396000f3fe60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639760168f8114610050578063d43a12f614610171575b600080fd5b34801561005c57600080fd5b506100a26004803603608081101561007357600080fd5b5080359060208101359073ffffffffffffffffffffffffffffffffffffffff60408201351690606001356102ae565b6040518085151515158152602001841515151581526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156100f75781810151838201526020016100df565b50505050905090810190601f1680156101245780820380516001836020036101000a031916815260200191505b508381038252845181528451602091820191808701910280838360005b83811015610159578181015183820152602001610141565b50505050905001965050505050505060405180910390f35b34801561017d57600080fd5b5061022b6004803603604081101561019457600080fd5b813591908101906040810160208201356401000000008111156101b657600080fd5b8201836020820111156101c857600080fd5b803590602001918460018302840111640100000000831117156101ea57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103b5945050505050565b604051808315151515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561027257818101518382015260200161025a565b50505050905090810190601f16801561029f5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6040805160208082018490528251808303820181528284019384905287845273ffffffffffffffffffffffffffffffffffffffff861660608481019190915260016080850181905260a080860182905260c08601908152835160e0870152835191968796949593947f56e3e982f891af88c0faacff5062ae928b6bdeab4073240eb1ae9451b77a54b8948d948c948a9485948b9491936101009091019185019080838360005b8381101561036c578181015183820152602001610354565b50505050905090810190601f1680156103995780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a1945094509450949050565b6040805183815290516000916060917f5d3501b519fbd1e8d168f391246ff9ea5621f7d81712c6fc42d23e380b80a8119181900360200190a160019150925092905056fea165627a7a723058205300592efba2d767a3ce87e175119ad6ee30b7eb828a10a8bf97b9defdbf27150029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x425 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4B JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x9760168F DUP2 EQ PUSH2 0x50 JUMPI DUP1 PUSH4 0xD43A12F6 EQ PUSH2 0x171 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xA2 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0x73 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 DUP2 ADD CALLDATALOAD SWAP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF PUSH1 0x40 DUP3 ADD CALLDATALOAD AND SWAP1 PUSH1 0x60 ADD CALLDATALOAD PUSH2 0x2AE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP6 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP5 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP4 DUP2 SUB DUP4 MSTORE DUP6 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xF7 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xDF JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x124 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP DUP4 DUP2 SUB DUP3 MSTORE DUP5 MLOAD DUP2 MSTORE DUP5 MLOAD PUSH1 0x20 SWAP2 DUP3 ADD SWAP2 DUP1 DUP8 ADD SWAP2 MUL DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x159 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x141 JUMP JUMPDEST POP POP POP POP SWAP1 POP ADD SWAP7 POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x17D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x22B PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x194 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD SWAP2 SWAP1 DUP2 ADD SWAP1 PUSH1 0x40 DUP2 ADD PUSH1 0x20 DUP3 ADD CALLDATALOAD PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x1B6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x1C8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x1EA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP SWAP3 SWAP6 POP PUSH2 0x3B5 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP4 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x272 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x25A JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x29F JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP4 POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 ADD DUP5 SWAP1 MSTORE DUP3 MLOAD DUP1 DUP4 SUB DUP3 ADD DUP2 MSTORE DUP3 DUP5 ADD SWAP4 DUP5 SWAP1 MSTORE DUP8 DUP5 MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP7 AND PUSH1 0x60 DUP5 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x1 PUSH1 0x80 DUP6 ADD DUP2 SWAP1 MSTORE PUSH1 0xA0 DUP1 DUP7 ADD DUP3 SWAP1 MSTORE PUSH1 0xC0 DUP7 ADD SWAP1 DUP2 MSTORE DUP4 MLOAD PUSH1 0xE0 DUP8 ADD MSTORE DUP4 MLOAD SWAP2 SWAP7 DUP8 SWAP7 SWAP5 SWAP6 SWAP4 SWAP5 PUSH32 0x56E3E982F891AF88C0FAACFF5062AE928B6BDEAB4073240EB1AE9451B77A54B8 SWAP5 DUP14 SWAP5 DUP13 SWAP5 DUP11 SWAP5 DUP6 SWAP5 DUP12 SWAP5 SWAP2 SWAP4 PUSH2 0x100 SWAP1 SWAP2 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x36C JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x354 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x399 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP7 POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 SWAP1 POP JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD DUP4 DUP2 MSTORE SWAP1 MLOAD PUSH1 0x0 SWAP2 PUSH1 0x60 SWAP2 PUSH32 0x5D3501B519FBD1E8D168F391246FF9EA5621F7D81712C6FC42D23E380B80A811 SWAP2 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 LOG1 PUSH1 0x1 SWAP2 POP SWAP3 POP SWAP3 SWAP1 POP JUMP INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 MSTORE8 STOP MSIZE 0x2e 0xfb LOG2 0xd7 PUSH8 0xA3CE87E175119AD6 0xee ADDRESS 0xb7 0xeb DUP3 DUP11 LT 0xa8 0xbf SWAP8 0xb9 0xde REVERT 0xbf 0x27 ISZERO STOP 0x29 ",
   "sourceMap": "202:755:24:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;202:755:24;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639760168f8114610050578063d43a12f614610171575b600080fd5b34801561005c57600080fd5b506100a26004803603608081101561007357600080fd5b5080359060208101359073ffffffffffffffffffffffffffffffffffffffff60408201351690606001356102ae565b6040518085151515158152602001841515151581526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156100f75781810151838201526020016100df565b50505050905090810190601f1680156101245780820380516001836020036101000a031916815260200191505b508381038252845181528451602091820191808701910280838360005b83811015610159578181015183820152602001610141565b50505050905001965050505050505060405180910390f35b34801561017d57600080fd5b5061022b6004803603604081101561019457600080fd5b813591908101906040810160208201356401000000008111156101b657600080fd5b8201836020820111156101c857600080fd5b803590602001918460018302840111640100000000831117156101ea57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103b5945050505050565b604051808315151515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561027257818101518382015260200161025a565b50505050905090810190601f16801561029f5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6040805160208082018490528251808303820181528284019384905287845273ffffffffffffffffffffffffffffffffffffffff861660608481019190915260016080850181905260a080860182905260c08601908152835160e0870152835191968796949593947f56e3e982f891af88c0faacff5062ae928b6bdeab4073240eb1ae9451b77a54b8948d948c948a9485948b9491936101009091019185019080838360005b8381101561036c578181015183820152602001610354565b50505050905090810190601f1680156103995780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a1945094509450949050565b6040805183815290516000916060917f5d3501b519fbd1e8d168f391246ff9ea5621f7d81712c6fc42d23e380b80a8119181900360200190a160019150925092905056fea165627a7a723058205300592efba2d767a3ce87e175119ad6ee30b7eb828a10a8bf97b9defdbf27150029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4B JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x9760168F DUP2 EQ PUSH2 0x50 JUMPI DUP1 PUSH4 0xD43A12F6 EQ PUSH2 0x171 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xA2 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0x73 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 DUP2 ADD CALLDATALOAD SWAP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF PUSH1 0x40 DUP3 ADD CALLDATALOAD AND SWAP1 PUSH1 0x60 ADD CALLDATALOAD PUSH2 0x2AE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP6 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP5 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP4 DUP2 SUB DUP4 MSTORE DUP6 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xF7 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xDF JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x124 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP DUP4 DUP2 SUB DUP3 MSTORE DUP5 MLOAD DUP2 MSTORE DUP5 MLOAD PUSH1 0x20 SWAP2 DUP3 ADD SWAP2 DUP1 DUP8 ADD SWAP2 MUL DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x159 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x141 JUMP JUMPDEST POP POP POP POP SWAP1 POP ADD SWAP7 POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x17D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x22B PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x194 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD SWAP2 SWAP1 DUP2 ADD SWAP1 PUSH1 0x40 DUP2 ADD PUSH1 0x20 DUP3 ADD CALLDATALOAD PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x1B6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x1C8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x1EA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP SWAP3 SWAP6 POP PUSH2 0x3B5 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP4 ISZERO ISZERO ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x272 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x25A JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x29F JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP4 POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 ADD DUP5 SWAP1 MSTORE DUP3 MLOAD DUP1 DUP4 SUB DUP3 ADD DUP2 MSTORE DUP3 DUP5 ADD SWAP4 DUP5 SWAP1 MSTORE DUP8 DUP5 MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP7 AND PUSH1 0x60 DUP5 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x1 PUSH1 0x80 DUP6 ADD DUP2 SWAP1 MSTORE PUSH1 0xA0 DUP1 DUP7 ADD DUP3 SWAP1 MSTORE PUSH1 0xC0 DUP7 ADD SWAP1 DUP2 MSTORE DUP4 MLOAD PUSH1 0xE0 DUP8 ADD MSTORE DUP4 MLOAD SWAP2 SWAP7 DUP8 SWAP7 SWAP5 SWAP6 SWAP4 SWAP5 PUSH32 0x56E3E982F891AF88C0FAACFF5062AE928B6BDEAB4073240EB1AE9451B77A54B8 SWAP5 DUP14 SWAP5 DUP13 SWAP5 DUP11 SWAP5 DUP6 SWAP5 DUP12 SWAP5 SWAP2 SWAP4 PUSH2 0x100 SWAP1 SWAP2 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x36C JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x354 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x399 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP7 POP POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 SWAP5 POP SWAP5 POP SWAP5 POP SWAP5 SWAP1 POP JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD DUP4 DUP2 MSTORE SWAP1 MLOAD PUSH1 0x0 SWAP2 PUSH1 0x60 SWAP2 PUSH32 0x5D3501B519FBD1E8D168F391246FF9EA5621F7D81712C6FC42D23E380B80A811 SWAP2 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 LOG1 PUSH1 0x1 SWAP2 POP SWAP3 POP SWAP3 SWAP1 POP JUMP INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 MSTORE8 STOP MSIZE 0x2e 0xfb LOG2 0xd7 PUSH8 0xA3CE87E175119AD6 0xee ADDRESS 0xb7 0xeb DUP3 DUP11 LT 0xa8 0xbf SWAP8 0xb9 0xde REVERT 0xbf 0x27 ISZERO STOP 0x29 ",
   "sourceMap": "202:755:24:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;585:370;;8:9:-1;5:2;;;30:1;27;20:12;5:2;585:370:24;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;-1:-1;585:370:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;585:370:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;585:370:24;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;585:370:24;;;;;;;;;;;;;;;;;;;;;269:188;;8:9:-1;5:2;;;30:1;27;20:12;5:2;269:188:24;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;269:188:24;;;;;;;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;269:188:24;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;269:188:24;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;269:188:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;269:188:24;;-1:-1:-1;269:188:24;;-1:-1:-1;;;;;269:188:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;269:188:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;585:370;852:24;;;;;;;;;;;;26:21:-1;;;22:32;;6:49;;852:24:24;;;;;;;889:59;;;;;;729:21;889:59;;;;;;;806:4;889:59;;;;;;;;;;;;;;;;;;;;;;;;;;;806:4;;;;852:24;;729:21;;889:59;;899:10;;911:7;;806:4;;;;852:24;;;;889:59;;;;;;;;;;;700:12;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;889:59:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;585:370;;;;;;;;;:::o;269:188::-;409:19;;;;;;;;366:12;;380:14;;409:19;;;;;;;;;446:4;436:14;;269:188;;;;;:::o"
  },
  "methodIdentifiers": {
   "fulfill(bytes32,bytes32,address,bytes32)": "9760168f",
   "initiateJob(bytes32,bytes)": "d43a12f6"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"_requestId\",\"type\":\"bytes32\"},{\"name\":\"_saId\",\"type\":\"bytes32\"},{\"name\":\"_oracle\",\"type\":\"address\"},{\"name\":\"_fulfillment\",\"type\":\"bytes32\"}],\"name\":\"fulfill\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"},{\"name\":\"complete\",\"type\":\"bool\"},{\"name\":\"response\",\"type\":\"bytes\"},{\"name\":\"paymentAmounts\",\"type\":\"int256[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_saId\",\"type\":\"bytes32\"},{\"name\":\"_serviceAgreementData\",\"type\":\"bytes\"}],\"name\":\"initiateJob\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"},{\"name\":\"_\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"said\",\"type\":\"bytes32\"}],\"name\":\"InitiatedJob\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"requestId\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"oracle\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"success\",\"type\":\"bool\"},{\"indexed\":false,\"name\":\"complete\",\"type\":\"bool\"},{\"indexed\":false,\"name\":\"fulfillment\",\"type\":\"bytes\"}],\"name\":\"Fulfilled\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{},\"notice\":\"Used to check the basic aggregator/coordinator interactions. It does nothing but emit its messages as certain types of events.\"}},\"settings\":{\"compilationTarget\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/tests/EmptyAggregator.sol\":\"EmptyAggregator\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/dev/CoordinatorInterface.sol\":{\"keccak256\":\"0x5e47514ec65553a3cd071eb215a3b70252ac803ed2635140cda3c848265d9ef0\",\"urls\":[\"bzzr://aab94dbeb95e865cfc0f5a8808ce5bc5529e0105a53290b03ee6ccd83430d450\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/tests/EmptyAggregator.sol\":{\"keccak256\":\"0x952e461308e0889cd12613aeb21642b1bc1ed7762939a23eda8dafabce012fda\",\"urls\":[\"bzzr://e0769b23c56bc1d2e9f0600daff1e5367145e1d18a98ac4731a51baaac2afe74\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('EmptyAggregator.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.EmptyAggregator = EmptyAggregator
