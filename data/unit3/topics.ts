import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'env-concept',
    title: 'Concept & Importance',
    description: 'Understanding the business environment and its significance.',
    content: [
      'Meaning: The sum total of all individuals, institutions and other forces that are outside the control of a business enterprise but that may affect its performance.',
      'Features: Totality of external forces, Specific and general forces, Inter-relatedness, Dynamic nature, Uncertainty, Complexity, Relativity.',
      'Importance: 1. Identification of opportunities (first mover advantage): Helps be the first to exploit opportunities (e.g., Maruti Udyog in small cars). 2. Identification of threats (early warning signals): Helps prepare for competition (e.g., knowing a foreign firm is entering the market). 3. Tapping useful resources: Businesses obtain inputs like finance and labor from the environment. 4. Coping with rapid changes: Helps managers deal with turbulence like shorter product life cycles. 5. Assisting in planning and policy formulation: Guidelines for long-term decisions. 6. Improving performance: Firms that monitor environment closely tend to succeed.'
    ],
    visualizations: [
      {
        id: 'env-features',
        title: 'Features of Business Environment',
        type: 'list',
        data: ['Totality of External Forces', 'Specific & General Forces', 'Inter-relatedness', 'Dynamic Nature', 'Uncertainty', 'Complexity', 'Relativity']
      },
      {
        id: 'inter-relatedness-flow',
        title: 'Inter-relatedness of Factors',
        type: 'flow',
        data: {
          nodes: [
            { id: 'h', label: 'Health Awareness Trend' },
            { id: 'd', label: 'Demand for Organic Food' },
            { id: 'l', label: 'Lifestyle Change' }
          ],
          edges: [
            { from: 'h', to: 'd', label: 'Social to Economic' },
            { from: 'h', to: 'l' }
          ]
        }
      }
    ]
  },
  {
    id: 'env-dimensions',
    title: 'Dimensions of Business Environment',
    description: 'Key factors constituting the general environment.',
    content: [
      'Economic Environment: Factors that have an immediate and direct economic impact. Includes interest rates, inflation rates, changes in disposable income of people, value of rupee (e.g., Rise in interest rates decreases demand for houses/cars).',
      'Social Environment: Social forces like customs, traditions, values, social trends, and society\'s expectations from business (e.g., Celebration of Diwali/Eid increases sales of sweets; Health/Fitness trend increases demand for gym/organic food).',
      'Technological Environment: Forces related to scientific improvements and innovations which provide new ways of producing goods or operating business (e.g., Online booking of air tickets; WhatsApp as a marketing tool).',
      'Political Environment: Includes political conditions such as general stability and peace in the country and the attitude of the elected government towards business (e.g., Skill India or Make in India initiatives).',
      'Legal Environment: Includes various legislations passed by the Government, administrative orders issued by authorities, court judgments, and decisions of various commissions (e.g., Mandatory statutory warning on cigarette packets).'
    ],
    visualizations: [
      {
        id: 'pestle-star',
        title: 'Dimensions Interaction',
        type: 'flow',
        data: {
          nodes: [
            { id: 'bus', label: 'Business Enterprise' },
            { id: 'eco', label: 'Economic Environment' },
            { id: 'soc', label: 'Social Environment' },
            { id: 'tech', label: 'Technological Environment' },
            { id: 'pol', label: 'Political Environment' },
            { id: 'leg', label: 'Legal Environment' }
          ],
          edges: [
            { from: 'eco', to: 'bus' }, { from: 'soc', to: 'bus' },
            { from: 'tech', to: 'bus' }, { from: 'pol', to: 'bus' },
            { from: 'leg', to: 'bus' }
          ]
        }
      }
    ]
  },
  {
    id: 'economic-env-india',
    title: 'Economic Environment in India',
    description: 'Overview of India\'s economic landscape and reforms.',
    content: [
      'Pre-1991: Agricultural focus, public sector dominance, restrictions on private sector.',
      'Crisis of 1991: Fiscal deficit, high internal debt, low GNP growth, soaring inflation, foreign exchange crisis.',
      'New Industrial Policy 1991: Abolition of licensing (Liberalisation), Disinvestment/reduced public sector role (Privatisation), Promotion of foreign investment (Globalisation).',
      'LPG Model: Liberalisation (removing controls), Privatisation (empowering private sector), Globalisation (integrating with world economy).'
    ],
    visualizations: [
      {
        id: 'lpg',
        title: 'LPG Reforms (1991)',
        type: 'table',
        data: {
          headers: ['Reform', 'Key Features'],
          rows: [
            ['Liberalisation', 'Abolished licensing, freedom in scale, free movement of goods'],
            ['Privatisation', 'Disinvestment, reduced public sector role'],
            ['Globalisation', 'Foreign capital (FDI), technology agreements, integrating economy']
          ]
        }
      }
    ]
  },
  {
    id: 'demonetization',
    title: 'Demonetization',
    description: 'The withdrawal of legal tender status of ₹500 and ₹1,000 notes.',
    content: [
      'Event: November 8, 2016.',
      'Aim: To curb corruption, counterfeiting, illegal activities, and "Black Money".',
      'Feature 1: Tax Administration Measure (declaring unaccounted wealth).',
      'Feature 2: Shift explicitly away from cash (channelizing savings into formal financial system).',
      'Feature 3: Creating a "Less-cash" or "Cash-lite" economy.'
    ],
    visualizations: []
  }
];
