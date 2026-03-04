import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "fin-market-concept",
    title: "10.1 Financial Market: Concept & Functions",
    description: "Definition and major functions including mobilisation of savings.",
    content: [
      "**Definition**",
      "A financial market is a market for the creation and exchange of financial assets.",
      "",
      "**Functions**",
      "1. **Mobilisation of Savings**: Channelising savings from households (savers) to business firms (investors). This is the *Allocative Function*.",
      "2. **Price Discovery**: Interaction of households (suppliers of funds) and business firms (demanders of funds) helps establish a price for the financial asset.",
      "3. **Liquidity**: Provides a mechanism to sell financial assets and convert them into cash whenever required.",
      "4. **Reducing Cost of Transactions**: Provides valuable information about securities, saving time, effort, and money for both buyers and sellers."
    ],
    visualizations: [
      {
        id: "financial-market-structure",
        title: "Structure of Financial Market",
        type: "tree",
        data: {
          root: "Financial Market",
          children: [
            {
              name: "Money Market",
              children: [
                { name: "Treasury Bill" },
                { name: "Commercial Paper" },
                { name: "Call Money" },
                { name: "Certificate of Deposit" },
                { name: "Commercial Bill" }
              ]
            },
            {
              name: "Capital Market",
              children: [
                {
                  name: "Primary Market",
                  children: [
                    { name: "Offer through Prospectus" },
                    { name: "Offer for Sale" },
                    { name: "Private Placement" },
                    { name: "Rights Issue" },
                    { name: "e-IPOs" }
                  ]
                },
                { name: "Secondary Market (Stock Exchange)" }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: "money-market",
    title: "10.2 Money Market",
    description: "Market for short-term funds (< 1 Year).",
    content: [
      "**Concept**",
      "Market for short-term funds which deals in monetary assets whose period of maturity is up to one year. Assets are close substitutes for money.",
      "",
      "**Instruments (Crucial for Exams)**",
      "1. **Treasury Bill (T-Bill)**: Issued by RBI on behalf of Govt. **Trigger**: 'Zero Coupon Bond', 'Issued at discount', 'Safest'.",
      "2. **Commercial Paper (CP)**: Short-term unsecured promissory note. **Trigger**: 'Bridge Financing', 'Large creditworthy companies', 'Floatation costs'.",
      "3. **Call Money**: Short-term finance (1-15 days). **Trigger**: 'Inter-bank', 'Maintain CRR', 'Repayable on demand'.",
      "4. **Certificate of Deposit (CD)**: Unsecured instruments in bearer form. **Trigger**: 'Issued by banks', 'To individuals/corporates', 'Negotiable'.",
      "5. **Commercial Bill**: Bill of exchange for working capital. **Trigger**: 'Self-liquidating', 'Negotiable', 'Trade bill'."
    ],
    visualizations: []
  },
  {
    id: "capital-market",
    title: "10.3 Capital Market",
    description: "Market for medium and long-term funds.",
    content: [
      "**Concept**",
      "Market for medium and long-term funds. Consists of Primary Market and Secondary Market.",
      "",
      "**Primary Market (New Issue Market)**",
      "- Deals in *new* securities being issued for the first time.",
      "- **Methods of Floatation**:",
      "    1. **Offer through Prospectus**: Direct appeal to investors through newspapers. **Trigger**: 'Direct appeal', 'Prospectus'.",
      "    2. **Offer for Sale**: Securities offered through intermediaries. **Trigger**: 'Intermediaries', 'Issue houses'.",
      "    3. **Private Placement**: Allotment to institutional investors. **Trigger**: 'Selective individuals', 'Speedy issue', 'Saves costs'.",
      "    4. **Rights Issue**: Privilege to existing shareholders. **Trigger**: 'Existing shareholders', 'Pre-emptive right'.",
      "    5. **e-IPOs**: Issuing through the online system. **Trigger**: 'Online system', 'Stock exchange terminal'.",
      "",
      "**Secondary Market (Stock Exchange)**",
      "- Market for the sale and purchase of *existing* (second-hand) securities.",
      "- **Distinction**: Primary deals in new securities (buying only); Secondary deals in existing securities (buying and selling)."
    ],
    visualizations: [
      {
        id: "money-vs-capital-table",
        title: "Money Market vs Capital Market",
        type: "table",
        data: {
          headers: ["Basis", "Money Market", "Capital Market"],
          rows: [
            ["Duration", "Short Term (up to 1 year)", "Medium & Long Term"],
            ["Liquidity", "High Liquidity", "Less Liquid compared to Money Market"],
            ["Safety", "Safer (low risk)", "Riskier (higher return)"],
            ["Instruments", "T-Bills, CP, CD, Call Money", "Shares, Debentures, Bonds"]
          ]
        }
      }
    ]
  },
  {
    id: "stock-exchange",
    title: "10.4 Stock Exchange",
    description: "Functions and Trading Procedure.",
    content: [
      "**Functions**",
      "1. **Providing Liquidity**: Gives investors a chance to disinvest and reinvest.",
      "2. **Pricing of Securities**: Price determined by demand and supply forces.",
      "3. **Safety of Transaction**: Membership is regulated, dealings are defined by law.",
      "4. **Contributes to Economic Growth**: Channelises savings to most productive investment.",
      "5. **Spreading of Equity Cult**: By educating public about investments.",
      "",
      "**Trading Procedure (Screen-Based)**",
      "1. **Selection of Broker**: Buying/selling can only be done through SEBI registered brokers.",
      "2. **Opening Demat Account**: Beneficial Owner (BO) account with a Depository Participant (DP) for holding securities in electronic form.",
      "3. **Placing the Order**: Investor specifies the number and price of shares to buy/sell.",
      "4. **Execution of Order**: Broker executes the order via the computer terminal.",
      "5. **Settlement**: Actual transfer of securities (Pay-out) and funds (Pay-in). Rolling Settlement cycle is T+2 (or T+1)."
    ],
    visualizations: [
      {
        id: "trading-procedure-process",
        title: "Trading Procedure on Stock Exchange",
        type: "process",
        data: [
          { title: "Selection of Broker", description: "Register with SEBI broker" },
          { title: "Demat Account", description: "Open with Depository Participant" },
          { title: "Placing Order", description: "Specify price and quantity" },
          { title: "Execution", description: "Broker matches order" },
          { title: "Settlement", description: "Transfer of shares/funds (T+2)" }
        ]
      }
    ]
  },
  {
    id: "sebi",
    title: "10.5 SEBI (Securities and Exchange Board of India)",
    description: "Objectives and Functions of the Market Regulator.",
    content: [
      "**Objectives**",
      "To protect the rights of investors, prevent trading malpractices, and regulate and develop the securities market.",
      "",
      "**Functions (Exam Favourite)**",
      "1. **Regulatory Functions** (Enforcing rules):",
      "   - Registration of brokers and sub-brokers.",
      "   - Registration of collective investment schemes.",
      "   - Regulation of takeover bids by companies.",
      "   - Levying fee or other charges.",
      "",
      "2. **Developmental Functions** (Promoting growth):",
      "   - Training of intermediaries.",
      "   - Conducting research and publishing information.",
      "   - Promoting self-regulating organisations.",
      "",
      "3. **Protective Functions** (Protecting interest):",
      "   - Prohibition of fraudulent and unfair trade practices (e.g., Price Rigging).",
      "   - Controlling insider trading.",
      "   - Undertaking steps for investor protection.",
      "   - Promotion of fair practices and code of conduct."
    ],
    visualizations: []
  }
];
