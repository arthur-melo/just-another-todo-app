import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './FormEdit.css';

export default class FormEdit extends Component {
  static propTypes = {
    item: PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
    handleEditItem: PropTypes.func.isRequired,
    handleCancelEditItem: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      itemValue: props.item.value,
    };
  }

  componentDidMount = () => window.addEventListener('keyup', this.handleKeyUp);

  handleKeyUp = ev => {
    // Handle ESC Key interaction
    if (ev.code === 'Escape') {
      this.props.handleCancelEditItem(ev);
    }
  };

  handleItemChange = ev =>
    this.setState({
      itemValue: ev.target.value,
    });

  handleEditAndResetForm = ev => {
    ev.preventDefault();
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
        <form method="POST" onSubmit={this.handleEditAndResetForm}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="input-edit-todo-item"
                name="edit-todo-item"
                value={this.state.itemValue}
                onChange={this.handleItemChange}
                autoFocus
              />
            </div>

            <div className="col-auto">
              <button
                type="submit"
                id="submit-edit-todo-item"
                className="btn btn-primary form_edit__button--first"
                disabled={!this.state.itemValue}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button id="cancel-edit-todo-item" type="button" className="btn btn-danger" onClick={this.props.handleCancelEditItem}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        </form>
      </li>
    );
  }
}
