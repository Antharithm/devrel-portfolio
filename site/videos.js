/* ============================================================
   TUTORIAL LIBRARY: add a video by adding one object below.

   Fields:
     url       any YouTube link (watch / youtu.be / shorts): required
     title     shown on the card                            : required
     topic     filter chip; reuse an existing one or invent a new one
     channel   small grey text under the title
     featured  (optional) one-line "focus": adding this puts the video
               in the "Selected tutorials" list at the top of the section
     short     (optional) punchier title used only in the featured list

   Order here = order on the page. Thumbnails come from YouTube automatically.
   ============================================================ */

window.PORTFOLIO_VIDEOS = [
  {
    url: "https://youtu.be/g3p_BZvZDN8",
    title: "Introducing Continuum: The Event Data Infrastructure Powering Moralis",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://www.youtube.com/watch?v=hq-SlxYji4w",
    title: "Build Web3 Apps With AI Using Real Onchain Data: Moralis Onchain Skills",
    short: "Teaching agents 135+ endpoints",
    featured: "Open-source skill files · 40+ chains",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/L1xdGyMtAwI",
    title: "Become a Web3 Product Manager with Moralis & Claude",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/k_hk9Pchjc8",
    title: "Monitor Onchain Events in Real Time via Webhooks: Moralis Streams",
    short: "Streams API over webhooks",
    featured: "Real-time onchain events · Node.js",
    topic: "Coding",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/JJUBVOEkNH8",
    title: "Build TradingView with Claude in 5 Minutes: Moralis Price API",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/P2zvntI_W_Q",
    title: "Build a Real NFT Marketplace with One Prompt: Claude + Moralis NFT API",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/I4mAeovOa2g",
    title: "Build Wallet Activity Feeds with Onchain Data: Moralis Wallet API",
    topic: "Coding",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/cEF8vS16mVw",
    title: "Track Token Quality Over Time: Historical Token Scores, Moralis Token API",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/A1iTkdEAN-s",
    title: "Solana Streams: Monitor Solana Activity with Real-Time Webhooks",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/3eEGk-XNaEk",
    title: "Infura in 2 Minutes",
    topic: "Overview",
    channel: "EatTheBlocks",
  },
  {
    url: "https://youtu.be/Isrt06yQPmI",
    title: "What is the Alchemy SDK and What Does It Do?",
    topic: "Overview",
    channel: "EatTheBlocks",
  },
  {
    url: "https://youtu.be/QXEQx5iVjO4",
    title: "Moralis Data Feeds: Onchain Data Delivered Your Way",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/j2V9vgB2mME",
    title: "Build an Onchain Finance Dashboard with Claude & Moralis Data APIs",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/UgBKIRdQXis",
    title: "Build a Stablecoin Flow Dashboard with Claude Code & Moralis APIs in 5 Minutes",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/fnWbA2K-4Z0",
    title: "Build a Bitcoin Wallet Tracker with Claude & Moralis Bitcoin API",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/zjL5oEp8MFM",
    title: "Fetch Cross-Chain Token Balances with One API Call: Moralis Data APIs",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/63UJ4EaqfUM",
    title: "Moonbeam & Moonriver Migration to Base: Build on Base with Moralis",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/lyTMOBW0uaI",
    title: "Getting Started with Moralis Streams",
    topic: "Coding",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/TA8JyWwl-Zo",
    title: "Build a DeFi Income Tracker with Moralis and Claude Code",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/us4CIqGre0A",
    title: "Getting Started with the Bitcoin API: Moralis Data APIs",
    topic: "Coding",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/9rETiKV7jQE",
    title: "Build a DeFi App in Minutes with Claude",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/HRPS4YMPjqA",
    title: "Bitcoin Streams: Monitor Bitcoin Activity with Real-Time Webhooks",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/kKh8jNdKORk",
    title: "DeFi Protocol Revenue: Moralis DeFi API",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/Q3W3RFj42bE",
    title: "Get Solana DeFi Data in 1 API Call: Moralis DeFi API (Solana)",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/XOXp51By2uE",
    title: "Get EVM DeFi Data in 1 API Call: Moralis DeFi API",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/K9mL6EiWvtU",
    title: "Build a Cross-Chain Crypto Tracker with Moralis & Codex",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/yc-THd5xH5s",
    title: "Build a DeFi Wallet App with Claude in 5 Minutes",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/8dDqahA8Lj0",
    title: "Build a Stablecoin & RWA Backing Verifier with Claude & Moralis",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/0o9GM1wSAr4",
    title: "Build a Crypto Capital Gains Calculator with Claude Code and Moralis",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/jqvTPIelhN0",
    title: "Build a Cross-Chain Crypto Portfolio Tracker with Claude: Full Tutorial",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/yolxVjDpe9Q",
    title: "Build a Multi-Chain Crypto Tax App with Claude: Moralis Data APIs",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/dLcoB3vFf38",
    title: "Fetch DeFi Data: Moralis DeFi API",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/xrvV4eM4mvs",
    title: "Build a Crypto Compliance Audit Tool with Claude & Moralis APIs",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/g1UmjmstSIA",
    title: "Build a Real-Time Crypto Payment System with Claude and Webhooks",
    topic: "AI",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/8QvGFGz2-Vo",
    title: "Export Blockchain Datasets to CSV, JSON & Parquet: Moralis Datashare",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/6aRIqjQP8bQ",
    title: "Real-Time Blockchain API for Blocks, Transactions & Logs",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/MqVMKKloRKk",
    title: "Get Real-Time Crypto Price Data Across Chains: Moralis Price API",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/ap2MJf1XrcU",
    title: "Fetch NFT Token Data Across Chains: Moralis NFT API",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/XWRJaM_tSCg",
    title: "Fetch Real-Time Token Data Across Chains: Moralis Token API",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/DnfTx7hgD_E",
    title: "Get Cross-Chain Crypto Wallet Data in 1 API Call: Moralis Wallet API",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
  {
    url: "https://youtu.be/O8PXFkN71oo",
    title: "Moralis Data APIs Overview: Fetch Onchain Data at Scale",
    topic: "Overview",
    channel: "Moralis for Developers",
  },
];
