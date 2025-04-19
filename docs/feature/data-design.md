# Data Design
# Data from heliuse 
[
  {
    <!-- "description": "Human readable interpretation of the transaction",  --> need this
    <!-- "type": "UNKNOWN", --> need for cluster
    "source": "FORM_FUNCTION",
    "fee": 5000,
    <!-- "feePayer": "8cRrU1NzNpjL3k2BwjW3VixAcX6VFc29KHr4KZg8cs2Y", --> use for node
    <!-- "signature": "yy5BT9benHhx8fGCvhcAfTtLEHAtRJ3hRTzVL16bdrTCWm63t2vapfrZQZLJC3RcuagekaXjSs2zUGQvbcto8DK", -->
    "slot": 148277128,
    <!-- "timestamp": 1656442333, -->
    "nativeTransfers": [
      {
        "fromUserAccount": "text",
        "toUserAccount": "text",
        "amount": 1
      }
    ],
    "tokenTransfers": [
      {
        "fromUserAccount": "text",
        "toUserAccount": "text",
        "fromTokenAccount": "text",
        "toTokenAccount": "text",
        "tokenAmount": 1,
        "mint": "DsfCsbbPH77p6yeLS1i4ag9UA5gP9xWSvdCx72FJjLsx"
      }
    ],
    <!-- "accountData": [ --> need can use to make edges
      {
        "account": "text",
        "nativeBalanceChange": 1,
        "tokenBalanceChanges": [
          {
            "userAccount": "F54ZGuxyb2gA7vRjzWKLWEMQqCfJxDY1whtqtjdq4CJ",
            "tokenAccount": "2kvmbRybhrcptDnwyNv6oiFGFEnRVv7MvVyqsxkirgdn",
            "mint": "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
            "rawTokenAmount": {
              "tokenAmount": "text",
              "decimals": 1
            }
          }
        ]
      }
    ],
    <!-- "transactionError": { --> to check if transaction is successful
      "error": "text"
    },
    "instructions": [
      {
        "accounts": [
          "8uX6yiUuH4UjUb1gMGJAdkXorSuKshqsFGDCFShcK88B"
        ],
        "data": "kdL8HQJrbbvQRGXmoadaja1Qvs",
        "programId": "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8",
        "innerInstructions": [
          {
            "accounts": [
              "text"
            ],
            "data": "text",
            "programId": "text"
          }
        ]
      }
    ],
    "events": {
      "nft": {
        "description": "text",
        "type": "NFT_BID",
        "source": "FORM_FUNCTION",
        "amount": 1000000,
        "fee": 5000,
        "feePayer": "8cRrU1NzNpjL3k2BwjW3VixAcX6VFc29KHr4KZg8cs2Y",
        "signature": "4jzQxVTaJ4Fe4Fct9y1aaT9hmVyEjpCqE2bL8JMnuLZbzHZwaL4kZZvNEZ6bEj6fGmiAdCPjmNQHCf8v994PAgDf",
        "slot": 148277128,
        "timestamp": 1656442333,
        "saleType": "AUCTION",
        "buyer": "text",
        "seller": "text",
        "staker": "text",
        "nfts": [
          {
            "mint": "DsfCsbbPH77p6yeLS1i4ag9UA5gP9xWSvdCx72FJjLsx",
            "tokenStandard": "NonFungible"
          }
        ]
      },
      "swap": {
        "nativeInput": {
          "account": "2uySTNgvGT2kwqpfgLiSgeBLR3wQyye1i1A2iQWoPiFr",
          "amount": "100000000"
        },
        "nativeOutput": {
          "account": "2uySTNgvGT2kwqpfgLiSgeBLR3wQyye1i1A2iQWoPiFr",
          "amount": "100000000"
        },
        "tokenInputs": [
          {
            "userAccount": "F54ZGuxyb2gA7vRjzWKLWEMQqCfJxDY1whtqtjdq4CJ",
            "tokenAccount": "2kvmbRybhrcptDnwyNv6oiFGFEnRVv7MvVyqsxkirgdn",
            "mint": "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
            "rawTokenAmount": {
              "tokenAmount": "text",
              "decimals": 1
            }
          }
        ],
        "tokenOutputs": [
          {
            "userAccount": "F54ZGuxyb2gA7vRjzWKLWEMQqCfJxDY1whtqtjdq4CJ",
            "tokenAccount": "2kvmbRybhrcptDnwyNv6oiFGFEnRVv7MvVyqsxkirgdn",
            "mint": "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
            "rawTokenAmount": {
              "tokenAmount": "text",
              "decimals": 1
            }
          }
        ],
        "tokenFees": [
          {
            "userAccount": "F54ZGuxyb2gA7vRjzWKLWEMQqCfJxDY1whtqtjdq4CJ",
            "tokenAccount": "2kvmbRybhrcptDnwyNv6oiFGFEnRVv7MvVyqsxkirgdn",
            "mint": "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
            "rawTokenAmount": {
              "tokenAmount": "text",
              "decimals": 1
            }
          }
        ],
        "nativeFees": [
          {
            "account": "2uySTNgvGT2kwqpfgLiSgeBLR3wQyye1i1A2iQWoPiFr",
            "amount": "100000000"
          }
        ],
        "innerSwaps": [
          {
            "tokenInputs": [
              {
                "fromUserAccount": "text",
                "toUserAccount": "text",
                "fromTokenAccount": "text",
                "toTokenAccount": "text",
                "tokenAmount": 1,
                "mint": "DsfCsbbPH77p6yeLS1i4ag9UA5gP9xWSvdCx72FJjLsx"
              }
            ],
            "tokenOutputs": [
              {
                "fromUserAccount": "text",
                "toUserAccount": "text",
                "fromTokenAccount": "text",
                "toTokenAccount": "text",
                "tokenAmount": 1,
                "mint": "DsfCsbbPH77p6yeLS1i4ag9UA5gP9xWSvdCx72FJjLsx"
              }
            ],
            "tokenFees": [
              {
                "fromUserAccount": "text",
                "toUserAccount": "text",
                "fromTokenAccount": "text",
                "toTokenAccount": "text",
                "tokenAmount": 1,
                "mint": "DsfCsbbPH77p6yeLS1i4ag9UA5gP9xWSvdCx72FJjLsx"
              }
            ],
            "nativeFees": [
              {
                "fromUserAccount": "text",
                "toUserAccount": "text",
                "amount": 1
              }
            ],
            "programInfo": {
              "source": "ORCA",
              "account": "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc",
              "programName": "ORCA_WHIRLPOOLS",
              "instructionName": "whirlpoolSwap"
            }
          }
        ]
      },
      "compressed": {
        "type": "COMPRESSED_NFT_MINT",
        "treeId": "text",
        "assetId": "text",
        "leafIndex": 1,
        "instructionIndex": 1,
        "innerInstructionIndex": 1,
        "newLeafOwner": "text",
        "oldLeafOwner": "text"
      },
      "distributeCompressionRewards": {
        "amount": 1
      },
      "setAuthority": {
        "account": "text",
        "from": "text",
        "to": "text",
        "instructionIndex": 1,
        "innerInstructionIndex": 1
      }
    }
  }
]
# format form
node[{
    address,
    balance "show the size of the node",
    x,y layout algo,
    color
}]
edges[
    from,
    to (arrow direction),
    transfer amount,
    signature of the transaction,
    human readable description,
    Type: 'stake' | 'Transfer'...,
    source:'program' (optional)
]