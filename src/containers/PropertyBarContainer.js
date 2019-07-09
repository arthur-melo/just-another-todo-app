import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PropertyBar from '../components/PropertyBar/PropertyBar';

import { DeleteItem } from '../actions/DeleteItem';
import { SelectEditItem } from '../actions/SelectEditItem';

const propertyBarPropTypes = {
  id: PropTypes.string.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
};

const PropertyBarContainer = props => <PropertyBar {...props} />;

PropertyBarContainer.propTypes = propertyBarPropTypes;

const mapDispatchToProps = {
  handleDeleteItem: DeleteItem,
  handleSelectEditItem: SelectEditItem,
};

export default connect(
  null,
  mapDispatchToProps,
)(PropertyBarContainer);
