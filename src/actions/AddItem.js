export const ADD_ITEM = 'Add item';

export const AddItem = itemValue => ({
  type: ADD_ITEM,
  payload: { value: itemValue },
});
