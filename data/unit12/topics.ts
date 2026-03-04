import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "consumer-protection-importance",
    title: "Importance of Consumer Protection",
    description: "Why consumer protection is significant for both consumers and businesses.",
    content: [
      "**From Consumers' Point of View**",
      "1. **Consumer Ignorance**: Consumers need to be educated about rights and reliefs.",
      "2. **Unorganised Consumers**: Need for organisation to protect interests.",
      "3. **Widespread Exploitation**: Protection against unsafe products, adulteration, misleading ads, etc.",
      "",
      "**From Business's Point of View**",
      "1. **Long-term Interest**: Satisfied customers lead to repeat sales and growth.",
      "2. **Use of Society's Resources**: Responsibility to serve public interest.",
      "3. **Social Responsibility**: Duty towards stakeholders, including consumers.",
      "4. **Moral Justification**: Unethical to exploit consumers.",
      "5. **Government Intervention**: Avoiding regulations by voluntarily practicing fair trade."
    ],
    visualizations: []
  },
  {
    id: "consumer-protection-act-2019",
    title: "Consumer Protection Act, 2019",
    description: "Key provisions, definitions, and rights under the Act.",
    content: [
      "**Who is a Consumer?**",
      "- A person who buys any goods or avails services for a consideration (paid, promised, or deferred).",
      "- Includes offline and online transactions.",
      "- **Excludes**: Person who obtains goods/services for resale or commercial purpose.",
      "",
      "**Consumer Rights**",
      "1. **Right to Safety**: Protection against hazardous goods/services. **Trigger**: 'Electrical hazard', 'ISI mark', 'Life-threatening'.",
      "2. **Right to be Informed**: Complete information about product. **Trigger**: 'Ingredients', 'Expiry date', 'Usage instructions'.",
      "3. **Right to be Assured (Choose)**: Access to variety at competitive prices. **Trigger**: 'Monopoly price', 'Lack of variety', 'Forcing a brand'.",
      "4. **Right to be Heard**: Right to file complaint and be heard. **Trigger**: 'Grievance cell', 'Company's feedback loop', 'Company ignored complaint'.",
      "5. **Right to Seek Redressal**: Relief against unfair practices. **Trigger**: 'Compensation', 'Replacement', 'Refund', 'Court-ordered relief'.",
      "6. **Right to Consumer Education**: Right to acquire knowledge. **Trigger**: 'Awareness camp', 'Knowledge of rights', 'Informing consumers'."
    ],
    visualizations: [
      {
        id: 'consumer-rights-list',
        title: 'Consumer Rights',
        type: 'list',
        data: [
          'Right to Safety',
          'Right to be Informed',
          'Right to Choose',
          'Right to be Heard',
          'Right to Seek Redressal',
          'Right to Consumer Education'
        ]
      }
    ]
  },
  {
    id: "consumer-responsibilities",
    title: "Consumer Responsibilities",
    description: "Duties of a consumer while purchasing and using goods/services.",
    content: [
      "1. **Be Aware**: Knowledge of available goods.",
      "2. **Buy Standardised Goods**: Look for quality marks. **Trigger**: 'ISI', 'Agmark', 'Hallmark'.",
      "3. **Learn Risks**: Follow instructions.",
      "4. **Read Labels**: Check price, expiry. **Trigger**: 'Information on pack'.",
      "5. **Assert Yourself**: Ensure a fair deal. **Trigger**: 'Prudent person', 'Not being submissive'.",
      "6. **Be Honest**: Discourage black-marketing.",
      "7. **Ask for Cash Memo**: Proof of purchase. **Trigger**: 'Proof of purchase', 'Evidence for court'.",
      "8. **File Complaint**: Even for small amounts.",
      "9. **Form Consumer Societies**: Educate others.",
      "10. **Respect Environment**: Avoid waste."
    ],
    visualizations: [
      {
        id: 'quality-marks',
        title: 'Quality Marks for Products',
        type: 'grid',
        data: [
          { label: 'ISI Mark', desc: 'Durable/Electrical Goods' },
          { label: 'Agmark', desc: 'Agricultural Commodities' },
          { label: 'BIS Hallmark', desc: 'Gold Jewellery' },
          { label: 'Woolmark', desc: 'Woolen Products' },
          { label: 'Eco-mark', desc: 'Environment Friendly' }
        ]
      }
    ]
  },
  {
    id: "redressal-machinery",
    title: "Redressal Agencies",
    description: "Three-tier enforcement machinery under the Consumer Protection Act, 2019.",
    content: [
      "**District Commission**",
      "- Jurisdiction: Value **up to ₹1 Crore**.",
      "- Appeal: To State Commission within **45 days**.",
      "",
      "**State Commission**",
      "- Jurisdiction: Value **₹1 Crore to ₹10 Crores**.",
      "- Appeal: To National Commission within **30 days**.",
      "",
      "**National Commission**",
      "- Jurisdiction: Value **exceeds ₹10 Crores**.",
      "- Appeal: To Supreme Court within **30 days**.",
      "",
      "**Mediation**",
      "- Provision for settlement of disputes through mediation at all three levels."
    ],
    visualizations: [
      {
        id: 'redressal-machinery-flow',
        title: 'Redressal Machinery Hierarchy (CPA 2019)',
        type: 'flow',
        data: {
          nodes: [
            { id: 'SC', label: 'Supreme Court' },
            { id: 'Nat', label: 'National Commission (> ₹10 Cr)' },
            { id: 'State', label: 'State Commission (₹1 Cr - ₹10 Cr)' },
            { id: 'Dist', label: 'District Commission (< ₹1 Cr)' }
          ],
          edges: [
            { from: 'Dist', to: 'State', label: 'Appeal (45 days)' },
            { from: 'State', to: 'Nat', label: 'Appeal (30 days)' },
            { from: 'Nat', to: 'SC', label: 'Appeal (30 days)' }
          ]
        }
      }
    ]
  },
  {
    id: "relief-and-ngos",
    title: "Relief & Consumer Organisations",
    description: "Remedies available to consumers and the role of NGOs.",
    content: [
      "**Relief Available**",
      "- Remove defect in goods or deficiency in services.",
      "- Replace defective product.",
      "- Refund price paid.",
      "- Pay compensation for loss/injury.",
      "- Pay punitive damages.",
      "- Discontinue unfair trade practices.",
      "- Withdraw hazardous goods.",
      "",
      "**Role of Consumer Organisations & NGOs**",
      "- Educating general public (seminars, workshops).",
      "- Publishing periodicals.",
      "- Comparative testing of products.",
      "- Encouraging protests against unfair practices.",
      "- Providing legal assistance.",
      "- Filing complaints on behalf of consumers.",
      "- Filing public interest litigation (PIL)."
    ],
    visualizations: []
  }
];
