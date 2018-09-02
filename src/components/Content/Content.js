import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form/Form';
import FormEdit from '../FormEdit/FormEdit';
import FormItem from '../FormItem/FormItem';

import './Content.css';

const contentPropTypes = {
  items: PropTypes.array.isRequired,
  editingItem: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }),
  className: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleCancelEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
};

const contentDefaultProps = {
  items: [],
  editingItem: {},
};

const Content = props => (
  <div className={props.className}>
    <div className="container">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Welcome!</h5>
          <p className="card-text">To get started, add some items to your list:</p>
          <div className="d-inline-block">
            <Form handleAddItem={props.handleAddItem} />
          </div>
        </div>
      </div>

      <div className="content__todos">
        <ul className="list-group content__todos__ul">
          {props.items.map(
            (item, index) =>
              props.editingItem.id === item.id ? (
                <FormEdit
                  key={index}
                  handleEditItem={props.handleEditItem}
                  handleCancelEditItem={props.handleCancelEditItem}
                  item={props.editingItem}
                />
              ) : (
                <FormItem
                  key={index}
                  item={item}
                  handleDeleteItem={props.handleDeleteItem}
                  handleSelectEditItem={props.handleSelectEditItem}
                  handleItemCompletion={props.handleItemCompletion}
                />
              ),
          )}
        </ul>
      </div>
    </div>
  </div>
);

Content.propTypes = contentPropTypes;
Content.defaultProps = contentDefaultProps;

export default Content;
