import { MindMapNode } from '../../types';

export const mindMap: MindMapNode = {
    id: 'm1',
    label: 'Unit 1: Management',
    children: [
      { id: 'm2', label: 'Functions', children: [{ id: 'm3', label: 'POSDC' }] },
      { id: 'm4', label: 'Nature', children: [{ id: 'm5', label: 'Art/Science/Profession' }] },
      { id: 'm6', label: 'Levels', children: [{ id: 'm7', label: 'Top/Middle/Lower' }] }
    ]
};
