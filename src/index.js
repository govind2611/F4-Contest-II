import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*sometime the api doen't work it throws error {axios error : ERR_NETWORK}
  it is the error from the backend. this api has limit of fetching the data
*/