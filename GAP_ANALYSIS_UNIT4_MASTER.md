# GAP ANALYSIS: UNIT 4 (Planning)

**Audit Date:** 2026-02-05
**Standard:** Master Content Verification File (Strict Zero-Inference)
**Current Status:** PARTIALLY COMPLIANT

---

## 1. Topic Hierarchy & Theory Content
*   **Status:** 🟡 **Partial**
*   **Audit**:
    *   **Meaning, Features, Importance, Limitations:** Generally present and well-structured (this was the reference unit).
    *   **Process:** The 7-step process is present.
    *   **Types of Plans:** Single-use vs Standing is covered. Specific types (Objective, Strategy, Policy, Procedure, Method, Rule, Programme, Budget) are listed.
    *   **Gap:** The specific "Internal vs External" Limitation categorization is not explicit in the current `topics.ts`, though the points are there. The Master File explicitly splits Limitations into "Internal" (Rigidity, etc.) and "External" (Natural calamities, Politics).

## 2. Visualizations
*   **Status:** 🟡 **Weak Visuals**
*   **Requirement (Master File):**
    *   **Process Flow:** Rigid sequence of 7 steps.
    *   **Distinction:** Single-use vs Standing.
*   **Current State:**
    *   `planning-process-flow` exists but is a simple array list, not a `flow` diagram with nodes/edges structure as per the new v2 standard.
    *   `single-vs-standing` table is good.
    *   **Missing:** No visual hierarchy for the 8 types of plans.

## 3. SQP Question Bank
*   **Status:** 🔴 **Critical Gaps**
*   **Requirement (Master File):**
    *   8 specific mapped questions (2025-26 Q13, Q24 etc.).
    *   Triggers like "Statement of expected results", "Assumptions about future".
*   **Current State:**
    *   Contains only 3 questions.
    *   Missing most of the specific Master File questions, especially 2025-26 and 2024-25.

## 4. Flashcards & Cheat Sheet
*   **Status:** 🟢 **Good**
*   **Requirement (Master File):**
    *   Distinctions: Single vs Standing, Rule vs Policy, Procedure vs Method.
    *   Traps: "Strategy is Standing?", "Real point of decision making = Selection".
*   **Current State:**
    *   15 Cards exist.
    *   Most concepts covered.
    *   **Minor Gap:** "Trap" questions about Strategy and "Real point of decision making" could be explicit as "TRAP" cards.

---

## Remediation Plan

1.  **Upgrade Visualizations**:
    *   Convert `planning-process-flow` to the new `nodes/edges` flow format.
    *   (Optional) Add a visual for Types of Plans hierarchy.
2.  **Rebuild SQP Bank**:
    *   **Wipe & Replace** `sqp.ts` with the 8 Verified Master Questions (2022-2026).
3.  **Refine Flashcards**:
    *   Rename/Adjust existing cards to match "Trap" format if needed, or simply ensure the content aligns. The current 15 are strong, but I will review against the specific "Trap" list.
