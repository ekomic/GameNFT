const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a GameNFT
  const metadataURL = "ipfs://QmR3ZPLr5vZsze3www9hR88vfszC5eVNjokF1vPFm1URqf/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lGameNFTContract here is a factory for instances of our GameNFT contract.
  */
  const GameNFTContract = await ethers.getContractFactory("GameNFT");

  // deploy the contract
  const deployedGameNFTContract = await GameNFTContract.deploy(metadataURL);

  await deployedGameNFTContract.deployed();

  // print the address of the deployed contract
  console.log("GameNFT Contract Address:", deployedGameNFTContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });