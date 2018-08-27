import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './FormEdit.css';

const formEditPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  handleEditItem: PropTypes.func.isRequired,
  handleCancelEditItem: PropTypes.func.isRequired,
};

export default class FormEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemValue: props.item.value,
    };
  }

  handleItemChange = ev =>
    this.setState({
      itemValue: ev.target.value,
    });

  handleSubmit = ev => ev.preventDefault();

  handleEditAndResetForm = () => {
    this.props.handleEditItem({
      ...this.props.item,
      value: this.state.itemValue,
    });

    // Reset value
    return this.setState({ itemValue: '' });
  };

  render() {
    return (
      <li className="form_edit__component list-group-item">
        <form method="POST" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="edit-todo-item"
                name="edit-todo-item"
                value={this.state.itemValue}
                onChange={this.handleItemChange}
                autoFocus
              />
            </div>

            <div className="col-auto">
              <button
                type="button"
                className="btn btn-primary  form_edit__button--first"
                disabled={!this.state.itemValue}
                onClick={this.handleEditAndResetForm}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button type="button" className="btn btn-danger " onClick={this.props.handleCancelEditItem}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        </form>
      </li>
    );
  }
}

FormEdit.propTypes = formEditPropTypes;
