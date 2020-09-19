# Sandbox repo tried to expriment Proxy patterns on ChainLink Oracle Service API

## Study Reference

- [Proxy Patterns – OpenZeppelin blog](https://blog.openzeppelin.com/proxy-patterns/)

- [Proxy Delegate | solidity-patterns](https://fravoll.github.io/solidity-patterns/proxy_delegate.html)

![](https://i.imgur.com/eTw4h1C.png)

## Reference repo of expriment without Proxy pattern

- [ sbox-v1-proxy ](https://github.com/shamb0/sbox-v1-proxy.git)

## Objective

Just for learning fun, explored is there any possibility to avoid wastage of LINK Tokens during development [ any way we have unlimited free tokens for kovan testnet :-) ], Link token is binded to proxy layer and Logic Contract( Logic Layer ) is decoupled from token requirement and logic layer API's gets executed under proxy layer context.

## Design approach

Proxy pattern requires, constructor must be avoided in Logic Contract( Logic Layer ). and
instance global state variables need to be initialised via explicit "init" API. Looks like this requirement forces to avoid "immutable" state variable, which can be initialised only in constructor ( May be leading to security vulnerability, needs to be verified with experts ).

## Reference implementation is done for below service API ...

- [Chainlink Alarm Clock (Testnet)](https://docs.chain.link/docs/chainlink-alarm-clock)

- [Generate Random Numbers for Smart Contracts using Chainlink VRF](https://docs.chain.link/docs/chainlink-vrf)

## Howto install

```shell
$ git clone https://github.com/shamb0/sbox-v2-proxy.git
$ cd sbox-v2-proxy
$ yarn install
```

### Howto run "Chainlink Alarm Clock" test API

```shell
$ env DEBUG="debug*,info*,error*" yarn run test ./test/GEFAlarm.spec.ts --network kovan
yarn run v1.22.4
$ yarn run test:contracts ./test/GEFAlarm.spec.ts --network kovan
$ cross-env SOLPP_FLAGS="FLAG_IS_TEST,FLAG_IS_DEBUG" buidler test --show-stack-traces ./test/GEFAlarm.spec.ts --network kovan
$(process.argv.length)
All contracts have already been compiled, skipping compilation.


  ChainLink Alarm API Test
  debug:GEFAlarm-Test Alarm Proxy Cont @ 0x5395a3AE2f9D77e3F8cCB5b7EC443cA5aBE43A61 +0ms
  debug:GEFAlarm-Test Alarm Impl Cont @ 0xB1eCcf281572A275bAdD249aE7d98669506c8C2D +0ms
  debug:GEFAlarm-Test wallet LT Balance  :: 199.0 +3s
  debug:GEFAlarm-Test proxy LT Balance :: 4.1 +1ms
  info:GEFAlarm-Test iter count :: 0 +0ms
  debug:GEFAlarm-Test TS @ iter start Sat Sep 19 2020 10:05:25 GMT+0530 (India Standard Time) +1ms
  info:GEFAlarm-Test ReqID :: 0x67e0ab20167d98a5373778da8398ab5408697d40c12e3d795f7d9b9987bf9898 +1m
  debug:GEFAlarm-Test TS @ iter end Sat Sep 19 2020 10:06:40 GMT+0530 (India Standard Time) +1m
  info:GEFAlarm-Test iter count :: 1 +156ms
  debug:GEFAlarm-Test TS @ iter start Sat Sep 19 2020 10:06:40 GMT+0530 (India Standard Time) +0ms
  info:GEFAlarm-Test ReqID :: 0xb4c72a1c38b946770260ceeff569d1410dc5bfe79602dec1fbdfa4ab46299d93 +1m
  debug:GEFAlarm-Test TS @ iter end Sat Sep 19 2020 10:08:00 GMT+0530 (India Standard Time) +1m
    ✓ Alaram API Test (154805ms)


  1 passing (3m)

Done in 196.96s.
```

### Howto run "Generate Random Numbers for Smart Contracts using Chainlink VRF" test API

```shell
$ env DEBUG="debug*,info*,error*" yarn run test ./test/GEFVRF.spec.ts --network kovan
yarn run v1.22.4
$ yarn run test:contracts ./test/GEFVRF.spec.ts --network kovan
$ cross-env SOLPP_FLAGS="FLAG_IS_TEST,FLAG_IS_DEBUG" buidler test --show-stack-traces ./test/GEFVRF.spec.ts --network kovan
$(process.argv.length)
All contracts have already been compiled, skipping compilation.


  ChainLink VRF Api Test
  debug:GEFVRF-Test VRF Proxy Cont @ 0x0A7028B8fD8Ca6cD987Afd5d7D1D99d326725883 +0ms
  debug:GEFVRF-Test VRF Impl Cont @ 0xbEBa091e0f78af2aDA745b7e080651b5A79ca51D +0ms
  debug:GEFVRF-Test wallet LT Balance  :: 199.0 +4s
  debug:GEFVRF-Test proxy LT Balance :: 13.9 +0ms
  info:GEFVRF-Test iter count :: 0 +0ms
  debug:GEFVRF-Test TS @ iter start Sat Sep 19 2020 11:08:35 GMT+0530 (India Standard Time) +1ms
```

## Note on BuidlerConfig | "kovan" network settings

Below settings are imported from env file **".env.shamb0.lab1"**

![](https://i.imgur.com/cRO5X1F.png)

Create and adopt the file **".env.shamb0.lab1"** as per your environment.

![](https://i.imgur.com/onWKT3q.png)
