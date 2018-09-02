export const DELETE_ITEM = 'Delete item';

export const DeleteItem = selectedItemId => ({
  type: DELETE_ITEM,
  payload: { id: selectedItemId },
});
