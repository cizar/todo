
import { combineEpics } from 'redux-observable';
import user from './user';
import location from './location';
import todo from './todo';

export { user, location, todo }

export default combineEpics(
  user, location, todo
);
