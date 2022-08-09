import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();
  const account = accounts[0];

  console.log("Deploying contracts by account:", account.address);
  
  const factory = await ethers.getContractFactory("InteractiveFiction");
  const interactiveFiction = await factory.deploy();
  await interactiveFiction.deployed();

  console.log("Contract deployed to:", interactiveFiction.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
