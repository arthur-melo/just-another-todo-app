import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormItem from '../components/FormItem/FormItem';

import { ItemCompletion } from '../actions/ItemCompletion';

const formItemPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
};

const FormItemContainer = props => <FormItem {...props} />;

FormItemContainer.propTypes = formItemPropTypes;

const mapDispatchToProps = {
  handleItemCompletion: ItemCompletion,
};

export default connect(
  null,
  mapDispatchToProps,
)(FormItemContainer);
