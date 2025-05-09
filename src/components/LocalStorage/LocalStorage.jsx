import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LOCALSTORAGE_NAME } from '../../app/constants';
import useLocalStorage from '../../hooks/useLocalStorage';
import { populate, selectTodoItems } from '../../features/todos/todosSlice';

const localStoragePropTypes = {
  children: PropTypes.node.isRequired,
};

const LocalStorage = props => {
  const { children } = props;
  const dispatch = useDispatch();
  const todoItems = useSelector(selectTodoItems);

  // Read data from localStorage
  const [localStorageItems, setLocalStorageItems, clearLocalStorage] =
    useLocalStorage(LOCALSTORAGE_NAME);

  // Populate the todo list once if it exists.
  useEffect(() => {
    if (localStorageItems !== null) {
      dispatch(populate(localStorageItems));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save items to localStorage every time they get updated.
  useEffect(() => {
    setLocalStorageItems(todoItems);
  }, [todoItems, setLocalStorageItems]);

  // Clear localstorage key in case there is no items.
  useEffect(() => {
    if (localStorageItems?.length === 0) {
      clearLocalStorage();
    }
  }, [clearLocalStorage, localStorageItems, todoItems]);

  return children;
};

LocalStorage.propTypes = localStoragePropTypes;

export default LocalStorage;
