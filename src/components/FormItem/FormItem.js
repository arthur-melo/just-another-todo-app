import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './FormItem.css';

import PropertyBar from '../PropertyBar/PropertyBar';
import Checkout from '../Checkout/Checkout';

const formItemPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
};

const FormItem = props => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const updateDisplayMenu = bool => {
    if (displayMenu !== bool) {
      setDisplayMenu(bool);
    }
  };

  return (
    <li
      className="form_item__component list-group-item form-control"
      onMouseMove={() => updateDisplayMenu(true)}
      onMouseLeave={() => updateDisplayMenu(false)}>
      <div className="text-truncate" onClick={() => props.handleItemCompletion(props.item)}>
        <div className="form_item__checkout d-inline-block">
          <Checkout isCompleted={props.item.completed} />
        </div>
        <span className="form_item__text">{props.item.value}</span>
      </div>

      {displayMenu ? (
        <PropertyBar
          id={props.item.id}
          handleSelectEditItem={props.handleSelectEditItem}
          handleDeleteItem={props.handleDeleteItem}
        />
      ) : null}
    </li>
  );
};

FormItem.propTypes = formItemPropTypes;

export default FormItem;
