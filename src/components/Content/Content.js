import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import { LOCALSTORAGE_NAME } from '../../config';
import Form from '../Form/Form';
import FormEdit from '../FormEdit/FormEdit';
import FormItem from '../FormItem/FormItem';

import './Content.css';

const contentPropTypes = {
  className: PropTypes.string.isRequired,
};

export default class Content extends Component {
  state = { items: [], editingItem: {} };

  componentDidMount = () => {
    const localStorageState = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_NAME));

    if (localStorageState) {
      // TODO: Validate local storage state.
      return this.setState({
        items: localStorageState.items,
      });
    }
  };

  componentDidUpdate = () => window.localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(this.state));

  handleAddItem = itemValue => {
    const id = uuid();
    const todoItem = {
      value: itemValue,
      id,
      completed: false,
    };
    const items = this.state.items.concat(todoItem);

    return this.setState({
      items,
    });
  };

  handleDeleteItem = selectedItemId => {
    const itemsList = this.state.items.filter(({ id }) => id !== selectedItemId);
    return this.setState({
      items: itemsList,
    });
  };

  handleEditItem = modifiedItem => {
    const items = this.state.items.map(item => {
      if (item.id === modifiedItem.id) {
        item.value = modifiedItem.value;
      }

      return item;
    });

    return this.setState({
      items,
      editingItem: {},
    });
  };

  handleCancelEditItem = () =>
    this.setState({
      editingItem: {},
    });

  handleSelectEditItem = selectedId => {
    const item = this.state.items.find(({ id }) => id === selectedId);
    return this.setState({ editingItem: item });
  };

  handleItemCompletion = modifiedItem => {
    const items = this.state.items.map(item => {
      if (item.id === modifiedItem.id) {
        item.completed = !item.completed;
      }

      return item;
    });

    return this.setState({
      items,
    });
  };

  render() {
    const { editingItem } = this.state;

    return (
      <div className={this.props.className}>
        <div className="container">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Welcome!</h5>
              <p className="card-text">To get started, add some items to your list:</p>
              <div className="d-inline-block">
                <Form handleAddItem={this.handleAddItem} />
              </div>
            </div>
          </div>

          <div className="content__todos">
            <ul className="list-group content__todos__ul">
              {this.state.items.map(
                (item, index) =>
                  editingItem.id === item.id ? (
                    <FormEdit
                      key={index}
                      handleEditItem={this.handleEditItem}
                      handleCancelEditItem={this.handleCancelEditItem}
                      item={editingItem}
                    />
                  ) : (
                    <FormItem
                      key={index}
                      item={item}
                      handleDeleteItem={this.handleDeleteItem}
                      handleSelectEditItem={this.handleSelectEditItem}
                      handleItemCompletion={this.handleItemCompletion}
                    />
                  ),
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Content.propTypes = contentPropTypes;
