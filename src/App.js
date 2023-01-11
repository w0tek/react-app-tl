import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom"
import BuyOfferForm from "./components/BuyOfferForm";
import CancellationPolicyForm from "./components/CancellationPolicyForm";
import CreateOfferForm from "./components/CreateOfferForm";
import EditOfferForm from "./components/EditOfferForm";
import EditPolicyForm from "./components/EditPolicyForm";
import PayPolicyForm from "./components/PayPolicyForm";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createOffer">Create offer</Link>
          </li>
          <li>
            <Link to="/editOffer">Edit offer</Link>
          </li>
          <li>
            <Link to="/buyOffer">Buy offer</Link>
          </li>
          <li>
            <Link to="/cancellationPolicy">Cancellation policy</Link>
          </li>
          <li>
            <Link to="/editPolicy">Edit policy</Link>
          </li>
          <li>
            <Link to="/payPolicy">Pay for policy</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/createOffer" element={<CreateOfferForm />}/>
        <Route path="/editOffer" element={<EditOfferForm />}/>
        <Route path="/buyOffer" element={<BuyOfferForm />}/>
        <Route path="/cancellationPolicy" element={<CancellationPolicyForm />}/>
        <Route path="/editPolicy" element={<EditPolicyForm />}/>
        <Route path="/payPolicy" element={<PayPolicyForm />}/>
      </Routes>
    </>
  )
  

}

export default App;
