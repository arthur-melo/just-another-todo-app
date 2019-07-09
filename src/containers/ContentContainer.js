import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Content from '../components/Content/Content';

import { ReorderItem } from '../actions/ReorderItem';

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
  handleReorderItem: PropTypes.func.isRequired,
};

const ContentContainer = props => <Content {...props} />;

ContentContainer.propTypes = contentPropTypes;

const mapStateToProps = state => ({
  items: state.items,
  editingItem: state.editingItem,
});

const mapDispatchToProps = {
  handleReorderItem: ReorderItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentContainer);
