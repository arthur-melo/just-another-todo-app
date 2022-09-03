import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const checkoutTodoItemPropTypes = {
  isCompleted: PropTypes.bool.isRequired,
};

const CheckoutTodoItem = props => {
  const { isCompleted } = props;

  return (
    <button type="button" className="border border-0 p-0 bg-transparent">
      {isCompleted ? (
        <FontAwesomeIcon icon={faCheckSquare} fontSize="36px" fixedWidth />
      ) : (
        <FontAwesomeIcon icon={faSquare} fontSize="36px" fixedWidth />
      )}
    </button>
  );
};

CheckoutTodoItem.propTypes = checkoutTodoItemPropTypes;

export default CheckoutTodoItem;
