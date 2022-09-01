import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import initialState from '../initialState';

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    populate: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      const id = v1();
      const todoItem = {
        value: action.payload,
        id,
        completed: false,
      };

      state.items.push(todoItem);
    },
    cancelEditItem: state => {
      if (state.items.length) {
        state.editingItem = {};
      }
    },
    deleteItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    editItem: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index].value = action.payload.value;
      }
      state.editingItem = {};
    },
    itemCompletion: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index].completed = !state.items[index].completed;
      }
    },
    markItemToEdit: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);

      if (index !== -1) {
        state.editingItem = state.items[index];
      }
    },
    reorderItem: (state, action) => {
      const [removed] = state.items.splice(action.payload.initial, 1);
      state.items.splice(action.payload.destination, 0, removed);
    },
  },
});

export const {
  populate,
  addItem,
  cancelEditItem,
  deleteItem,
  editItem,
  itemCompletion,
  markItemToEdit,
  reorderItem,
} = todosSlice.actions;

export const selectTodoItems = state => state.todos.items;
export const selectEditingItem = state => state.todos.editingItem;

export default todosSlice.reducer;
