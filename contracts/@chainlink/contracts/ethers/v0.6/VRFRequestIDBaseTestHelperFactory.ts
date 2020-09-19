/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { VRFRequestIDBaseTestHelper } from "./VRFRequestIDBaseTestHelper";

export class VRFRequestIDBaseTestHelperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: TransactionOverrides
  ): Promise<VRFRequestIDBaseTestHelper> {
    return super.deploy(overrides) as Promise<VRFRequestIDBaseTestHelper>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): VRFRequestIDBaseTestHelper {
    return super.attach(address) as VRFRequestIDBaseTestHelper;
  }
  connect(signer: Signer): VRFRequestIDBaseTestHelperFactory {
    return super.connect(signer) as VRFRequestIDBaseTestHelperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFRequestIDBaseTestHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VRFRequestIDBaseTestHelper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_vRFInputSeed",
        type: "uint256"
      }
    ],
    name: "makeRequestId_",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_userSeed",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_requester",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256"
      }
    ],
    name: "makeVRFInputSeed_",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610195806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806337ab429a1461003b578063bda087ae14610092575b600080fd5b6100806004803603608081101561005157600080fd5b5080359060208101359073ffffffffffffffffffffffffffffffffffffffff60408201351690606001356100b5565b60408051918252519081900360200190f35b610080600480360360408110156100a857600080fd5b50803590602001356100cc565b60006100c3858585856100df565b95945050505050565b60006100d88383610133565b9392505050565b604080516020808201969096528082019490945273ffffffffffffffffffffffffffffffffffffffff9290921660608401526080808401919091528151808403909101815260a09092019052805191012090565b60408051602080820194909452808201929092528051808303820181526060909201905280519101209056fea264697066735822122046d0e3aa2f672304b38d3f036a3e1938e2add581b59316a180a7c26a84f4ee9664736f6c63430006060033";