/* eslint-disable no-param-reassign */
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '.';
import actions from './actions';
import Joke from '../models/joke';
import JokeState from '../models/joke-state';

const initialState: JokeState = {
  jokes: [],
  error: null,
};

const jokeSlice = createSlice({
  name: 'chuckNorris',
  initialState,
  reducers: {
    addJoke: (state, action: PayloadAction<Joke>): void => {
      state.jokes.push(action.payload);
      state.error = null;
    },
    handleError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    updateJokes: (state, action: PayloadAction<Joke[]>): void => {
      state.jokes = action.payload;
      state.error = null;
    },
  },
});

export const selectJokes = (state: RootState) => state.jokes;
export const selectError = (state: RootState) => state.error;

export const fetchNextJoke = createAction(actions.FETCH_NEXT_JOKE);
export const { addJoke, handleError, updateJokes } = jokeSlice.actions;

export default jokeSlice.reducer;
