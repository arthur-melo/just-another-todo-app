export const EDIT_ITEM = 'Edit item';

export const EditItem = modifiedItem => ({
  type: EDIT_ITEM,
  payload: { modifiedItem },
});
