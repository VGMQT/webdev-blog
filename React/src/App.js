import React from 'react';

import 'normalize.css/normalize.css';
import './styles/vendor/vendor.scss';

import './styles/global.scss';

import Header from './components/Header';

import './styles/misc/modificators.scss';

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default App;
