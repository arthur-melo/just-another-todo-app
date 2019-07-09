import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './FormItem.css';

import PropertyBarContainer from '../../containers/PropertyBarContainer';
import Checkout from '../Checkout/Checkout';

const formItemPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
};

const FormItem = props => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const updateDisplayMenu = bool => {
    if (displayMenu !== bool) {
      setDisplayMenu(bool);
    }
  };

  let liClass = 'form_item__component list-group-item form-control';
  liClass = props.item.completed ? liClass + ' form_item__component-completed' : liClass;

  return (
    <li
      data-testid="form-item-listitem"
      className={liClass}
      onMouseOver={() => updateDisplayMenu(true)}
      onMouseLeave={() => updateDisplayMenu(false)}>
      <div
        className="text-truncate"
        data-testid="form-item-item-completion"
        onClick={() => props.handleItemCompletion(props.item)}>
        <div className="form_item__checkout d-inline-block">
          <Checkout isCompleted={props.item.completed} />
        </div>
        <span className="form_item__text">{props.item.value}</span>
      </div>

      {displayMenu ? <PropertyBarContainer id={props.item.id} /> : null}
    </li>
  );
};

FormItem.propTypes = formItemPropTypes;

export default FormItem;
