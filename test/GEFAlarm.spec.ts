import { expect } from './setup'

/* External Imports */
import { ethers } from '@nomiclabs/buidler'
import { Contract, ContractFactory, Signer, BigNumber, utils } from 'ethers'
import {
  getContractFactory, sleep, sendLT, getBalanceLT
} from './test-utils'

import { getLogger } from './test-utils'
import { string } from '@nomiclabs/buidler/internal/core/params/argumentTypes'

const log = getLogger('GEFAlarm-Test')

describe('ChainLink Alarm API Test', () => {
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

    cliomgrproxyfact = getContractFactory( "CLIOAlarmProxy", wallet )
    cliomgrimplfact = getContractFactory( "CLIOAlarmManager", wallet )

    cliomgrimplinst = await cliomgrimplfact.deploy();

    if( deployproxycont == true ){

      cliomgrproxyinst = await cliomgrproxyfact.deploy()
      log.info(`Deployed at ${cliomgrproxyinst.address}`)

      cliomgrimplshadowinst = new Contract( cliomgrproxyinst.address ,
                                              cliomgrimplfact.interface,
                                              wallet
                                            )

    }
    else{

      cliomgrproxyinst = new Contract( "0x5395a3AE2f9D77e3F8cCB5b7EC443cA5aBE43A61",
                                cliomgrproxyfact.interface,
                                wallet
                              )

      cliomgrimplshadowinst = new Contract( "0x5395a3AE2f9D77e3F8cCB5b7EC443cA5aBE43A61",
                                              cliomgrimplfact.interface,
                                              wallet
                                            )

    }

    await cliomgrproxyinst.updateImplementation( cliomgrimplinst.address );
    await cliomgrimplshadowinst.initCLIOAlarmManager();

    log.debug( `Alarm Proxy Cont @ ${cliomgrproxyinst.address}`)
    log.debug( `Alarm Impl Cont @ ${cliomgrimplinst.address}`)

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

  it('Alaram API Test', async () => {

    let iterCount = 0

    for( iterCount = 0; iterCount < 2; iterCount++ )
    {

      try{

        let iseventfired: boolean = false

        log.info(`iter count :: ${iterCount}`)

        // Profile the Start Time-Stamp ...
        let tsbefore = new Date()
        log.debug( `TS @ iter start ${tsbefore}`)

        // Configure the Alarm to fire after 1 min ...
        await cliomgrimplshadowinst.delayStart( 1 )

        // Register for the event-callback ...
        cliomgrimplshadowinst.once( "eventAlaramDone", ( requestId ) => {

          iseventfired = true
          log.info( `ReqID :: ${requestId}`);

        })

          // Poll for the event-callback ...
        while( iseventfired === false ){
          await sleep( 1 * 1000 ) //sleep for 5 sec, poll for the event
          // log.info( `Blocked for event notif state(${eventoccur})`);
        }

        // Profile the End Time-Stamp ...
        let tsafter = new Date()
        log.debug( `TS @ iter end ${tsafter}`)

      }catch(err){

        log.error(err);

      }

    }

  })

})
