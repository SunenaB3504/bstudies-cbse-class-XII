import { Chapter } from '../../types';

export const CHEAT_SHEET: Chapter['cheatSheet'] = [
    {
        title: "Key Definitions",
        points: [
            "**Financial Management:** Optimal procurement and usage of finance to maximize shareholder wealth.",
            "**Wealth Maximisation:** Primary objective - maximizing the current market price of equity shares.",
            "**Financial Planning:** Blueprint of future operations to ensure enough funds are available at the right time.",
            "**Capital Structure:** Mix between debt and equity."
        ]
    },
    {
        title: "Core Concepts",
        points: [
            "**Financial Decisions:**\n• **Investment**: Long term (Capital Budgeting) and Short term (Working Capital).\n• **Financing**: Debt vs Equity mix.\n• **Dividend**: Retention vs Distribution.",
            "**Capital Structure Factors:** ROI, Cash Flow, ICR, DSCR, Cost of Debt, Tax Rate, Control, Flexibility.",
            "**Fixed Capital Factors:** Nature of business, Scale, Technique, Growth prospects, Diversification.",
            "**Working Capital Factors:** Operating cycle, Business cycle, Seasonal factors, Credit allowed/availed."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "**ROI** = (EBIT / Total Investment) × 100",
            "**ICR** = EBIT / Interest",
            "**EPS** = (EBIT - Interest - Tax) / No. of Equity Shares",
            "**Wealth of Shareholders** = No. of Shares × Market Price per share"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Trading on Equity:** Favourable only when **ROI > Cost of Debt**. It increases EPS by using cheaper debt.",
            "**Fixed vs Working Capital:** Fixed (Long-term assets). Working (Short-term/Day-to-day liquidity)."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks",
        points: [
            "**Trick:** If a company 'shares production facilities' with another, its Fixed Capital requirement **decreases**.",
            "**Pitfall:** Debt is cheaper because interest is a **Tax Deductible Expense**, but it increases **Financial Risk**.",
            "**Trick:** If ROI is 10% and Interest on Debt is 12%, it is **Unfavourable Financial Leverage**."
        ]
    }
];
