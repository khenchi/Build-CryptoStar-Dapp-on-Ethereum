const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "**";
const infuraEndpoint = "https://rinkeby.infura.io/v3/bc11bad52fad42b58851d3d4a08fe0ba";
 module.exports = {
      networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: "*",
            gas: 6721975,
			},
             rinkeby: {
            host: "localhost",
            provider: () => new HDWalletProvider(mnemonic, infuraEndpoint),
            network_id: 4,
            gas: 6721975,
            gasPrice: 20000000000,
			},
		},
           solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }}		
        };
