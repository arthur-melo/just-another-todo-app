import React, { useState, useEffect, useRef } from 'react';
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
  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);
  const previousItemsLength = useRef(null);

  useEffect(() => {
    handleLoadStateLocalStorage();
    setIsLocalStorageLoaded(true);
  }, [handleLoadStateLocalStorage]);

  useEffect(() => {
    if (isLocalStorageLoaded) {
      if (!previousItemsLength.current) {
        previousItemsLength.current = -1;
        return;
      }

      if (items.length !== previousItemsLength.current) {
        handleSaveStateLocalStorage(items);
        if (items.length === 0) {
          previousItemsLength.current = -1;
        } else {
          previousItemsLength.current = items.length;
        }
      }
    }
  }, [handleSaveStateLocalStorage, items, isLocalStorageLoaded]);

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
