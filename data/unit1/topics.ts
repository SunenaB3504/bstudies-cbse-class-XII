import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'mgmt-intro',
    title: 'Introduction to Management',
    description: 'The art of getting things done through others.',
    content: [
      'Definition: Management is a process of designing and maintaining an environment in which individuals, working together in groups, efficiently accomplish selected aims.',
      'Functions: Planning, Organizing, Staffing, Directing, Controlling (POSDC).',
      'Management is essential for all organisations big or small, profit or non-profit, services or manufacturing.',
      'It consists of a series of interrelated functions performed by all managers.'
    ],
    visualizations: [
      {
        id: 'mgmt-process-cycle',
        title: 'The Management Process Cycle',
        type: 'steps',
        data: ['Planning', 'Organising', 'Staffing', 'Directing', 'Controlling']
      }
    ]
  },
  {
    id: 'eff-vs-eff',
    title: 'Effectiveness vs Efficiency',
    description: 'Balancing the two sides of the same coin.',
    content: [
      'Effectiveness: Doing the right task, completing activities and achieving goals. Main focus is on end result.',
      'Efficiency: Doing the task correctly and with minimum cost. Main focus is on cost-benefit analysis.',
      'Example: Suppose a company\'s target is to produce 5,000 units in a month. To achieve this, the manager operates on double shifts. He achieves the target (Effective) but at a higher cost due to overtime (Inefficient). If he produced them at the standard cost but missed the deadline, he would be Efficient but Ineffective.',
      'Relation: High efficiency without effectiveness is useless; high effectiveness with low efficiency leads to high costs.'
    ],
    visualizations: [
      {
        id: 'eff-matrix',
        title: 'Effectiveness vs Efficiency Matrix',
        type: 'table',
        data: {
          headers: ['Basis', 'Effectiveness', 'Efficiency'],
          rows: [
            ['Meaning', 'Completing the job on time', 'Completing job with minimum cost'],
            ['Objective', 'To achieve end result', 'To conduct cost-benefit analysis'],
            ['Main Focus', 'Time', 'Cost']
          ]
        }
      }
    ]
  },
  {
    id: 'mgmt-characteristics',
    title: 'Characteristics of Management',
    description: 'Key features that define the nature of management.',
    content: [
      'Goal Oriented Process: Unites efforts of different individuals towards common goals.',
      'Pervasive: Required in all types of organizations (economic, social, political) and at all levels.',
      'Multidimensional: Management of Work, Management of People, Management of Operations.',
      'Continuous Process: Ongoing series of functions (POSDC).',
      'Group Activity: Teamwork and coordination of individual efforts.',
      'Dynamic Function: Adapts to changing environment (PESTLE). Example: McDonalds changed its menu (e.g., McAloo Tikki) to survive and grow in the Indian market.',
      'Intangible Force: Cannot be seen but its presence is felt (orderliness, discipline).'
    ],
    visualizations: [
      {
        id: 'mgmt-dimensions',
        title: 'Dimensions of Management',
        type: 'list',
        data: ['Management of Work', 'Management of People', 'Management of Operations']
      }
    ]
  },
  {
    id: 'mgmt-obj',
    title: 'Objectives of Management',
    description: 'Organizational, Social, and Personal objectives.',
    content: [
      'Organizational Objectives: Survival (earning enough revenue to cover costs), Profit (essential for covering risks/incentive), Growth (expansion in terms of sales, employees, or products).',
      'Social Objectives: Using eco-friendly methods, creating employment for weaker sections, providing basic amenities like schools/healthcare (e.g., TATA Steel in Jamshedpur).',
      'Personal Objectives: Fair wages/salary, peer recognition, good working conditions, and opportunities for training and development.'
    ],
    visualizations: []
  },
  {
    id: 'mgmt-imp',
    title: 'Importance of Management',
    description: 'Why management is critical for success.',
    content: [
      'Helps in achieving group goals: Directs individual efforts towards organization\'s goal.',
      'Increases efficiency: Reduces costs and increases productivity through better planning and organizing.',
      'Creates a dynamic organisation: Helps people adapt to changing environment so the firm maintains its competitive edge.',
      'Helps in achieving personal objectives: Lead and motivate individuals to achieve personal goals while working for the organization.',
      'Helps in development of society: Provides good quality products, creates jobs, and adopts new technology.'
    ],
    visualizations: []
  },
  {
    id: 'nature-art-science',
    title: 'Nature of Management: Art or Science?',
    description: 'Management has features of both Art and Science.',
    content: [
      'Management as an Art: Based on practice and creativity. Features: Existence of theoretical knowledge, Personalized application, Based on practice and creativity.',
      'Management as a Science: Systematized body of knowledge. Features: Systematized body of knowledge, Principles based on experimentation, Universal validity.',
      'Conclusion: Management is an inexact science (Soft Science) and a creative art. They are not mutually exclusive but complementary.'
    ],
    visualizations: [
      {
        id: 'art-vs-science',
        title: 'Art vs Science Features',
        type: 'table',
        data: {
          headers: ['Feature', 'Art', 'Science', 'Management Status'],
          rows: [
            ['Systematic Knowledge', 'Yes', 'Yes', 'Present in Management'],
            ['Personalized Application', 'Yes', 'No', 'Highly present in Management'],
            ['Based on Practice/Exp', 'Yes', 'Yes', 'Present in Management'],
            ['Universal Validity', 'No', 'Yes', 'Not strictly present in Management']
          ]
        }
      }
    ]
  },
  {
    id: 'nature-profession',
    title: 'Management as a Profession',
    description: 'Is management a full-fledged profession?',
    content: [
      'Well-defined body of knowledge: Yes, management has a systematic body of knowledge.',
      'Restricted Entry: No, anyone can be a manager (unlike limits on doctors/lawyers).',
      'Professional Association: Yes (e.g., AIMA), but membership is not mandatory.',
      'Ethical Code of Conduct: Associations have codes, but they are not legally binding on all managers.',
      'Service Motive: Basic motive is often profit, though service to society is growing involved.'
    ],
    visualizations: []
  },
  {
    id: 'levels-mgmt',
    title: 'Levels of Management',
    description: 'The hierarchy of authority and responsibility.',
    content: [
      'Top Management: Senior-most executives (Chairman, CEO, COO). Responsible for welfare, survival, and overall organizational goals/strategies.',
      'Middle Management: Division heads (Production Manager, Marketing Manager). Link between top and lower levels. Implement plans, interpret policies, staff their departments.',
      'Operational/Supervisory Management: Foremen, Supervisors. Directly oversee workforce, ensure quality, minimize wastage, maintain safety.'
    ],
    visualizations: [
      {
        id: 'levels-pyramid',
        title: 'Management Hierarchy',
        type: 'steps',
        data: ['Top Management (Strategic)', 'Middle Management (Tactical)', 'Operational Management (Technical)']
      }
    ]
  },
  {
    id: 'coordination',
    title: 'Coordination',
    description: 'The essence of management.',
    content: [
      'Definition: The process by which a manager synchronises the activities of different departments.',
      'Essence of Management: It is not a separate function but the force that binds all other functions (Planning, Organizing, Staffing, Directing, Controlling).',
      'Characteristics: Integrates group efforts, Ensures unity of action, Continuous process, All pervasive, Responsibility of all managers, Deliberate function.',
      'Importance: Needed due to Growth in size (harmonizing individual goals), Functional differentiation (reconciling departmental conflicts), and Specialisation (balancing expert opinions).'
    ],
    visualizations: [
      {
        id: 'coord-vs-coop',
        title: 'Coordination vs Cooperation',
        type: 'table',
        data: {
          headers: ['Basis', 'Coordination', 'Cooperation'],
          rows: [
            ['Meaning', 'Orderly arrangement of group efforts', 'Voluntary effort of individuals'],
            ['Scope', 'Wider (includes cooperation)', 'Narrow (part of coordination)'],
            ['Nature', 'Deliberate and conscious effort', 'Voluntary and spontaneous'],
            ['Requirement', 'Required by managers at all levels', 'Depends on individual willingness']
          ]
        }
      }
    ]
  }
];
