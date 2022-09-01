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

  let liClass = 'todo_item__component list-group-item form-control';
  liClass = item.completed
    ? liClass + ' todo_item__component-completed'
    : liClass;

  return (
    <li
      data-testid="todo_item-listitem"
      className={liClass}
      onMouseOver={() => updateDisplayMenu(true)}
      onMouseLeave={() => updateDisplayMenu(false)}>
      <div
        className="text-truncate"
        data-testid="todo_item-item-completion"
        onClick={() => dispatch(itemCompletion(item))}>
        <div className="todo_item__checkout d-inline-block">
          <CheckoutTodoItem isCompleted={item.completed} />
        </div>
        <span className="todo_item__text">{item.value}</span>
      </div>

      {displayMenu ? <PropertyBarTodoItem id={item.id} /> : null}
    </li>
  );
};

TodoItem.propTypes = todoItemPropTypes;

export default TodoItem;
