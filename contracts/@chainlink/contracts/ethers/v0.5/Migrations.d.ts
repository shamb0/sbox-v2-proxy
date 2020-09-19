/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MigrationsInterface extends Interface {
  functions: {
    upgrade: TypedFunctionDescription<{
      encode([new_address]: [string]): string;
    }>;

    last_completed_migration: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    setCompleted: TypedFunctionDescription<{
      encode([completed]: [BigNumberish]): string;
    }>;
  };

  events: {};
}

export class Migrations extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Migrations;
  attach(addressOrName: string): Migrations;
  deployed(): Promise<Migrations>;

  on(event: EventFilter | string, listener: Listener): Migrations;
  once(event: EventFilter | string, listener: Listener): Migrations;
  addListener(eventName: EventFilter | string, listener: Listener): Migrations;
  removeAllListeners(eventName: EventFilter | string): Migrations;
  removeListener(eventName: any, listener: Listener): Migrations;

  interface: MigrationsInterface;

  functions: {
    upgrade(
      new_address: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    last_completed_migration(): Promise<BigNumber>;

    owner(): Promise<string>;

    setCompleted(
      completed: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  upgrade(
    new_address: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  last_completed_migration(): Promise<BigNumber>;

  owner(): Promise<string>;

  setCompleted(
    completed: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    upgrade(new_address: string): Promise<BigNumber>;

    last_completed_migration(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    setCompleted(completed: BigNumberish): Promise<BigNumber>;
  };
}
