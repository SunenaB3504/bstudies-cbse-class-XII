import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'staffing-concept',
    title: 'Concept & Importance of Staffing',
    description: 'Staffing as a managerial function and its significance.',
    content: [
      'Meaning: Staffing is the managerial function of filling and keeping filled the positions in the organisation structure. It is "putting people to jobs".',
      'It involves obtaining, utilising, and maintaining a satisfactory and satisfied workforce.',
      'Importance:',
      '1. Competent Personnel: Discovering and obtaining competent personnel for various jobs.',
      '2. Higher Performance: Putting the right person on the right job.',
      '3. Continuous Growth: Survival and growth through succession planning for managers.',
      '4. Optimum Utilisation: Avoids overmanning (costly) and understaffing (disruption).',
      '5. Job Satisfaction: Improves morale of employees through objective assessment.'
    ],
    visualizations: [
      {
        id: 'staffing-importance-list',
        title: 'Importance of Staffing',
        type: 'list',
        data: ['Competent Personnel', 'Higher Performance', 'Survival & Growth', 'Optimum Utilisation', 'Job Satisfaction']
      }
    ]
  },
  {
    id: 'staffing-process',
    title: 'Staffing Process',
    description: 'Steps involved in the staffing function.',
    content: [
      '1. Estimating Manpower Requirements: Understanding how many and what type of persons are needed. Involves Workload Analysis (number needed) and Workforce Analysis (number available).',
      '2. Recruitment: Process of searching for prospective employees and stimulating them to apply for jobs.',
      '3. Selection: Choosing the best person out of the pool of prospective candidates.',
      '4. Placement and Orientation: Introducing the employee to the organisation (Orientation) and occupying the position (Placement).',
      '5. Training and Development: Improving current/future performance by increasing skills and knowledge.',
      '6. Performance Appraisal: Evaluating employee\'s performance against predetermined standards.',
      '7. Promotion and Career Planning: Placed in positions of increased responsibility.',
      '8. Compensation: All forms of pay or rewards (financial and non-financial).'
    ],
    visualizations: [
      {
        id: 'staffing-process-flow',
        title: 'The Staffing Process',
        type: 'flow',
        data: {
          nodes: [
            { id: '1', label: '1. Estimating Manpower' },
            { id: '2', label: '2. Recruitment' },
            { id: '3', label: '3. Selection' },
            { id: '4', label: '4. Placement & Orientation' },
            { id: '5', label: '5. Training & Development' },
            { id: '6', label: '6. Performance Appraisal' },
            { id: '7', label: '7. Promotion' },
            { id: '8', label: '8. Compensation' }
          ],
          edges: [
            { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' },
            { from: '4', to: '5' }, { from: '5', to: '6' }, { from: '6', to: '7' },
            { from: '7', to: '8' }
          ]
        }
      }
    ]
  },
  {
    id: 'recruitment',
    title: 'Recruitment',
    description: 'Process of searching for prospective employees.',
    content: [
      'Meaning: Searching for prospective employees and stimulating them to apply.',
      'Internal Sources: Transfers (shifting without substantive change in responsibility), Promotions (vertical shifting with higher responsibility/pay).',
      'Merits of Internal: Motivated employees, simpler selection, cheaper, tool for training.',
      'Limitations of Internal: No fresh talent (inbreeding), lethargy, not possible for new enterprises, reduced competition.',
      'External Sources:',
      '- Direct Recruitment: Notice on notice board (for unskilled/casual).',
      '- Casual Callers: Unsolicited applicants database.',
      '- Advertisement: Newspapers/Journals (wider choice).',
      '- Employment Exchange: Government run (for unskilled/skilled).',
      '- Placement Agencies & Management Consultants: For technical/professional/top roles.',
      '- Campus Recruitment: From educational institutions.',
      '- Recommendations of Employees: Applicants introduced by current staff.',
      '- Labour Contractors: For unskilled workers at short notice.',
      '- Advertising on TV & Web Publishing: Using media and internet portals.',
      'Merits of External: Qualified personnel, wider choice, fresh talent, competitive spirit.',
      'Limitations of External: Dissatisfaction among existing staff, lengthy process, costly.'
    ],
    visualizations: [
      {
        id: 'recruitment-sources-tree',
        title: 'Sources of Recruitment',
        type: 'flow',
        data: {
          nodes: [
            { id: 'src', label: 'Sources of Recruitment' },
            { id: 'int', label: 'Internal Sources' },
            { id: 'ext', label: 'External Sources' },
            { id: 'trans', label: 'Transfers' }, { id: 'prom', label: 'Promotions' },
            { id: 'adv', label: 'Advertisement' }, { id: 'camp', label: 'Campus' },
            { id: 'ex', label: 'Exchange' }, { id: 'web', label: 'Web Pub' }
          ],
          edges: [
            { from: 'src', to: 'int' }, { from: 'src', to: 'ext' },
            { from: 'int', to: 'trans' }, { from: 'int', to: 'prom' },
            { from: 'ext', to: 'adv' }, { from: 'ext', to: 'camp' },
            { from: 'ext', to: 'ex' }, { from: 'ext', to: 'web' }
          ]
        }
      }
    ]
  },
  {
    id: 'selection',
    title: 'Selection',
    description: 'Process of identifying and choosing the best person.',
    content: [
      '1. Preliminary Screening: Eliminating unqualified applicants based on info in forms.',
      '2. Selection Tests: Measuring specific characteristics:',
      '   - **Intelligence Test**: IQ and learning ability.',
      '   - **Aptitude Test**: Potential for learning new skills.',
      '   - **Personality Test**: Emotions, reactions, and maturity.',
      '   - **Trade Test**: Existing professional skills/knowledge.',
      '   - **Interest Test**: Areas of involvement/interest.',
      '3. Employment Interview: In-depth conversation to evaluate suitability.',
      '4. Reference and Background Checks: Verifying information with previous employers/references.',
      '5. Selection Decision: Chosen from candidates who pass tests and interviews.',
      '6. Medical Examination: Determining physical fitness.',
      '7. Job Offer: Letter of appointment with date of joining.',
      '8. Contract of Employment: Documents including duties, pay, leave rules, etc.'
    ],
    visualizations: [
      {
        id: 'selection-process-flow',
        title: 'Steps in Selection Process',
        type: 'flow',
        data: {
          nodes: [
            { id: '1', label: '1. Preliminary Screening' },
            { id: '2', label: '2. Selection Tests' },
            { id: '3', label: '3. Employment Interview' },
            { id: '4', label: '4. Reference Checks' },
            { id: '5', label: '5. Selection Decision' },
            { id: '6', label: '6. Medical Exam' },
            { id: '7', label: '7. Job Offer' },
            { id: '8', label: '8. Contract' }
          ],
          edges: [
            { from: '1', to: '2' }, { from: '2', to: '3' }, { from: '3', to: '4' },
            { from: '4', to: '5' }, { from: '5', to: '6' }, { from: '6', to: '7' },
            { from: '7', to: '8' }
          ]
        }
      }
    ]
  },
  {
    id: 'training-development',
    title: 'Training and Development',
    description: 'Improving employee performance and growth.',
    content: [
      'Training: Process of increasing knowledge and skills for a specific job. (Job-oriented)',
      'Development: Learning opportunities for overall growth of the individual. (Career-oriented)',
      'Benefits to Organisation: Systematic learning (saves time/money), higher productivity, prepares future managers, higher morale, effective response to change.',
      'Benefits to Employee: Better career, increased earnings, safety (efficient machine handling), high morale/satisfaction.'
    ],
    visualizations: []
  },
  {
    id: 'training-methods',
    title: 'Training Methods',
    description: 'Techniques for training employees.',
    content: [
      'On-the-Job Methods (Learning while doing):',
      '- Apprenticeship Programmes: Trainee works under a master worker (for skills like plumbing).',
      '- Coaching: Superior guides and instructs the trainee.',
      '- Internship Training: Joint programme of educational institutions and business firms.',
      '- Job Rotation: Shifting trainee between departments/jobs.',
      'Off-the-Job Methods (Learning before doing):',
      '- Class Room Lectures/Conferences: For specific information/rules.',
      '- Films: Demonstrating skills.',
      '- Case Study: Analysing real problems.',
      '- Computer Modelling: Simulating work environment.',
      '- Vestibule Training: Learning on equipment in a classroom setting (away from actual work floor).',
      '- Programmed Instruction: Sequential learning packages.'
    ],
    visualizations: []
  }
];
