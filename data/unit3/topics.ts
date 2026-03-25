import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'env-concept-importance',
    title: 'Concept & Significance',
    description: 'Defining the business environment, its core features, and why it matters for success.',
    content: [
      "**Meaning**",
      "The term **business environment** means the sum total of all individuals, institutions and other forces that are outside the control of a business enterprise but that may affect its performance. As one writer put it: *'Just take the universe, subtract from it the subset that represents the organisation, and the remainder is environment.'*",
      "The economic, social, political, technological and other forces which operate outside a business enterprise are part of its environment. This includes individual consumers, competing enterprises, governments, consumer groups, competitors, courts, media, and other institutions.",
      "",
      "**Features of Business Environment**",
      "1. **Totality of External Forces**: Sum total of all things external to business firms; aggregative in nature.",
      "2. **Specific and General Forces**: **Specific forces** (investors, customers, competitors) affect individual enterprises directly. **General forces** (social, political, legal) affect all firms indirectly.",
      "3. **Inter-relatedness**: Elements are closely linked (e.g., increased life expectancy leads to higher demand for health products and services).",
      "4. **Dynamic Nature**: It keeps on changing (technology, consumer preferences, new competition).",
      "5. **Uncertainty**: Difficult to predict future happenings, especially in IT or fashion industries.",
      "6. **Complexity**: Complex phenomenon easier to understand in parts but difficult to grasp in totality.",
      "7. **Relativity**: Differs from country to country and region to region (e.g., sarees have high demand in India but non-existent in France).",
      "",
      "**Importance**",
      "- **Identify Opportunities (First-Mover Advantage)**: Early identification helps exploit opportunities first (e.g., Maruti Udyog in small cars).",
      "- **Identify Threats (Early Warning Signals)**: Environmental awareness helps identify hindrances early.",
      "- **Tapping Useful Resources**: Firms assemble resources (inputs) like finance, machines, raw materials from the environment and supply outputs (goods/services) back to it.",
      "- **Coping with Rapid Changes**: Helps managers deal with turbulent market conditions, less brand loyalty, and intense global competition.",
      "- **Planning and Policy Formulation**: Understanding serves as the basis for future course of action.",
      "- **Improving Performance**: Continuous monitoring helps improve present and future success."
    ],
    visualizations: [
      {
        id: 'env-features-grid',
        title: '7 Pillars of Business Environment',
        type: 'grid',
        data: [
          { label: 'Totality', desc: 'Sum total of all external forces' },
          { label: 'Specific/General', desc: 'Direct vs Indirect impact factors' },
          { label: 'Inter-related', desc: 'Factors are closely linked' },
          { label: 'Dynamic', desc: 'Constantly changing landscape' },
          { label: 'Uncertain', desc: 'Unpredictable future shifts' },
          { label: 'Complex', desc: 'Easy to see parts, hard to see whole' },
          { label: 'Relative', desc: 'Varies by country and region' }
        ]
      }
    ]
  },
  {
    id: 'env-dimensions',
    title: 'Dimensions (PESTLE)',
    description: 'The five dimensions constituting the general business environment.',
    content: [
      "**1. Economic Environment**",
      "Interest rates, inflation rates, changes in disposable income, stock market indices and the value of rupee. **Components**: Rates of growth of GNP, rates of saving/investment, money supply, public debt, and balance of payments.",
      "",
      "**2. Social Environment**",
      "Social forces like customs, traditions, values, social trends, and society's expectations. **Elements**: Life expectancy, birth/death rates, literacy rates, expectations from workforce, and shifts in women's presence in the workforce.",
      "",
      "**3. Technological Environment**",
      "Forces relating to scientific improvements and innovations. **Historical Shifts**: Vacuum tubes to transistors, fountain pens to ballpoints, and typewriters to computer-based word processors.",
      "",
      "**4. Political Environment**",
      "Political conditions like stability/peace and specific attitudes of elected government representatives. **Elements**: Prevailing political system, degree of politicisation, ideology of the ruling party, and level of political morality.",
      "",
      "**5. Legal Environment**",
      "Legislations passed by Govt, administrative orders, and court judgments. **Key Acts**: Companies Act 2013, FEMA, Factories Act 1948, Industrial Disputes Act 1947, Consumer Protection Act 1986, and Competition Act 2002.",
      "",
      "**Examples**: Advertisement of alcoholic beverages is prohibited; Cigarette packets must carry statutory health warnings; Baby food ads must inform that mother's milk is best."
    ],
    visualizations: [
      {
        id: 'dimensions-table',
        title: 'Dimension Elements Checklist',
        type: 'table',
        data: {
          headers: ['Dimension', 'Key Elements / Triggers'],
          rows: [
            ['Economic', 'GNP, Inflation, Disposable Income, Stock Indices, Value of Rupee'],
            ['Social', 'Traditions, Values (Freedom/Equality), Life Expectancy, Literacy'],
            ['Technological', 'Innovations, Computers, Robotics, Biotechnology, Online booking'],
            ['Political', 'Stability, Govt Attitudes, Ideologies, Leadership Profile'],
            ['Legal', 'Admin Orders, Court Judgments, FEMA, Competition Act, Factories Act']
          ]
        }
      }
    ]
  },
  {
    id: 'india-economic-history',
    title: 'Economic History & Planning',
    description: "India's status at independence and the core objectives of development plans.",
    content: [
      "**India at Independence**",
      "- Economy was mainly agricultural (70% of working population).",
      "- 85% of population lived in villages.",
      "- High mortality rates and widespread communicable diseases.",
      "- Low-productivity, irrational technology usage.",
      "",
      "**Objectives of Development Plans**",
      "1. **Rapid Economic Growth**: Raise standard of living, reduce unemployment/poverty.",
      "2. **Self-reliance**: Set up strong industrial base with emphasis on heavy/basic industries.",
      "3. **Reduce Inequalities**: Minimize gap in income and wealth distribution.",
      "4. **Socialist Pattern**: Adopt development based on equality and prevention of exploitation.",
      "",
      "**Note**: Post-independence, the govt gave a lead role to the public sector for infra industries, while the private sector handled consumer goods under strict licenses and controls."
    ],
    visualizations: [
      {
        id: 'ind-status-list',
        title: 'Status at 1947',
        type: 'list',
        data: [
          '70% population in Agriculture',
          '85% population in Villages',
          'Zero good public health system',
          'Irrational technology'
        ]
      }
    ]
  },
  {
    id: 'reforms-1991-lpg',
    title: '1991 Crisis & LPG Reforms',
    description: 'The foreign exchange crisis of 1991 and the subsequent Liberalisation, Privatisation, and Globalisation.',
    content: [
      "**The 1991 Crisis**",
      "- **Fiscal Deficit**: Reached 6.6% of GDP.",
      "- **Internal Debt**: Rose to 50% of GDP; interest payments drained 39% of revenue.",
      "- **GNP Growth**: Fell to 1.4% from 10.5% (1988-89).",
      "- **Forex Reserves**: Fell to barely enough for a few weeks of imports.",
      "- **Credit Rating**: Dropped from AAA to BB+.",
      "- **Gold Pledge**: Govt pledged 47 tonnes of gold to Bank of England for $600 Million.",
      "",
      "**New Industrial Policy (July 1991)**",
      "Industries under licensing reduced to 6; Dereservation of public sector; Disinvestment started; Foreign capital (FDI) liberalised; FIPB set up.",
      "",
      "**LPG Definitions**",
      "- **Liberalisation**: Abolishing licensing (except in 6 industries), freedom in fixing prices, and simplifying import-export procedures.",
      "- **Privatisation**: Disinvestment of PSUs and dilution of govt stake (often beyond 51%).",
      "- **Globalisation**: Integration of economies. Hallmarks include free flow of goods, capital, info, technology, and people across nations.",
      "",
      "**Impact on Business**: Increasing competition, more demanding customers, technological shift, and market orientation."
    ],
    visualizations: [
      {
        id: 'crisis-stats',
        title: 'Forensic of 1991 Crisis',
        type: 'grid',
        data: [
          { label: 'Fiscal Deficit', desc: '6.6% of GDP' },
          { label: 'GNP Growth', desc: 'Crashed to 1.4%' },
          { label: 'Debt Interest', desc: '39% of Revenue' },
          { label: 'Gold Pledged', desc: '47 Tonnes to England' }
        ]
      }
    ]
  },
  {
    id: 'demonetization',
    title: 'Demonetisation (2016)',
    description: 'The withdrawal of ₹500 and ₹1,000 notes and its socio-economic impact.',
    content: [
      "**The Event (Nov 8, 2016)**",
      "- Denominations of ₹500 and ₹1,000 ceased to be legal tender.",
      "- Leading to **86% of the money in circulation** becoming invalid.",
      "",
      "**Aims and Features**",
      "- **Curb Corruption & Black Money**: Prevent illegal use of high-denomination notes.",
      "- **Tax Administration**: Forced disclosure of unaccounted wealth with penalties.",
      "- **Financial Channelisation**: Cash moved from households to banks, increasing loan capacity.",
      "- **Digitalisation**: Aimed at a 'cash-lite' economy via UPI, RuPay, and AEPS.",
      "",
      "**Impact Analysis**",
      "- **Money/Interest**: Increase in savings and bank deposits.",
      "- **Private Wealth**: Declined (real estate prices fell).",
      "- **Public Sector wealth**: No effect.",
      "- **Digitisation**: Increased transactions among poor and less affluent via Jan Dhan.",
      "- **Tax Collection**: Rise in collection due to increased disclosure."
    ],
    visualizations: [
      {
        id: 'dem-society-levels',
        title: 'Digitalisation Impact by Society Tiers',
        type: 'tree',
        data: {
          root: 'Societal Impact',
          children: [
            { name: 'The Poor', children: [{ name: 'Outside digital economy' }] },
            { name: 'Less Affluent', children: [{ name: 'Becoming part of digital economy (Jan Dhan/RuPay)' }] },
            { name: 'The Affluent', children: [{ name: 'Fully conversant with digital transactions' }] }
          ]
        }
      }
    ]
  }
];
