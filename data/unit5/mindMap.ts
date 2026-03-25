import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "Organising",
    children: [
        {
            id: "case",
            label: "0. Wipro Case Study",
            children: [
                { id: "wc1", label: "Goal: Customer Orientation" },
                { id: "wc2", label: "Action: De-layering" },
                { id: "wc3", label: "Shift: Decentralisation" }
            ]
        },
        {
            id: "process",
            label: "1. Organising Process",
            children: [
                { id: "p1", label: "Identify & Divide (Library Example)" },
                { id: "p2", label: "Departmentalise (Territory/Product)" },
                { id: "p3", label: "Assignment of Duties (Match)" },
                { id: "p4", label: "Reporting Relationships" }
            ]
        },
        {
            id: "structure",
            label: "2. Structure Types",
            children: [
                {
                    id: "func",
                    label: "Functional",
                    children: [
                        { id: "f1", label: "Occupational Specialisation" },
                        { id: "f2", label: "For Large firms" }
                    ]
                },
                {
                    id: "div",
                    label: "Divisional (NCERT Categories)",
                    children: [
                        { id: "d1", label: "Cosmetics" },
                        { id: "d2", label: "Garments" },
                        { id: "d3", label: "Footwear" },
                        { id: "d4", label: "Skin care" }
                    ]
                }
            ]
        },
        {
            id: "span",
            label: "3. Span of Management",
            children: [
                { id: "s1", label: "Determines Levels" },
                { id: "s2", label: "Wide -> Flat" },
                { id: "s3", label: "Narrow -> Tall" }
            ]
        },
        {
            id: "formal-informal",
            label: "4. Formal vs Informal",
            children: [
                { id: "fi1", label: "Formal: Designed by Mgmt" },
                { id: "fi2", label: "Informal: Social Networks" }
            ]
        },
        {
            id: "delegation",
            label: "5. Delegation & Decentralisation",
            children: [
                { id: "del1", label: "Authority (Downward)" },
                { id: "del2", label: "Responsibility (Upward)" },
                { id: "del3", label: "Accountability (Absolute)" },
                { id: "dec", label: "Decentralisation (Philosophy)" }
            ]
        }
    ]
};
