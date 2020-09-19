/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { GasGuzzler } from "./GasGuzzler";

export class GasGuzzlerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<GasGuzzler> {
    return super.deploy(overrides) as Promise<GasGuzzler>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): GasGuzzler {
    return super.attach(address) as GasGuzzler;
  }
  connect(signer: Signer): GasGuzzlerFactory {
    return super.connect(signer) as GasGuzzlerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasGuzzler {
    return new Contract(address, _abi, signerOrProvider) as GasGuzzler;
  }
}

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback"
  }
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe60806040525b600556fea26469706673582212200847f72f8225def71d6b14ecea530da624dd00605015c0236721e2b4fe31f99164736f6c63430006060033";