# GAP ANALYSIS: UNIT 5 (Organising)

**Audit Date:** 2026-02-05
**Standard:** Master Content Verification File (Strict Zero-Inference)
**Current Status:** PARTIALLY COMPLIANT

---

## 1. Topic Hierarchy & Theory Content
*   **Status:** 🟢 **Good**
*   **Audit**:
    *   **Meaning, Process, Importance:** All main points (Process steps, Specialization, etc.) are present.
    *   **Structure:** Functional and Divisional details are correct.
    *   **Formal/Informal:** Covered correctly.
    *   **Delegation/Decentralisation:** Elements (Auth, Resp, Acc) and importance are listed properly. Content aligns well with the Master File text.

## 2. Visualizations
*   **Status:** 🔴 **Critical Gaps**
*   **Requirement (Master File):**
    1.  **Functional Structure Chart:** MD -> Functions.
    2.  **Divisional Structure Chart:** MD -> Product Lines -> Functions.
    3.  **Process Flow:** Rigid sequence (ID & Division -> Dept -> Assignment -> Reporting).
*   **Current State:**
    *   `func-vs-div` table exists.
    *   **MISSING:** Visual Charts for Functional and Divisional structures (currently just text/table).
    *   **MISSING:** Process Flow diagram.

## 3. SQP Question Bank
*   **Status:** 🔴 **Severe Gaps**
*   **Requirement (Master File):**
    *   **8 specific questions** from Board Papers 2022-2026.
    *   Key Triggers: "Responsibility flows upwards", "Absolute Accountability", "Functional Empires".
*   **Current State:**
    *   Contains only 3 generic questions.
    *   Missing exact 2025-26 and 2022-23 Case Studies identified in the Master File.

## 4. Flashcards & Cheat Sheet
*   **Status:** 🟡 **Partial**
*   **Requirement (Master File):**
    *   Distinctions (Func vs Div, Del vs Decent).
    *   Traps (Accountability = Absolute, Multi-product = Divisional).
*   **Current State:**
    *   12 Cards exist and cover basics well.
    *   **Gap:** Missing specific "Trap" questions and Cheat Sheet lists (4 Steps, Elements).

---

## Remediation Plan

1.  **Upgrade Visualizations**:
    *   Add **Functional Structure** Tree Diagram (`list` or `graph`).
    *   Add **Divisional Structure** Tree Diagram (`graph`).
    *   Add **Organising Process** Flow Diagram.
2.  **Rebuild SQP Bank**:
    *   **Wipe & Replace** `sqp.ts` with the 8 Verified Board Questions.
3.  **Enhance Flashcards**:
    *   Add explicit "Trap" cards and expand count to ~15-18 cards.
