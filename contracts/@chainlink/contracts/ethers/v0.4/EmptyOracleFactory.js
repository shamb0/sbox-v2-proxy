"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class EmptyOracleFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides);
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides);
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.EmptyOracleFactory = EmptyOracleFactory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "",
                type: "address"
            },
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "bytes32"
            },
            {
                name: "",
                type: "address"
            },
            {
                name: "",
                type: "bytes4"
            },
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "bytes"
            }
        ],
        name: "oracleRequest",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "",
                type: "bytes32"
            },
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "address"
            },
            {
                name: "",
                type: "bytes4"
            },
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "bytes32"
            }
        ],
        name: "fulfillOracleRequest",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "withdrawable",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "",
                type: "bytes32"
            },
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "bytes4"
            },
            {
                name: "",
                type: "uint256"
            }
        ],
        name: "cancelOracleRequest",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "",
                type: "address"
            },
            {
                name: "",
                type: "bool"
            }
        ],
        name: "setFulfillmentPermission",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address"
            },
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "bytes"
            }
        ],
        name: "onTokenTransfer",
        outputs: [],
        payable: false,
        stateMutability: "pure",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address"
            }
        ],
        name: "getAuthorizationStatus",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "",
                type: "address"
            },
            {
                name: "",
                type: "uint256"
            }
        ],
        name: "withdraw",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b5061030f806100206000396000f30060806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634042994681146100925780634ab0d1901461010a578063501883011461017d5780636ee4d553146101a45780637fcd56db146101e7578063a4c0ed361461021a578063d3e9c31414610258578063f3fef3a314610286575b600080fd5b34801561009e57600080fd5b5061010873ffffffffffffffffffffffffffffffffffffffff6004803582169160248035926044359260643516917fffffffff00000000000000000000000000000000000000000000000000000000608435169160a4359160c4359160e4359182019101356102b7565b005b34801561011657600080fd5b5061016960043560243573ffffffffffffffffffffffffffffffffffffffff604435167fffffffff000000000000000000000000000000000000000000000000000000006064351660843560a4356102c2565b604080519115158252519081900360200190f35b34801561018957600080fd5b506101926102ce565b60408051918252519081900360200190f35b3480156101b057600080fd5b506101086004356024357fffffffff00000000000000000000000000000000000000000000000000000000604435166064356102d3565b3480156101f357600080fd5b5061010873ffffffffffffffffffffffffffffffffffffffff6004351660243515156102d9565b34801561022657600080fd5b506101086004803573ffffffffffffffffffffffffffffffffffffffff169060248035916044359182019101356102d3565b34801561026457600080fd5b5061016973ffffffffffffffffffffffffffffffffffffffff600435166102dd565b34801561029257600080fd5b5061010873ffffffffffffffffffffffffffffffffffffffff600435166024356102d9565b505050505050505050565b60009695505050505050565b600090565b50505050565b5050565b506000905600a165627a7a723058205939509df4737f2c20ab76d2234e8ebf0339991ea5a8041c563a7952c49beba60029";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1wdHlPcmFjbGVGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRW1wdHlPcmFjbGVGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsb0JBQW9COztBQUVwQixtQ0FBMkQ7QUFPM0QsTUFBYSxrQkFBbUIsU0FBUSx3QkFBZTtJQUNyRCxZQUFZLE1BQWU7UUFDekIsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFnQztRQUNyQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUF5QixDQUFDO0lBQ3pELENBQUM7SUFDRCxvQkFBb0IsQ0FBQyxTQUFnQztRQUNuRCxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQWU7UUFDcEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBdUIsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFlLEVBQ2YsZ0JBQW1DO1FBRW5DLE9BQU8sSUFBSSxpQkFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQWdCLENBQUM7SUFDdEUsQ0FBQztDQUNGO0FBdkJELGdEQXVCQztBQUVELE1BQU0sSUFBSSxHQUFHO0lBQ1g7UUFDRSxRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRTtZQUNOO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxJQUFJ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MC4wLjggKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IENvbnRyYWN0LCBDb250cmFjdEZhY3RvcnksIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcbmltcG9ydCB7IFVuc2lnbmVkVHJhbnNhY3Rpb24gfSBmcm9tIFwiZXRoZXJzL3V0aWxzL3RyYW5zYWN0aW9uXCI7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uT3ZlcnJpZGVzIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IEVtcHR5T3JhY2xlIH0gZnJvbSBcIi4vRW1wdHlPcmFjbGVcIjtcblxuZXhwb3J0IGNsYXNzIEVtcHR5T3JhY2xlRmFjdG9yeSBleHRlbmRzIENvbnRyYWN0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25lcj86IFNpZ25lcikge1xuICAgIHN1cGVyKF9hYmksIF9ieXRlY29kZSwgc2lnbmVyKTtcbiAgfVxuXG4gIGRlcGxveShvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFByb21pc2U8RW1wdHlPcmFjbGU+IHtcbiAgICByZXR1cm4gc3VwZXIuZGVwbG95KG92ZXJyaWRlcykgYXMgUHJvbWlzZTxFbXB0eU9yYWNsZT47XG4gIH1cbiAgZ2V0RGVwbG95VHJhbnNhY3Rpb24ob3ZlcnJpZGVzPzogVHJhbnNhY3Rpb25PdmVycmlkZXMpOiBVbnNpZ25lZFRyYW5zYWN0aW9uIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0RGVwbG95VHJhbnNhY3Rpb24ob3ZlcnJpZGVzKTtcbiAgfVxuICBhdHRhY2goYWRkcmVzczogc3RyaW5nKTogRW1wdHlPcmFjbGUge1xuICAgIHJldHVybiBzdXBlci5hdHRhY2goYWRkcmVzcykgYXMgRW1wdHlPcmFjbGU7XG4gIH1cbiAgY29ubmVjdChzaWduZXI6IFNpZ25lcik6IEVtcHR5T3JhY2xlRmFjdG9yeSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvbm5lY3Qoc2lnbmVyKSBhcyBFbXB0eU9yYWNsZUZhY3Rvcnk7XG4gIH1cbiAgc3RhdGljIGNvbm5lY3QoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25lck9yUHJvdmlkZXI6IFNpZ25lciB8IFByb3ZpZGVyXG4gICk6IEVtcHR5T3JhY2xlIHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KGFkZHJlc3MsIF9hYmksIHNpZ25lck9yUHJvdmlkZXIpIGFzIEVtcHR5T3JhY2xlO1xuICB9XG59XG5cbmNvbnN0IF9hYmkgPSBbXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzNFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXNcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJvcmFjbGVSZXF1ZXN0XCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgcGF5YWJsZTogZmFsc2UsXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGNvbnN0YW50OiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJieXRlczRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImZ1bGZpbGxPcmFjbGVSZXF1ZXN0XCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJvb2xcIlxuICAgICAgfVxuICAgIF0sXG4gICAgcGF5YWJsZTogZmFsc2UsXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGNvbnN0YW50OiB0cnVlLFxuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJ3aXRoZHJhd2FibGVcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXM0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImNhbmNlbE9yYWNsZVJlcXVlc3RcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJib29sXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwic2V0RnVsZmlsbG1lbnRQZXJtaXNzaW9uXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgcGF5YWJsZTogZmFsc2UsXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGNvbnN0YW50OiB0cnVlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXNcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJvblRva2VuVHJhbnNmZXJcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwicHVyZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgY29uc3RhbnQ6IHRydWUsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImdldEF1dGhvcml6YXRpb25TdGF0dXNcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYm9vbFwiXG4gICAgICB9XG4gICAgXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgY29uc3RhbnQ6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwid2l0aGRyYXdcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9XG5dO1xuXG5jb25zdCBfYnl0ZWNvZGUgPVxuICBcIjB4NjA4MDYwNDA1MjM0ODAxNTYxMDAxMDU3NjAwMDgwZmQ1YjUwNjEwMzBmODA2MTAwMjA2MDAwMzk2MDAwZjMwMDYwODA2MDQwNTI2MDA0MzYxMDYxMDA4ZDU3NjNmZmZmZmZmZjdjMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDAzNTA0MTY2MzQwNDI5OTQ2ODExNDYxMDA5MjU3ODA2MzRhYjBkMTkwMTQ2MTAxMGE1NzgwNjM1MDE4ODMwMTE0NjEwMTdkNTc4MDYzNmVlNGQ1NTMxNDYxMDFhNDU3ODA2MzdmY2Q1NmRiMTQ2MTAxZTc1NzgwNjNhNGMwZWQzNjE0NjEwMjFhNTc4MDYzZDNlOWMzMTQxNDYxMDI1ODU3ODA2M2YzZmVmM2EzMTQ2MTAyODY1NzViNjAwMDgwZmQ1YjM0ODAxNTYxMDA5ZTU3NjAwMDgwZmQ1YjUwNjEwMTA4NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmNjAwNDgwMzU4MjE2OTE2MDI0ODAzNTkyNjA0NDM1OTI2MDY0MzUxNjkxN2ZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NDM1MTY5MTYwYTQzNTkxNjBjNDM1OTE2MGU0MzU5MTgyMDE5MTAxMzU2MTAyYjc1NjViMDA1YjM0ODAxNTYxMDExNjU3NjAwMDgwZmQ1YjUwNjEwMTY5NjAwNDM1NjAyNDM1NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmNjA0NDM1MTY3ZmZmZmZmZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDY0MzUxNjYwODQzNTYwYTQzNTYxMDJjMjU2NWI2MDQwODA1MTkxMTUxNTgyNTI1MTkwODE5MDAzNjAyMDAxOTBmMzViMzQ4MDE1NjEwMTg5NTc2MDAwODBmZDViNTA2MTAxOTI2MTAyY2U1NjViNjA0MDgwNTE5MTgyNTI1MTkwODE5MDAzNjAyMDAxOTBmMzViMzQ4MDE1NjEwMWIwNTc2MDAwODBmZDViNTA2MTAxMDg2MDA0MzU2MDI0MzU3ZmZmZmZmZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDQ0MzUxNjYwNjQzNTYxMDJkMzU2NWIzNDgwMTU2MTAxZjM1NzYwMDA4MGZkNWI1MDYxMDEwODczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjYwMDQzNTE2NjAyNDM1MTUxNTYxMDJkOTU2NWIzNDgwMTU2MTAyMjY1NzYwMDA4MGZkNWI1MDYxMDEwODYwMDQ4MDM1NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY5MDYwMjQ4MDM1OTE2MDQ0MzU5MTgyMDE5MTAxMzU2MTAyZDM1NjViMzQ4MDE1NjEwMjY0NTc2MDAwODBmZDViNTA2MTAxNjk3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY2MDA0MzUxNjYxMDJkZDU2NWIzNDgwMTU2MTAyOTI1NzYwMDA4MGZkNWI1MDYxMDEwODczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjYwMDQzNTE2NjAyNDM1NjEwMmQ5NTY1YjUwNTA1MDUwNTA1MDUwNTA1MDU2NWI2MDAwOTY5NTUwNTA1MDUwNTA1MDU2NWI2MDAwOTA1NjViNTA1MDUwNTA1NjViNTA1MDU2NWI1MDYwMDA5MDU2MDBhMTY1NjI3YTdhNzIzMDU4MjA1OTM5NTA5ZGY0NzM3ZjJjMjBhYjc2ZDIyMzRlOGViZjAzMzk5OTFlYTVhODA0MWM1NjNhNzk1MmM0OWJlYmE2MDAyOVwiO1xuIl19