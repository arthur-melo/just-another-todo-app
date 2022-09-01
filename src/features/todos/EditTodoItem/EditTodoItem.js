import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './EditTodoItem.css';
import { cancelEditItem, editItem } from '../todosSlice';

const editTodoItemPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

const EditTodoItem = props => {
  const { item } = props;
  const [itemValue, setItemValue] = useState(item.value);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  const handleKeyUp = ev => {
    // Handle ESC Key interaction
    if (ev.code === 'Escape') {
      dispatch(cancelEditItem());
    }
  };

  const handleItemChange = ev => setItemValue(ev.target.value);

  const handleEditAndResetForm = ev => {
    ev.preventDefault();

    dispatch(
      editItem({
        ...item,
        value: itemValue,
      }),
    );

    // Reset value
    setItemValue('');
  };

  return (
    <li className="edit_todo_item__component list-group-item">
      <form method="POST" onSubmit={handleEditAndResetForm}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="input-edit-todo-item"
            name="edit-todo-item"
            value={itemValue}
            onChange={handleItemChange}
            autoFocus
          />
          <button
            type="submit"
            title="Confirm item edition"
            id="submit-edit-todo-item"
            className="btn btn-primary mx-2 rounded-3"
            disabled={!itemValue}>
            <FontAwesomeIcon icon={faCheck} size="sm" />
          </button>
          <button
            id="cancel-edit-todo-item"
            title="Cancel item edition"
            type="button"
            className="btn btn-danger me-2 rounded-3"
            onClick={() => dispatch(cancelEditItem())}>
            <FontAwesomeIcon icon={faTimes} size="sm" />
          </button>
        </div>
      </form>
    </li>
  );
};

EditTodoItem.propTypes = editTodoItemPropTypes;

export default EditTodoItem;
