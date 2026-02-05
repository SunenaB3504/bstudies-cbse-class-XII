import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'concept-of-planning',
    title: 'Concept of Planning',
    description: 'Understanding the definition and key aspects of planning.',
    content: [
      'Planning is deciding in advance what to do and how to do. It is one of the basic managerial functions. Before doing something, the manager must formulate an idea of how to work on a particular task. Thus, planning is closely connected with creativity and innovation.',
      'Planning seeks to bridge the gap between where we are and where we want to go. It involves setting objectives and developing appropriate courses of action to achieve these objectives.',
      'Key Aspects include: Setting Objectives (Determining what needs to be achieved), Developing Courses of Action (Deciding how to achieve the objectives), Selection (Making a choice from alternative courses of action), and Bridging the gap (Links the present position to the desired future state).'
    ],
    visualizations: []
  },
  {
    id: 'importance-of-planning',
    title: 'Importance of Planning',
    description: 'Why planning is essential for organisational success.',
    content: [
      '1. **Provides Direction**: By stating in advance how work is to be done, planning provides direction for action. It ensures that goals generally stated are clearly defined so that they act as a guide for deciding what action should be taken and in which direction.',
      '2. **Reduces Risks of Uncertainty**: Planning enables a manager to look ahead and anticipate changes. By deciding in advance the tasks to be performed, planning shows the way to deal with changes and uncertain events.',
      '3. **Reduces Overlapping and Wasteful Activities**: It serves as the basis of coordinating the activities and efforts of different divisions, departments and individuals. It helps in avoiding confusion and misunderstanding.',
      '4. **Promotes Innovative Ideas**: Since planning is the first function of management, new ideas can take the shape of concrete plans. It is the most challenging activity for the management as it guides all future actions.',
      '5. **Facilitates Decision Making**: Planning helps the manager to look into the future and make a choice from amongst various alternative courses of action.',
      '6. **Establishes Standards for Controlling**: Planning provides the goals or standards against which actual performance is measured. Therefore, planning provides the basis of control.'
    ],
    visualizations: [
       {
          id: 'planning-importance-list',
          title: 'Importance of Planning Benefits',
          type: 'list',
          data: ['Direction', 'Risk Reduction', 'Efficiency (No Overlap)', 'Innovation', 'Decision Making', 'Control Standards']
       }
    ]
  },
  {
    id: 'features-of-planning',
    title: 'Features of Planning',
    description: 'Key characteristics that define the nature of planning.',
    content: [
      '**Focuses on Achieving Objectives**: Planning is purposeful and has no meaning unless it contributes to the achievement of predetermined organisational goals.',
      '**Primary Function of Management**: It lays down the base for other functions of management (organising, staffing, directing, controlling). This is referred to as the "primacy of planning".',
      '**Pervasive**: It is required at all levels of management as well as in all departments. It is not an exclusive function of top management.',
      '**Continuous**: Plans are prepared for a specific period. At the end of that period, there is a need for a new plan based on new requirements and future conditions.',
      '**Futuristic**: It essentially involves looking ahead and preparing for the future. It is regarded as a forward-looking function based on forecasting.',
      '**Involves Decision Making**: It essentially involves choice from among various alternatives and activities.',
      '**Mental Exercise**: It requires application of the mind involving foresight, intelligent imagination and sound judgement. It is an intellectual activity.'
    ],
    visualizations: []
  },
  {
    id: 'limitations-of-planning',
    title: 'Limitations of Planning',
    description: 'Challenges and constraints involved in the planning process.',
    content: [
      '1. **Leads to Rigidity**: Specific goals to be achieved within a specific time frame may not allow managers to be flexible enough to cope with changed circumstances.',
      '2. **May Not Work in Dynamic Environment**: The business environment is dynamic. Planning cannot foresee everything and thus, there may be obstacles to effective planning in a rapidly changing environment.',
      '3. **Reduces Creativity**: Plans are drawn by top management and implemented by others. Middle and lower management are neither allowed to deviate from plans nor are they permitted to act on their own.',
      '4. **Involves Huge Costs**: Huge costs are involved in the formulation of the plans (time, money, effort) which may not justify the benefits derived.',
      '5. **Time Consuming Process**: Sometimes plans to be drawn up take so much time that there is not much time left for their implementation.',
      '6. **Does Not Guarantee Success**: The success of an enterprise is possible only when plans are properly drawn up and implemented. Any plan needs to be translated into action or it becomes meaningless.',
      '',
      '**External Limitations**: These are outside the control of management, such as: Natural calamities, Change in political outlook, Change in government policies (tax/bank rates), or Competitors\' policies.'
    ],
    visualizations: []
  },
  {
    id: 'planning-process',
    title: 'Planning Process',
    description: 'Step-by-step procedure to formulate a plan.',
    content: [
      '1. **Setting Objectives**: The first and foremost step is setting objectives. Objectives may be set for the entire organisation and each department or unit within the organisation.',
      '2. **Developing Premises**: Planning is concerned with the future which is uncertain and every planner is using conjecture about what might happen in future. Assumptions are made about the future, which are called premises.',
      '3. **Identifying Alternative Courses of Action**: Once objectives are set and assumptions are made, then the next step is to identify all possible alternative courses of action.',
      '4. **Evaluating Alternative Courses**: The next step is to weigh the pros and cons of each alternative. Each course will have many variables which have to be weighed against each other.',
      '5. **Selecting an Alternative**: This is the real point of decision making. The best plan has to be adopted and implemented. The ideal plan would be the most feasible, profitable and with least negative consequences.',
      '6. **Implementing the Plan**: This is the step where other managerial functions also come into the picture. The step is concerned with putting the plan into action.',
      '7. **Follow-up Action**: To see whether plans are being implemented and activities are performed according to schedule is also part of the planning process. Monitoring the plans is equally important to ensure that objectives are achieved.'
    ],
    visualizations: [
       {
          id: 'planning-process-flow',
          title: 'The Planning Process',
          type: 'flow',
          data: {
              nodes: [
                  { id: '1', label: '1. Setting Objectives' },
                  { id: '2', label: '2. Developing Premises' },
                  { id: '3', label: '3. Identifying Alternatives' },
                  { id: '4', label: '4. Evaluating Alternatives' },
                  { id: '5', label: '5. Selecting Alternative' },
                  { id: '6', label: '6. Implementing Plan' },
                  { id: '7', label: '7. Follow-up Action' }
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
    description: 'Single-use plans and Standing plans.',
    content: [
      '**Single-use Plans**: A single-use plan is developed for a one-time event or project. Such a course of action is not likely to be repeated in future. Examples: Budgets, Programmes, Projects.',
      '**Standing Plans**: A standing plan is used for activities that occur regularly over a period of time. It is designed to ensure that internal operations of an organisation run smoothly. Examples: Policies, Procedures, Rules, Methods.',
      '',
      '**Classification of Plans**:',
      '1. **Objectives**: The ends which such management seeks to achieve.',
      '2. **Strategy**: A comprehensive plan for accomplishing an organisation objectives.',
      '3. **Policy**: General statements that guide thinking or channelise energies towards a particular direction.',
      '4. **Procedure**: Routine steps on how to carry out activities.',
      '5. **Method**: Prescribed way or manner in which a task has to be performed.',
      '6. **Rule**: Specific statements that inform what is to be done.',
      '7. **Programme**: Detailed statements about a project which outlines the objectives, policies, procedure, rules, tasks, human and physical resources required and the budget to implement any course of action.',
      '8. **Budget**: A statement of expected results expressed in numerical terms.'
    ],
    visualizations: [
       {
          id: 'single-vs-standing',
          title: 'Single-use vs Standing Plans',
          type: 'table',
          data: {
             headers: ['Basis', 'Single-use Plans', 'Standing Plans'],
             rows: [
                ['Meaning', 'Developed for one-time event', 'Used for activities that occur regularly'],
                ['Objective', 'To manage specific project', 'To enable smooth operations'],
                ['Scope', 'Narrow', 'Wide'],
                ['Examples', 'Budget, Programme', 'Policy, Procedure, Rule']
             ]
          }
       }
    ]
  }
];
