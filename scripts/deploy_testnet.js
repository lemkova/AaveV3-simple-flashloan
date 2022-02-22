async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const FactoryContract = await ethers.getContractFactory("V3FlashLoan");
    const FactoryDeployer = await FactoryContract.deploy('0xD90db1ca5A6e9873BCD9B0279AE038272b656728');

  
    console.log("Token address:", FactoryDeployer.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });