import { configureStore, combineReducers } from '@reduxjs/toolkit';

import todosReducer from '../features/todos/todosSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
