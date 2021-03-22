import Joke from './joke';

export default interface JokeState {
  jokes: Joke[];
  error: null | Error;
}
