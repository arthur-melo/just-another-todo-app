import reduceReducers from 'reduce-reducers';

import InitialState from './InitialState';
import TodosReducer from './Todos';
import LocalStorageReducer from './LocalStorage';

const AppReducer = reduceReducers(InitialState, LocalStorageReducer, TodosReducer);

export default AppReducer;
