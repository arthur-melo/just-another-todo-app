import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './TodoItem.css';

import { itemCompletion } from '../todosSlice';
import CheckoutTodoItem from '../CheckoutTodoItem/CheckoutTodoItem';
import PropertyBarTodoItem from '../PropertyBarTodoItem/PropertyBarTodoItem';

const todoItemPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

const TodoItem = props => {
  const { item } = props;
  const [displayMenu, setDisplayMenu] = useState(false);
  const dispatch = useDispatch();

  const updateDisplayMenu = bool => {
    if (displayMenu !== bool) {
      setDisplayMenu(bool);
    }
  };

  let liClass =
    'todo_item__component list-group-item form-control d-flex border border-0  align-items-center';
  liClass = item.completed
    ? liClass + ' todo_item__component-completed'
    : liClass;

  const handleItemCompletion = ev => {
    ev.target.blur();
    dispatch(itemCompletion(item));
  };

  return (
    <li
      data-testid="todo_item-listitem"
      onMouseOver={() => updateDisplayMenu(true)}
      onMouseLeave={() => updateDisplayMenu(false)}
      className={liClass}>
      <div
        className="todo_item__checkout"
        data-testid="todo_item-item-completion"
        onClick={handleItemCompletion}>
        <CheckoutTodoItem isCompleted={item.completed} />
      </div>
      <div className="border rounded w-100 form-control todo_item__text text-break">
        {item.value}
      </div>

      {displayMenu ? (
        <div className="ms-auto align-self-start">
          <PropertyBarTodoItem id={item.id} />
        </div>
      ) : null}
    </li>
  );
};

TodoItem.propTypes = todoItemPropTypes;

export default TodoItem;
