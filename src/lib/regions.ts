import { Region } from './types';
import { pythonCategories, pythonConstructs } from './python-data';
import { cppCategories, cppConstructs } from './cpp-data';

export const regions: Region[] = [
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    description: 'The versatile serpent region. Master Python from basics to advanced constructs.',
    color: '#3b8a7a',
    gradientFrom: '#1a3a35',
    gradientTo: '#0f1f1c',
    categories: pythonCategories,
    constructs: pythonConstructs,
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: '⚡',
    description: 'The power region. Conquer C++ from fundamentals to modern features.',
    color: '#4a7abf',
    gradientFrom: '#1a2a3f',
    gradientTo: '#0f1520',
    categories: cppCategories,
    constructs: cppConstructs,
  },
];
