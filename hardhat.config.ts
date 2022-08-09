import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "polygonMumbai",
  etherscan: {
    apiKey: {
      polygon: process.env.POLYGON_API || "",
      polygonMumbai: process.env.POLYGON_API || "",
    }
  },
  networks: {
    hardhat: {
    },
    polygon: {
      url: "https://polygon-rpc.com/",
      chainId: 137,
      gasPrice: 8000000000,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygonMumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      gasPrice: 8000000000,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  solidity: {
    compilers: [
      { version: "0.5.16" },
      { version: "0.6.2" },
      { version: "0.6.4" },
      { version: "0.7.0" },
      { version: "0.8.0" },
      { version: "0.8.4" },
      { version: "0.8.10" },
      { version: "0.8.13" },
    ],
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  }
}

export default config;