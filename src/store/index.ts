import {
  configureStore,
  getDefaultMiddleware,
  Middleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import JokeState from '../models/joke-state';
import { saveToStore } from '../utils/storeAPI';
import jokeReducer, { addJoke } from './joke-slice';

const storeMiddleware: Middleware<{}, JokeState> = (store) => (next) => (
  action
) => {
  if (action.type === addJoke.toString()) {
    const { jokes } = store.getState();
    saveToStore(jokes.concat(action.payload));
  }
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  storeMiddleware,
];

const store = configureStore({
  reducer: jokeReducer,
  middleware,
});

sagaMiddleware.run(saga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
