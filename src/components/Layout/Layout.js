import PropTypes from 'prop-types';

import './Layout.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const layoutPropTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = props => {
  const { children } = props;

  return (
    <div className="layout__container">
      <header className="layout__header">
        <Header />
      </header>
      <main className="layout__content">{children}</main>
      <footer className="layout__footer">
        <Footer />
      </footer>
    </div>
  );
};

Layout.propTypes = layoutPropTypes;

export default Layout;
