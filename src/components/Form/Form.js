import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const formPropTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

const Form = ({ handleAddItem }) => {
  const [itemValue, setItemValue] = useState('');

  const handleSubmitAndResetForm = ev => {
    ev.preventDefault();

    handleAddItem(itemValue);

    // Reset value
    setItemValue('');
  };

  const handleItemChange = ev => setItemValue(ev.target.value);

  return (
    <div>
      <form method="POST" autoComplete="on" onSubmit={handleSubmitAndResetForm}>
        <div className="form-row">
          <div className="col">
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
              data-testid="form-submit"
              className="btn btn-primary"
              disabled={!itemValue}
              aria-label="Add todo item">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = formPropTypes;

export default Form;
