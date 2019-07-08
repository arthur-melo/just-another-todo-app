import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Content from '../components/Content/Content';

import { AddItem } from '../actions/AddItem';
import { CancelEditItem } from '../actions/CancelEditItem';
import { DeleteItem } from '../actions/DeleteItem';
import { EditItem } from '../actions/EditItem';
import { ItemCompletion } from '../actions/ItemCompletion';
import { ReorderItem } from '../actions/ReorderItem';
import { SelectEditItem } from '../actions/SelectEditItem';

const contentPropTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  editingItem: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleCancelEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
  handleReorderItem: PropTypes.func.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
};

const ContentContainer = props => <Content {...props} />;

ContentContainer.propTypes = contentPropTypes;

const mapStateToProps = state => ({
  items: state.items,
  editingItem: state.editingItem,
});

const mapDispatchToProps = {
  handleAddItem: AddItem,
  handleCancelEditItem: CancelEditItem,
  handleDeleteItem: DeleteItem,
  handleEditItem: EditItem,
  handleItemCompletion: ItemCompletion,
  handleReorderItem: ReorderItem,
  handleSelectEditItem: SelectEditItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentContainer);
