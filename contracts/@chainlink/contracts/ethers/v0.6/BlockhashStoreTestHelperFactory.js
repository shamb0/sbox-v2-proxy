"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class BlockhashStoreTestHelperFactory extends ethers_1.ContractFactory {
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
exports.BlockhashStoreTestHelperFactory = BlockhashStoreTestHelperFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256"
            }
        ],
        name: "getBlockhash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256"
            },
            {
                internalType: "bytes32",
                name: "h",
                type: "bytes32"
            }
        ],
        name: "godmodeSetHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256"
            }
        ],
        name: "store",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "storeEarliest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "header",
                type: "bytes"
            }
        ],
        name: "storeVerifyHeader",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b50610378806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063898faab211610050578063898faab214610093578063e9413d38146100b6578063fadff0e1146100e557610067565b80636057361d1461006c57806383b6d6b71461008b575b600080fd5b6100896004803603602081101561008257600080fd5b5035610192565b005b610089610212565b610089600480360360408110156100a957600080fd5b5080359060200135610200565b6100d3600480360360208110156100cc57600080fd5b5035610221565b60408051918252519081900360200190f35b610089600480360360408110156100fb57600080fd5b8135919081019060408101602082013564010000000081111561011d57600080fd5b82018360208201111561012f57600080fd5b8035906020019184600183028401116401000000008311171561015157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102a2945050505050565b80408061020057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f626c6f636b68617368286e29206661696c656400000000000000000000000000604482015290519081900360640190fd5b60009182526020829052604090912055565b61021f6101004303610192565b565b6000818152602081905260408120548061029c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f626c6f636b68617368206e6f7420666f756e6420696e2073746f726500000000604482015290519081900360640190fd5b92915050565b6000808360010181526020019081526020016000205481805190602001201461032c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6865616465722068617320756e6b6e6f776e20626c6f636b6861736800000000604482015290519081900360640190fd5b602401516000918252602082905260409091205556fea264697066735822122062c177291d74fb47f4b1696ed7dac099f2aaffe808dcb0475c0478496b19e5a764736f6c63430006060033";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvY2toYXNoU3RvcmVUZXN0SGVscGVyRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJsb2NraGFzaFN0b3JlVGVzdEhlbHBlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQztBQUMxQyxvQkFBb0I7O0FBRXBCLG1DQUEyRDtBQU8zRCxNQUFhLCtCQUFnQyxTQUFRLHdCQUFlO0lBQ2xFLFlBQVksTUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWdDO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQXNDLENBQUM7SUFDdEUsQ0FBQztJQUNELG9CQUFvQixDQUFDLFNBQWdDO1FBQ25ELE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUE2QixDQUFDO0lBQzNELENBQUM7SUFDRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFvQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQWUsRUFDZixnQkFBbUM7UUFFbkMsT0FBTyxJQUFJLGlCQUFRLENBQ2pCLE9BQU8sRUFDUCxJQUFJLEVBQ0osZ0JBQWdCLENBQ1csQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUEzQkQsMEVBMkJDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsR0FBRztnQkFDVCxJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLGNBQWM7UUFDcEIsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxlQUFlLEVBQUUsTUFBTTtRQUN2QixJQUFJLEVBQUUsVUFBVTtLQUNqQjtJQUNEO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxHQUFHO2dCQUNULElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxHQUFHO2dCQUNULElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsR0FBRztnQkFDVCxJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsRUFBRTtRQUNYLGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxlQUFlO1FBQ3JCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsR0FBRztnQkFDVCxJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxPQUFPO2dCQUNyQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsT0FBTzthQUNkO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLFVBQVU7S0FDakI7Q0FDRixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQ2Isb3pEQUFvekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYXRlZCBieSB0cy1nZW5lcmF0b3IgdmVyLiAwLjAuOCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQ29udHJhY3QsIENvbnRyYWN0RmFjdG9yeSwgU2lnbmVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgVW5zaWduZWRUcmFuc2FjdGlvbiB9IGZyb20gXCJldGhlcnMvdXRpbHMvdHJhbnNhY3Rpb25cIjtcblxuaW1wb3J0IHsgVHJhbnNhY3Rpb25PdmVycmlkZXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgQmxvY2toYXNoU3RvcmVUZXN0SGVscGVyIH0gZnJvbSBcIi4vQmxvY2toYXNoU3RvcmVUZXN0SGVscGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBCbG9ja2hhc2hTdG9yZVRlc3RIZWxwZXJGYWN0b3J5IGV4dGVuZHMgQ29udHJhY3RGYWN0b3J5IHtcbiAgY29uc3RydWN0b3Ioc2lnbmVyPzogU2lnbmVyKSB7XG4gICAgc3VwZXIoX2FiaSwgX2J5dGVjb2RlLCBzaWduZXIpO1xuICB9XG5cbiAgZGVwbG95KG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzKTogUHJvbWlzZTxCbG9ja2hhc2hTdG9yZVRlc3RIZWxwZXI+IHtcbiAgICByZXR1cm4gc3VwZXIuZGVwbG95KG92ZXJyaWRlcykgYXMgUHJvbWlzZTxCbG9ja2hhc2hTdG9yZVRlc3RIZWxwZXI+O1xuICB9XG4gIGdldERlcGxveVRyYW5zYWN0aW9uKG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzKTogVW5zaWduZWRUcmFuc2FjdGlvbiB7XG4gICAgcmV0dXJuIHN1cGVyLmdldERlcGxveVRyYW5zYWN0aW9uKG92ZXJyaWRlcyk7XG4gIH1cbiAgYXR0YWNoKGFkZHJlc3M6IHN0cmluZyk6IEJsb2NraGFzaFN0b3JlVGVzdEhlbHBlciB7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjaChhZGRyZXNzKSBhcyBCbG9ja2hhc2hTdG9yZVRlc3RIZWxwZXI7XG4gIH1cbiAgY29ubmVjdChzaWduZXI6IFNpZ25lcik6IEJsb2NraGFzaFN0b3JlVGVzdEhlbHBlckZhY3Rvcnkge1xuICAgIHJldHVybiBzdXBlci5jb25uZWN0KHNpZ25lcikgYXMgQmxvY2toYXNoU3RvcmVUZXN0SGVscGVyRmFjdG9yeTtcbiAgfVxuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogQmxvY2toYXNoU3RvcmVUZXN0SGVscGVyIHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KFxuICAgICAgYWRkcmVzcyxcbiAgICAgIF9hYmksXG4gICAgICBzaWduZXJPclByb3ZpZGVyXG4gICAgKSBhcyBCbG9ja2hhc2hTdG9yZVRlc3RIZWxwZXI7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIm5cIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiZ2V0QmxvY2toYXNoXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYnl0ZXMzMlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIm5cIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJieXRlczMyXCIsXG4gICAgICAgIG5hbWU6IFwiaFwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJnb2Rtb2RlU2V0SGFzaFwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJuXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcInN0b3JlXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJzdG9yZUVhcmxpZXN0XCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIm5cIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJieXRlc1wiLFxuICAgICAgICBuYW1lOiBcImhlYWRlclwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwic3RvcmVWZXJpZnlIZWFkZXJcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9XG5dO1xuXG5jb25zdCBfYnl0ZWNvZGUgPVxuICBcIjB4NjA4MDYwNDA1MjM0ODAxNTYxMDAxMDU3NjAwMDgwZmQ1YjUwNjEwMzc4ODA2MTAwMjA2MDAwMzk2MDAwZjNmZTYwODA2MDQwNTIzNDgwMTU2MTAwMTA1NzYwMDA4MGZkNWI1MDYwMDQzNjEwNjEwMDY3NTc2MDAwMzU2MGUwMWM4MDYzODk4ZmFhYjIxMTYxMDA1MDU3ODA2Mzg5OGZhYWIyMTQ2MTAwOTM1NzgwNjNlOTQxM2QzODE0NjEwMGI2NTc4MDYzZmFkZmYwZTExNDYxMDBlNTU3NjEwMDY3NTY1YjgwNjM2MDU3MzYxZDE0NjEwMDZjNTc4MDYzODNiNmQ2YjcxNDYxMDA4YjU3NWI2MDAwODBmZDViNjEwMDg5NjAwNDgwMzYwMzYwMjA4MTEwMTU2MTAwODI1NzYwMDA4MGZkNWI1MDM1NjEwMTkyNTY1YjAwNWI2MTAwODk2MTAyMTI1NjViNjEwMDg5NjAwNDgwMzYwMzYwNDA4MTEwMTU2MTAwYTk1NzYwMDA4MGZkNWI1MDgwMzU5MDYwMjAwMTM1NjEwMjAwNTY1YjYxMDBkMzYwMDQ4MDM2MDM2MDIwODExMDE1NjEwMGNjNTc2MDAwODBmZDViNTAzNTYxMDIyMTU2NWI2MDQwODA1MTkxODI1MjUxOTA4MTkwMDM2MDIwMDE5MGYzNWI2MTAwODk2MDA0ODAzNjAzNjA0MDgxMTAxNTYxMDBmYjU3NjAwMDgwZmQ1YjgxMzU5MTkwODEwMTkwNjA0MDgxMDE2MDIwODIwMTM1NjQwMTAwMDAwMDAwODExMTE1NjEwMTFkNTc2MDAwODBmZDViODIwMTgzNjAyMDgyMDExMTE1NjEwMTJmNTc2MDAwODBmZDViODAzNTkwNjAyMDAxOTE4NDYwMDE4MzAyODQwMTExNjQwMTAwMDAwMDAwODMxMTE3MTU2MTAxNTE1NzYwMDA4MGZkNWI5MTkwODA4MDYwMWYwMTYwMjA4MDkxMDQwMjYwMjAwMTYwNDA1MTkwODEwMTYwNDA1MjgwOTM5MjkxOTA4MTgxNTI2MDIwMDE4MzgzODA4Mjg0Mzc2MDAwOTIwMTkxOTA5MTUyNTA5Mjk1NTA2MTAyYTI5NDUwNTA1MDUwNTA1NjViODA0MDgwNjEwMjAwNTc2MDQwODA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE1MjYwMTM2MDI0ODIwMTUyN2Y2MjZjNmY2MzZiNjg2MTczNjgyODZlMjkyMDY2NjE2OTZjNjU2NDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA0NDgyMDE1MjkwNTE5MDgxOTAwMzYwNjQwMTkwZmQ1YjYwMDA5MTgyNTI2MDIwODI5MDUyNjA0MDkwOTEyMDU1NTY1YjYxMDIxZjYxMDEwMDQzMDM2MTAxOTI1NjViNTY1YjYwMDA4MTgxNTI2MDIwODE5MDUyNjA0MDgxMjA1NDgwNjEwMjljNTc2MDQwODA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE1MjYwMWM2MDI0ODIwMTUyN2Y2MjZjNmY2MzZiNjg2MTczNjgyMDZlNmY3NDIwNjY2Zjc1NmU2NDIwNjk2ZTIwNzM3NDZmNzI2NTAwMDAwMDAwNjA0NDgyMDE1MjkwNTE5MDgxOTAwMzYwNjQwMTkwZmQ1YjkyOTE1MDUwNTY1YjYwMDA4MDgzNjAwMTAxODE1MjYwMjAwMTkwODE1MjYwMjAwMTYwMDAyMDU0ODE4MDUxOTA2MDIwMDEyMDE0NjEwMzJjNTc2MDQwODA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE1MjYwMWM2MDI0ODIwMTUyN2Y2ODY1NjE2NDY1NzIyMDY4NjE3MzIwNzU2ZTZiNmU2Zjc3NmUyMDYyNmM2ZjYzNmI2ODYxNzM2ODAwMDAwMDAwNjA0NDgyMDE1MjkwNTE5MDgxOTAwMzYwNjQwMTkwZmQ1YjYwMjQwMTUxNjAwMDkxODI1MjYwMjA4MjkwNTI2MDQwOTA5MTIwNTU1NmZlYTI2NDY5NzA2NjczNTgyMjEyMjA2MmMxNzcyOTFkNzRmYjQ3ZjRiMTY5NmVkN2RhYzA5OWYyYWFmZmU4MDhkY2IwNDc1YzA0Nzg0OTZiMTllNWE3NjQ3MzZmNmM2MzQzMDAwNjA2MDAzM1wiO1xuIl19