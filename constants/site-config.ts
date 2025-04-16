import { tokenConfig } from "./token-config"

export const siteConfig = {
  // Basic information (from token config)
  tokenName: tokenConfig.name,
  tokenSymbol: tokenConfig.symbol,
  tokenAddress: tokenConfig.tokenCA,

  // Navigation
  navigation: [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "How to Buy", href: "#how-to-buy" },
    { title: "Tokenomics", href: "#tokenomics" },
    { title: "Roadmap", href: "#roadmap" },
  ],

  // Social media links (from token config)
  socialLinks: [
    { name: "Twitter", href: tokenConfig.socialLinks.twitter },
    { name: "Telegram", href: tokenConfig.socialLinks.telegram },
    { name: "Discord", href: tokenConfig.socialLinks.discord },
    { name: "Medium", href: tokenConfig.socialLinks.medium },
  ],

  // Hero section
  hero: {
    title: tokenConfig.name,
    description: `The most memorable memecoin in existence. It's time for ${tokenConfig.name} to take reign.
    <br />
    
    Send your coins to the presale contract address from your personal wallet only! 
    <br/>
    Do not send from a CEX or your funds will be lost.
    <br />
    Presale CA : ${tokenConfig.presaleCA}
    <br />
    tokenCA : ${tokenConfig.tokenCA}
    `,
    buttonText: "Buy Now",
    secondaryButtonText: "Learn More",
  },

  // Exchange partners (from token config)
  exchangePartners: tokenConfig.exchangePartners,

  // About section (from token config)
  about: {
    title: tokenConfig.about.title,
    description: tokenConfig.about.description.replace(/\$TOKEN/g, tokenConfig.name),
    content1: tokenConfig.about.content1.replace(/\$TOKEN/g, tokenConfig.name),
    content2: tokenConfig.about.content2.replace(/\$TOKEN/g, tokenConfig.name),
  },

  // Sticky notes (from token config)
  stickyNotes: tokenConfig.stickyNotes.map((note) => ({
    ...note,
    content: note.content.replace(/\$TOKEN/g, tokenConfig.name),
  })),

  // How to buy (from token config)
  howToBuy: {
    title: tokenConfig.howToBuy.title,
    description: tokenConfig.howToBuy.description.replace(/\$TOKEN/g, tokenConfig.name),
    steps: tokenConfig.howToBuy.steps.map((step) => ({
      ...step,
      title: step.title.replace(/ETH/g, tokenConfig.network.primary).replace(/\$TOKEN/g, tokenConfig.name),
      description: step.description
        .replace(/ETH/g, tokenConfig.network.primary)
        .replace(/\$TOKEN/g, tokenConfig.name)
        .replace(/metamask/gi, tokenConfig.wallet.recommended.toLowerCase())
        .replace(/Metamask/g, tokenConfig.wallet.recommended),
    })),
    Instructions: {
      title: tokenConfig.howToBuy.solInstructions.title.replace(/SOL/g, tokenConfig.network.secondary),
      steps: tokenConfig.howToBuy.solInstructions.steps.map((step) =>
        step.replace(/SOL/g, tokenConfig.network.secondary).replace(/\$TOKEN/g, tokenConfig.name),
      ),
    },
  },

  // Tokenomics (from token config)
  tokenomics: {
    title: "Tokenomics",
    description: "Simple, fair, and transparent",
    cards: [
      {
        title: "Token Supply",
        value: tokenConfig.tokenomics.totalSupply,
        description: `Total supply of ${tokenConfig.name}`,
      },
      {
        title: "Tax",
        value: tokenConfig.tokenomics.tax,
        description: "No taxes, no bullshit. It's that simple.",
      },
      {
        title: "LP",
        value: tokenConfig.tokenomics.lpLocked,
        description: "LP tokens are burnt, and contract ownership is renounced",
      },
    ],
  },

  // Roadmap (from token config)
  roadmap: tokenConfig.roadmap,

  // Footer
  footer: {
    copyright: `© 2025 ${tokenConfig.name}. All rights reserved.`,
  },

  // Disclaimer
  disclaimer: {
    title: "Disclaimer",
    content:
      "The crypto market can be volatile. Be aware of tax obligations, as profits may be subject to capital gains or other taxes depending on your location. Regulations differ across regions, so it's essential to understand the rules that apply to you. Do thorough research and only invest what you can afford to lose.",
  },
}
