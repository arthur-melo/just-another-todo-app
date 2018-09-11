import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FormItem.css';

import PropertyBar from '../PropertyBar/PropertyBar';
import Checkout from '../Checkout/Checkout';

export default class FormItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
    handleDeleteItem: PropTypes.func.isRequired,
    handleSelectEditItem: PropTypes.func.isRequired,
    handleItemCompletion: PropTypes.func.isRequired,
  };

  state = { displayMenu: false };

  setDisplayMenu = bool => {
    if (this.state.displayMenu !== bool) {
      this.setState({ displayMenu: bool });
    }
  };

  render() {
    return (
      <li
        className="form_item__component list-group-item form-control"
        onMouseMove={() => this.setDisplayMenu(true)}
        onMouseLeave={() => this.setDisplayMenu(false)}>
        <div className="text-truncate" onClick={() => this.props.handleItemCompletion(this.props.item)}>
          <div className="form_item__checkout d-inline-block">
            <Checkout isCompleted={this.props.item.completed} />
          </div>
          <span className="form_item__text">{this.props.item.value}</span>
        </div>

        {this.state.displayMenu ? (
          <PropertyBar
            id={this.props.item.id}
            handleSelectEditItem={this.props.handleSelectEditItem}
            handleDeleteItem={this.props.handleDeleteItem}
          />
        ) : null}
      </li>
    );
  }
}
