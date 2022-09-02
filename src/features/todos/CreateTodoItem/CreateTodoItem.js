import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TextareaAutosize from 'react-textarea-autosize';

import './CreateTodoItem.css';
import { addItem } from '../todosSlice';

const CreateTodoItem = () => {
  const [itemValue, setItemValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmitAndResetForm = ev => {
    ev.preventDefault();

    dispatch(addItem(itemValue));

    // Reset value
    setItemValue('');
  };

  const handleItemChange = ev => setItemValue(ev.target.value);

  const handleKeyDown = ev => {
    // If enter is pressed, send instead of newline.
    if (ev.keyCode === 13 && !ev.shiftKey) {
      handleSubmitAndResetForm(ev);
    }
  };

  return (
    <form method="POST" autoComplete="on" onSubmit={handleSubmitAndResetForm}>
      <div className="d-flex">
        <TextareaAutosize
          type="text"
          className="form-control create_todo_item__textarea"
          id="new-todo-item"
          name="new-todo-item"
          placeholder="I want to do..."
          aria-label="Todo item description"
          value={itemValue}
          onChange={handleItemChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />

        <div className="mx-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!itemValue}
            title="Add todo item"
            aria-label="Add todo item">
            <FontAwesomeIcon icon={faPlus} fixedWidth />
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateTodoItem;
