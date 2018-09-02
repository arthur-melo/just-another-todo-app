export const ITEM_COMPLETION = 'Item completion';

export const ItemCompletion = modifiedItem => ({
  type: ITEM_COMPLETION,
  payload: { modifiedItem },
});
