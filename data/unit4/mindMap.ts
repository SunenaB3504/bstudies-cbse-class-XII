import { Chapter } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "Planning",
    children: [
        {
            id: "case",
            label: "0. GAIL Case Study",
            children: [
                { id: "g1", label: "Grid: 5.6k -> 10k km" },
                { id: "g2", label: "Projects: 6 -> 45" },
                { id: "g3", label: "Capex: ₹2,967 Crore" }
            ]
        },
        {
            id: "importance",
            label: "1. Importance",
            children: [
                { id: "dir", label: "Provides Direction" },
                { id: "risk", label: "Reduces Risk" },
                { id: "waste", label: "Reduces Waste" },
                { id: "inn", label: "Promotes Innovation" },
                { id: "dec", label: "Decision Making" },
                { id: "std", label: "Stds for Controlling" }
            ]
        },
        {
            id: "features",
            label: "2. Features",
            children: [
                { id: "prim", label: "Primary Function (Primacy)" },
                { id: "perv", label: "Pervasive (All levels)" },
                { id: "cont", label: "Continuous" },
                { id: "fut", label: "Futuristic (Forecasting)" },
                { id: "dec", label: "Involves Decision Making" },
                { id: "ment", label: "Mental Exercise (Imagination)" }
            ]
        },
        {
            id: "process",
            label: "3. Process",
            children: [
                { id: "set", label: "Objectives" },
                { id: "prem", label: "Premises (Assumptions)" },
                { id: "ident", label: "Identify Alt" },
                { id: "eval", label: "Evaluate Alt" },
                { id: "sel", label: "Select Alt" },
                { id: "imp", label: "Implement" },
                { id: "foll", label: "Follow-up" }
            ]
        },
        {
            id: "limit",
            label: "4. Limitations",
            children: [
                { id: "rig", label: "Rigidity" },
                { id: "dyn", label: "Dynamic Env fails" },
                { id: "crea", label: "Reduces Creativity" },
                { id: "cost", label: "Huge Costs" },
                { id: "no_guar", label: "No Guarantee of Success" }
            ]
        },
        {
            id: "types",
            label: "5. Types of Plans",
            children: [
                { id: "obj", label: "Objectives" },
                { id: "strat", label: "Strategy (3 Dimensions)" },
                { id: "sing", label: "Single-Use: Budget/Prog" },
                { id: "stand", label: "Standing: Pol/Proc/Rule/Meth" }
            ]
        }
    ]
};

