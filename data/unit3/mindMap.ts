import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "BUSINESS ENVIRONMENT",
    children: [
        {
            id: "concept",
            label: "1. Concept and Importance",
             children: [
                { id: "cn1", label: "Meaning: Universe minus Organisation" },
                {
                    id: "cn2",
                    label: "Features",
                    children: [
                        { id: "f1", label: "Totality of external forces" },
                        { id: "f2", label: "Specific and general forces" },
                        { id: "f3", label: "Inter-relatedness (Health awareness)" },
                        { id: "f4", label: "Dynamic nature" },
                        { id: "f5", label: "Uncertainty (Fashion/IT)" },
                        { id: "f6", label: "Complexity (Understand in parts)" },
                        { id: "f7", label: "Relativity (Saree in India vs France)" }
                    ]
                },
                {
                    id: "cn3",
                    label: "Importance",
                    children: [
                        { id: "i1", label: "Identifying opportunities (Maruti Udyog)" },
                        { id: "i2", label: "Identifying threats (Warning signals)" },
                        { id: "i3", label: "Tapping useful resources (Inputs/Outputs)" },
                        { id: "i4", label: "Coping with rapid changes" },
                        { id: "i5", label: "Planning and policy formulation" },
                        { id: "i6", label: "Improving performance" }
                    ]
                }
            ]
        },
        {
            id: "dimensions",
            label: "2. Dimensions (PESTLE)",
            children: [
                { id: "dim1", label: "Economic (GNP, Stock, Inflation, Debt)" },
                { id: "dim2", label: "Social (Trends, Literacy, Life Expectancy)" },
                { id: "dim3", label: "Technological (Computers, Innovations)" },
                { id: "dim4", label: "Political (Govt Stability, Ideology)" },
                { id: "dim5", label: "Legal (FEMA, Companies Act, Court Orders)" }
            ]
        },
        {
            id: "eco_history",
            label: "3. Pre-Reforms & 1991 Crisis",
            children: [
                { id: "eh1", label: "1947: 70% Agri, 85% Villages, Low Tech" },
                { id: "eh2", label: "Plan Goals: Rapid Growth, Self-Reliance" },
                {
                    id: "eh3", 
                    label: "1991 Crisis",
                    children: [
                      { id: "cr1", label: "Deficit 6.6%, GNP Growth 1.4%" },
                      { id: "cr2", label: "Gold Pledged to Bank of England" }
                    ]
                }
            ]
        },
        {
            id: "eco_env",
            label: "4. LPG Reforms (1991)",
            children: [
                {
                    id: "ee3",
                    label: "LPG Model",
                    children: [
                        { id: "lpg1", label: "Liberalisation: Abolishing Licensing" },
                        { id: "lpg2", label: "Privatisation: Disinvestment" },
                        { id: "lpg3", label: "Globalisation: Integrating with World" }
                    ]
                },
                { id: "ee4", label: "Impact: More Competition, Demanding Customers" }
            ]
        },
        {
            id: "demonetization",
            label: "5. Demonetization",
            children: [
                { id: "dem1", label: "Event: Nov 8, 2016 (86% of Money)" },
                { id: "dem2", label: "Aim: Curb corruption, black money" },
                { id: "dem3", label: "Feature: Tax Administration Measure" },
                { id: "dem4", label: "Impact: Digitalisation (poor/less affluent)" },
                { id: "dem5", label: "Impact: Real Estate prices fell" }
            ]
        }
    ]
};
