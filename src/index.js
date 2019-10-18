import React from 'react';
import {
  // @ts-ignore
  unstable_createRoot as createRoot,
} from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import './normalize.css';
// import './index.css';

createRoot(
  document.getElementById('root'),
).render(React.createElement(App));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
