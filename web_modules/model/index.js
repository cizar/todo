import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
//import { reducer as formReducer } from 'redux-form';

import user from './user';
import todo from './todo';

export { user, todo }

export default combineReducers({
  user, todo,
//  form: formReducer,
  routing: routerReducer,
});
