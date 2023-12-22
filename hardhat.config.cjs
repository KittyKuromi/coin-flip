require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    development: {
      url: `http://localhost:8545`,
      accounts: ["0de32044b4c31c3e65ffda293a8d336a2dfdf6c7d0e89f0fa7183bab7983bdbe"],
    },
    fantom: {
      url: `https://rpc.testnet.fantom.network`,
      accounts: ["0de32044b4c31c3e65ffda293a8d336a2dfdf6c7d0e89f0fa7183bab7983bdbe"]
    },
    bnb: {
      url: `https://endpoints.omniatech.io/v1/bsc/testnet/public`,
      accounts: ["0de32044b4c31c3e65ffda293a8d336a2dfdf6c7d0e89f0fa7183bab7983bdbe"]
    }
  },
};
