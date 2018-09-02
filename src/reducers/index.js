import { combineReducers } from 'redux';

import TodosReducer from './Todos';

const AppReducer = combineReducers({
  todos: TodosReducer,
});

export default AppReducer;
