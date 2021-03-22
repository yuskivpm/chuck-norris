import Joke from '../models/joke';

const API_URL = '  https://api.chucknorris.io/jokes/random';

export default async (): Promise<Joke> => {
  const data = await fetch(API_URL);
  const { id, value } = await data.json();
  return { id, value };
};
