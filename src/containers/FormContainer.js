import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form/Form';

import { AddItem } from '../actions/AddItem';

const formPropTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

const FormContainer = props => <Form {...props} />;

FormContainer.propTypes = formPropTypes;

const mapDispatchToProps = {
  handleAddItem: AddItem,
};

export default connect(
  null,
  mapDispatchToProps,
)(FormContainer);
