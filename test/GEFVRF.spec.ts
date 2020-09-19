import { expect } from './setup'

/* External Imports */
import { ethers } from '@nomiclabs/buidler'
import { Contract, ContractFactory, Signer, BigNumber, utils } from 'ethers'
import {
  getContractFactory, sleep, sendLT, getBalanceLT
} from './test-utils'

import { getLogger } from './test-utils'

const log = getLogger('GEFVRF-Test')

describe('ChainLink VRF Api Test', () => {
  let wallet: Signer
  let owner1: Signer
  let owner2: Signer
  let deployproxycont:boolean = false

  before(async () => {
    ;[wallet, owner1, owner2] = await ethers.getSigners()

    // log.info(`Admin :: ${await wallet.getAddress()}`)
    // log.info(`Own1 :: ${await owner1.getAddress()}`)
    // log.info(`Own2 :: ${await owner2.getAddress()}`)
  })

  let cliomgrproxyfact: ContractFactory
  let cliomgrimplfact: ContractFactory
  let cliomgrproxyinst: Contract
  let cliomgrimplinst: Contract
  let cliomgrimplshadowinst: Contract

  before(async () => {

    ContractFactory.getContractAddress

    cliomgrproxyfact = getContractFactory( "CLIOVRFProxy", wallet )
    cliomgrimplfact = getContractFactory( "CLIOVRFManager", wallet )

    // Deploy the implementation part of the logic
    cliomgrimplinst = await cliomgrimplfact.deploy();

    if( deployproxycont === true ){

      // Deploy the proxy for the firsttime ...
      cliomgrproxyinst = await cliomgrproxyfact.deploy()
      log.info(`Deployed at ${cliomgrproxyinst.address}`)

      cliomgrimplshadowinst = new Contract( cliomgrproxyinst.address ,
        cliomgrimplfact.interface,
        wallet
      )

    }
    else{

      // Re-use the deployed proxy ...
      cliomgrproxyinst = new Contract( "0x0A7028B8fD8Ca6cD987Afd5d7D1D99d326725883",
                                cliomgrproxyfact.interface,
                                wallet
                              )

      cliomgrimplshadowinst = new Contract( "0x0A7028B8fD8Ca6cD987Afd5d7D1D99d326725883",
                                              cliomgrimplfact.interface,
                                              wallet
                                            )

    }

    await cliomgrproxyinst.updateImplementation( cliomgrimplinst.address );
    await cliomgrimplshadowinst.initCLIOManager( );

    log.debug( `VRF Proxy Cont @ ${cliomgrproxyinst.address}`)
    log.debug( `VRF Impl Cont @ ${cliomgrimplinst.address}`)

  })

  beforeEach("Check LT Balance and refill", async () => {

    try{

      let walletltbal: string = await getBalanceLT( wallet, await wallet.getAddress() )
      let proxyltbal: string = await getBalanceLT( wallet, cliomgrproxyinst.address )

      log.debug( `wallet LT Balance  :: ${ walletltbal }` )
      log.debug( `proxy LT Balance :: ${ proxyltbal }` )

      let ltbalthreashold = BigNumber.from("10")
      let bnproxyltbal = utils.parseUnits( proxyltbal, 18 )

      if( bnproxyltbal.lte( ltbalthreashold ) === true ){

        await sendLT( wallet, cliomgrproxyinst.address, "10" )

      }

    }catch(err){

      log.error(err);

      await sendLT( wallet, cliomgrproxyinst.address, "10" )
    }

  })

  it('Test Random Number Gen', async () => {

    let iterCount = 0

    for( iterCount = 0; iterCount < 3; iterCount++ )
    {

      try{

        let eventoccur: boolean = false

        log.info(`iter count :: ${iterCount}`)

        // log.info( `before :: ${await cliomgrimplshadowinst.randomResult()}` )
        let tsbefore = new Date()
        log.debug( `TS @ iter start ${tsbefore}`)

        const reqid = await cliomgrimplshadowinst.getRandomNumber( 20 )

        cliomgrimplshadowinst.once( "eventReceivedRandomNumber", ( requestId: string, randomness: number ) => {

          eventoccur = true
          // log.info( `ReqID :: ${requestId}`);
          log.info( `RandomNumb :: ${randomness}`);

        })

        while( eventoccur === false ){
          await sleep( 1 * 1000 ) //sleep for 1 sec, poll for the event
          // log.info( `Blocked for event notif state(${eventoccur})`);
        }

        let tsafter = new Date()
        log.debug( `TS @ iter end ${tsafter}`)
        log.info( `VRF Proxy Link Balance :: ${await cliomgrimplshadowinst.getUserLinkBalance()}` )

      }catch(err){

        log.error(err)

      }

    }

  })

})
