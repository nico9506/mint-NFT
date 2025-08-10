const { ethers } = require("hardhat");

async function main() {
  const NicNFT = await ethers.getContractFactory("NicNFT");

  const nft = await NicNFT.deploy();
  await nft.waitForDeployment();

  console.log("NFT deployed to:", await nft.getAddress());

  const signer0 = await ethers.provider.getSigner(0);

  // update the IPFS CID to be your metadata CID
  await nft.mintTo(
    signer0,
    "ipfs://QmdMMbUA2UoMJtFHqQGYF18YKW9t6Qp4fbBZgdFW95ArXE"
  );

  console.log("NFT minted");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
