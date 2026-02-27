import { Chapter } from '../../types';

export const CHEAT_SHEET: Chapter['cheatSheet'] = [
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Controlling:** The process of ensuring that actual activities conform to planned activities.",
            "**Standards:** The criteria or yardsticks against which actual performance is measured.",
            "**Deviations:** The difference between actual performance and the standard performance.",
            "**KRAs:** Key Result Areas.",
            "**MBE:** Management by Exception.",
            "**CPC:** Critical Point Control.",
            "**ROI:** Return on Investment."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Nature of Controlling:** Goal oriented, Pervasive, Continuous, Both backward-looking (postmortem) and forward-looking (corrective action).",
            "**Controlling Process (Exact Steps):**\n1. Setting Performance Standards\n2. Measurement of Actual Performance\n3. Comparing Actual Performance with Standards\n4. Analysing Deviations (CPC and MBE)\n5. Taking Corrective Action.",
            "**Importance:** Accomplishing goals, Judging accuracy of standards, Efficient use of resources, Improving employee motivation, Ensuring order and discipline, Facilitating coordination."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "**ROI (Return on Investment)** = (EBIT / Total Investment) * 100",
            "*(Used generally as a standard to measure managerial efficiency in the controlling phase, though more rigorously applied in Unit 9)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Critical Point Control vs Management by Exception:**\n• CPC focuses on the **AREA** of deviation (Keep check only on Key Result Areas rather than everything).\n• MBE focuses on the **DEGREE** of deviation (Only significant deviations beyond permissible limits should be brought to management).",
            "**Planning vs Controlling:** Planning is prescriptive (what to do) and looking ahead; Controlling is evaluative (what happened) and looking back. They are inseparable twins."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Trick:** 'An attempt to control everything results in controlling nothing' strictly points to **Management by Exception (MBE)**.",
            "**Trick:** 'A 5% raise in postal charge is less critical than a 5% raise in raw material cost' points to **Critical Point Control (CPC)**.",
            "**Pitfall:** Students often forget that if the standard itself was set incorrectly (unachievable), the 'Corrective Action' is to **Revise the Standards**."
        ]
    }
];
