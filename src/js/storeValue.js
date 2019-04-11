import 'https://requirejs.org/docs/release/2.3.5/minified/require.js';
const Web3 = require('web3')
var web3;
 if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }

        web3.eth.defaultAccount = web3.eth.accounts[0];
        console.log(web3.eth.defaultAccount);
        const address = '0xF044F316a5c05F32FA30805d869AF7E133079e3c';

        const abi =[{
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "verify_hospital",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xb4704784"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "donor_details",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "bloodg",
          "type": "string"
        },
        {
          "name": "donated_to",
          "type": "string"
        },
        {
          "name": "blood_qty",
          "type": "uint256"
        },
        {
          "name": "unique_id",
          "type": "bytes32"
        },
        {
          "name": "contact",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xe9ed0332"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "hospital_details",
      "outputs": [
        {
          "name": "hname",
          "type": "string"
        },
        {
          "name": "addr",
          "type": "string"
        },
        {
          "name": "cont",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xeae471c6"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_bloodg",
          "type": "string"
        },
        {
          "name": "_donated_to",
          "type": "string"
        },
        {
          "name": "_blood_qty",
          "type": "uint256"
        },
        {
          "name": "_contact",
          "type": "uint256"
        }
      ],
      "name": "submit",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x02f5f826"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_bloodg",
          "type": "string"
        },
        {
          "name": "_contact",
          "type": "uint256"
        }
      ],
      "name": "get_unique_id",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0x302ee099"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_unique_id",
          "type": "bytes32"
        }
      ],
      "name": "enter_unique_id",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9d3a3f35"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get_donors",
      "outputs": [
        {
          "name": "",
          "type": "string[]"
        },
        {
          "name": "",
          "type": "string[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6d8713d7"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "enter_hospital",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc776bab5"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_hname",
          "type": "string"
        },
        {
          "name": "_addr",
          "type": "string"
        },
        {
          "name": "_cont",
          "type": "uint256"
        }
      ],
      "name": "set_hospital_details",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x5f1ccf5d"
    }
  ];

       var connection = new  web3.eth.contract(abi, address);
       console.log("connection : ", connection);
       console.log(address);


