import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from '../components/Layout/App';

import { LoadStateLocalStorage } from '../actions/LoadStateLocalStorage';
import { SaveStateLocalStorage } from '../actions/SaveStateLocalStorage';

const appPropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  handleLoadStateLocalStorage: PropTypes.func.isRequired,
  handleSaveStateLocalStorage: PropTypes.func.isRequired,
};

const AppContainer = props => {
  const { handleLoadStateLocalStorage, handleSaveStateLocalStorage, items } = props;

  useEffect(() => {
    handleLoadStateLocalStorage();
  }, [handleLoadStateLocalStorage]);

  useEffect(() => {
    // TODO: Better handle save states.
    handleSaveStateLocalStorage(items);
  }, [handleSaveStateLocalStorage, items]);

  return <App />;
};

AppContainer.propTypes = appPropTypes;

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = {
  handleLoadStateLocalStorage: LoadStateLocalStorage,
  handleSaveStateLocalStorage: SaveStateLocalStorage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
