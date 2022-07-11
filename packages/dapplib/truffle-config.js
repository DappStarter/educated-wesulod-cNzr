require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remind uncover inflict problem bridge similar'; 
let testAccounts = [
"0x17aa6a6ab1ac1626a0b1ddd760de3100d5ca9f0a9018e5ddaff18597cab7ce0f",
"0x71e054ae3e831c78227290b149345a771959f3eaf80305f578dadea7689e51f9",
"0x46be76e4bb6d2e68e7d10a39a7b9003d672f3303fca343c4d5aa7c598146decd",
"0x30ba89438adebab00dd263ba87366e654c27865c600d9a24dadc13e6100dc083",
"0xfed0b927bc02ad345a1c00617c500e5e6ffb1e802043175922c041451ca9133b",
"0x85a5c571fdbd4127029b97f1a80b6e6967caabcb060651a752a1cd0930cb06c7",
"0xd067468b24f4b95a0334a8a34d653693a6fa0af6aaef1683be81a9d2143bc1b7",
"0x0f0b9bf5b5a67eb5368109c56357b5106982f91e14dead8ed3bf27f31604298f",
"0x88b46454b310d6893656d4ddf7c8f20367dc1805691fc18536995313cc83dd36",
"0xa28997257347f9e691a564a5fe6324ac65aa62c23f3f99521a1525a37f173ed5"
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


