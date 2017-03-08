import React from 'react';
import { render } from 'react-dom';

import { Root } from './components';
import store from './store/index';

render(
  <Root store={store} />,
  document.querySelector('#app'),
);

