import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const headerPropTypes = {
  className: PropTypes.string.isRequired,
};

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__container">
      <h4 className="header__p">
        Just Another Todo App{' '}
        <span role="img" aria-label="">
          👌
        </span>
      </h4>
    </div>
  </div>
);

Header.propTypes = headerPropTypes;

export default Header;
