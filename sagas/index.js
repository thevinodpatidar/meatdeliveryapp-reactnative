import { fork } from 'redux-saga/effects';
import watchUserAuthentication from '../Auth/sagas';

export default function* startForman() {
  yield fork(watchUserAuthentication);
}