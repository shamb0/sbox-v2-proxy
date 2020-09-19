/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { SimpleWriteAccessController } from "./SimpleWriteAccessController";

export class SimpleWriteAccessControllerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: TransactionOverrides
  ): Promise<SimpleWriteAccessController> {
    return super.deploy(overrides) as Promise<SimpleWriteAccessController>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): SimpleWriteAccessController {
    return super.attach(address) as SimpleWriteAccessController;
  }
  connect(signer: Signer): SimpleWriteAccessControllerFactory {
    return super.connect(signer) as SimpleWriteAccessControllerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleWriteAccessController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleWriteAccessController;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "AddedAccess",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "CheckAccessDisabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "CheckAccessEnabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "OwnershipTransferRequested",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "RemovedAccess",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "addAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "checkEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "disableAccessCheck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "enableAccessCheck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "hasAccess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "removeAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556001805460ff60a01b1916600160a01b1790556109b2806100456000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80638823da6c11610076578063a118f2491161005b578063a118f249146101fd578063dc7f012414610230578063f2fde38b14610238576100a3565b80638823da6c146101995780638da5cb5b146101cc576100a3565b80630a756983146100a85780636b14daf8146100b257806379ba5097146101895780638038e4a114610191575b600080fd5b6100b061026b565b005b610175600480360360408110156100c857600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561010057600080fd5b82018360208201111561011257600080fd5b8035906020019184600183028401116401000000008311171561013457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610368945050505050565b604080519115158252519081900360200190f35b6100b06103be565b6100b06104c0565b6100b0600480360360208110156101af57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105d2565b6101d461070a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100b06004803603602081101561021357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610726565b61017561085f565b6100b06004803603602081101561024e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610880565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102f157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b60015474010000000000000000000000000000000000000000900460ff161561036657600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040517f3be8a977a014527b50ae38adda80b56911c267328965c98ddc385d248f53963890600090a15b565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604081205460ff16806103b7575060015474010000000000000000000000000000000000000000900460ff16155b9392505050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461044457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015290519081900360640190fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60005473ffffffffffffffffffffffffffffffffffffffff16331461054657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b60015474010000000000000000000000000000000000000000900460ff1661036657600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040517faebf329500988c6488a0074e5a0a9ff304561fc5c6fc877aeb1d59c8282c348090600090a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461065857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205460ff16156107075773ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055815192835290517f3d68a6fce901d20453d1a7aa06bf3950302a735948037deb182a8db66df2a0d19281900390910190a15b50565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205460ff166107075773ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055815192835290517f87286ad1f399c8e82bf0c4ef4fcdc570ea2e1e92176e5c848b6413545b885db49281900390910190a150565b60015474010000000000000000000000000000000000000000900460ff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461090657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a35056fea2646970667358221220653c897dbd1b7aef81d2783a287f321882b53d97abf3b357b539f8f4fe586eb364736f6c63430006060033";