async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Testing flash loan contract with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    //const FactoryContract = await ethers.getContractFactory("V3FlashLoan");
    //const FactoryDeployer = await FactoryContract.attach("0x7d9997fE7F9f1dB121471473ed4Abd48A96965B98");
    
    const myContract = await hre.ethers.getContractAt("V3FlashLoan", "0x7d9997fE7F9f1dB121471473ed4Abd48A96965B9");
    const FlashLoan = await myContract.startFlashLoan();
    const TX = await FlashLoan.wait();
    console.log(TX.transactionHash);

  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });