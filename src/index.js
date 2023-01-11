import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateOfferForm from './components/CreateOfferForm';
import EditOfferForm from './components/EditOfferForm';
import BuyOfferForm from './components/BuyOfferForm';
import CancellationPolicyForm from './components/CancellationPolicyForm';
import EditPolicyForm from './components/EditPolicyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CreateOfferForm/>
    <EditOfferForm/>
    <BuyOfferForm/>
    <CancellationPolicyForm/>
    <EditPolicyForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
