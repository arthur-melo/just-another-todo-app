import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import TextareaAutosize from 'react-textarea-autosize';

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

  const isValidInput = value => {
    // If textarea is empty, or contains only newlines, reject it.
    if (!value || !value.trim()) {
      return false;
    } else {
      return true;
    }
  };

  const handleKeyUp = ev => {
    // Handle ESC Key interaction
    if (ev.code === 'Escape') {
      dispatch(cancelEditItem());
    }
  };

  const handleItemChange = ev => setItemValue(ev.target.value);

  const handleEditAndResetForm = ev => {
    ev.preventDefault();

    if (!isValidInput(itemValue)) {
      return;
    }

    dispatch(
      editItem({
        ...item,
        value: itemValue,
      }),
    );

    // Reset value
    setItemValue('');
  };

  const moveCursorToEndOfWord = ev =>
    ev.currentTarget.setSelectionRange(
      ev.currentTarget.value.length,
      ev.currentTarget.value.length,
    );

  return (
    <li className="edit_todo_item__component list-group-item border border-0">
      <form method="POST" onSubmit={handleEditAndResetForm}>
        <div className="d-flex">
          <TextareaAutosize
            type="text"
            className="form-control edit_todo_item__textarea border rounded"
            id="input-edit-todo-item"
            name="edit-todo-item"
            value={itemValue}
            onChange={handleItemChange}
            onFocus={moveCursorToEndOfWord}
            autoFocus
          />
          <div className="d-flex align-items-start">
            <button
              type="submit"
              title="Confirm"
              id="submit-edit-todo-item"
              className="btn btn-primary mx-2 edit_todo_item__button"
              disabled={!isValidInput(itemValue)}>
              <FontAwesomeIcon icon={faCheck} fixedWidth />
            </button>
            <button
              id="cancel-edit-todo-item"
              title="Cancel"
              type="button"
              className="btn btn-danger edit_todo_item__button"
              onClick={() => dispatch(cancelEditItem())}>
              <FontAwesomeIcon icon={faTimes} fixedWidth />
            </button>
          </div>
        </div>
      </form>
    </li>
  );
};

EditTodoItem.propTypes = editTodoItemPropTypes;

export default EditTodoItem;
