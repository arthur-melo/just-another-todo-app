import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './FormEdit.css';

const formEditPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleCancelEditItem: PropTypes.func.isRequired,
};

const FormEdit = props => {
  const [itemValue, setItemValue] = useState(props.item.value);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  const handleKeyUp = ev => {
    // Handle ESC Key interaction
    if (ev.code === 'Escape') {
      props.handleCancelEditItem(ev);
    }
  };

  const handleItemChange = ev => setItemValue(ev.target.value);

  const handleEditAndResetForm = ev => {
    ev.preventDefault();

    props.handleEditItem({
      ...props.item,
      value: itemValue,
    });

    // Reset value
    setItemValue('');
  };

  return (
    <li className="form_edit__component list-group-item">
      <form method="POST" onSubmit={handleEditAndResetForm}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="input-edit-todo-item"
              name="edit-todo-item"
              value={itemValue}
              onChange={handleItemChange}
              autoFocus
            />
          </div>

          <div className="col-auto">
            <button
              data-testid="form-edit-submit-button"
              type="submit"
              id="submit-edit-todo-item"
              className="btn btn-primary form_edit__button--first"
              disabled={!itemValue}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              data-testid="form-edit-cancel-edit-button"
              id="cancel-edit-todo-item"
              type="button"
              className="btn btn-danger"
              onClick={props.handleCancelEditItem}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </form>
    </li>
  );
};

FormEdit.propTypes = formEditPropTypes;

export default FormEdit;
