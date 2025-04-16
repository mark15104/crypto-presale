// Core information related to the token
export const tokenConfig = {
  // Basic token information
  name: "$MEWTUL", // Token name (e.g., $PEPE, $SLOTH, etc.)
  symbol: "MEWTUL", // Token symbol (e.g., PEPE, SLOTH, etc.)
  tokenCA: "0x43DDe507b355B85482304bc4a0E360229B596D11", // Token contract address
  presaleCA: "0xceA873152972bd9d4420fe79993D96F05aA02aCF", // Presale contract address

  // Social media links
  socialLinks: {
    twitter: "https://x.com/mewtulcoin", // Twitter link
    telegram: "https://t.me/mewtultoken", // Telegram link
    discord: "https://discord.gg/mewtultoken", // Discord link
    medium: "https://medium.com/@mewtultoken", // Medium link
    github: "https://github.com/mewtultoken", // GitHub link (optional)
    instagram: "https://instagram.com/mewtultoken", // Instagram link (optional)
  },

  // Network information
  network: {
    primary: "ETH", // Primary network (ETH, SOL, BNB, etc.)
    secondary: "usdt", // Secondary network (optional)
    primaryFullName: "Ethereum", // Full name of the primary network
    secondaryFullName: "Secondary Network", // Full name of the secondary network
  },

  // Exchange information
  exchange: {
    primary: "Uniswap", // Primary exchange name
    secondary: "PancakeSwap", // Secondary exchange name
    website: "app.uniswap.org", // Exchange website address
  },

  // Exchange partners
  exchangePartners: [
    { name: "Exchange 1", logo: "/abstract-exchange.png" },
    { name: "Exchange 2", logo: "/abstract-exchange.png" },
    { name: "Exchange 3", logo: "/abstract-exchange-flow.png" },
    { name: "Exchange 4", logo: "/abstract-exchange-flow.png" },
    { name: "Exchange 5", logo: "/abstract-currency-flow.png" },
    { name: "Exchange 6", logo: "/abstract-currency-flow.png" },
  ],

  // Tokenomics
  tokenomics: {
    totalSupply: "10,000,000,000", // Total supply
    circulatingSupply: "10,000,000,000", // Circulating supply
    decimal: 18, // Decimal places
    tax: "0%", // Transaction fee
    lpLocked: "100%", // LP locked percentage

    // Token distribution
    distribution: [
      { category: "Presale", percentage: "60%" },
      { category: "Liquidity", percentage: "30%" },
      { category: "Team", percentage: "5%" },
      { category: "Marketing", percentage: "5%" },
    ],

    // Price information
    price: {
      initial: "$0.0000001", // Initial price
      current: "$0.0000005", // Current price
      target: "$0.00001", // Target price
    },
  },

  // Wallet information
  wallet: {
    recommended: "Metamask", // Recommended wallet
    alternatives: ["Trust Wallet", "Coinbase Wallet"], // Alternative wallet options
    extension: "metamask.io", // Wallet extension address
  },

  // Roadmap
  roadmap: {
    title: "Roadmap",
    description: "Our journey to the moon",
    phases: [
      {
        title: "Phase 1: Meow",
        items: ["Website Launch", "Social Media Setup", "Community Building", "Initial Marketing Push"],
      },
      {
        title: "Phase 2: Purr and Grow",
        items: ["Exchange Listings", "Partnerships", "Community Expansion", "Meme Contest"],
      },
      {
        title: "Phase 3: Catnip Moon",
        items: ["Major Exchange Listings", "Global Marketing Campaign", "Ecosystem Development", "World Domination"],
      },
    ],
  },

  // Sticky notes content
  stickyNotes: [
    {
      content: "$MEWTUL is now live!",
      subtext: "Token Address: HQzDa0iUxzC1K1Dz7KXRHccNXVEyNxVoUextXc8dmB",
      color: "bg-pink-100",
      rotation: "rotate-1",
    },
    {
      content: "Join $MEWTUL's journey from early chances to moon!",
      subtext: "Buy on DEX now!",
      color: "bg-blue-100",
      rotation: "-rotate-2",
    },
    {
      content: "Embrace the $MEWTUL life, let your soul soar with $MEWTUL!",
      subtext: "Token supply limited",
      color: "bg-purple-200",
      rotation: "rotate-3",
    },
    {
      content: "From $20 to $420M with $MEWTUL!",
      subtext: "Dive into the $MEWTUL Project",
      color: "bg-pink-100",
      rotation: "-rotate-1",
    },
  ],

  // How to buy
  howToBuy: {
    title: "How to Buy",
    description: "Follow these simple steps to purchase $MEWTUL",
    steps: [
      {
        title: "Create a Wallet",
        description:
          "Download Metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
        icon: "/classic-leather-wallet.png",
      },
      {
        title: "Get Some ETH",
        description:
          "Send ETH to your wallet to use to buy $MEWTUL. If you don't have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
        icon: "/ethereum-logo-abstract.png",
      },
      {
        title: "Send ETH to Presale Contract",
        description:
          "Copy the presale contract address for $MEWTUL and send your ETH directly from your personal wallet (e.g., MetaMask) to that presale contract address. Make sure to double-check the contract address and only send from the wallet you control.",
        icon: "/bidirectional-arrows.png",
      },
      {
        title: "Receive Your Tokens",
        description:
          "Once the presale is complete, $MEWTUL tokens will be distributed to the wallet you used for the presale purchase. You may need to manually add the token contract address in your wallet to see your $MEWTUL.",
        icon: "/classic-leather-wallet.png",
      },
    ],
    solInstructions: {
      title: "HOW TO BUY WITH USDT",
      steps: [
        "Enter the amount of USDT you wish to send to the presale contract address",
        "Enter amount of USDT to swap for $MEWTUL",
        "Hit 'Buy Now' again and confirm the transaction",
        "Do NOT send from a centralized exchange (CEX), or your funds will be lost",
      ],
    },
  },

  // Token introduction
  about: {
    title: "About",
    description:
      "$MEWTUL is a revolutionary memecoin that combines the best of both worlds: cuteness and utility. With a strong community and innovative features, $MEWTUL is set to become the most adorable meme in the world and take its reign as king of the memecoins.",
    content1:
      "$MEWTUL is here to make memecoing great again. With a dedicated team, strong community, classic meme roots, LP burnt and contract renounced, $MEWTUL is a coin for the people, by the people. In $MEWTUL, we trust.",
    content2:
      "Join our growing community and be part of the next big thing in the crypto world. $MEWTUL is not just another memecoin, it's a movement.",
  },
}
