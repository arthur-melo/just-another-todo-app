export const REORDER_ITEM = 'Reorder item';

export const ReorderItem = (initialPosition, newPosition) => ({
  type: REORDER_ITEM,
  payload: { initialPosition, newPosition },
});
