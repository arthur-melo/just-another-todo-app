import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <div>
      <form method="POST" autoComplete="on" onSubmit={handleSubmitAndResetForm}>
        <div className="row">
          <div className="col-auto p-0">
            <input
              type="text"
              className="form-control"
              id="new-todo-item"
              name="new-todo-item"
              placeholder="I want to do..."
              aria-label="Todo item description"
              value={itemValue}
              onChange={handleItemChange}
              autoFocus
            />
          </div>

          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!itemValue}
              title="Add todo item"
              aria-label="Add todo item">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTodoItem;
