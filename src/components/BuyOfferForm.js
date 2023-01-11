import "../index.css";
import { useState } from "react";

function BuyOfferForm() {
  const [idNumber, setIdNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          idNumber: idNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setIdNumber("");
        setMessage("SUCCESS - Offer purchased");
        setErrorMessage("");
      } else {
        setMessage("");
        setErrorMessage("ERROR - can't buy offer");
      }
    } catch (err) {
        setMessage("");
      setErrorMessage("ERROR - can't buy offer");
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Buy Offer</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={idNumber}
          placeholder="Id number"
          onChange={(e) => setIdNumber(e.target.value)}
        />
       
        <button type="submit">Buy offer</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
        <div className="errorMessage">{errorMessage ? <p>{errorMessage}</p> : null}</div>

      </form>
    </div>
  );
}

export default BuyOfferForm;