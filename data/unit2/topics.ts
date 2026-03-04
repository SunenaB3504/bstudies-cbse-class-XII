import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'principles-concept',
    title: 'Concept & Nature of Principles',
    description: 'General guidelines for managerial decision making.',
    content: [
      'Definition: Principles of management are broad and general guidelines for decision-making and behaviour.',
      'Nature: Universal Applicability (all types of orgs), General Guidelines (not ready-made solutions), Formed by Practice & Experimentation, Flexible (can be modified), Mainly Behavioural (influence human behavior), Cause & Effect Relationships, Contingent (dependent on situation).'
    ],
    visualizations: []
  },
  {
    id: 'principles-significance',
    title: 'Significance of Principles',
    description: 'Why do we need management principles?',
    content: [
      'Insights into Reality: Provides managers with useful insights into real-world situations.',
      'Optimum Utilization: Helps in efficient use of resources (human and material) and effective administration.',
      'Scientific Decisions: Decisions based on facts and justification rather than blind faith.',
      'Meeting Changing Environment: flexible principles help adapt to dynamic business environments.',
      'Social Responsibility: Evolving principles help fulfill social obligations (e.g., equity, fair remuneration).',
      'Training & Research: Basis for management education (MBA/BBA) and further research.'
    ],
    visualizations: []
  },
  {
    id: 'taylor-scientific-mgmt',
    title: 'Scientific Management (F.W. Taylor)',
    description: 'The "Father of Scientific Management" and his contribution.',
    content: [
      'Science not Rule of Thumb: Use scientific method to find the "one best way", replacing trial and error.',
      'Harmony, Not Discord: Mental Revolution - complete change in attitude of management and workers towards each other.',
      'Cooperation, Not Individualism: Extension of harmony. Competition replaced by cooperation. Management should welcome suggestions.',
      'Development of Each Person: Select and train employees for their greatest efficiency and prosperity.'
    ],
    visualizations: []
  },
  {
    id: 'taylor-techniques',
    title: 'Techniques of Scientific Management',
    description: 'Practical tools to implement scientific management.',
    content: [
      'Functional Foremanship: Separation of planning and execution. 8 foremen (Instruction Card Clerk, Route Clerk, Time & Cost Clerk, Disciplinarian, Speed Boss, Gang Boss, Repair Boss, Inspector).',
      'Standardization & Simplification: Setting benchmarks (Standardization) and eliminating superfluous varieties (Simplification).',
      'Method Study: Finding the one best way of doing a job.',
      'Motion Study: Eliminating unnecessary movements (e.g., brick layering study).',
      'Time Study: Determining standard time for a job.',
      'Fatigue Study: Determining amount and frequency of rest intervals. Example: Heavy manual labor requires more frequent breaks than office work.',
      'Differential Piece Wage System: Paying higher rates to efficient workers and lower rates to inefficient ones. Example: If standard is 10 units, worker A (12 units) gets ₹10/unit (₹120), while worker B (8 units) gets ₹8/unit (₹64).'
    ],
    visualizations: [
      {
        id: 'functional-foremanship',
        title: 'Functional Foremanship Structure',
        type: 'flow',
        data: {
          nodes: [
            { id: 'fm', label: 'Factory Manager' },
            { id: 'plan', label: 'Planning Incharge' },
            { id: 'prod', label: 'Production Incharge' },
            { id: 'w', label: 'Workmen' },
            { id: 'wc', label: 'Route Clerk' },
            { id: 'ic', label: 'Instruction Card Clerk' },
            { id: 'tc', label: 'Time & Cost Clerk' },
            { id: 'd', label: 'Disciplinarian' },
            { id: 'gb', label: 'Gang Boss' },
            { id: 'sb', label: 'Speed Boss' },
            { id: 'rb', label: 'Repair Boss' },
            { id: 'i', label: 'Inspector' }
          ],
          edges: [
            { from: 'fm', to: 'plan' },
            { from: 'fm', to: 'prod' },
            { from: 'plan', to: 'wc' }, { from: 'plan', to: 'ic' }, { from: 'plan', to: 'tc' }, { from: 'plan', to: 'd' },
            { from: 'prod', to: 'gb' }, { from: 'prod', to: 'sb' }, { from: 'prod', to: 'rb' }, { from: 'prod', to: 'i' },
            { from: 'wc', to: 'w' }, { from: 'ic', to: 'w' }, { from: 'tc', to: 'w' }, { from: 'd', to: 'w' },
            { from: 'gb', to: 'w' }, { from: 'sb', to: 'w' }, { from: 'rb', to: 'w' }, { from: 'i', to: 'w' }
          ]
        }
      }
    ]
  },
  {
    id: 'fayol-principles',
    title: 'Fayol\'s 14 Principles',
    description: 'Administrative Theory by Henri Fayol.',
    content: [
      '1. Division of Work: Specialization to increase efficiency. Example: In a bank, different people handle cash, loans, and accounts, leading to faster service.',
      '2. Authority & Responsibility: Right to give orders must be balanced with responsibility.',
      '3. Discipline: Obedience, application, energy and respect.',
      '4. Unity of Command: One subordinate should receive orders from only ONE superior. Example: If an employee gets conflicting orders from two managers, it leads to confusion and dual subordination.',
      '5. Unity of Direction: One head and one plan for a group of activities with same objective.',
      '6. Subordination of Individual Interest: Organization\'s interest comes first.',
      '7. Remuneration: Fair and just payment to employees.',
      '8. Centralisation & Decentralisation: Balance between concentration and dispersal of authority.',
      '9. Scalar Chain: Chain of authority from top to bottom. "Gang Plank" for emergency direct contact. Example: If Production Manager "D" needs to contact Purchase Manager "N" for urgent raw materials, they can use the Gang Plank shortcut.',
      '10. Order: A place for everything and everyone.',
      '11. Equity: Kindness and justice in behaviour of managers.',
      '12. Stability of Personnel: Minimizing employee turnover.',
      '13. Initiative: Encouraging employees to think and execute plans.',
      '14. Esprit de Corps: Promoting team spirit and harmony.'
    ],
    visualizations: [
      {
        id: 'unity-command-vs-direction',
        title: 'Unity of Command vs Direction',
        type: 'table',
        data: {
          headers: ['Basis', 'Unity of Command', 'Unity of Direction'],
          rows: [
            ['Meaning', 'One boss per employee', 'One head, one plan per unit'],
            ['Aim', 'Prevents dual subordination', 'Prevents overlapping of activities'],
            ['Implication', 'Affects individual employee', 'Affects entire organization']
          ]
        }
      },
      {
        id: 'scalar-chain-diagram',
        title: 'Scalar Chain & Gang Plank',
        type: 'flow',
        data: {
          nodes: [
            { id: 'a', label: 'A (Top)' },
            { id: 'b', label: 'B' }, { id: 'c', label: 'C' }, { id: 'd', label: 'D (Peer)' },
            { id: 'l', label: 'L' }, { id: 'm', label: 'M' }, { id: 'n', label: 'N (Peer)' }
          ],
          edges: [
            { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' },
            { from: 'a', to: 'l' }, { from: 'l', to: 'm' }, { from: 'm', to: 'n' },
            { from: 'd', to: 'n', label: 'Gang Plank (Emergency)' }
          ]
        }
      }
    ]
  },
  {
    id: 'taylor-vs-fayol',
    title: 'Taylor vs Fayol',
    description: 'Comparison of the two classical theorists.',
    content: [
      'Perspective: Taylor focused on Shop Floor (Operator level); Fayol focused on Top Management.',
      'Basis: Taylor based on Observation/Experimentation; Fayol based on Personal Experience.',
      'Applicability: Taylor specialized situations; Fayol universally applicable.',
      'Unity of Command: Taylor violated it (8 bosses); Fayol strictly applied it.',
      'Focus: Taylor on Productivity; Fayol on Administration.'
    ],
    visualizations: [
      {
        id: 'comparison-table',
        title: 'Taylor vs Fayol',
        type: 'table',
        data: {
          headers: ['Basis', 'Taylor', 'Fayol'],
          rows: [
            ['Perspective', 'Shop Floor', 'Top Level'],
            ['Focus', 'Productivity', 'Administration'],
            ['Applicability', 'Specialized', 'Universal'],
            ['Unity of Command', 'Did not follow', 'Strictly followed']
          ]
        }
      }
    ]
  }
];
