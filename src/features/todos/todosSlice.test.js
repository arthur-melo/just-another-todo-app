import initialState from '../initialState';

import todosReducer, {
  addItem,
  cancelEditItem,
  deleteItem,
  editItem,
  itemCompletion,
  markItemToEdit,
  reorderItem,
  selectEditingItem,
  selectTodoItems,
} from './todosSlice';

describe('todos reducer', () => {
  it('should handle default state', () => {
    expect(todosReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle addItem', () => {
    const todoItemName = 'Test todo item';

    const stateSingleItem = todosReducer(initialState, addItem(todoItemName));

    expect(stateSingleItem.items).toEqual([
      {
        value: todoItemName,
        id: expect.any(String),
        completed: false,
      },
    ]);

    const stateMultipleItems = todosReducer(
      stateSingleItem,
      addItem(todoItemName),
    );

    expect(stateMultipleItems.items).toEqual([
      {
        value: todoItemName,
        id: expect.any(String),
        completed: false,
      },
      {
        value: todoItemName,
        id: expect.any(String),
        completed: false,
      },
    ]);
  });

  it('should handle cancelEditItem', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const stateCancelEditItem = {
      editingItem: item,
      items: [item],
    };

    const state = todosReducer(stateCancelEditItem, cancelEditItem());

    expect(state).toEqual({ ...initialState, items: [item] });
  });

  it('should handle deleteItem', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const stateDeleteItem = {
      items: [item],
    };

    const state = todosReducer(stateDeleteItem, deleteItem(item.id));

    expect(state).toEqual({
      items: [],
    });
  });

  it('should handle editItem', () => {
    const name = 'test todo item';
    const newName = `New ${name}`;

    const item = {
      value: name,
      id: '0',
      completed: false,
    };

    const action = { ...item, value: newName };

    const stateEditItem = {
      editingItem: item,
      items: [item],
    };

    const state = todosReducer(stateEditItem, editItem(action));

    expect(state).toEqual({
      editingItem: {},
      items: [{ ...item, value: newName }],
    });
  });

  it('should handle itemCompletion', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const stateItemCompletion = {
      items: [item],
    };

    const stateCompleted = todosReducer(
      stateItemCompletion,
      itemCompletion(item),
    );

    expect(stateCompleted).toEqual({
      items: [{ ...item, completed: true }],
    });

    const stateNotCompleted = todosReducer(
      stateCompleted,
      itemCompletion(item),
    );

    expect(stateNotCompleted).toEqual({
      items: [{ ...item, completed: false }],
    });

    // Only the item with specified ID should be changed.
    const item2 = {
      ...item,
      id: '1',
      completed: false,
    };

    const stateCompletedSingleItem = todosReducer(
      { items: [{ ...item }, item2] },
      itemCompletion(item),
    );

    expect(stateCompletedSingleItem).toEqual({
      items: [{ ...item, completed: true }, item2],
    });
  });

  it('should handle markItemToEdit', () => {
    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const stateMarkItemToEdit = {
      editingItem: {},
      items: [item],
    };

    const state = todosReducer(stateMarkItemToEdit, markItemToEdit(item.id));

    expect(state).toEqual({
      editingItem: item,
      items: [item],
    });
  });

  it('should handle reorderItem', () => {
    const items = ['First item', 'Second item', 'Third item'];

    const action = {
      initial: items.findIndex(el => el === 'First item'),
      destination: items.findIndex(el => el === 'Third item'),
    };

    const stateReorderItem = {
      items,
    };

    const state = todosReducer(stateReorderItem, reorderItem(action));

    // Value is shuffled to newPosition.
    expect(state).toEqual({
      items: ['Second item', 'Third item', 'First item'],
    });
  });

  it('should handle selectTodoItems', () => {
    const initialStateSelectTodoItems = { todos: { items: [] } };

    const initialTodoItems = selectTodoItems(initialStateSelectTodoItems);

    expect(initialTodoItems).toHaveLength(0);

    const item = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const todos = {
      items: [item],
    };

    const state = { todos };

    const singleTodoItemState = selectTodoItems(state);

    expect(singleTodoItemState).toHaveLength(1);
  });

  it('should handle selectEditingItem', () => {
    const initialStateSelectEditingItem = { todos: { editingItem: {} } };

    const initialEditingItem = selectEditingItem(initialStateSelectEditingItem);

    expect(initialEditingItem).toStrictEqual({});

    const editingItem = {
      value: 'Test todo item',
      id: '0',
      completed: false,
    };

    const todos = {
      editingItem,
    };

    const state = { todos };

    const singleEditingItemState = selectEditingItem(state);

    expect(singleEditingItemState).toEqual({
      value: expect.stringMatching('Test todo item'),
      id: expect.any(String),
      completed: expect.any(Boolean),
    });
  });
});
