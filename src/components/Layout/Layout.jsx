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
    <div className="d-flex flex-column w-100 h-100">
      <header className="layout__header flex-shrink-0 w-100">
        <Header />
      </header>
      <main className="flex-grow-1 flex-shrink-0 mt-1">{children}</main>
      <footer className="layout__footer flex-shrink-0 w-100">
        <Footer />
      </footer>
    </div>
  );
};

Layout.propTypes = layoutPropTypes;

export default Layout;
