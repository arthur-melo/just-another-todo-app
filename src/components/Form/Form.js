import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class Form extends Component {
  static propTypes = {
    handleAddItem: PropTypes.func.isRequired,
  };

  state = { itemValue: '' };

  handleSubmitAndResetForm = ev => {
    ev.preventDefault();

    this.props.handleAddItem(this.state.itemValue);

    // Reset value
    return this.setState({
      itemValue: '',
    });
  };

  handleItemChange = ev =>
    this.setState({
      itemValue: ev.target.value,
    });

  render() {
    return (
      <div>
        <form method="POST" onSubmit={this.handleSubmitAndResetForm}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="new-todo-item"
                name="new-todo-item"
                placeholder="I want to do..."
                aria-label="Todo item description"
                value={this.state.itemValue}
                onChange={this.handleItemChange}
                autoFocus
              />
            </div>

            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!this.state.itemValue}
                aria-label="Add todo item">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
