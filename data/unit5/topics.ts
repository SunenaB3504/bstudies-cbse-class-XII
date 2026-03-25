import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'opening-case-wipro',
    title: 'Opening Case: Way To Go, Wipro!',
    description: 'How Wipro Technologies restructured for global success.',
    content: [
      "**The Challenge**",
      "Wipro Technologies, one of India’s largest IT providers, aimed to compete with giants like IBM and Accenture. Restructuring was seen as the most critical step toward being customer-oriented.",
      "",
      "**The Transformation**",
      "- **Decentralisation**: Wipro shifted from a centralised to a decentralised management system.",
      "- **Subsidiaries**: Separated into several product-line subsidiaries (Telecom, Engineering, Finance, etc.).",
      "- **Empowerment**: Business leaders were given higher growth responsibility and a whole layer of executives was removed (de-layering).",
      "",
      "**Result**: Each subsidiary became self-sufficient with its own accounting, personnel, and administration, allowing for faster response to customer needs."
    ],
    visualizations: []
  },
  {
    id: 'concept-of-organising',
    title: 'Concept & Meaning',
    description: 'Definition and the "School Fete" analogy.',
    content: [
      "**Meaning**",
      "Organising is a process that initiates implementation of plans by clarifying jobs and working relationships and effectively deploying resources.",
      "",
      "**The \"School Fete\" Example**",
      "Think about your school fete. It succeeds because the whole activity is divided into task groups:",
      "- **Food Committee**",
      "- **Decoration Committee**",
      "- **Ticketing Committee**",
      "These groups work under an official in charge. Coordinating relationships are established among them to ensure a smooth event. This is the essence of organising."
    ],
    visualizations: []
  },
  {
    id: 'organising-process',
    title: 'Steps in Organising Process',
    description: 'The 4-step procedure with the \"Library\" analogy.',
    content: [
      "If 12 students are told to unload books in a library without coordination, it leads to mass confusion. Organising prevents this through these steps:",
      "",
      "1. **Identification and Division of Work**: Dividing total work into manageable activities based on plans to avoid duplication.",
      "2. **Departmentalisation**: Grouping similar activities together (e.g., by territory or products).",
      "3. **Assignment of Duties**: Allocating jobs to members based on their skills and competencies (the 'Match' between job and ability).",
      "4. **Establishing Reporting Relationships**: Clarifying who reports to whom, creating a hierarchical structure for coordination."
    ],
    visualizations: [
      {
        id: 'organising-process-flow',
        title: 'The Organising Chain',
        type: 'flow',
        data: {
          nodes: [
            { id: '1', label: '1. Identify/Divide' },
            { id: '2', label: '2. Departmentalise' },
            { id: '3', label: '3. Assign Duties' },
            { id: '4', label: '4. Reporting Setup' }
          ],
          edges: [
            { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' }
          ]
        }
      }
    ]
  },
  {
    id: 'importance-of-organising',
    title: 'Importance of Organising',
    description: 'Why it is crucial for business survival and growth.',
    content: [
      "1. **Benefits of Specialisation**: Repetitive performance leads to experience and expertise.",
      "2. **Clarity in Working Relationships**: Fixes responsibility and specifies authority levels.",
      "3. **Optimum Utilisation of Resources**: Avoids overlapping and wastage of efforts.",
      "4. **Adaptation to Change**: Allows the structure to be modified for a smooth transition in dynamic markets.",
      "5. **Effective Administration**: Removes ambiguity in performance of duties.",
      "6. **Development of Personnel**: Stimulates creativity by allowing managers to delegate routine work and focus on growth.",
      "7. **Expansion and Growth**: Enables adding new product lines, departments, and territories."
    ],
    visualizations: []
  },
  {
    id: 'organisation-structure',
    title: 'Organisation Structure',
    description: 'The framework of management.',
    content: [
      "**Concept**: The framework within which managerial and operating tasks are performed. It specifies relationships between people, work, and resources.",
      "",
      "**Span of Management**: Refers to the number of subordinates that can be effectively managed by a superior. It determines the levels of management (the shape of the hierarchy)."
    ],
    visualizations: [
      {
        id: 'span-of-management',
        title: 'Span of Management Impact',
        type: 'table',
        data: {
          headers: ['Factor', 'Narrow Span', 'Wide Span'],
          rows: [
            ['Levels', 'Many (Tall Structure)', 'Few (Flat Structure)'],
            ['Control', 'Tight Supervision', 'Less Formal Supervision'],
            ['Communication', 'Possible Delays', 'Faster Communication']
          ]
        }
      }
    ]
  },
  {
    id: 'types-of-structure',
    title: 'Functional vs Divisional',
    description: 'Understanding the two primary structural models.',
    content: [
      "**Functional Structure**: Grouping jobs of similar nature under functions (Production, Marketing, HR). Suitable for large, single-product firms.",
      "",
      "**Divisional Structure**: Structure based on product lines. Each division is multifunctional and works as a profit centre.",
      "NCERT Example Divisions: **Cosmetics, Garments, Footwear, Skin Care**."
    ],
    visualizations: [
      {
        id: 'divisional-structure-chart',
        title: 'NCERT Divisional Model',
        type: 'flow',
        data: {
          nodes: [
            { id: 'md', label: 'Managing Director' },
            { id: 'cos', label: 'Cosmetics' },
            { id: 'gar', label: 'Garments' },
            { id: 'foo', label: 'Footwear' },
            { id: 'ski', label: 'Skin Care' }
          ],
          edges: [
            { from: 'md', to: 'cos' }, { from: 'md', to: 'gar' },
            { from: 'md', to: 'foo' }, { from: 'md', to: 'ski' }
          ]
        }
      }
    ]
  },
  {
    id: 'delegation-decentralisation',
    title: 'Delegation & Decentralisation',
    description: 'Authority transfer and dispersal.',
    content: [
      "**Delegation**: Downward transfer of authority. Elements: **Authority** (flows down), **Responsibility** (flows up), **Accountability** (flows up and is absolute).",
      "",
      "**Decentralisation**: Systematic dispersal of authority to the lowest level. It is an organizational philosophy.",
      "",
      "> [!IMPORTANT]",
      "> **Delegation vs Decentralisation**: Delegation is a technique to get work done; Decentralisation is an optional policy for empowering low-level employees."
    ],
    visualizations: []
  }
];
