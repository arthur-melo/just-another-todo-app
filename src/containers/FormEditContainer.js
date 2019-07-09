import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormEdit from '../components/FormEdit/FormEdit';

import { CancelEditItem } from '../actions/CancelEditItem';
import { EditItem } from '../actions/EditItem';

const formEditPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleCancelEditItem: PropTypes.func.isRequired,
};

const FormEditContainer = props => <FormEdit {...props} />;

FormEditContainer.propTypes = formEditPropTypes;

const mapDispatchToProps = {
  handleCancelEditItem: CancelEditItem,
  handleEditItem: EditItem,
};

export default connect(
  null,
  mapDispatchToProps,
)(FormEditContainer);
