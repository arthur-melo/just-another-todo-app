import React from 'react';

import './App.css';

import Header from '../Header/Header';
import Content from '../../containers/Content';
import Footer from '../Footer/Footer';

const App = () => (
  <div className="app__container">
    <Header className="app__header" />
    <Content className="app__content" />
    <Footer className="app__footer" />
  </div>
);

export default App;
