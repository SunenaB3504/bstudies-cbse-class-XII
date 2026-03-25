import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'opening-case-gail',
    title: 'Opening Case: GAIL India',
    description: 'Real-world application of planning in a shifting market.',
    content: [
      "**The Challenge**",
      "Gas Authority of India Ltd. (GAIL) was a monopoly in the gas transmission sector. However, with the entry of players like Reliance and British Gas, the company had to rethink its future.",
      "",
      "**The Plan**",
      "- **Transmission**: Extending the gas grid from 5,600 km to 10,000 km.",
      "- **City Gas**: Increasing projects from 6 to 45 by the end of the 11th Five Year Plan.",
      "- **Funding**: Planned Capex of ₹2967.28 crore (FY 06-07) mostly from internal reserves.",
      "- **Diversification**: Focus on petrochemicals, processing, and globalisation.",
      "",
      "**Lesson**: Planning involves mapping out the road to stay ahead of competition and adapt to changing environments."
    ],
    visualizations: [
      {
        id: 'gail-expansion',
        title: 'GAIL Strategic Target',
        type: 'flow',
        data: {
          nodes: [
            { id: '1', label: '5,600 km Grid' },
            { id: '2', label: '10,000 km Grid' },
            { id: '3', label: '6 City Projects' },
            { id: '4', label: '45 City Projects' }
          ],
          edges: [
            { from: '1', to: '2', label: 'Goal: 11th Plan' },
            { from: '3', to: '4', label: 'Goal: 11th Plan' }
          ]
        }
      }
    ]
  },
  {
    id: 'concept-of-planning',
    title: 'Concept & Logic',
    description: 'What is planning and how it bridges the present and future.',
    content: [
      "**Meaning**",
      "Planning is deciding in advance what to do and how to do it. It is one of the basic managerial functions. *'It bridges the gap between where we are and where we want to go.'*",
      "It involves setting objectives and developing appropriate courses of action to achieve these objectives. Every manager at every level plans.",
      "",
      "**Thinking Before Doing**",
      "Before any action is taken, a manager must formulate an idea of how to work on a particular task. Thus, planning is closely connected with **creativity and innovation**. It requires taking decisions as it involves making a choice from alternative courses of action."
    ],
    visualizations: []
  },
  {
    id: 'importance-of-planning',
    title: 'Importance of Planning',
    description: 'Why planning is essential for organisational success.',
    content: [
      "1. **Provides Direction**: States in advance how work is to be done, ensuring goals are clearly defined.",
      "2. **Reduces Risks of Uncertainty**: Enables managers to look ahead and anticipate changes, preparing responses rather than reacting blindly.",
      "3. **Reduces Overlapping and Wasteful Activities**: Serves as the basis of coordinating efforts and avoiding confusion.",
      "4. **Promotes Innovative Ideas**: As the first function, it allows managers to think and stay creative.",
      "5. **Facilitates Decision Making**: Helps evaluate alternatives and select the most viable proposition.",
      "6. **Establishes Standards for Controlling**: Provides goals against which actual performance is measured."
    ],
    visualizations: [
      {
        id: 'planning-importance-list',
        title: 'Importance Summary',
        type: 'list',
        data: ['Direction', 'Risk Reduction', 'Coordination', 'Innovation', 'Decision Making', 'Control Standards']
      }
    ]
  },
  {
    id: 'features-of-planning',
    title: 'Features of Planning',
    description: 'Key characteristics that define the nature of planning.',
    content: [
      "**Characteristics**",
      "- **Focuses on Achieving Objectives**: No meaning unless it contributes to predetermined goals.",
      "- **Primary Function**: Precedes all other functions (Organising, Staffing, etc.).",
      "- **Pervasive**: Required at all levels—top, middle, and lower.",
      "- **Continuous**: Prepared for a period; followed by new plans based on feedback.",
      "- **Futuristic**: Looking ahead and forecasting future events.",
      "- **Involves Decision Making**: Choice among various alternatives.",
      "- **Mental Exercise**: Intellectual activity requiring foresight and imagination."
    ],
    visualizations: []
  },
  {
    id: 'limitations-of-planning',
    title: 'Limitations of Planning',
    description: 'Challenges and constraints involved in the planning process.',
    content: [
      "**Internal Limitations**",
      "a) **Rigidity**: Plans may prevent changes even when circumstances demand them.",
      "b) **Dynamic Environment**: Difficult to assess future trends accurately in volatile markets.",
      "c) **Reduces Creativity**: Middle/lower managers often carry out orders without participating in planning.",
      "d) **Huge Costs**: Expensive research and expertise are needed.",
      "e) **Time Consuming**: Delays action due to length of formulation.",
      "f) **No Guarantee of Success**: Complacency (relying on past success) can lead to failure.",
      "",
      "**External Limitations**",
      "Beyond firm control (Govt policy changes, natural calamities, competitor actions)."
    ],
    visualizations: []
  },
  {
    id: 'planning-process',
    title: 'Planning Process',
    description: 'The standard 7-step procedure.',
    content: [
      "1. **Setting Objectives**: Specifying clear, measurable goals.",
      "2. **Developing Premises**: Making assumptions (premises) about the future environment (forecasts).",
      "3. **Identifying Alternative Courses**: Enumerating all possible ways to reach goals.",
      "4. **Evaluating Alternatives**: Weighing pros/cons and feasibility.",
      "5. **Selecting an Alternative**: The real point of **decision making**.",
      "6. **Implementing the Plan**: Putting plan into action (allocating resources).",
      "7. **Follow-up Action**: Monitoring results to ensure activities match the schedule."
    ],
    visualizations: [
      {
        id: 'planning-process-flow',
        title: 'The Planning Journey',
        type: 'flow',
        data: {
          nodes: [
            { id: '1', label: '1. Objectives' },
            { id: '2', label: '2. Premises' },
            { id: '3', label: '3. Alternatives' },
            { id: '4', label: '4. Evaluation' },
            { id: '5', label: '5. Selection' },
            { id: '6', label: '6. Implementation' },
            { id: '7', label: '7. Follow-up' }
          ],
          edges: [
            { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' },
            { from: '4', to: '5' }, { from: '5', to: '6' }, { from: '6', to: '7' }
          ]
        }
      }
    ]
  },
  {
    id: 'types-of-plans',
    title: 'Types of Plans',
    description: 'Broad classification and 8 specific types.',
    content: [
      "**1. Objectives**: The end results towards which activities are directed.",
      "**2. Strategy**: Comprehensive plan including long-term goals and resource allocation.",
      "**3. Policy**: General guide to thinking (e.g., recruitment policy).",
      "**4. Procedure**: Routine steps in chronological order.",
      "**5. Method**: Prescribed way a single task is performed.",
      "**6. Rule**: Specific statements informing what is to be done (Zero flexibility).",
      "**7. Programme**: Detailed statement outlining objectives, policies, and tasks for a project.",
      "**8. Budget**: Expected results expressed in numerical terms (e.g., Cash Budget).",
      "",
      "**Single-use vs Standing**",
      "- **Single-use**: One-time projects (Budgets, Programmes).",
      "- **Standing**: Recurring activities (Policy, Procedure, Rules, Method)."
    ],
    visualizations: [
      {
        id: 'single-vs-standing',
        title: 'Plan Classification',
        type: 'table',
        data: {
          headers: ['Basis', 'Single-use', 'Standing'],
          rows: [
            ['Frequency', 'One-time', 'Regularly'],
            ['Scope', 'Narrow', 'Wide'],
            ['Examples', 'Budget, Programme', 'Policy, Method, Rule']
          ]
        }
      }
    ]
  }
];
