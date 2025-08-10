async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = create();

  // Metadata created with only 3 attributes
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "My First NFT",
      attributes: [
        {
          trait_type: "Peace",
          value: "10",
        },
        {
          trait_type: "Love",
          value: "100",
        },
        {
          trait_type: "Web3",
          value: "1000",
        },
      ],
      // IPFS CID: QmT5QH2zgtY1UW9GwZxrrFVL9Lwb3F6Uov76zEfTDi6W9n
      image:
        "https://ipfs.io/ipfs/QmT5QH2zgtY1UW9GwZxrrFVL9Lwb3F6Uov76zEfTDi6W9n",
      description: "Viva la blockchain!",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
