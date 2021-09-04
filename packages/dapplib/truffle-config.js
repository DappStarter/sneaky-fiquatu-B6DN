require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rebel place concert gesture photo equal gift'; 
let testAccounts = [
"0xfb27b97ad24c5669f58d0a11da1b6adecda811a94ec91a5e37e3a0ed86bc7ff0",
"0x3bbfb9588a6d4da4535543d90368bf29a1ac170ee3022c6eee22ddb598d1696a",
"0x9d04c443c7dd5b60f6f9250062d3c5acdd4e22e93eaa5ff69d35dfa1916b4f5a",
"0x1d1a70410f09bf2adf2da8882612477c46b212790ab46d4f76238d1a557d47d2",
"0x47110f9a57f391a9ed144122d711682ba5c99afbf014e8bce91bdbf7f257b0bf",
"0x0d258494e434df5db64c6a8a8f7a165b29ad9a224bf187c49f225ba4b25d0cc3",
"0x4b35c2bf46d49f6ea7e1be9f904ffb429caaeabcfaf0d84f61734adeaba4f2b9",
"0x767ee057c87f7084feccd7418c45e4088e1d9ce640d5eac228deb3bd59961f3a",
"0xbd21a46e40341094e9d02ea2ea462ac344ac9e09b4c1ce4b473e10339bc9168f",
"0x7103d7af0885ca4a3de00aada827c93be9187b51c41d66316644b020c48dcd95"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


