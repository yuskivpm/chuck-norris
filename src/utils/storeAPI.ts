import Joke from '../models/joke';

const DATA_KEY = 'JOKES';
const EMPTY_ARRAY = '[]';

export const saveToStore = (data: Joke[]): void =>
  localStorage.setItem(DATA_KEY, JSON.stringify(data));

export const loadFromStore = (): Joke[] => {
  try {
    const data: Joke[] = JSON.parse(
      localStorage.getItem(DATA_KEY) || EMPTY_ARRAY
    );
    return Array.isArray(data) ? data : [];
  } catch (e) {
    return [] as Joke[];
  }
};
