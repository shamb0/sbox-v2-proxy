'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const MockV3Aggregator = contract({
 "contractName": "MockV3Aggregator",
 "abi": [
  {
   "inputs": [
    {
     "internalType": "uint8",
     "name": "_decimals",
     "type": "uint8"
    },
    {
     "internalType": "int256",
     "name": "_initialAnswer",
     "type": "int256"
    }
   ],
   "stateMutability": "nonpayable",
   "type": "constructor"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "int256",
     "name": "current",
     "type": "int256"
    },
    {
     "indexed": true,
     "internalType": "uint256",
     "name": "roundId",
     "type": "uint256"
    },
    {
     "indexed": false,
     "internalType": "uint256",
     "name": "updatedAt",
     "type": "uint256"
    }
   ],
   "name": "AnswerUpdated",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "uint256",
     "name": "roundId",
     "type": "uint256"
    },
    {
     "indexed": true,
     "internalType": "address",
     "name": "startedBy",
     "type": "address"
    },
    {
     "indexed": false,
     "internalType": "uint256",
     "name": "startedAt",
     "type": "uint256"
    }
   ],
   "name": "NewRound",
   "type": "event"
  },
  {
   "inputs": [],
   "name": "decimals",
   "outputs": [
    {
     "internalType": "uint8",
     "name": "",
     "type": "uint8"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "description",
   "outputs": [
    {
     "internalType": "string",
     "name": "",
     "type": "string"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "name": "getAnswer",
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
   "inputs": [
    {
     "internalType": "uint80",
     "name": "_roundId",
     "type": "uint80"
    }
   ],
   "name": "getRoundData",
   "outputs": [
    {
     "internalType": "uint80",
     "name": "roundId",
     "type": "uint80"
    },
    {
     "internalType": "int256",
     "name": "answer",
     "type": "int256"
    },
    {
     "internalType": "uint256",
     "name": "startedAt",
     "type": "uint256"
    },
    {
     "internalType": "uint256",
     "name": "updatedAt",
     "type": "uint256"
    },
    {
     "internalType": "uint80",
     "name": "answeredInRound",
     "type": "uint80"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "name": "getTimestamp",
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
   "name": "latestAnswer",
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
   "name": "latestRound",
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
   "name": "latestRoundData",
   "outputs": [
    {
     "internalType": "uint80",
     "name": "roundId",
     "type": "uint80"
    },
    {
     "internalType": "int256",
     "name": "answer",
     "type": "int256"
    },
    {
     "internalType": "uint256",
     "name": "startedAt",
     "type": "uint256"
    },
    {
     "internalType": "uint256",
     "name": "updatedAt",
     "type": "uint256"
    },
    {
     "internalType": "uint80",
     "name": "answeredInRound",
     "type": "uint80"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "latestTimestamp",
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
     "internalType": "int256",
     "name": "_answer",
     "type": "int256"
    }
   ],
   "name": "updateAnswer",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "uint80",
     "name": "_roundId",
     "type": "uint80"
    },
    {
     "internalType": "int256",
     "name": "_answer",
     "type": "int256"
    },
    {
     "internalType": "uint256",
     "name": "_timestamp",
     "type": "uint256"
    },
    {
     "internalType": "uint256",
     "name": "_startedAt",
     "type": "uint256"
    }
   ],
   "name": "updateRoundData",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "version",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b506040516105063803806105068339818101604052604081101561003357600080fd5b5080516020909101516000805460ff191660ff84161790556100548161005b565b50506100a2565b600181815542600281905560038054909201808355600090815260046020908152604080832095909555835482526005815284822083905592548152600690925291902055565b610455806100b16000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638205bf6a11610081578063b5ab58dc1161005b578063b5ab58dc14610268578063b633620c14610285578063feaf968c146102a2576100d4565b80638205bf6a146101db5780639a6fc8f5146101e3578063a87a20ce1461024b576100d4565b806354fd4d50116100b257806354fd4d501461014e578063668a0f02146101565780637284e4161461015e576100d4565b8063313ce567146100d95780634aa2011f146100f757806350d25bcd14610134575b600080fd5b6100e16102aa565b6040805160ff9092168252519081900360200190f35b6101326004803603608081101561010d57600080fd5b5069ffffffffffffffffffff81351690602081013590604081013590606001356102b3565b005b61013c610300565b60408051918252519081900360200190f35b61013c610306565b61013c61030b565b610166610311565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101a0578181015183820152602001610188565b50505050905090810190601f1680156101cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61013c610348565b61020c600480360360208110156101f957600080fd5b503569ffffffffffffffffffff1661034e565b6040805169ffffffffffffffffffff96871681526020810195909552848101939093526060840191909152909216608082015290519081900360a00190f35b6101326004803603602081101561026157600080fd5b5035610387565b61013c6004803603602081101561027e57600080fd5b50356103ce565b61013c6004803603602081101561029b57600080fd5b50356103e0565b61020c6103f2565b60005460ff1681565b69ffffffffffffffffffff90931660038181556001849055600283905560009182526004602090815260408084209590955581548352600581528483209390935554815260069091522055565b60015481565b600081565b60035481565b60408051808201909152601f81527f76302e362f74657374732f4d6f636b563341676772656761746f722e736f6c00602082015290565b60025481565b69ffffffffffffffffffff8116600090815260046020908152604080832054600683528184205460059093529220549293919290918490565b600181815542600281905560038054909201808355600090815260046020908152604080832095909555835482526005815284822083905592548152600690925291902055565b60046020526000908152604090205481565b60056020526000908152604090205481565b6003546000818152600460209081526040808320546006835281842054600590935292205483909192939456fea2646970667358221220a5de2d7d0cfa63caccedbc8195c490671ba53fe4b173bbd62eea78c9d04ac8fa64736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0x506 CODESIZE SUB DUP1 PUSH2 0x506 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x33 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 MLOAD PUSH1 0x20 SWAP1 SWAP2 ADD MLOAD PUSH1 0x0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0xFF DUP5 AND OR SWAP1 SSTORE PUSH2 0x54 DUP2 PUSH2 0x5B JUMP JUMPDEST POP POP PUSH2 0xA2 JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SSTORE TIMESTAMP PUSH1 0x2 DUP2 SWAP1 SSTORE PUSH1 0x3 DUP1 SLOAD SWAP1 SWAP3 ADD DUP1 DUP4 SSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE DUP4 SLOAD DUP3 MSTORE PUSH1 0x5 DUP2 MSTORE DUP5 DUP3 KECCAK256 DUP4 SWAP1 SSTORE SWAP3 SLOAD DUP2 MSTORE PUSH1 0x6 SWAP1 SWAP3 MSTORE SWAP2 SWAP1 KECCAK256 SSTORE JUMP JUMPDEST PUSH2 0x455 DUP1 PUSH2 0xB1 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xD4 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x8205BF6A GT PUSH2 0x81 JUMPI DUP1 PUSH4 0xB5AB58DC GT PUSH2 0x5B JUMPI DUP1 PUSH4 0xB5AB58DC EQ PUSH2 0x268 JUMPI DUP1 PUSH4 0xB633620C EQ PUSH2 0x285 JUMPI DUP1 PUSH4 0xFEAF968C EQ PUSH2 0x2A2 JUMPI PUSH2 0xD4 JUMP JUMPDEST DUP1 PUSH4 0x8205BF6A EQ PUSH2 0x1DB JUMPI DUP1 PUSH4 0x9A6FC8F5 EQ PUSH2 0x1E3 JUMPI DUP1 PUSH4 0xA87A20CE EQ PUSH2 0x24B JUMPI PUSH2 0xD4 JUMP JUMPDEST DUP1 PUSH4 0x54FD4D50 GT PUSH2 0xB2 JUMPI DUP1 PUSH4 0x54FD4D50 EQ PUSH2 0x14E JUMPI DUP1 PUSH4 0x668A0F02 EQ PUSH2 0x156 JUMPI DUP1 PUSH4 0x7284E416 EQ PUSH2 0x15E JUMPI PUSH2 0xD4 JUMP JUMPDEST DUP1 PUSH4 0x313CE567 EQ PUSH2 0xD9 JUMPI DUP1 PUSH4 0x4AA2011F EQ PUSH2 0xF7 JUMPI DUP1 PUSH4 0x50D25BCD EQ PUSH2 0x134 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xE1 PUSH2 0x2AA JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0xFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x132 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0x10D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP2 CALLDATALOAD AND SWAP1 PUSH1 0x20 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x40 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x60 ADD CALLDATALOAD PUSH2 0x2B3 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x13C PUSH2 0x300 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x13C PUSH2 0x306 JUMP JUMPDEST PUSH2 0x13C PUSH2 0x30B JUMP JUMPDEST PUSH2 0x166 PUSH2 0x311 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1A0 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x188 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x1CD JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x13C PUSH2 0x348 JUMP JUMPDEST PUSH2 0x20C PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x1F9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x34E JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH10 0xFFFFFFFFFFFFFFFFFFFF SWAP7 DUP8 AND DUP2 MSTORE PUSH1 0x20 DUP2 ADD SWAP6 SWAP1 SWAP6 MSTORE DUP5 DUP2 ADD SWAP4 SWAP1 SWAP4 MSTORE PUSH1 0x60 DUP5 ADD SWAP2 SWAP1 SWAP2 MSTORE SWAP1 SWAP3 AND PUSH1 0x80 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0xA0 ADD SWAP1 RETURN JUMPDEST PUSH2 0x132 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x261 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x387 JUMP JUMPDEST PUSH2 0x13C PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x27E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x3CE JUMP JUMPDEST PUSH2 0x13C PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x29B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x3E0 JUMP JUMPDEST PUSH2 0x20C PUSH2 0x3F2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH10 0xFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP4 AND PUSH1 0x3 DUP2 DUP2 SSTORE PUSH1 0x1 DUP5 SWAP1 SSTORE PUSH1 0x2 DUP4 SWAP1 SSTORE PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP5 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE DUP2 SLOAD DUP4 MSTORE PUSH1 0x5 DUP2 MSTORE DUP5 DUP4 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SLOAD DUP2 MSTORE PUSH1 0x6 SWAP1 SWAP2 MSTORE KECCAK256 SSTORE JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD DUP1 DUP3 ADD SWAP1 SWAP2 MSTORE PUSH1 0x1F DUP2 MSTORE PUSH32 0x76302E362F74657374732F4D6F636B563341676772656761746F722E736F6C00 PUSH1 0x20 DUP3 ADD MSTORE SWAP1 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SLOAD PUSH1 0x6 DUP4 MSTORE DUP2 DUP5 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP4 MSTORE SWAP3 KECCAK256 SLOAD SWAP3 SWAP4 SWAP2 SWAP3 SWAP1 SWAP2 DUP5 SWAP1 JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SSTORE TIMESTAMP PUSH1 0x2 DUP2 SWAP1 SSTORE PUSH1 0x3 DUP1 SLOAD SWAP1 SWAP3 ADD DUP1 DUP4 SSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE DUP4 SLOAD DUP3 MSTORE PUSH1 0x5 DUP2 MSTORE DUP5 DUP3 KECCAK256 DUP4 SWAP1 SSTORE SWAP3 SLOAD DUP2 MSTORE PUSH1 0x6 SWAP1 SWAP3 MSTORE SWAP2 SWAP1 KECCAK256 SSTORE JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SLOAD PUSH1 0x6 DUP4 MSTORE DUP2 DUP5 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP4 MSTORE SWAP3 KECCAK256 SLOAD DUP4 SWAP1 SWAP2 SWAP3 SWAP4 SWAP5 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xA5 0xDE 0x2D PUSH30 0xCFA63CACCEDBC8195C490671BA53FE4B173BBD62EEA78C9D04AC8FA6473 PUSH16 0x6C634300060600330000000000000000 ",
   "sourceMap": "341:2095:51:-:0;;;772:136;5:9:-1;2:2;;;27:1;24;17:12;2:2;772:136:51;;;;;;;;;;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;772:136:51;;;;;;;849:8;:20;;-1:-1:-1;;849:20:51;;;;;;;875:28;772:136;875:12;:28::i;:::-;772:136;;341:2095;;912:280;971:12;:22;;;1017:15;999;:33;;;1038:11;:13;;;;;;;;-1:-1:-1;1057:22:51;;;:9;:22;;;;;;;;:32;;;;1108:11;;1095:25;;:12;:25;;;;;:43;;;1157:11;;1144:25;;:12;:25;;;;;;:43;912:280::o;341:2095::-;;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b50600436106100d45760003560e01c80638205bf6a11610081578063b5ab58dc1161005b578063b5ab58dc14610268578063b633620c14610285578063feaf968c146102a2576100d4565b80638205bf6a146101db5780639a6fc8f5146101e3578063a87a20ce1461024b576100d4565b806354fd4d50116100b257806354fd4d501461014e578063668a0f02146101565780637284e4161461015e576100d4565b8063313ce567146100d95780634aa2011f146100f757806350d25bcd14610134575b600080fd5b6100e16102aa565b6040805160ff9092168252519081900360200190f35b6101326004803603608081101561010d57600080fd5b5069ffffffffffffffffffff81351690602081013590604081013590606001356102b3565b005b61013c610300565b60408051918252519081900360200190f35b61013c610306565b61013c61030b565b610166610311565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101a0578181015183820152602001610188565b50505050905090810190601f1680156101cd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61013c610348565b61020c600480360360208110156101f957600080fd5b503569ffffffffffffffffffff1661034e565b6040805169ffffffffffffffffffff96871681526020810195909552848101939093526060840191909152909216608082015290519081900360a00190f35b6101326004803603602081101561026157600080fd5b5035610387565b61013c6004803603602081101561027e57600080fd5b50356103ce565b61013c6004803603602081101561029b57600080fd5b50356103e0565b61020c6103f2565b60005460ff1681565b69ffffffffffffffffffff90931660038181556001849055600283905560009182526004602090815260408084209590955581548352600581528483209390935554815260069091522055565b60015481565b600081565b60035481565b60408051808201909152601f81527f76302e362f74657374732f4d6f636b563341676772656761746f722e736f6c00602082015290565b60025481565b69ffffffffffffffffffff8116600090815260046020908152604080832054600683528184205460059093529220549293919290918490565b600181815542600281905560038054909201808355600090815260046020908152604080832095909555835482526005815284822083905592548152600690925291902055565b60046020526000908152604090205481565b60056020526000908152604090205481565b6003546000818152600460209081526040808320546006835281842054600590935292205483909192939456fea2646970667358221220a5de2d7d0cfa63caccedbc8195c490671ba53fe4b173bbd62eea78c9d04ac8fa64736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xD4 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x8205BF6A GT PUSH2 0x81 JUMPI DUP1 PUSH4 0xB5AB58DC GT PUSH2 0x5B JUMPI DUP1 PUSH4 0xB5AB58DC EQ PUSH2 0x268 JUMPI DUP1 PUSH4 0xB633620C EQ PUSH2 0x285 JUMPI DUP1 PUSH4 0xFEAF968C EQ PUSH2 0x2A2 JUMPI PUSH2 0xD4 JUMP JUMPDEST DUP1 PUSH4 0x8205BF6A EQ PUSH2 0x1DB JUMPI DUP1 PUSH4 0x9A6FC8F5 EQ PUSH2 0x1E3 JUMPI DUP1 PUSH4 0xA87A20CE EQ PUSH2 0x24B JUMPI PUSH2 0xD4 JUMP JUMPDEST DUP1 PUSH4 0x54FD4D50 GT PUSH2 0xB2 JUMPI DUP1 PUSH4 0x54FD4D50 EQ PUSH2 0x14E JUMPI DUP1 PUSH4 0x668A0F02 EQ PUSH2 0x156 JUMPI DUP1 PUSH4 0x7284E416 EQ PUSH2 0x15E JUMPI PUSH2 0xD4 JUMP JUMPDEST DUP1 PUSH4 0x313CE567 EQ PUSH2 0xD9 JUMPI DUP1 PUSH4 0x4AA2011F EQ PUSH2 0xF7 JUMPI DUP1 PUSH4 0x50D25BCD EQ PUSH2 0x134 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xE1 PUSH2 0x2AA JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0xFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x132 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x80 DUP2 LT ISZERO PUSH2 0x10D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP2 CALLDATALOAD AND SWAP1 PUSH1 0x20 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x40 DUP2 ADD CALLDATALOAD SWAP1 PUSH1 0x60 ADD CALLDATALOAD PUSH2 0x2B3 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x13C PUSH2 0x300 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x13C PUSH2 0x306 JUMP JUMPDEST PUSH2 0x13C PUSH2 0x30B JUMP JUMPDEST PUSH2 0x166 PUSH2 0x311 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1A0 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x188 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x1CD JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x13C PUSH2 0x348 JUMP JUMPDEST PUSH2 0x20C PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x1F9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH10 0xFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x34E JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH10 0xFFFFFFFFFFFFFFFFFFFF SWAP7 DUP8 AND DUP2 MSTORE PUSH1 0x20 DUP2 ADD SWAP6 SWAP1 SWAP6 MSTORE DUP5 DUP2 ADD SWAP4 SWAP1 SWAP4 MSTORE PUSH1 0x60 DUP5 ADD SWAP2 SWAP1 SWAP2 MSTORE SWAP1 SWAP3 AND PUSH1 0x80 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0xA0 ADD SWAP1 RETURN JUMPDEST PUSH2 0x132 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x261 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x387 JUMP JUMPDEST PUSH2 0x13C PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x27E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x3CE JUMP JUMPDEST PUSH2 0x13C PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x29B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x3E0 JUMP JUMPDEST PUSH2 0x20C PUSH2 0x3F2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH10 0xFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP4 AND PUSH1 0x3 DUP2 DUP2 SSTORE PUSH1 0x1 DUP5 SWAP1 SSTORE PUSH1 0x2 DUP4 SWAP1 SSTORE PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP5 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE DUP2 SLOAD DUP4 MSTORE PUSH1 0x5 DUP2 MSTORE DUP5 DUP4 KECCAK256 SWAP4 SWAP1 SWAP4 SSTORE SLOAD DUP2 MSTORE PUSH1 0x6 SWAP1 SWAP2 MSTORE KECCAK256 SSTORE JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD DUP1 DUP3 ADD SWAP1 SWAP2 MSTORE PUSH1 0x1F DUP2 MSTORE PUSH32 0x76302E362F74657374732F4D6F636B563341676772656761746F722E736F6C00 PUSH1 0x20 DUP3 ADD MSTORE SWAP1 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SLOAD PUSH1 0x6 DUP4 MSTORE DUP2 DUP5 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP4 MSTORE SWAP3 KECCAK256 SLOAD SWAP3 SWAP4 SWAP2 SWAP3 SWAP1 SWAP2 DUP5 SWAP1 JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SSTORE TIMESTAMP PUSH1 0x2 DUP2 SWAP1 SSTORE PUSH1 0x3 DUP1 SLOAD SWAP1 SWAP3 ADD DUP1 DUP4 SSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SWAP6 SWAP1 SWAP6 SSTORE DUP4 SLOAD DUP3 MSTORE PUSH1 0x5 DUP2 MSTORE DUP5 DUP3 KECCAK256 DUP4 SWAP1 SSTORE SWAP3 SLOAD DUP2 MSTORE PUSH1 0x6 SWAP1 SWAP3 MSTORE SWAP2 SWAP1 KECCAK256 SSTORE JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 SLOAD PUSH1 0x6 DUP4 MSTORE DUP2 DUP5 KECCAK256 SLOAD PUSH1 0x5 SWAP1 SWAP4 MSTORE SWAP3 KECCAK256 SLOAD DUP4 SWAP1 SWAP2 SWAP3 SWAP4 SWAP5 JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xA5 0xDE 0x2D PUSH30 0xCFA63CACCEDBC8195C490671BA53FE4B173BBD62EEA78C9D04AC8FA6473 PUSH16 0x6C634300060600330000000000000000 ",
   "sourceMap": "341:2095:51:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;341:2095:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;447:30:51;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1196:346;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;-1:-1;1196:346:51;;;;;;;;;;;;;;;;;;;:::i;:::-;;481:35;;;:::i;:::-;;;;;;;;;;;;;;;;398:44;;;:::i;563:35::-;;;:::i;2295:139::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;2295:139:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;520:39;;;:::i;1546:361::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;1546:361:51;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;912:280;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;912:280:51;;:::i;603:52::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;603:52:51;;:::i;659:56::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;659:56:51;;:::i;1911:380::-;;;:::i;447:30::-;;;;;;:::o;1196:346::-;1327:22;;;;:11;:22;;;1355:12;:22;;;-1:-1:-1;1383:28:51;;;-1:-1:-1;1417:22:51;;;:9;:22;;;;;;;;:32;;;;1468:11;;1455:25;;:12;:25;;;;;:38;;;;1512:11;1499:25;;:12;:25;;;;:38;1196:346::o;481:35::-;;;;:::o;398:44::-;441:1;398:44;:::o;563:35::-;;;;:::o;2295:139::-;2389:40;;;;;;;;;;;;;;;;;2295:139;:::o;520:39::-;;;;:::o;1546:361::-;1801:19;;;1640:14;1801:19;;;:9;:19;;;;;;;;;1828:12;:22;;;;;;1858:12;:22;;;;;;1801:19;;;;1828:22;;1801:19;;1546:361::o;912:280::-;971:12;:22;;;1017:15;999;:33;;;1038:11;:13;;;;;;;;-1:-1:-1;1057:22:51;;;:9;:22;;;;;;;;:32;;;;1108:11;;1095:25;;:12;:25;;;;;:43;;;1157:11;;1144:25;;:12;:25;;;;;;:43;912:280::o;603:52::-;;;;;;;;;;;;;:::o;659:56::-;;;;;;;;;;;;;:::o;1911:380::-;2145:11;;1993:14;2165:22;;;:9;:22;;;;;;;;;2195:12;:25;;;;;;2228:12;:25;;;;;;2145:11;1911:380;;;;;:::o"
  },
  "methodIdentifiers": {
   "decimals()": "313ce567",
   "description()": "7284e416",
   "getAnswer(uint256)": "b5ab58dc",
   "getRoundData(uint80)": "9a6fc8f5",
   "getTimestamp(uint256)": "b633620c",
   "latestAnswer()": "50d25bcd",
   "latestRound()": "668a0f02",
   "latestRoundData()": "feaf968c",
   "latestTimestamp()": "8205bf6a",
   "updateAnswer(int256)": "a87a20ce",
   "updateRoundData(uint80,int256,uint256,uint256)": "4aa2011f",
   "version()": "54fd4d50"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_decimals\",\"type\":\"uint8\"},{\"internalType\":\"int256\",\"name\":\"_initialAnswer\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"int256\",\"name\":\"current\",\"type\":\"int256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"}],\"name\":\"AnswerUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"roundId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"startedBy\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"}],\"name\":\"NewRound\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"description\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint80\",\"name\":\"_roundId\",\"type\":\"uint80\"}],\"name\":\"getRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestAnswer\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRound\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestRoundData\",\"outputs\":[{\"internalType\":\"uint80\",\"name\":\"roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"startedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updatedAt\",\"type\":\"uint256\"},{\"internalType\":\"uint80\",\"name\":\"answeredInRound\",\"type\":\"uint80\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_answer\",\"type\":\"int256\"}],\"name\":\"updateAnswer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint80\",\"name\":\"_roundId\",\"type\":\"uint80\"},{\"internalType\":\"int256\",\"name\":\"_answer\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"_timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_startedAt\",\"type\":\"uint256\"}],\"name\":\"updateRoundData\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{},\"title\":\"MockV3Aggregator\"},\"userdoc\":{\"methods\":{},\"notice\":\"Based on the FluxAggregator contractUse this contract when you need to test other contract's ability to read data from an aggregator contract, but how the aggregator got its answer is unimportant\"}},\"settings\":{\"compilationTarget\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/tests/MockV3Aggregator.sol\":\"MockV3Aggregator\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorInterface.sol\":{\"keccak256\":\"0x0e9b789c2f1b93d4d6ee417aa08531597a62b8e141b745d69ac3d10cda8d590e\",\"urls\":[\"bzz-raw://5fa4cb3b8b628a737c8695c90d818b80b4938677e07dbdc8156982210a3f5466\",\"dweb:/ipfs/QmPf4zA3ymoWQmzNzi7BvNe74zQ6MpasC7txUmr5Vo2Nsg\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorV2V3Interface.sol\":{\"keccak256\":\"0xfbc8193b0308883d76694a37ab791b58d9e229ae147a2e1297b7d4682a4b382d\",\"urls\":[\"bzz-raw://8185dfe554b4876a12be4d2eafd34bba48c77eaad8cf1837548f83b211eed1d9\",\"dweb:/ipfs/QmUHbu4yzzgtmsFM3oZrp3fh9XEQdgVHRBjuhHShpgwTgX\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/interfaces/AggregatorV3Interface.sol\":{\"keccak256\":\"0x12f0e35e0320088f2110173226860e44309766c0f7022a2433efdebd5bf1a002\",\"urls\":[\"bzz-raw://44645044454c4013f5f3bc3fda54b507494fe95921bf75de9a329933cb32b19d\",\"dweb:/ipfs/QmfP8kZZw6zYKy6cVPxbatSDZHiwTSJ1iMGyiYKE25DHLw\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.6/tests/MockV3Aggregator.sol\":{\"keccak256\":\"0x6c32761d110b2106c528f9ea81130ca90a3c25c67cdcaad4b9e989094d393830\",\"urls\":[\"bzz-raw://865a752d59e63a411a9034e742ce47406caf39691c2daa998158a1685b00bda2\",\"dweb:/ipfs/QmcsHT1JzUMv4JL2dtUrX2rLuJuKbES7T6aPnAMg9mQNfu\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('MockV3Aggregator.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.MockV3Aggregator = MockV3Aggregator