const fs = require('fs');
const path = require('path');

const batch_units = [1, 2, 3, 4];

const specificJustifications = {
    // Unit 1
    "bulk_101": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for defining/identifying the core concept (Planning).\\n• 1 Mark for Point 1 (Setting Objectives - setting target of 10% profit).\\n• 1 Mark for Point 2 (Developing Premises - forecasting sales and demand).",
    "2025-26-q22": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for Point 1 (Meaning/Role: Top level determines objectives; Middle level implements them).\\n• 1 Mark for Point 2 (Composition: Top includes CEO/Board; Middle includes Department Heads).\\n• 1 Mark for Point 3 (Nature of Work: Top focuses on long-term strategy; Middle focuses on short-term departmental tactics).",
    "2024-25-q22": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for identifying the core objective (Social Objective).\\n• 1 Mark for Point 1 (Definition: Fulfilling obligations towards society such as environmental protection).\\n• 1 Mark for Point 2 (Application: Eco-friendly production directly reduces pollution, benefiting society).",
    // Unit 2
    "2025-26-q18": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for correctly identifying the core principle (Harmony, Not Discord).\\n• 1 Mark for Point 1 (Mental Revolution: Complete change of attitude for both management and workers).\\n• 1 Mark for Point 2 (Mutual Realization: Both should realize they need each other).\\n• 1 Mark for Point 3 (Shared Prosperity: Management shares gains; workers work hard).",
    "2025-26-q25": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for correctly identifying the core concept (Gang Plank).\\n• 1 Mark for Point 1 (Definition: It allows direct communication between employees of the same level).\\n• 1 Mark for Point 2 (Purpose: It prevents delays in communication during emergencies in a strict Scalar Chain).\\n• 1 Mark for Point 3 (Limitation/Condition: It should not be a normal practice and superiors must be informed eventually).",
    "2024-25-q23": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the core nature of principles.\\n• 1 Mark for Point 1 (Flexible: Principles can be modified by managers according to situations).\\n• 1 Mark for Point 2 (Contingent: Their application depends on the prevailing environmental conditions).\\n• 1 Mark for Point 3 (Summary: They are guidelines, not exact science formulas).",
    "2023-24-q24": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying both concepts.\\n• 1 Mark for Point 1 (Meaning: Unity of Command = One boss per subordinate. Unity of Direction = One head one plan).\\n• 1 Mark for Point 2 (Aim: Command prevents dual subordination. Direction prevents overlapping).\\n• 1 Mark for Point 3 (Implication: Command affects individual employee. Direction affects the entire department).",
    // Unit 3
    "bulk_103": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for identifying the core dimension (Social Environment).\\n• 1 Mark for Point 1 (Definition: Social environment includes traditions, values, social trends, demographics).\\n• 1 Mark for Point 2 (Application: Increase in life expectancy creates new demands, like health products or senior care services).",
    "2025-26-q23": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for correctly identifying the core principle (First Mover Advantage).\\n• 1 Mark for Point 1 (Definition: Recognizing positive external trends early).\\n• 1 Mark for Point 2 (Application: Explaining how WhatsApp seized the opportunity before competitors).\\n• 1 Mark for Point 3 (Outcome: Achieving a massive user base and market dominance by being early).",
    "2024-25-q24": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for correctly identifying the core concept (Social Environment).\\n• 1 Mark for Point 1 (Definition: It represents the customs, traditions, and social trends of society).\\n• 1 Mark for Point 2 (Expansion: Changing lifestyles directly shift consumer demand).\\n• 1 Mark for Point 3 (Outcome: Businesses must adapt to these social trends (e.g., offering organic foods) to survive).",
    "2023-24-q25": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for correctly identifying the core principle (Coping with Rapid Changes).\\n• 1 Mark for Point 1 (Detail: The environment is dynamic and constantly changing).\\n• 1 Mark for Point 2 (Application: Managers must constantly scan the environment to adapt).\\n• 1 Mark for Point 3 (Outcome: Using environmental understanding to formulate resilient future plans/policies).",
    "2022-23-q22": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for defining/identifying Demonetization conceptually.\\n• 1 Mark for Point 1 (Tax Administration Measure: Targeting black money and tax evasion).\\n• 1 Mark for Point 2 (Channelizing savings: Shifting informal cash into the formal banking system to promote digital economy).",
    // Unit 4
    "2025-26-q24": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for correctly identifying the core concept (Developing Premises).\\n• 1 Mark for Point 1 (Definition: Making assumptions about the future upon which plans are based).\\n• 1 Mark for Point 2 (Expansion: These can be internal like company policies, or external like economic trends).\\n• 1 Mark for Point 3 (Importance: Accurate premises are essential since the future is uncertain).",
    "2024-25-q25": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for correctly identifying the core concept (Strategy).\\n• 1 Mark for Point 1 (Elaboration: It outlines long-term objectives and broad contours of business operations).\\n• 1 Mark for Point 2 (Expansion: It includes adopting a specific course of action).\\n• 1 Mark for Point 3 (Summary: It dictates massive resource allocation to achieve goals against competitors).",
    "2023-24-q26": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for Introduction/Definition (Evaluating Alternative Courses).\\n• 1 Mark for Point 1 (Analyzing Pros and Cons).\\n• 1 Mark for Point 2 (Feasibility Check against the developed premises).\\n• 1 Mark for Point 3 (Financial Evaluation regarding cost-benefit analysis).\\n• 1 Mark for Point 4 (Risk Assessment covering potential uncertainties).\\n• 1 Mark for a concluding statement."
};

function processUnit(unitNum) {
    const file = path.join(__dirname, '..', 'data', `unit${unitNum}`, 'sqp.ts');
    if (!fs.existsSync(file)) return;

    let content = fs.readFileSync(file, 'utf8');
    let modifications = 0;

    const prefixSplit = content.indexOf('export const');
    if (prefixSplit === -1) return;

    const prefix = content.substring(0, prefixSplit);
    const dataLayer = content.substring(prefixSplit);

    const blocks = dataLayer.split(/\{\s*id:/g);
    let newBlocks = [blocks[0]];

    for (let i = 1; i < blocks.length; i++) {
        let block = "{ \n    id:" + blocks[i];

        const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
        const marksMatch = block.match(/marks:\s*([0-9]+)/);

        if (idMatch && marksMatch) {
            const id = idMatch[1];
            const marks = parseInt(marksMatch[1]);

            let finalJustification = "";

            if (marks >= 3 && specificJustifications[id]) {
                finalJustification = specificJustifications[id];
            } else if (marks === 1 || marks === 2) {
                finalJustification = `[Mark Justification - ${marks} Mark Total]:\\n• ${marks} Mark awarded for the direct, correct identification of the concept, feature, or specific term. No partial credit.`;
            }

            if (finalJustification && (marks >= 3 || !block.includes('[Mark Justification'))) {
                // Completely replace existing AI explanation for high marks, or append for 1 mark
                if (marks >= 3) {
                    const cleanAnswer = finalJustification.replace(/\[Mark Justification.+?\]:\\n/, '');
                    block = block.replace(/answer:\s*[`'"][\s\S]*?[`'"],/, `answer: \`${cleanAnswer}\`,`);
                    block = block.replace(/markingScheme:\s*[`'"][\s\S]*?[`'"],/, `markingScheme: \`${cleanAnswer}\`,`);
                    block = block.replace(/aiExplanation:\s*[`'"][\s\S]*?[`'"](,?)\s*\}/, `aiExplanation: \`${finalJustification}\`$1\n    }`);
                } else {
                    // Append for 1 marks
                    block = block.replace(/(aiExplanation:\s*)[`'"]([\s\S]*?)[`'"](,?)\s*\}/, (match, prefix, expl, comma) => {
                        const safeExpl = expl.replace(/`/g, '\\`');
                        return `${prefix}\`${safeExpl}\\n\\n${finalJustification}\`${comma}\n    }`;
                    });
                }
                modifications++;
            }
        }
        newBlocks.push(block);
    }

    if (modifications > 0) {
        fs.writeFileSync(file, prefix + newBlocks.join(''));
        console.log(`Unit ${unitNum}: Successfully injected step-by-step AI Reasoning and Mark Justification for ${modifications} questions.`);
    }
}

batch_units.forEach(processUnit);
