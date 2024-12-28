import { Item } from '../types';

export const generateMockData = (count: number): Item[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    description: `This is the description for item ${index + 1}. It contains some sample text to demonstrate the content layout.`
  }));
};