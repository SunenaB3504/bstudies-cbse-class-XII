import { Chapter } from '../../types';

export const CHEAT_SHEET: Chapter['cheatSheet'] = [
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Financial Management:** Concerned with optimal procurement and usage of finance.",
            "**Business Finance:** Money required for carrying out business activities.",
            "**Capital Structure:** The mix between owners funds and borrowed funds.",
            "**Financial Planning:** Preparation of a financial blueprint of an organization's future operations.",
            "**ROI:** Return on Investment.",
            "**EBIT:** Earnings Before Interest and Taxes.",
            "**EBT:** Earnings Before Taxes.",
            "**EPS:** Earnings Per Share."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Objectives of Financial Management:** Primary objective is 'Wealth Maximisation' (maximizing the current market price of equity shares).",
            "**Financial Decisions:**\n1. **Investment Decision (Capital Budgeting):** Careful selection of assets in which funds will be invested.\n2. **Financing Decision:** Deciding the proportion of debt and equity used to raise funds.\n3. **Dividend Decision:** How much of the profit should be distributed as dividends vs retained in the business.",
            "**Factors Affecting Capital Structure:** Cash Flow Position, ICR, DSCR, ROI, Cost of Debt, Tax Rate, Cost of Equity, Floatation Costs, Risk Consideration, Flexibility, Control, Stock Market Conditions."
        ]
    },
    {
        title: "Numerical Formulas (CRITICAL)",
        points: [
            "**1. Wealth of Shareholders** = Number of Shares × Market Price per Share",
            "**2. Trading on Equity (Financial Leverage):** Proportion of Debt / Overall Capital.",
            "**3. EBT (Earnings Before Taxes)** = EBIT - Interest on Debt",
            "**4. EAT (Earnings After Taxes)** = EBT - Taxes",
            "**5. EPS (Earnings Per Share)** = EAT / Number of Equity Shares",
            "**6. ROI (Return on Investment)** = (EBIT / Total Investment) × 100",
            "**7. ICR (Interest Coverage Ratio)** = EBIT / Interest",
            "**8. DSCR (Debt Service Coverage Ratio)** = (Profit after Tax + Depreciation + Interest + Non-Cash exp) / (Preference Dividend + Interest + Repayment obligation)"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Fixed Capital vs Working Capital:**\n• Fixed Capital involves long-term investments in tangible/intangible assets. Financed by long-term sources.\n• Working Capital involves short-term investments in current assets minus current liabilities. Financed by short/medium sources.\n• **Gross Working Capital:** Total investment in current assets.\n• **Net Working Capital:** Current Assets - Current Liabilities."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Pitfall:** Confusing Favourable Data. Financial leverage is ONLY favourable when **ROI > Cost of Debt**. If Cost of Debt > ROI, it is 'unfavourable' and EPS decreases as debt increases.",
            "**Trick:** If a case study focuses on maintaining 'liquidity' or ensuring 'enough cash for day-to-day operations', it discusses **Working Capital**.",
            "**Pitfall:** Floatation cost specifically implies the cost of issuing securities (brokerage, underwriting commission). Higher floatation cost makes an issue less attractive."
        ]
    }
];
