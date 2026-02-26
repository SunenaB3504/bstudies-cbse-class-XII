import { SQPQuestion } from '../../types';

export const sqp: SQPQuestion[] = [
  {
    id: 'bulk_401',
    year: '2022-23',
    paperType: 'CBSE SQP',
    type: 'MCQ',
    marks: 1,
    question: `Identify the type of organisation structure which facilitates occupational specialisation.`,
    optionA: `Functional structure`,
    optionB: `Divisional structure`,
    optionC: `Network structure`,
    optionD: `Matrix structure`,
    answer: `A) Functional structure`,
    markingScheme: `A) Functional structure`,
    aiExplanation: `A functional structure groups activities based on functions, leading to occupational specialisation.`
  },

    {
        id: '2025-26-q12',
        year: '2025-26',
        paperType: 'SQP',
        marks: 1,
        type: 'MCQ',
        question: 'Responsibility flows upwards, whereas Authority flows _____________.',
        answer: 'Downwards',
        aiExplanation: 'Authority is the right to command (Top to Bottom). Responsibility is the obligation to perform (Bottom to Top).'
    },
    {
        id: '2025-26-q26',
        year: '2025-26',
        paperType: 'SQP',
        marks: 6,
        type: 'LA',
        question: 'Identify the organisation structure where each division functions as an autonomous unit and is accountable for its own profits and losses.',
        answer: 'Divisional Structure',
        aiExplanation: 'In Divisional Structure, each division (Product line) is self-contained and acts as a profit center.'
    },
    {
        id: '2024-25-q6',
        year: '2024-25',
        paperType: 'SQP',
        marks: 1,
        type: 'MCQ',
        question: 'It refers to the number of subordinates that can be effectively managed by a superior. Identify the concept.',
        answer: 'Span of Management',
        aiExplanation: 'Span of Management determines the levels of management in an organisation structure.'
    },
    {
        id: '2024-25-q26',
        year: '2024-25',
        paperType: 'SQP',
        marks: 6,
        type: 'LA',
        question: 'It is the act of making the subordinate answerable for the final outcome. Once authority has been delegated and responsibility accepted, one cannot deny it.',
        answer: 'Accountability',
        aiExplanation: 'Accountability implies being answerable for the result. It flows upward and is absolute (cannot be delegated).'
    },
    {
        id: '2023-24-q6',
        year: '2023-24',
        paperType: 'Board',
        marks: 1,
        type: 'MCQ',
        question: 'Which type of organisation structure leads to occupational specialisation?',
        answer: 'Functional Structure',
        aiExplanation: 'Functional Structure groups similar activities together, leading to developing deep skills in that specific function (Occupational Specialisation).'
    },
    {
        id: '2023-24-q34',
        year: '2023-24',
        paperType: 'Board',
        marks: 6,
        type: 'LA',
        question: 'Top management needs relief from routine decision making to focus on strategic issues. Which concept helps in this?',
        answer: 'Decentralisation',
        aiExplanation: 'Decentralisation pushes decision making to lower levels, leaving top management free to focus on critical/policy matters.'
    },
    {
        id: '2022-23-q1',
        year: '2022-23',
        paperType: 'Board',
        marks: 1,
        type: 'MCQ',
        question: 'Which step in the process of organising involves establishing who reports to whom?',
        answer: 'Establishing Reporting Relationships',
        aiExplanation: 'This is the final step where the hierarchy and lines of communication are clearly defined.'
    },
    {
        id: '2022-23-q23',
        year: '2022-23',
        paperType: 'Board',
        marks: 4,
        type: 'SA',
        question: 'Can a manager delegate accountability? Explain.',
        answer: 'No. Accountability is absolute.',
        aiExplanation: 'A manager can delegate authority and entrust responsibility, but they remain accountable to their own superior for the final outcome.'
    }
];
