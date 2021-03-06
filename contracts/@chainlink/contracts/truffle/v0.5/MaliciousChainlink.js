'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const MaliciousChainlink = contract({
 "contractName": "MaliciousChainlink",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820f3c7adbe832528aaac3fbc8fd27c22339b069820e9638bab5ef3e25b0412d1de0029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 RETURN 0xc7 0xad 0xbe DUP4 0x25 0x28 0xaa 0xac EXTCODEHASH 0xbc DUP16 0xd2 PUSH29 0x22339B069820E9638BAB5EF3E25B0412D1DE0029000000000000000000 ",
   "sourceMap": "153:1792:26:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820f3c7adbe832528aaac3fbc8fd27c22339b069820e9638bab5ef3e25b0412d1de0029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 RETURN 0xc7 0xad 0xbe DUP4 0x25 0x28 0xaa 0xac EXTCODEHASH 0xbc DUP16 0xd2 PUSH29 0x22339B069820E9638BAB5EF3E25B0412D1DE0029000000000000000000 ",
   "sourceMap": "153:1792:26:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlink.sol\":\"MaliciousChainlink\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/tests/MaliciousChainlink.sol\":{\"keccak256\":\"0x8ceb713a1355edbb0da9866efb81b23ffc2908127fb214112b6ef8a5371c21c5\",\"urls\":[\"bzzr://cc6617dabb50c278f4ee65902d57cd871c883f9842a5617b7588d8688b330d2e\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/vendor/Buffer.sol\":{\"keccak256\":\"0x0a3bc9b2ae59b3a51f85050a85f77611b44d12d0185dc5744db997e15ccc3ef4\",\"urls\":[\"bzzr://f499c6f1912d0fa8a62ce1ef81cf57c25fa9b15f5a1e2aeaf92dc9d2d1916277\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/vendor/CBOR.sol\":{\"keccak256\":\"0x463c926cc78dfc3cbd27735a5aafdce495be4e56dd5a852e8d784c238d899877\",\"urls\":[\"bzzr://9d9cf37482cc90ab4963cfdff53529e961ab60ffd9213aff7720edd5f86abc35\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('MaliciousChainlink.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.MaliciousChainlink = MaliciousChainlink
