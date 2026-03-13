import { Chapter } from '../../types';

export const CHEAT_SHEET: Chapter['cheatSheet'] = [
    {
        title: "Key Definitions",
        points: [
            "**Financial Market:** Market for creation and exchange of financial assets.",
            "**Money Market:** Short-term funds (< 1 year). High liquidity, low risk.",
            "**Capital Market:** Long-term funds (> 1 year). Low liquidity, high risk.",
            "**Demat Account:** Account to hold securities in electronic form (Dematerialisation)."
        ]
    },
    {
        title: "Core Concepts",
        points: [
            "**Money Market Instruments:**\n• **T-Bills**: Issued by RBI (Zero-coupon bonds). Min 25k.\n• **Commercial Paper**: Unsecured promissory note by creditworthy firms.\n• **Call Money**: Inter-bank (1-15 days) to maintain CRR.\n• **Commercial Bill**: Finance working capital (Bill of Exchange).",
            "**Capital Market Types:**\n• **Primary**: New Issue Market (Public Issue, Rights Issue, Private Placement).\n• **Secondary**: Stock Exchange (Existing securities).",
            "**SEBI Functions:**\n• **Protective**: Prohibit insider trading/fraud. Education.\n• **Developmental**: Training, internet trading.\n• **Regulatory**: Registration of brokers, code of conduct, audits."
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**NSE vs BSE:** NSE (NIFTY 50). BSE (SENSEX 30).",
            "**Depository (NSDL/CDSL):** Acts like a bank for shares. Minimizes paperwork and theft."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks",
        points: [
            "**Bridge Financing:** Issuing **Commercial Paper** to cover floatation costs of equity.",
            "**Trading Procedure:** Starts with **Selection of Broker** and **Demat Account** opening.",
            "**SEBI Role Identification:** If SEBI 'fines a broker for cheating', it is **Regulatory**. If it 'bans fake news', it is **Protective**."
        ]
    }
];
