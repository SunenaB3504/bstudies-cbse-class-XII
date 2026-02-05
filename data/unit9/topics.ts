import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "financial-management",
    title: "Financial Management Concept",
    description: "Financial Management is concerned with optimal procurement as well as the usage of finance.",
    content: [
      "**Meaning**",
      "Financial Management is concerned with optimal procurement as well as the usage of finance. It involves identifying sources of finance and investing them to ensure returns exceed costs.",
      "",
      "**Objective**",
      "The primary aim is to **maximise shareholders' wealth**, which means maximizing the market price of the company's equity shares.",
      "",
      "**Role/Importance**",
      "1. Size and composition of fixed assets.",
      "2. Quantum of current assets and its break-up.",
      "3. Amount of long-term and short-term funds.",
      "4. Break-up of long-term financing into debt, equity, etc.",
      "5. All items in Profit and Loss Account (Interest, Depreciation, etc.)."
    ],
    visualizations: []
  },
  {
    id: "financial-decisions",
    title: "Financial Decisions",
    description: "Three major decisions: Investment, Financing, and Dividend.",
    content: [
      "**1. Investment Decision**",
      "- Relates to how the firm's funds are invested in different assets.",
      "- **Long-term (Capital Budgeting)**: Irreversible, huge funds, affects long-term growth/risk.",
      "- **Short-term (Working Capital)**: Affects day-to-day operations, liquidity, and profitability.",
      "- **Factors**: Cash flows of the project, Rate of Return, Investment criteria involved.",
      "",
      "**2. Financing Decision**",
      "- Relates to the quantum of finance to be raised from various long-term sources (Debt vs Equity).",
      "- **Factors**: Cost, Risk, Floatation Costs, Cash Flow Position, Fixed Operating Costs, Control Considerations, State of Capital Market.",
      "",
      "**3. Dividend Decision**",
      "- Relates to how much of the profit acts as dividend and how much is retained.",
      "- **Factors**: Amount of Earnings, Stability Earnings, Stability of Dividends, Growth Opportunities, Cash Flow Position, Shareholder Preference, Taxation Policy, Stock Market Reaction, Access to Capital Market, Legal/Contractual Constraints."
    ],
    visualizations: []
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    description: "Preparation of a financial blueprint of an organisation's future operations.",
    content: [
      "**Meaning**",
      "Financial planning is the preparation of a financial blueprint of an organisation's future operations. It aims to ensure that enough funds are available at the right time.",
      "",
      "**Objectives**",
      "1. To ensure availability of funds whenever required.",
      "2. To see that the firm does not raise resources unnecessarily (avoiding idle finance).",
      "",
      "**Importance**",
      "- Helps in forecasting future situations.",
      "- Helps in avoiding business shocks and surprises.",
      "- Coordinates various business functions.",
      "- Reduces waste, duplication of efforts, and gaps in planning.",
      "- Links present with future.",
      "- Links investment and financing decisions."
    ],
    visualizations: []
  },
  {
    id: "capital-structure",
    title: "Capital Structure",
    description: "Capital structure refers to the mix between owners' and borrowed funds.",
    content: [
      "**Meaning**",
      "Capital structure refers to the mix between owners' funds (Equity) and borrowed funds (Debt). It is often expressed as the Debt-Equity Ratio.",
      "",
      "**Trading on Equity (Financial Leverage)**",
      "Refers to the increase in profit earned by the equity shareholders due to the presence of fixed financial charges like interest.",
      "**Numerical Logic:**",
      "- **Condition**: Favourable only if ROI > Cost of Debt.",
      "- **Result**: Usage of Debt increases EPS (Earnings Per Share).",
      "- **Risk**: If ROI < Cost of Debt, usage of Debt decreases EPS (Unfavourable).",
      "",
      "**Factors Affecting Capital Structure Choice**",
      "1. **Cash Flow Position**: Must cover fixed payment obligations.",
      "2. **Interest Coverage Ratio (ICR)**: Higher ratio lowers risk.",
      "3. **Debt Service Coverage Ratio (DSCR)**: More comprehensive than ICR.",
      "4. **Return on Investment (RoI)**: If RoI is high, can use more debt (Trading on Equity).",
      "5. **Cost of Debt**: Lower cost allows more debt.",
      "6. **Tax Rate**: Interest is tax-deductible; higher tax rate makes debt cheaper.",
      "7. **Cost of Equity**: More debt increases financial risk for shareholders, potentially increasing their expected return.",
      "8. **Floatation Costs**: Cost of raising funds.",
      "9. **Risk Consideration**: Total risk = Business risk + Financial risk.",
      "10. **Flexibility**: Maintain borrowing power for unforeseen circumstances.",
      "11. **Control**: Equity dilution may reduce management control.",
      "12. **Regulatory Framework**: SEBI guidelines, etc.",
      "13. **Stock Market Conditions**: Bullish (Equity preferred) vs Bearish (Debt preferred).",
      "14. **Capital Structure of other Companies**: Industry norms."
    ],
    visualizations: [
        {
            id: 'factors-cap-struct-network',
            title: 'Factors Affecting Capital Structure',
            type: 'flow',
            data: {
                nodes: [
                    { id: 'CS', label: 'Capital Structure (Debt:Equity)' },
                    { id: 'Risk', label: 'Risk (Business/Financial)' },
                    { id: 'Cost', label: 'Cost of Debt/Equity' },
                    { id: 'Tax', label: 'Tax Rate' },
                    { id: 'Cash', label: 'Cash Flow Position' },
                    { id: 'ROI', label: 'Return on Investment (ROI)' },
                    { id: 'Ctrl', label: 'Control' },
                    { id: 'Mkt', label: 'Market Conditions' }
                ],
                edges: [
                    { from: 'Risk', to: 'CS' }, { from: 'Cost', to: 'CS' },
                    { from: 'Tax', to: 'CS' }, { from: 'Cash', to: 'CS' },
                    { from: 'ROI', to: 'CS', label: 'Trading on Equity' },
                    { from: 'Ctrl', to: 'CS' }, { from: 'Mkt', to: 'CS' }
                ]
            }
        }
    ]
  },
  {
    id: "fixed-working-capital",
    title: "Fixed and Working Capital",
    description: "Investment in long-term assets and current assets.",
    content: [
      "**Fixed Capital**",
      "- Investment in long-term assets (Plant, Machinery, Land).",
      "- **Factors Affecting Requirement**:",
      "  1. Nature of Business (Trading requires less than Manufacturing).",
      "  2. Scale of Operations (Large scale requires more).",
      "  3. Choice of Technique (Capital intensive requires more).",
      "  4. Technology Upgradation (Rapid obsolescence requires more).",
      "  5. Growth Prospects.",
      "  6. Diversification.",
      "  7. Financing Alternatives (Leasing reduces requirement).",
      "  8. Level of Collaboration.",
      "",
      "**Working Capital**",
      "- Investment in current assets (Cash, Inventory, Debtors).",
      "- **Net Working Capital** = Current Assets - Current Liabilities.",
      "- **Factors Affecting Requirement**:",
      "  1. Nature of Business.",
      "  2. Scale of Operations.",
      "  3. Business Cycle (Boom requires more).",
      "  4. Seasonal Factors (Peak season requires more).",
      "  5. Production Cycle (Longer cycle requires more).",
      "  6. Credit Allowed (Liberal policy requires more).",
      "  7. Credit Availed (Credit from suppliers reduces requirement).",
      "  8. Operating Efficiency.",
      "  9. Availability of Raw Material.",
      "  10. Growth Prospects.",
      "  11. Level of Competition.",
      "  12. Inflation."
    ],
    visualizations: []
  }
];
