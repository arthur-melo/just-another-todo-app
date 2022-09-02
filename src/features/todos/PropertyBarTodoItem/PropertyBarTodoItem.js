import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './PropertyBarTodoItem.css';
import { deleteItem, markItemToEdit } from '../todosSlice';

const propertyBarTodoItemPropTypes = {
  id: PropTypes.string.isRequired,
};

const PropertyBarTodoItem = props => {
  const { id } = props;
  const dispatch = useDispatch();

  return (
    <div className="property_bar_todo_item__component">
      <button
        className="btn btn-secondary tproperty_bar_todo_item__button mx-2"
        title="Edit"
        onClick={() => dispatch(markItemToEdit(id))}>
        <FontAwesomeIcon icon={faEdit} fixedWidth />
      </button>
      <button
        className="btn btn-danger property_bar_todo_item__button"
        title="Delete"
        onClick={() => dispatch(deleteItem(id))}>
        <FontAwesomeIcon icon={faTrash} fixedWidth />
      </button>
    </div>
  );
};

PropertyBarTodoItem.propTypes = propertyBarTodoItemPropTypes;

export default PropertyBarTodoItem;
