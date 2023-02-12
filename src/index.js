import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './contexts/StateProvider';
import Reducer, {initialState} from './contexts/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={Reducer} >
       <App />
     </StateProvider>
   
  </React.StrictMode>
);

