import { Chapter } from '../types';

export const unit1: Chapter = {
  id: 1,
  slug: 'nature-management',
  name: 'Nature and Significance of Management',
  description: 'Management functions, levels, and coordination as the essence of management.',
  topics: [
    {
      id: 'mgmt-intro',
      title: 'Introduction to Management',
      description: 'The art of getting things done through others.',
      content: [
        'Definition: Management is a process of designing and maintaining an environment in which individuals, working together in groups, efficiently accomplish selected aims.',
        'Functions: Planning, Organizing, Staffing, Directing, Controlling (POSDC).',
        'Characteristics: Goal-oriented, All-pervasive, Multidimensional, Continuous process, Group activity.'
      ],
      visualizations: [
        {
          id: 'v1',
          title: 'Functions of Management',
          type: 'list',
          data: ['Planning', 'Organizing', 'Staffing', 'Directing', 'Controlling']
        }
      ]
    },
    {
      id: 'levels-mgmt',
      title: 'Levels of Management',
      description: 'The hierarchy of authority and responsibility.',
      content: [
        'Top Level: CEO, Board (Strategic Planning).',
        'Middle Level: Department Heads (Execution).',
        'Operational Level: Supervisors (Oversight).'
      ],
      visualizations: [
        {
          id: 'v2',
          title: 'Management Pyramid',
          type: 'table',
          data: {
            headers: ['Level', 'Role', 'Focus'],
            rows: [
              ['Top', 'Formulate goals', 'Long-term'],
              ['Middle', 'Interpret policies', 'Coordination'],
              ['Operational', 'Direct workforce', 'Day-to-day']
            ]
          }
        }
      ]
    }
  ],
  flashcards: [
    { id: 'f1', category: 'Definition', question: 'What is Management?', answer: 'The art of getting things done through others efficiently and effectively.' },
    { id: 'f2', category: 'Functions', question: 'What does POSDC stand for?', answer: 'Planning, Organizing, Staffing, Directing, Controlling.' },
    { id: 'f3', category: 'Hierarchy', question: 'Who constitutes Top Managment?', answer: 'CEO, CFO, Board of Directors, President.' }
  ],
  sqp: [
    {
      id: 'q1',
      year: '2023-24',
      paperType: 'Board',
      marks: 1,
      type: 'MCQ',
      question: 'Management is:',
      answer: 'Both Art and Science',
      aiExplanation: 'It has organized knowledge (Science) and requires personalized application (Art).'
    }
  ],
  mindMap: {
    id: 'm1',
    label: 'Unit 1: Management',
    children: [
      { id: 'm2', label: 'Functions', children: [{ id: 'm3', label: 'POSDC' }] },
      { id: 'm4', label: 'Nature', children: [{ id: 'm5', label: 'Art/Science/Profession' }] },
      { id: 'm6', label: 'Levels', children: [{ id: 'm7', label: 'Top/Middle/Lower' }] }
    ]
  },
  cheatSheet: [
    { title: 'Mnemonics', points: ['POSDC = Functions', 'Efficiency = Cost Benefit', 'Effectiveness = Time Benefit'] }
  ]
};
