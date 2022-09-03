import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

import './Header.css';
import useTheme from '../../../hooks/useTheme';

const Header = () => {
  const [colors] = useTheme();

  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 bg-light">
      <nav className="navbar">
        <span className="navbar-brand m-0">
          <FontAwesomeIcon
            className="d-inline-block"
            icon={faListAlt}
            size="lg"
            alt="List emoji"
            color={colors.primary}
          />
        </span>
        <span className="header__text align-top fs-5">
          Just Another Todo App
        </span>
      </nav>
    </div>
  );
};

export default Header;
