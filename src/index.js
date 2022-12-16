import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

// const rootElement = document.getElementById('root');
// const rootElement = document.getElementsByTagName('div')
const rootElement = document.querySelector('#root');
// const allLiElements = document.querySelectorAll('li.list-item')

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <>
      <App />
    </>
  </StrictMode>
);
