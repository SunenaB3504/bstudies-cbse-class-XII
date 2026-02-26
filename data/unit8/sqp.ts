import { SQPQuestion } from '../../types';

export const sqp: SQPQuestion[] = [
  {
    id: 'bulk_701',
    year: '2022-23',
    paperType: 'CBSE SQP',
    type: 'Subjective',
    marks: 4,
    question: `Explain the concept of 'Controlling' and how it acts as a backward looking as well as a forward looking function.`,
    answer: `Controlling ensures tasks conform to plans. Backward looking: analyzes past performance deviations. Forward looking: uses past data to improve future planning.`,
    markingScheme: `Controlling ensures tasks conform to plans. Backward looking: analyzes past performance deviations. Forward looking: uses past data to improve future planning.`,
    aiExplanation: `Controlling compares actuals vs standards. It bridges past deviations to future plan corrections.`
  },

    {
        id: '2025-26-q18',
        year: '2025-26',
        paperType: 'SQP',
        marks: 4,
        type: 'SA',
        question: 'Identify the principle of management control that states: "An attempt to control everything results in controlling nothing".',
        answer: 'Management by Exception',
        aiExplanation: 'Management by Exception states that only significant deviations that go beyond a specific range should be brought to the notice of management.'
    },
    {
        id: '2024-25-q8',
        year: '2024-25',
        paperType: 'SQP',
        marks: 1,
        type: 'MCQ',
        question: 'Which function of management is considered as a "forward looking function" because it seeks to improve future performance?',
        answer: 'Controlling',
        aiExplanation: 'Controlling looks at past errors to take corrective action for the future, making it forward-looking.'
    },
    {
        id: '2024-25-q28',
        year: '2024-25',
        paperType: 'SQP',
        marks: 4,
        type: 'SA',
        question: 'Planning and controlling are inseparable twins of management. How are they related?',
        answer: 'Blind without standards / Meaningless without implementation',
        aiExplanation: 'Planning provides standards for controlling (without which controlling is blind). Controlling ensures plans are implemented (without which planning is meaningless).'
    },
    {
        id: '2023-24-q8',
        year: '2023-24',
        paperType: 'Board',
        marks: 1,
        type: 'MCQ',
        question: 'Which technique of controlling deals with the concept of Key Result Areas (KRAs)?',
        answer: 'Critical Point Control',
        aiExplanation: 'Critical Point Control focuses on Key Result Areas (KRAs) which are critical to the success of an organization.'
    },
    {
        id: '2023-24-q30',
        year: '2023-24',
        paperType: 'Board',
        marks: 6,
        type: 'LA',
        question: 'What should a manager do if the performance standards set in the planning process are found to be obsolete or unachievable?',
        answer: 'Revise the Standards (Corrective Action)',
        aiExplanation: 'If standards cannot be met due to external changes, the corrective action is to revise the standards themselves.'
    },
    {
        id: '2022-23-q8',
        year: '2022-23',
        paperType: 'Board',
        marks: 1,
        type: 'MCQ',
        question: 'One of the importance of controlling is that it enables management to verify whether the standards set are accurate and objective. Which importance is this?',
        answer: 'Judging accuracy of standards',
        aiExplanation: 'Controlling helps to check if standards are valid in the changing environment.'
    },
    {
        id: '2022-23-q26',
        year: '2022-23',
        paperType: 'Board',
        marks: 6,
        type: 'LA',
        question: 'Explain Critical Point Control with an example.',
        answer: 'Focus on KRAs (e.g., 5% rise in labour cost is more critical than 15% rise in postal charges)',
        aiExplanation: 'It is not economical to check every single activity, so focus is on key areas.'
    }
];
