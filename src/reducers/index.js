import reduceReducers from 'reduce-reducers';

import TodosReducer from './Todos';
import LocalStorageReducer from './LocalStorage';

const initialState = {
  items: [],
  editingItem: {},
};

const AppReducer = reduceReducers(initialState, LocalStorageReducer, TodosReducer);

export default AppReducer;
