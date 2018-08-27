import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const formPropTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      itemValue: '',
    };
  }

  handleSubmit = ev => ev.preventDefault();

  handleSubmitAndResetForm = () => {
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
        <form method="POST" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="new-todo-item"
                name="new-todo-item"
                placeholder="I want to do..."
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
                onClick={this.handleSubmitAndResetForm}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = formPropTypes;
