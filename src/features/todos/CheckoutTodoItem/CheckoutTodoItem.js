import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const checkoutTodoItemPropTypes = {
  isCompleted: PropTypes.bool.isRequired,
};

const CheckoutTodoItem = props => {
  const { isCompleted } = props;

  return (
    <span>
      {isCompleted ? (
        <FontAwesomeIcon icon={faCheckSquare} fontSize="36px" fixedWidth />
      ) : (
        <FontAwesomeIcon icon={faSquare} fontSize="36px" fixedWidth />
      )}
    </span>
  );
};

CheckoutTodoItem.propTypes = checkoutTodoItemPropTypes;

export default CheckoutTodoItem;
