import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "marketing-concept",
    title: "Marketing & Philosophies",
    description: "Understanding marketing as a social process and the evolution of marketing management philosophies.",
    content: [
      "**Meaning of Marketing**",
      "Marketing is a social process by which individuals and groups obtain what they need and want through creating offering and freely exchanging products and services of value with others.",
      "",
      "**Marketing Management Philosophies**",
      "1. **Production Concept**: Focus on availability and affordability. **Trigger**: 'Mass production', 'Availability/Affordability'.",
      "2. **Product Concept**: Focus on quality, performance, and features. **Trigger**: 'Product improvement', 'High quality/features'.",
      "3. **Selling Concept**: Focus on selling and promoting existing products. **Trigger**: 'Aggressive selling', 'Attracting customers', 'Pushing products'.",
      "4. **Marketing Concept**: Focus on customer needs and satisfaction. **Trigger**: 'Customer satisfaction', 'Integrated marketing', 'Identifying needs'.",
      "5. **Societal Marketing Concept**: Focus on satisfaction and social welfare. **Trigger**: 'Ethical/Ecological concerns', 'Society's well-being', 'Environmental protection'."
    ],
    visualizations: [
      {
        id: 'marketing-concepts-table',
        title: 'Marketing Philosophies Comparison',
        type: 'table',
        data: {
          headers: ['Concept', 'Focus', 'Means', 'Ends (Profit)'],
          rows: [
            ['Production', 'Availability', 'Mass Production', 'Volume'],
            ['Product', 'Quality/Features', 'Product Improv.', 'Quality'],
            ['Selling', 'Existing Product', 'Selling/Prom.', 'Sales Volume'],
            ['Marketing', 'Customer Needs', 'Integrated Mkting', 'Satisfaction'],
            ['Societal', 'Welfare + Needs', 'Social Mkting', 'Sat + Welfare']
          ]
        }
      },
      {
        id: 'marketing-mix',
        title: 'The 4 Ps of Marketing Mix',
        type: 'grid',
        data: [
          { label: 'Product', desc: 'Design, Quality, Features, Brand, Packaging' },
          { label: 'Price', desc: 'List Price, Discounts, Credit Terms, Payment Period' },
          { label: 'Place', desc: 'Channels, Coverage, Locations, Inventory, Transport' },
          { label: 'Promotion', desc: 'Advertising, Personal Selling, Sales Promotion, PR' }
        ]
      }
    ]
  },
  {
    id: "marketing-functions",
    title: "Functions of Marketing",
    description: "Key activities involved in the marketing process.",
    content: [
      "1. **Gathering and Analysing Market Information**: Identifying needs, opportunities, and threats (SWOT analysis).",
      "2. **Marketing Planning**: Developing plans to achieve marketing objectives (e.g., increasing market share).",
      "3. **Product Designing and Development**: Making the product attractive and improving performance.",
      "4. **Standardisation and Grading**: Ensuring uniformity (standardisation) and classifying products (grading).",
      "5. **Packaging and Labelling**: Protecting the product and providing information.",
      "6. **Branding**: Giving a name/symbol to differentiate the product.",
      "7. **Customer Support Services**: After-sales service, handling complaints to build loyalty.",
      "8. **Pricing of Product**: Determining the amount of money customers pay.",
      "9. **Promotion**: Informing and persuading customers to buy.",
      "10. **Physical Distribution**: Managing flow of goods (Channels).",
      "11. **Transportation**: Physical movement of goods.",
      "12. **Storage or Warehousing**: Holding goods to time the supply with demand."
    ],
    visualizations: []
  },
  {
    id: "product-mix",
    title: "Product Mix",
    description: "Decisions regarding the product, including classification, branding, packaging, and labelling.",
    content: [
      "**Product Classification**",
      "- **Consumer Products**: Convenience (frequent, low effort), Shopping (compare quality/price), Speciality (unique features, brand loyalty).",
      "- **Industrial Products**: Materials & Parts, Capital Items, Supplies & Business Services.",
      "",
      "**Branding**",
      "- **Brand**: Name, term, sign, symbol.",
      "- **Brand Name**: Spoken part.",
      "- **Brand Mark**: Unspoken symbol/design.",
      "- **Trade Mark**: Legal protection.",
      "- **Characteristics of Good Brand Name**: Short/easy, suggests benefits, distinctive, adaptable, versatile, registerable.",
      "",
      "**Packaging**",
      "- **Levels**: Primary (immediate), Secondary (protection), Transportation (storage/shipping).",
      "- **Functions**: Product identification, protection, facilitating use, promotion. **Label**: 'Silent Salesman' (attracts attention).",
      "- **Importance**: Health/sanitation, self-service outlets, innovation, product differentiation."
    ],
    visualizations: [
      {
        id: 'packaging-levels',
        title: 'Levels of Packaging',
        type: 'list',
        data: [
          '1. Primary Package: Immediate container (e.g., Tube)',
          '2. Secondary Package: Protection/Dispensing (e.g., Cardboard Box)',
          '3. Transportation Package: Storage/Shipping (e.g., Corrugated Box)'
        ]
      }
    ]
  },
  {
    id: "labelling-branding",
    title: "Labelling and Branding",
    description: "Identification and Promotion tools.",
    content: [
      "**Labelling**",
      "- **Functions**: Describe product/contents, identify product/brand, grade products, promote products, provide legal information."
    ],
    visualizations: []
  },
  {
    id: "pricing-mix",
    title: "Price Mix",
    description: "Factors affecting the price determination of a product.",
    content: [
      "**Meaning**",
      "Price is the amount of money paid by a buyer in consideration of the purchase of a product or service.",
      "",
      "**Factors Affecting Price Determination**",
      "1. **Product Cost**: Sets the floor price. Includes fixed, variable, and semi-variable costs.",
      "2. **Utility and Demand**: Sets the upper limit. Higher utility/demand allows higher price.",
      "3. **Competition**: Between lower and upper limits, price settles based on competition level.",
      "4. **Government and Legal Regulations**: Price controls on essential commodities.",
      "5. **Pricing Objectives**: Profit maximisation (short vs long run), Market share leadership, Survival, Quality leadership.",
      "6. **Marketing Methods Used**: Factors like distribution and promotion quality."
    ],
    visualizations: []
  },
  {
    id: "place-mix",
    title: "Place Mix (Physical Distribution)",
    description: "Activities to make the product available to customers.",
    content: [
      "**Physical Distribution Components**",
      "1. **Order Processing**: Accurate and speedy processing of orders.",
      "2. **Transportation**: Moving goods from production to consumption points. Creates place utility.",
      "3. **Warehousing**: Storing goods to bridge the time gap between production and consumption. Creates time utility.",
      "4. **Inventory Control**: Balancing cost of inventory (capital tied up) vs. level of service (satisfaction)."
    ],
    visualizations: [
      {
        id: 'distribution-channels',
        title: 'Channels of Distribution',
        type: 'flow',
        data: {
          nodes: [
            { id: 'M', label: 'Manufacturer' },
            { id: 'C', label: 'Consumer' },
            { id: 'R', label: 'Retailer' },
            { id: 'W', label: 'Wholesaler' },
            { id: 'A', label: 'Agent' }
          ],
          edges: [
            { from: 'M', to: 'C', label: 'Zero Level' },
            { from: 'M', to: 'R', label: 'One Level' }, { from: 'R', to: 'C' },
            { from: 'M', to: 'W', label: 'Two Level' }, { from: 'W', to: 'R' },
            { from: 'M', to: 'A', label: 'Three Level' }, { from: 'A', to: 'W' }
          ]
        }
      }
    ]
  },
  {
    id: "promotion-mix-elements",
    title: "Promotion Mix Elements",
    description: "Tools used to communicate with customers: Advertising, Personal Selling, Sales Promotion, Public Relations.",
    content: [
      "**1. Advertising**",
      "- Paid, impersonal form. **Trigger**: 'Paid form', 'Identified sponsor', 'Mass reach'.",
      "",
      "**2. Personal Selling**",
      "- Oral presentation. **Trigger**: 'Oral conversation', 'Flexible', 'Personal relationship'.",
      "",
      "**3. Sales Promotion**",
      "- Short-term incentives. **Trigger**: 'Immediate sales boost', 'Cash discounts', 'Free gifts'.",
      "",
      "**4. Public Relations (PR)**",
      "- Managing image. **Trigger**: 'Corporate image', 'Lobbying', 'Managing public opinion'."
    ],
    visualizations: []
  }
];
