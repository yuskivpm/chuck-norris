import { call, put, takeEvery } from 'redux-saga/effects';

import getNextJoke from '../utils/fetchAPI';
import { loadFromStore } from '../utils/storeAPI';
import { addJoke, handleError, fetchNextJoke, updateJokes } from './joke-slice';

export function* fetchJokes() {
  try {
    const joke = yield call(getNextJoke);
    yield put(addJoke(joke));
  } catch (error) {
    yield put(handleError(error));
  }
}

export default function* rootSaga() {
  const savedJokes = yield call(loadFromStore);
  yield put(updateJokes(savedJokes));
  yield takeEvery(fetchNextJoke, fetchJokes);
}
