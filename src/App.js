import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom"
import BuyOfferForm from "./components/BuyOfferForm";
import CancellationPolicyForm from "./components/CancellationPolicyForm";
import CreateOfferForm from "./components/CreateOfferForm";
import EditOfferForm from "./components/EditOfferForm";
import EditPolicyForm from "./components/EditPolicyForm";
import OfferOverview from "./components/OfferOverview";
import PayPolicyForm from "./components/PayPolicyForm";
import PolicyOverview from "./components/PolicyOverview";

function App() {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/offerOverview">Offer overview</Link>
          </li>
          {/* <li>
            <Link to="/policyOverview">Policy overview</Link>
          </li> */}
          {/* <li>
            <Link to="/createOffer">Create offer</Link>
          </li> */}
          {/* <li>
            <Link to="/editOffer">Edit offer</Link>
          </li>
          <li>
            <Link to="/buyOffer">Buy offer</Link>
          </li> */}
          {/* <li>
            <Link to="/cancellationPolicy">Cancellation policy</Link>
          </li>
          <li>
            <Link to="/editPolicy">Edit policy</Link>
          </li>
          <li>
            <Link to="/payPolicy">Pay for policy</Link>
          </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/createOffer" element={<CreateOfferForm />}/>
        <Route path="/editOffer" element={<EditOfferForm />}/>
        <Route path="/buyOffer" element={<BuyOfferForm />}/>
        <Route path="/cancellationPolicy" element={<CancellationPolicyForm />}/>
        <Route path="/editPolicy" element={<EditPolicyForm />}/>
        <Route path="/payPolicy" element={<PayPolicyForm />}/>
        <Route path="/policyOverview" element={<PolicyOverview />}/>
        <Route path="/offerOverview" element={<OfferOverview />}/>

      </Routes>
    </>
  )
  

}

export default App;
